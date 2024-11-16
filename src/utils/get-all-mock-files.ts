import * as fs from "fs";
import { PayloadWithFileNameType } from "../types/payload";
import getAllFiles from "./get-all-files";

export default function getAllMockFiles() {
  const allFiles = getAllFiles();

  const filesFilter = (item: string | Buffer) => {
    if (typeof item !== "string") return false;

    return item.includes(".mock.json");
  };

  const mockFiles = allFiles.filter(filesFilter);

  const payloads: PayloadWithFileNameType[] = mockFiles.map((file) => {
    const result = fs.readFileSync(file, { encoding: "utf-8" });
    return { path: file as string, payload: JSON.parse(result) };
  });

  return payloads;
}
