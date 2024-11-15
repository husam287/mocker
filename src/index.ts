import buildMockJson from "./utils/build-mock-json";
import getAllMockFiles from "./utils/get-all-mock-files";

const payloads = getAllMockFiles(process.cwd());

buildMockJson(payloads);
