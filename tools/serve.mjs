// Servidor local que imita o cleanUrls da Vercel. Uso: node tools/serve.mjs [porta]
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const port = Number(process.argv[2] || 4321);
const types = {
  ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".mjs": "text/javascript",
  ".svg": "image/svg+xml", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp", ".avif": "image/avif",
  ".png": "image/png", ".xml": "application/xml", ".txt": "text/plain", ".json": "application/json",
};

http
  .createServer((req, res) => {
    let p = decodeURIComponent(new URL(req.url, "http://x").pathname);
    if (p.endsWith("/")) p += "index.html";
    let file = path.join(root, p);
    if (!file.startsWith(root)) return res.writeHead(403).end();
    if (!path.extname(file) && fs.existsSync(file + ".html")) file += ".html";
    fs.readFile(file, (err, data) => {
      if (err) return res.writeHead(404, { "Content-Type": "text/plain" }).end("404");
      res.writeHead(200, { "Content-Type": types[path.extname(file)] || "application/octet-stream" });
      res.end(data);
    });
  })
  .listen(port, () => console.log(`http://localhost:${port}`));
