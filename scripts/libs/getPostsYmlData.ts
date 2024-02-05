import fs from "fs";
import path from "path";
const matter = require("gray-matter");

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
  return posts.map((post) => {
    const file = fs.readFileSync(post, "utf-8");
    const { data } = matter(file);
    return {
      path: post,
      ...data,
    };
  });
}

const postsYmlData = getPostData();

export default function () {
  return postsYmlData;
}