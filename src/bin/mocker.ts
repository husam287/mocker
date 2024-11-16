#!/usr/bin/env node

import mocker from "..";
import generateMockExamples from "../utils/generate-mock-examples";

function print(msg: string) {
  process.stdout.write(msg + "\n");
}

function error(msg: string) {
  process.stderr.write(msg + "\n");
  process.exit(1);
}

if (process.argv.includes("generate") || process.argv.includes("g")) {
  mocker();
} else if (process.argv.includes("init")) {
  generateMockExamples();
} else if (process.argv.includes("--help") || process.argv.includes("-h")) {
  print(`
    Usage
      $ mocker [options]
  
    Options
      g, generate      Generate mock data from *.mock.json files
      init             Initialize *.mock.json templates
      -h, --help       Show this help
  
    Examples
      $ mocker g
  
      $ mocker init
    `);

  process.exit();
} else {
  error("missing args");
}
