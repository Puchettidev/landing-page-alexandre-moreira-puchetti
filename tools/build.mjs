// Gera as páginas estáticas do site a partir de tools/site/*.
// Uso: node tools/build.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SITE, AREAS } from "./site/data.mjs";
import { home } from "./site/home.mjs";
import { areaPage } from "./site/area.mjs";
import { privacyPage } from "./site/privacy.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const write = (file, content) => {
  fs.writeFileSync(path.join(root, file), content);
  console.log("ok", file);
};

write("index.html", home());
for (const a of AREAS) write(`${a.slug}.html`, areaPage(a));
write("politica-de-privacidade.html", privacyPage());

const today = new Date().toISOString().slice(0, 10);
const urls = [
  ["/", "1.0"],
  ...AREAS.map((a) => [`/${a.slug}`, "0.8"]),
  ["/politica-de-privacidade", "0.3"],
];
write(
  "sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ([p, prio]) => `  <url>
    <loc>${SITE.origin}${p}</loc>
    <lastmod>${today}</lastmod>
    <priority>${prio}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`
);
write("robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${SITE.origin}/sitemap.xml\n`);
