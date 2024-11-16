import getAllFiles from "./get-all-files";

export default function checkSrcDirectionExistance() {
  const filterdFiles = getAllFiles();
  return filterdFiles.some((item) => item.includes("src/"));
}
