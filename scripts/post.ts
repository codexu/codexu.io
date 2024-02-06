import puppeteer from 'puppeteer';
import fs from "fs";
import path from "path";
import getPostsJsonData from "./libs/getPostsJsonData";
import getPostsYmlData from "./libs/getPostsYmlData";
import { fetchJuejinPost } from "./platforms/juejin";
import { fetchCsdnPost } from "./platforms/csdn";

const postsJsonData = getPostsJsonData();

// 启动浏览器
const browser = await puppeteer.launch({
  headless: 'new',
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
  defaultViewport: {
    width: 1920,
    height: 1080,
  },
});
const page = await browser.newPage();

const postsYmlData = getPostsYmlData();

for (let index = 0; index < postsYmlData.length; index++) {
  await fetchJuejinPost(page, index);
  await fetchCsdnPost(page, index);
}

fs.writeFileSync(
  path.join(process.cwd(), "data/posts.json"),
  JSON.stringify(postsJsonData, null, 2)
);

browser.close();
