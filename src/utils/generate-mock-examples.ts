import * as fs from "fs";
import * as path from "path";

export default function generateMockExamples() {
  // Get the target directory from CLI arguments
  const targetFolder = ".";

  // Resolve paths
  const sourceFilePath = path.resolve(__dirname, "../examples/user.mock.json"); // Source file in the project
  const targetFilePath = path.resolve(
    process.cwd(),
    targetFolder,
    "mocker-templates",
    "user.mock.json"
  ); // Destination in the user's CWD

  // Copy the file
  try {
    // Ensure the source file exists
    if (!fs.existsSync(sourceFilePath)) {
      throw new Error(`Source file not found: ${sourceFilePath}`);
    }

    // Ensure the target folder exists
    if (!fs.existsSync(path.dirname(targetFilePath))) {
      fs.mkdirSync(path.dirname(targetFilePath), { recursive: true });
      console.log(`Created directory: ${path.dirname(targetFilePath)}`);
    }

    // Copy the file
    fs.copyFileSync(sourceFilePath, targetFilePath);
    console.log(`File copied to: ${targetFilePath}`);
  } catch (error) {
    console.error("Error copying file:", error);
  }
}
