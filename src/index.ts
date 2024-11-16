import buildMockJson from "./utils/build-mock-json";
import getAllMockFiles from "./utils/get-all-mock-files";

export default function mocker() {
  const payloads = getAllMockFiles(process.cwd());

  buildMockJson(payloads);
}
