import * as fs from "fs";

export default function checkSrcDirectionExistance() {
  const mainDir = process.cwd();
  const allFiles = fs.readdirSync(mainDir, { recursive: true });
  console.log(allFiles, "DIR all FILES");

  const filesFilter = (item: string | Buffer) => {
    if (typeof item !== "string") return false;

    return (
      !item.includes("node_modules") &&
      !item.includes("dist") &&
      item.includes(".mock.json")
    );
  };

  
  const filterdFiles = allFiles.filter(filesFilter);
  console.log(filterdFiles, "DIR filtered FILES");
  
  return filterdFiles.some((item) => item.includes("src/"));
}
