// do this in js: curl https://jsonplaceholder.typicode.com/albums | jq '[.[] | {title, id}]' > albums.json
// call api, get json, parse json, write to file
import fetch from "node-fetch";
import fs from "node:fs/promises";
import path from "path";
import { URL } from "url";

const __dirname = new URL(".", import.meta.url).pathname;

const url = "https://jsonplaceholder.typicode.com/albums";
const filePath = path.join(__dirname, "data/albums-node.json");
const result = await fetch(url).then((res) => res.json());
const albums = result.map(({ title, id }) => ({ title, id }));

await fs.writeFile(filePath, JSON.stringify(albums, null, 2));
