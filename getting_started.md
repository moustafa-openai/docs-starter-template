---
title: "Getting Started"
description: "Quickly learn how to set up and start using this project."
---

import { Steps, Callout, Mermaid } from 'nextra/components'

## ➊ Where to drop a new page

```text
app/
  docs/                 ← existing docs tree (App Router)
    <topic>/page.mdx    ← add files here **or**
content/                ← optional flat MDX tree (no page.mdx rule)
src/mdx-components.js   ← must exist – leave untouched
```

- **App folder = “page.mdx” convention.**
  Create `app/docs/my-topic/page.mdx`.
- **Content folder = filename is route.**
  Create `content/my-topic.mdx`, **plus** the catch-all route already in `app/[[...mdxPath]]/page.jsx`.

> If you choose `content/`, set `contentDirBasePath` in `next.config.mjs` if you need a prefix (e.g. `/docs`).

---

## ➋ Front-matter template

Every MDX file should start with something like:

```md
---
title: Awesome Feature # <h1> title
sidebarTitle: Awesome # optional, compact label in sidebar
description: Short SEO-ish blurb shown in <meta>
icon: FileIcon # if the parent section supports it
asIndexPage: true # only if this page IS the folder index
---
```

---

## ➌ Adding rich content

| Want                        | Minimal syntax (**works out-of-box**)                                                                       | Notes                                                                        |
| --------------------------- | ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| **Table**                   | GFM pipes:<br/>`\| a \| b \|`                                                                               | Auto-drawn & styled. Raw `<table>` needs `whiteListTagsStyling` option.      |
| **Mermaid diagram**         | `mermaid code block`                                                                                        | Plugin replaces block with `<Mermaid>` component.                            |
| **KaTeX / MathJax**         | `$a^2+b^2=c^2$` or fenced `math blocks`                                                                     | Ensure `latex: true` (KaTeX) or `{renderer:'mathjax'}` in `next.config.mjs`. |
| **Syntax-highlighted code** | `js {1,4-5} copy showLineNumbers`                                                                           | Shiki; line/substring/filename/highlight/copy supported.                     |
| **npm → Yarn tabs**         | \`\`\`sh npm2yarn                                                                                           | Shows tabs for npm/yarn/pnpm/bun via `remark-npm2yarn`.                      |
| **Twoslash TS hovers**      | \`\`\`ts twoslash                                                                                           | Show type-insight balloons & custom `@log`, `@error`…                        |
| **Steps / Tabs / Callout**  | Import from `nextra/components` inside MDX: <br/>`import { Steps, Tabs, Callout } from 'nextra/components'` | Rich layout helpers.                                                         |
| **Static image with zoom**  | `![Alt](/public/foo.png)`                                                                                   | Next/Image wrapper & zoom by default; disable via custom `img`.              |
| **Live coding**             | Embed Sandpack / react-live like any React component.                                                       |                                                                              |

### Steps component example

<Steps>
### Install
Run `npm create latest`
### Develop
Start the local dev server with `npm run dev`.
### Deploy
Push to Vercel / Netlify or any static host.
</Steps>

---

## ➍ Sidebar & navbar housekeeping (`_meta.js`)

- **Order / titles** – Add or override keys in the folder’s `_meta.js`:

  ```js
  export default {
    index: "Intro",
    advanced: "Advanced Guides",
    "###": { type: "separator", title: "Extra" },
    faq: { title: "FAQ", type: "page" }, // moves into top navbar
  };
  ```

- **Hide a file** – `display: 'hidden'`.

- **Per-page theme tweaks** – `theme: { sidebar:false, layout:'full', typesetting:'article' }`.

---

## ➎ Global features already on

- **Search** → requires `pagefind` + postbuild script.
  _(If you copied the starter, this is configured – otherwise add it.)_
- **Static image optimisation** – `staticImage:true` defaults.
- **Syntax highlighting** – `codeHighlight:true`.
- **Image zoom** – enabled; use `<Image>` to opt-out per image.

---

## ➏ Common pitfalls an LLM should avoid

| Pitfall                                                         | How to dodge it                                                                  |
| --------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Using **Pages router** examples                                 | Nextra v4 **only** supports App Router.                                          |
| Forgetting `mdx-components.js`                                  | File must export `useMDXComponents`; leave starter intact.                       |
| Adding non-serialisable functions when Turbopack dev flag is on | Keep `remarkPlugins` etc. out of `nextra()` when running `next dev --turbopack`. |
| KaTeX CSS missing                                               | Import `katex/dist/katex.min.css` or link CDN **when `latex:true`.**             |
| Raw HTML table unstyled                                         | Either write GFM or whitelist tags with `whiteListTagsStyling`.                  |

---

## ➐ End-to-end example: new page with table + diagram

```mdx
## <!-- app/docs/performance/page.mdx -->

title: Performance Tips
sidebarTitle: ⚡️ Perf
description: Practical tricks to speed things up.
icon: LightningIcon

---

import { Callout, Steps } from "nextra/components";

# Performance Tips

<Callout type="tip">Start with measuring!</Callout>

## Benchmark table

| Technique  | Avg gain |
| :--------- | -------: |
| Memoize    |     23 % |
| Code-split |     15 % |

## Architecture

<Mermaid
  chart={`graph LR
A[User] --> B(CDN) --> C(Edge Fn) --> D(DB)
`}
/>
```

```mdx
<Steps>### Measure Explain how... ### Optimise Explain how...</Steps>
```

Save the file, run `npm run dev`, and the page auto-appears in the sidebar under **⚡️ Perf**.

---

### Live preview of the example

<Callout type="tip">Start with measuring!</Callout>

## Benchmark table

| Technique  | Avg gain |
| :--------- | -------: |
| Memoize    |     23 % |
| Code-split |     15 % |

## Architecture

<Mermaid chart={`graph LR
A[User] --> B(CDN) --> C(Edge Fn) --> D(DB)
`} />

<Steps>
### Measure
Explain how...
### Optimise
Explain how...
</Steps>

---
