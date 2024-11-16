import * as fs from "fs";
import { PayloadWithFileNameType } from "../types/payload";

export default function getAllMockFiles() {
  const mainDir = process.cwd()
  const allFiles = fs.readdirSync(mainDir, { recursive: true });

  const filesFilter = (item: string | Buffer) => {
    if (typeof item !== "string") return false;

    return (
      !item.includes("node_modules") &&
      !item.includes("dist") &&
      item.includes(".mock.json")
    );
  };

  const mockFiles = allFiles.filter(filesFilter);

  const payloads: PayloadWithFileNameType[] = mockFiles.map((file) => {
    const result = fs.readFileSync(file, { encoding: "utf-8" });
    return { path: file as string, payload: JSON.parse(result) };
  });

  return payloads;
}
