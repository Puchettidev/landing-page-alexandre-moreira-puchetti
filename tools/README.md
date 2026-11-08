# Como editar o site

As páginas `.html` da raiz são **geradas**. Edite os arquivos em `tools/site/` e rode o build:

```bash
node tools/build.mjs
```

- `tools/site/data.mjs`: dados do advogado, contato, as 7 áreas (textos, temas, documentos, FAQ), FAQ da home e etapas do atendimento.
- `tools/site/home.mjs`: estrutura da página inicial.
- `tools/site/area.mjs`: modelo das páginas de área.
- `tools/site/privacy.mjs`: Política de Privacidade.
- `tools/site/layout.mjs`: `<head>`, cabeçalho, rodapé, SEO e JSON-LD.

O build também atualiza `sitemap.xml` e `robots.txt`. Estilos ficam em `assets/css/site.css` e scripts em `assets/js/`.

Para ver localmente com as URLs limpas (igual à Vercel):

```bash
node tools/serve.mjs
```

A pasta `tools/` não é publicada (ver `.vercelignore`).
