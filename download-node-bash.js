// use child_process to call this command:
// curl https://jsonplaceholder.typicode.com/albums | jq '[.[] | {title, id}]' > data/albums-bash.json
import { spawn } from "node:child_process";
// run as 1 command
const child = spawn(
  "curl",
  [
    "https://jsonplaceholder.typicode.com/albums",
    "|",
    "jq",
    "'[.[] | {title, id}]'",
    ">",
    "data/albums-node-bash.json",
  ],
  {
    shell: true,
  }
);

child.stdout.on("data", (data) => {
  console.log(`stdout:\n${data}`);
});

child.stderr.on("data", (data) => {
  console.log(`stderr:\n${data}`);
});

child.on("error", (error) => {
  console.log(`error:\n${error.message}`);
});
