import * as fs from "fs";

export default function getAllFiles() {
  const mainDir = process.cwd();
  const allFiles = fs.readdirSync(mainDir, { recursive: true });

  const filesFilter = (item: string | Buffer) => {
    if (typeof item !== "string") return false;

    return !item.includes("node_modules") && !item.includes("dist");
  };

  const filterdFiles = allFiles.filter(filesFilter);

  return filterdFiles.map((item) => {
    if (typeof item !== "string") return item;
    if (!item.includes("\\")) return item;

    return item.split("\\").join("/");
  });
}
