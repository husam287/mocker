import * as fs from "fs";

export default function checkSrcDirectionExistance() {
  const mainDir = process.cwd();
  const allFiles = fs.readdirSync(mainDir, { recursive: true });

  const filesFilter = (item: string | Buffer) => {
    if (typeof item !== "string") return false;

    return !item.includes("node_modules") && !item.includes("dist");
  };

  const filterdFiles = allFiles.filter(filesFilter);
  return filterdFiles.some((item) => item.includes("src/"));
}
