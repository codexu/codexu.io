import getPostsJsonData from "../libs/getPostsJsonData";
import getPostsYmlData from "../libs/getPostsYmlData";
import { Page } from "puppeteer";

const postsJsonData = getPostsJsonData();
const postsYmlData = getPostsYmlData();

export async function fetchJuejinPost(page: Page, index: number) {
  const post = postsYmlData[index];
  if ('juejin' in post) {
    await page.goto(post.juejin);
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

    const jsonIndex = postsJsonData.findIndex(
      (item) => item.path === post.path
    );
    const json = postsJsonData.find((item) => item.path === post.path);

    if (jsonIndex !== -1 && json && "juejin" in json) {
      json.juejin.url = post.juejin;
      json.juejin.like = badges[0];
      json.juejin.comment = badges[1];
      json.juejin.collect = badges[2];
      json.juejin.read = read;
      postsJsonData[jsonIndex] = json;
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
      postsJsonData.push(data);
    }
  }
}
