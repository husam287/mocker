import path from "path";
import * as fs from "fs";
import { PayloadWithFileNameType } from "../types/payload";
import extractFileName from "./extract-file-name";
import resolvePayload from "./resolve-payload";

export default function buildMockJson(payloads: PayloadWithFileNameType[]) {
  const cwd = process.cwd();

  payloads.forEach((item) => {
    const filename = extractFileName(item.path);
    if (!filename) return;

    const folderPath = path.resolve(cwd, "mock-data");
    const filePath = path.join(folderPath, `${filename}.json`);

    try {
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
        console.log(`Folder created: ${folderPath}`);
      } else {
        console.log(`Folder already exists: ${folderPath}`);
      }

      fs.writeFileSync(
        filePath,
        JSON.stringify(resolvePayload(item.payload), null, 2)
      );
      console.log(`File created: ${filePath}`);
    } catch (error) {
      console.error("Error creating folder or file:", error);
    }
  });
}
