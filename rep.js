import { readFile, writeFile } from "node:fs/promises"

const s = await readFile("./public/wasm/wasm_bg.wasm", "hex");
const re = new RegExp(Buffer.from("").toString("hex"), "gi");
const h = Buffer.from("abcde").toString("hex")

await writeFile("./public/wasm/wasm_bg.wasm", s.replace(re, h), "hex")