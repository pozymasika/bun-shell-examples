import { $ } from "bun";

// list files, -lah does not work
await $`ls *.js`;

// remove files
await $`rm -rf data/albums-bun.json`;

// change working directory
$.cwd("data");
await $`ls -l`;

// env variables
$.env({
  NODE_ENV: "staging",
  DEBUG: "true",
});

await $`echo $NODE_ENV`;

// or
await $`echo $NODE_ENV`.env({
  NODE_ENV: "production",
});

// read results
const result = await $`echo $NODE_ENV`.text();
console.log(result);

// to javascript object
const buffer = Buffer.alloc(1024);
await $`echo "Hello bun! > ${buffer}`;
console.log(buffer.toString());
