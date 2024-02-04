import fs from "node:fs";

export default {
  watch: ["./data/*.json"],
  load(watchedFiles) {
    return watchedFiles.map((file) => {
      return JSON.parse(fs.readFileSync(file, "utf-8"));
    });
  },
};
