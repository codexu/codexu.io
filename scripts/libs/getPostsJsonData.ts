import fs from "fs";
import path from "path";

function readJsonFile(filePath: string) {
  const data = fs.readFileSync(filePath, "utf-8");
  const json = JSON.parse(data);
  return json;
}

const postsJsonData = readJsonFile(path.join(process.cwd(), "data/posts.json"));

export default function () {
  return postsJsonData;
}
