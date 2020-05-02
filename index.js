const { exec: e } = require("child_process");
const { writeFile, readFile, exists: ex, mkdir, readdir } = require("fs");
const { promisify } = require("util");
const { join } = require("path");
const exec = promisify(e);
const rf = promisify(readFile);
const rd = promisify(readdir);
const wf = promisify(writeFile);
const exists = promisify(ex);
const md = promisify(mkdir);

const [srcPath, packageName = "."] = process.argv.slice(2)
const fromRoot = (...a) => join(process.cwd(), ...a) 
const here = (...a) => join(__dirname, ...a) 
async function main() {
  await exec(
    `javadoc -doclet com.raidandfade.JsonDoclet.Main -docletpath ${here(
      "third-party/json-jdoc.jar"
    )} -sourcepath ${fromRoot(srcPath)} ${packageName}`
  );
}
module.exports =  main;
