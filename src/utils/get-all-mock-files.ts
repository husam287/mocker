import * as fs from "fs";
import { PayloadType } from "../types/payload";

const getAllMockFiles = (dir: string) => {
  const allFiles = fs.readdirSync(dir, { recursive: true });

  const filesFilter = (item: string | Buffer) => {
    if (typeof item !== "string") return false;

    return (
      !item.includes("node_modules") &&
      !item.includes("dist") &&
      item.includes(".mock.json")
    );
  };

  const mockFiles = allFiles.filter(filesFilter);

  const payloads: PayloadType[] = mockFiles.map((file) => {
    const result = fs.readFileSync(file, { encoding: "utf-8" });
    return JSON.parse(result);
  });

  return payloads;
};

export default getAllMockFiles;
