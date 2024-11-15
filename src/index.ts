import getAllMockFiles from "./utils/get-all-mock-files";

const payloads = getAllMockFiles(process.cwd());

console.log(payloads, "PAYLOAD");
