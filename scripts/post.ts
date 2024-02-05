import puppeteer from 'puppeteer';
import fs from "fs";
import path from "path";

const matter = require("gray-matter");

function readJsonFile(filePath: string) {
  const data = fs.readFileSync(filePath, "utf-8");
  const json = JSON.parse(data);
  return json;
}

const jsonData = readJsonFile(path.join(process.cwd(), "data/posts.json"));

// 启动浏览器
const browser = await puppeteer.launch({
  headless: false,
});
const page = await browser.newPage();

// 获取文章列表 /posts/*.md
function getPosts() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const fileNames = fs.readdirSync(postsDirectory);
  const mdFiles = fileNames.filter(
    (fileName) => path.extname(fileName) === ".md"
  );
  return mdFiles.map((fileName) => {
    return path.join("posts", fileName);
  });
}

// 通过文章列表文件，读取 yml 配置
function getPostData() {
  const posts = getPosts();
  console.log(posts);
  return posts.map((post) => {
    const file = fs.readFileSync(post, "utf-8");
    const { data } = matter(file);
    return {
      path: post,
      ...data,
    };
  });
}

const postsData = getPostData();

async function fetchInBrowser(platform: string, url: string) {
  await page.goto(url, { waitUntil: "domcontentloaded" });
}

for (let index = 0; index < postsData.length; index++) {
  const post = postsData[index];
  if ('juejin' in post) {
    await fetchInBrowser("juejin", post.juejin);
    await page.waitForRequest((request) => {
      return request.url().includes("bytedance.com/web/common");
    });
    // 获取 badge attr
    const badges = await page.$$eval(".panel-btn", (elements) => {
      return elements.map((element) => {
        return Number(element.getAttribute("badge")) || 0;
      });
    });
    const read = await page.$eval(".views-count", (element) => {
      // 移除逗号、空格
      return Number(element.textContent?.replace(/,/g, "").trim());
    });
    
    const jsonIndex = jsonData.findIndex((item) => item.path === post.path);
    const json = jsonData.find((item) => item.path === post.path);

    console.log(json);

    if (jsonIndex !== -1 && json && 'juejin' in json) {
      json.juejin.url = post.juejin;
      json.juejin.like = badges[0];
      json.juejin.comment = badges[1];
      json.juejin.collect = badges[2];
      json.juejin.read = read;
      jsonData[jsonIndex] = json;
    } else {
      const data = {
        path: post.path,
        juejin: {
          url: post.juejin,
          like: badges[0],
          comment: badges[1],
          collect: badges[2],
          read: read,
        },
      };
      jsonData.push(data);
    }
    console.log(jsonData);
  }
  // 写入 json 文件
  fs.writeFileSync(
    path.join(process.cwd(), "data/posts.json"),
    JSON.stringify(jsonData, null, 2)
  );
}

browser.close();
