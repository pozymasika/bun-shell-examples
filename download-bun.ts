import { $ } from "bun";

const url = "https://jsonplaceholder.typicode.com/albums";
const destination = "data/albums-bun.json";

await $`curl ${url} | jq '[.[] | {title, id}]' > ${destination}`;
