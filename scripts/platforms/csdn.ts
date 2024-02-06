import getPostsJsonData from "../libs/getPostsJsonData";
import getPostsYmlData from "../libs/getPostsYmlData";
import { Page } from "puppeteer";

const postsJsonData = getPostsJsonData();
const postsYmlData = getPostsYmlData();

export async function fetchCsdnPost(page: Page, index: number) {
  const post = postsYmlData[index];
  if ('csdn' in post) {
    await page.goto(post.csdn);
    await page.waitForSelector(".read-count");
    const read = await page.$eval(".read-count", (element) => {
      const text = element.textContent
        ?.replace(/,/g, "")
        .replace(/阅读量/g, "")
        .trim();
      if (text?.includes("k")) {
        return Number(text.replace("k", "")) * 1000;
      }
      return Number(text);
    });
    const collect = await page.$eval(
      "#blog_detail_zk_collection .get-collection",
      (element) => {
        const text = element.textContent?.replace(/,/g, "").trim();
        if (text?.includes("k")) {
          return Number(text.replace("k", "")) * 1000;
        }
        return Number(text);
      }
    );
    const like = await page.$eval("#blog-digg-num", (element) => {
      const text = element.textContent
        ?.replace(/,/g, "")
        .replace(/点赞数/g, "")
        .trim();
      if (text?.includes("k")) {
        return Number(text.replace("k", "")) * 1000;
      }
      return Number(text);
    });
    // .go-side-comment
    await page.waitForSelector(".tool-item-comment .count");
    const comment = await page.$eval(".tool-item-comment .count", (element) => {
      const text = element.textContent?.replace(/,/g, "").trim();
      if (text?.includes("k")) {
        return Number(text.replace("k", "")) * 1000;
      }
      return Number(text);
    });

    const jsonIndex = postsJsonData.findIndex(
      (item) => item.path === post.path
    );
    const json = postsJsonData.find((item) => item.path === post.path);

    if (jsonIndex !== -1 && json && "csdn" in json) {
      json.csdn.url = post.csdn;
      json.csdn.like = like;
      json.csdn.comment = comment;
      json.csdn.collect = collect;
      json.csdn.read = read;
      postsJsonData[jsonIndex] = json;
    } else if (jsonIndex !== -1 && json && !("csdn" in json)) {
      json.csdn = {
        url: post.csdn,
        like,
        comment,
        collect,
        read,
      };
      postsJsonData[jsonIndex] = json;
    } else {
      const data = {
        path: post.path,
        csdn: {
          url: post.csdn,
          like,
          comment,
          collect,
          read,
        },
      };
      postsJsonData.push(data);
    }
  }
}
