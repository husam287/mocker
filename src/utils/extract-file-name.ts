import { PayloadWithFileNameType } from "../types/payload";

export default function extractFileName(path: PayloadWithFileNameType["path"]) {
  const regexResult = new RegExp(/\/([^/]+)(?=\.mock\.json$)/).exec(path);

  return regexResult?.[1] || "";
}
