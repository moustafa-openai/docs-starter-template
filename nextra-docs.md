Directory structure:
└── docs/
    ├── page.mdx
    ├── advanced/
    │   ├── page.mdx
    │   ├── customize-the-cascade-layers/
    │   │   └── page.mdx
    │   ├── latex/
    │   │   └── page.mdx
    │   ├── mermaid/
    │   │   └── page.mdx
    │   ├── npm2yarn/
    │   │   └── page.mdx
    │   ├── remote/
    │   │   └── page.mdx
    │   ├── table/
    │   │   └── page.mdx
    │   ├── tailwind-css/
    │   │   └── page.mdx
    │   ├── twoslash/
    │   │   └── page.mdx
    │   └── typescript/
    │       └── page.mdx
    ├── blog-theme/
    │   ├── page.mdx
    │   ├── get-posts-and-tags/
    │   │   └── page.mdx
    │   ├── posts/
    │   │   └── page.mdx
    │   ├── rss/
    │   │   └── page.mdx
    │   ├── start/
    │   │   └── page.mdx
    │   └── tags/
    │       └── page.mdx
    ├── built-ins/
    │   ├── page.mdx
    │   └── [name]/
    │       └── page.tsx
    ├── custom-theme/
    │   ├── old.mdx
    │   └── page.mdx
    ├── docs-theme/
    │   ├── page.mdx
    │   ├── api/
    │   │   └── page.mdx
    │   ├── built-ins/
    │   │   ├── page.mdx
    │   │   ├── footer/
    │   │   │   └── page.mdx
    │   │   ├── layout/
    │   │   │   ├── old.mdx
    │   │   │   └── page.mdx
    │   │   ├── navbar/
    │   │   │   └── page.mdx
    │   │   └── not-found/
    │   │       └── page.mdx
    │   └── start/
    │       └── page.mdx
    ├── file-conventions/
    │   ├── page.mdx
    │   ├── content-directory/
    │   │   └── page.mdx
    │   ├── mdx-components-file/
    │   │   └── page.mdx
    │   ├── meta-file/
    │   │   └── page.mdx
    │   ├── page-file/
    │   │   └── page.mdx
    │   └── src-directory/
    │       └── page.mdx
    └── guide/
        ├── page.mdx
        ├── custom-css/
        │   └── page.mdx
        ├── github-alert-syntax/
        │   └── page.mdx
        ├── i18n/
        │   └── page.mdx
        ├── image/
        │   └── page.mdx
        ├── link/
        │   └── page.mdx
        ├── markdown/
        │   ├── _counter.tsx
        │   └── page.mdx
        ├── search/
        │   └── page.mdx
        ├── ssg/
        │   └── page.mdx
        ├── static-exports/
        │   └── page.mdx
        ├── syntax-highlighting/
        │   ├── _dynamic-code.tsx
        │   └── page.mdx
        └── turbopack/
            └── page.mdx


Files Content:

================================================
FILE: docs/app/docs/page.mdx
================================================
---
description:
  Nextra is a framework built on top of Next.js that enables the creation of
  content-focused websites. It combines the robust features of Next.js with
  enhanced capabilities for crafting Markdown-based content.
---

import { Cards, Image } from 'nextra/components'
import { cloneElement } from 'react'

export default function MdxLayout(props) {
  return cloneElement(props.children, {
    components: {
      img: Image
    }
  })
}

# Introduction

**Nextra** is a framework on top of Next.js, that lets you build content focused
websites. It has all the great features from Next.js, plus extra power to create
Markdown-based content with ease.

## Quick start

To start using Nextra, you need to select a theme first:

<Cards num={2}>
  <Cards.Card arrow title="Documentation theme" href="/docs/docs-theme/start">
    <>![Documentation theme screenshot](/assets/docs-theme.png)</>
  </Cards.Card>
  <Cards.Card arrow title="Blog theme" href="/docs/blog-theme/start">
    <>![Blog theme screenshot](/assets/blog-theme.png)</>
  </Cards.Card>
</Cards>

If you want to use Nextra without using these built-in themes, you can follow
the [Custom Theme](/docs/custom-theme) docs.

## FAQ

The Nextra FAQ is a collection of useful questions and answers about the
project. If you have a question that isn't answered here, please
[open a discussion](https://github.com/shuding/nextra/discussions).

<details>
  {/* prettier-ignore */}
  <summary>Can I use Nextra with Next.js `pages` router?</summary>
Nextra 4 only works with the `app` router. Only Nextra 1/2/3 supports the
`pages` router.

</details>

<details>
  <summary>Can I use X with Nextra?</summary>
The answer is "yes" for most things. Since Nextra is just a Next.js plugin, almost all the things
that can be done with React can be done with Nextra. Here are some examples and guides:

- [Use Tailwind CSS](/docs/guide/tailwind-css)
- [Use custom CSS and Sass](/docs/guide/custom-css)
- [Use custom fonts](https://nextjs.org/docs/basic-features/font-optimization)

</details>

<details>
  {/* prettier-ignore */}
  <summary>How can I add a live coding component in Nextra?</summary>
There are libraries like [Sandpack](https://sandpack.codesandbox.io) and
[react-live](https://github.com/FormidableLabs/react-live) that can help you
add live coding components to your MDX.

</details>



================================================
FILE: docs/app/docs/advanced/page.mdx
================================================
---
asIndexPage: true
---

import {
  CloudIcon,
  DiagramIcon,
  FormulaIcon,
  TableIcon,
  TailwindIcon
} from '@components/icons'
import { TerminalIcon, TypeScriptIcon } from 'nextra/icons'
import { OverviewPage } from '../../_components/overview-page'

# Advanced

<OverviewPage
  filePath={metadata.filePath}
  icons={{
    TerminalIcon,
    DiagramIcon,
    TailwindIcon,
    FormulaIcon,
    TableIcon,
    TypeScriptIcon,
    CloudIcon
  }}
/>



================================================
FILE: docs/app/docs/advanced/customize-the-cascade-layers/page.mdx
================================================
---
sidebarTitle: Customize Cascade Layers
---

import { Steps } from 'nextra/components'

# Customize the Cascade Layers

In some scenarios, you may need more control over the Nextra predefined CSS to
avoid unintended overrides of styles within cascade layers. Below is an example
of how `nextra-theme-docs` uses
[postcss-import](https://github.com/postcss/postcss-import) to place predefined
CSS into a specified cascade layer:

<Steps>

## Install `postcss-import`

Install `postcss-import` and add it to `postcss.config.mjs`:

```js filename="postcss.config.mjs"
export default {
  plugins: {
    'postcss-import': {}
    // ... your other PostCSS plugins (e.g., `autoprefixer`, `cssnano`)
  }
}
```

## Set up the cascade layers

In your CSS file (e.g. `styles.css`), import the `nextra-docs-theme` CSS and
specify the layers:

```css filename="styles.css"
@layer nextra, my-base;

@import 'nextra-theme-docs/dist/style.css' layer(nextra);

@layer my-base {
  /* my base styles */
}
```

## Import your CSS file

Import your CSS file at the top-level layout of your application (e.g.
`app/layout.jsx`) to apply the styles.

```jsx filename="app/layout.jsx"
import '../path/to/your/styles.css'

export default async function RootLayout({ children }) {
  // ... Your layout logic here
}
```

</Steps>



================================================
FILE: docs/app/docs/advanced/latex/page.mdx
================================================
---
icon: FormulaIcon
---

import { compileMdx } from 'nextra/compile'
import {
  Callout,
  MathJax,
  MathJaxContext,
  Steps,
  Tabs
} from 'nextra/components'
import { MDXRemote } from 'nextra/mdx-remote'

{/* <link rel="stylesheet"> is unsupported in Metadata API https://nextjs.org/docs/app/api-reference/functions/generate-metadata#unsupported-metadata */}

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/katex/dist/katex.css"
/>

# LaTeX

Nextra can use [KaTeX](https://katex.org) to pre-render LaTeX expressions
directly in MDX or [MathJax](https://mathjax.org) to dynamically render math in
the browser.

## Setup

<Steps>

### Enable the `latex` option

By default, LaTeX is disabled. To enable it, you need to set the `latex` option
in your `next.config.mjs` file:

```js filename="next.config.mjs" {4}
import nextra from 'nextra'

const withNextra = nextra({
  latex: true
})

export default withNextra()
```

A value of `true{:js}` will use KaTeX as the math renderer. To explicitly
specify the renderer, you may instead provide an object
`{ renderer: 'katex' }{:js}` or `{ renderer: 'mathjax' }{:js}` as the value to
`latex: ...`.

When enabled, the required CSS and fonts will be automatically included in your
site, and you can start writing math expressions by enclosing inline math in
`$...$` or display math in a `math`-labeled fenced code block:

````mdx
```math
\int x^2
```
````

### Apply styles

<Callout type="warning">
  This is applicable only to KaTeX as the math renderer.
</Callout>

<Tabs items={['Import CSS from `katex` package', 'Load CSS from CDN']}>
<Tabs.Tab>
1. Install the `katex` package

```bash npm2yarn
npm i katex
```

2. Import CSS in the root layout

```js filename="app/layout.jsx"
import 'katex/dist/katex.min.css'
```

</Tabs.Tab>
<Tabs.Tab>
Add `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex/dist/katex.css" />{:jsx}`
inside `<head>` element in your root `layout` file since `<link rel="stylesheet" />{:jsx}`
[isn't supported with Next.js Metadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata#unsupported-metadata).

Alternatively, you can include `<link rel="stylesheet" />{:jsx}` directly in
your MDX file:

````mdx filename="katex.mdx"
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/katex/dist/katex.css"
/>

# My page with single usage of KaTeX

```math
\int_2^3x^3\,\mathrm{d}x
```
````

</Tabs.Tab>
</Tabs>
</Steps>

## Example

For example, the following Markdown code:

````md filename="page.md"
The **Pythagorean equation** is $a=\sqrt{b^2 + c^2}$ and the quadratic formula:

```math
x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}
```
````

will be rendered as:

<div className="mt-6 rounded-xl border p-4 nextra-border">
The **Pythagorean equation** is $a=\sqrt{b^2 + c^2}$ and the quadratic formula:

```math
x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}
```

</div>

You can still use [Markdown and MDX syntax](../markdown) in the same line as
your LaTeX expression.

> [!TIP]
>
> If you want to display `$` in your content instead of rendering it as an
> equation, you can escape it with a backslash (`\`). For example `\$e = mc^2\$`
> will be rendered as \$e = mc^2\$.

## API

### KaTeX

`rehype-katex` is used to pre-render LaTeX expressions in your content. You can
pass supported [KaTeX options](https://katex.org/docs/options) via the `options`
key in your Nextra config. For example, to add a macro `\RR` that renders as
`\mathbb{R}` you could use the following configuration.

```js filename="next.config.mjs" {4-8}
const withNextra = nextra({
  latex: {
    renderer: 'katex',
    options: {
      macros: {
        '\\RR': '\\mathbb{R}'
      }
    }
  }
})
```

See [KaTeX's documentation](https://katex.org/docs/supported) for a list of
supported commands.

### MathJax

When MathJax is enabled (by setting `latex: { renderer: 'mathjax' }{:js}`) math
is rendered on page load via
[`better-react-mathjax`](https://github.com/fast-reflexes/better-react-mathjax)
instead of being pre-rendered. By default, **MathJax is served via the MathJax
CDN** instead of the files being directly included in your site.[^1]

[^1]:
    This can be changed by setting
    [`{ options: { src: ... } }{:js}`](https://github.com/fast-reflexes/better-react-mathjax#src-string--undefined)
    in the Nextra config.

MathJax rendering is enabled by setting `renderer: 'mathjax'{:js}` in your
Nextra config.

```js filename="next.config.mjs" {3}
const withNextra = nextra({
  latex: {
    renderer: 'mathjax'
  }
})
```

You can pass additional options to `better-react-mathjax` via the `options` key
in your Nextra config. The `config: ...` option sets the
[MathJax configuration](https://docs.mathjax.org/en/latest/options/index.html).
However, note that you can only pass serializable options to
`better-react-mathjax` via the `options` key in your Nextra config.[^2]

[^2]:
    To pass non-serializable objects like Functions, you must use the
    `<MathJaxContext config={...} />{:jsx}` component directly in your source.

For example, to configure MathJax to render `\RR` as `\mathbb{R}` you could use
the following configuration.

```js filename="next.config.mjs" {4-12}
const withNextra = nextra({
  latex: {
    renderer: 'mathjax',
    options: {
      config: {
        tex: {
          macros: {
            RR: '\\mathbb{R}'
          }
        }
      }
    }
  }
})
```

#### MathJax CDN

By default, MathJax is served via the MathJax CDN. To serve files from another
location (including locally in your project), you must pass the `src: ...`
option to the latex config. See the
[better-react-mathjax documentation](https://github.com/fast-reflexes/better-react-mathjax#src-string--undefined)
for details about the `src` option. Additionally, you may need to copy the
MathJax distribution into your `/public` folder for it to be served locally.

## KaTeX vs. MathJax

With KaTeX, math is pre-rendered which means flicker-free and faster page loads.
However, KaTeX does not support all the features of MathJax, especially features
related to accessibility.

The following two examples show the same formula rendered with KaTeX (first) and
MathJax (second).

```math
\int_2^3x^3\,\mathrm{d}x
```

<MathJaxExample />

Because of MathJax's accessibility features, the second formula is
tab-accessible and has a context menu that helps screen readers reprocess math
for the visually impaired.

export async function MathJaxExample() {
  const rawMdx = `~~~math
\\int_2^3x^3\\,\\mathrm{d}x
~~~`
  const rawJs = await compileMdx(rawMdx, {
    latex: {
      renderer: 'mathjax',
      options: {
        config: {
          tex: {
            macros: {
              RR: '\\mathbb{R}'
            }
          }
        }
      }
    }
  })
  return (
    <MDXRemote
      compiledSource={rawJs}
      components={{ MathJax, MathJaxContext }}
    />
  )
}



================================================
FILE: docs/app/docs/advanced/mermaid/page.mdx
================================================
---
icon: DiagramIcon
---

import { compileMdx } from 'nextra/compile'
import { Mermaid } from 'nextra/components'
import { MDXRemote } from 'nextra/mdx-remote'

# Mermaid

Nextra supports [mermaid](https://mermaid.js.org) diagrams. Like in GitHub you
can use it in your Markdown files by using the `mermaid` code block language.
Out of the box, Nextra uses
[`@theguild/remark-mermaid`](https://npmjs.com/package/@theguild/remark-mermaid)
package that replaces the code block with the `<Mermaid>` component.

## Example

<Demo />

export async function Demo() {
  const mermaidCodeblock = `\`\`\`mermaid
graph TD;
subgraph AA [Consumers]
A[Mobile app];
B[Web app];
C[Node.js client];
end
subgraph BB [Services]
E[REST API];
F[GraphQL API];
G[SOAP API];
end
Z[GraphQL API];
A --> Z;
B --> Z;
C --> Z;
Z --> E;
Z --> F;
Z --> G;
\`\`\``
  const rawJs = await compileMdx(`${mermaidCodeblock}
## Usage
~~~md filename="Markdown"
${mermaidCodeblock}
~~~
`)
  return <MDXRemote compiledSource={rawJs} components={{ Mermaid }} />
}



================================================
FILE: docs/app/docs/advanced/npm2yarn/page.mdx
================================================
---
icon: TerminalIcon
---

import { compileMdx } from 'nextra/compile'
import { Tabs } from 'nextra/components'
import { MDXRemote } from 'nextra/mdx-remote'

# Npm2Yarn

Nextra uses
[`@theguild/remark-npm2yarn`](https://npmjs.com/package/@theguild/remark-npm2yarn)
package that replaces the code block that has `npm2yarn` metadata with
[`<Tabs>` and `<Tabs.Tab>` components](/docs/guide/built-ins/tabs) from
`nextra/components`.

The chosen tab is saved in the local storage, which will be chosen in future
page renders.

## Example

<Page />

export async function Page() {
  const codeBlock = `\`\`\`sh npm2yarn
npm i -D @graphql-eslint/eslint-plugin
\`\`\``
  const rawJs = await compileMdx(`${codeBlock}
## Usage
~~~md filename="Markdown" /npm2yarn/
${codeBlock}
~~~`)
  return <MDXRemote compiledSource={rawJs} components={{ $Tabs: Tabs }} />
}



================================================
FILE: docs/app/docs/advanced/remote/page.mdx
================================================
---
icon: CloudIcon
---

import fs from 'node:fs/promises'
import { compileMdx } from 'nextra/compile'
import { Steps } from 'nextra/components'
import { MDXRemote } from 'nextra/mdx-remote'

export async function Example() {
  const filename = '/graphql-eslint/[[...slug]]/page.tsx'
  const pageContent = await fs.readFile(
    `../examples/swr-site/app/[lang]/${filename}`,
    'utf8'
  )
  const rawJs = await compileMdx(
    `~~~jsx filename="app${filename}" {27} showLineNumbers
${pageContent
  .replace(
    "lang: 'en',\n    ...(route && { slug: route.split('/') })",
    "slug: route.split('/')"
  )
  .trimEnd()}
~~~`,
    { defaultShowCopyCode: true }
  )
  return <MDXRemote compiledSource={rawJs} />
}

# Remote Content

> [!NOTE]
>
> You can check out the
> [SWR i18n example](https://github.com/shuding/nextra/blob/main/examples/swr-site/app/%5Blang%5D/graphql-eslint/%5B%5B...slug%5D%5D/page.tsx)
> source code.

<Steps>

## Create `[[...slug]]/page.tsx` file

Create `[[...slug]]/page.tsx` file in `app/` directory with the following
content:

<Example />

## Enhance `pageMap`

You need to modify `pageMap` list in `layout` file, to properly display sidebar
and mobile navigation.

```tsx filename="app/layout.tsx"
import { getPageMap } from 'nextra/page-map'
import { pageMap as graphqlEslintPageMap } from './graphql-eslint/[[...slug]]/page'

// ...

const pageMap = [...(await getPageMap()), graphqlEslintPageMap]
```

</Steps>



================================================
FILE: docs/app/docs/advanced/table/page.mdx
================================================
---
icon: TableIcon
---

# Rendering Tables

This guide covers different ways to render tables in MDX, including GFM syntax
and literal HTML tag.

## GFM syntax

In Markdown, it is preferable to write tables via
[GFM syntax](https://github.github.com/gfm/#tables-extension-).

```mdx filename="MDX"
| left   | center | right |
| :----- | :----: | ----: |
| foo    |  bar   |   baz |
| banana | apple  |  kiwi |
```

will be rendered as:

| left   | center | right |
| :----- | :----: | ----: |
| foo    |  bar   |   baz |
| banana | apple  |  kiwi |

## Literal HTML tables

If you try to render table with literal HTML elements `<table>{:js}`,
`<thead>{:js}`, `<tbody>{:js}`, `<tr>{:js}`, `<th>{:js}` and `<td>{:js}` – your
table will be unstyled because
[MDX](https://mdxjs.com/docs/using-mdx/#components) doesn't replace literal HTML
elements with components provided by `useMDXComponents(){:js}`[^1].

> [!TIP]
>
> Instead, use the [built-in `<Table>` component](/docs/guide/built-ins/table)
> available via `nextra/components`.

## Changing default behaviour

If you want to use standard HTML elements for your tables but have them styled
with components provided by `useMDXComponents(){:js}`[^1], you can do this by
configuring Nextra.

To achieve this, pass the `whiteListTagsStyling` option to the Nextra function,
including an array of tags you want to replace.

Here's an example configuration in your `next.config.mjs` file:

```js filename="next.config.mjs" {4}
import nextra from 'nextra'

const withNextra = nextra({
  whiteListTagsStyling: ['table', 'thead', 'tbody', 'tr', 'th', 'td']
})

export default withNextra()
```

In this example, the tags `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, and
`<td>` will be replaced with corresponding MDX components, allowing for
customized styling.

[^1]: https://mdxjs.com/packages/react/#usemdxcomponentscomponents



================================================
FILE: docs/app/docs/advanced/tailwind-css/page.mdx
================================================
---
icon: TailwindIcon
---

import { Steps } from 'nextra/components'

# Tailwind CSS

Tailwind CSS is a CSS framework that provides a set of pre-defined CSS classes
to quickly style elements.

<Steps>

## Follow the official guide

Follow the official
[Tailwind CSS guide for Next.js](https://tailwindcss.com/docs/guides/nextjs) to
set up Tailwind CSS for your project.

## Create the `globals.css` file

Import Tailwind CSS into `globals.css`:

```css filename="globals.css"
@import 'tailwindcss';

/* Optional: import Nextra theme styles */
@import 'nextra-theme-docs/style.css'; /* or nextra-theme-blog/style.css */

@variant dark (&:where(.dark *));
```

## Import styles in the root layout

To apply the styles globally, import the `globals.css` file in your root layout
file:

```jsx filename="app/layout.jsx"
import '../path/to/your/globals.css'

export default async function RootLayout({ children }) {
  // ... Your layout logic here
}
```

</Steps>



================================================
FILE: docs/app/docs/advanced/twoslash/page.mdx
================================================
# Twoslash Support

Twoslash provides an inline type hove inside the code block.

## Basic usage

You can enable twoslash to your code blocks by adding a `twoslash` metadata:

{/* prettier-ignore */}
````md copy=false filename="Markdown"
```ts twoslash
// @errors: 2540
interface Todo {
  title: string
}

const todo: Readonly<Todo> = {
  title: 'Delete inactive users'.toUpperCase()
  //  ^?
}

todo.title = 'Hello'

Number.parseInt('123', 10)
//      ^|
               // Just comments, so Popup will be
               // not behind the viewport of `<code>`
               // element due his `position: absolute` style
               //
```
````

Renders:

{/* prettier-ignore */}
```ts twoslash
// @errors: 2540
interface Todo {
  title: string
}

const todo: Readonly<Todo> = {
  title: 'Delete inactive users'.toUpperCase()
  //  ^?
}

todo.title = 'Hello'

Number.parseInt('123', 10)
//      ^|




```

## Custom log message

You can add log message to your code by adding:

- `@log: <message>` Custom log message
- `@error: <message>` Custom error message
- `@warn: <message>` Custom warn message
- `@annotate: <message>` Custom annotate message

```ts twoslash
// @log: Custom log message
const a = 1
// @error: Custom error message
const b = 1
// @warn: Custom warning message
const c = 1
// @annotate: Custom annotation message
```



================================================
FILE: docs/app/docs/advanced/typescript/page.mdx
================================================
---
icon: TypeScriptIcon
---

import { Steps } from 'nextra/components'

# TypeScript

Nextra is built with TypeScript and provides excellent TypeScript support out of
the box. This guide will help you leverage TypeScript in your Nextra project.

## Getting started

To use TypeScript in your Nextra project, you need to:

<Steps>
### Install TypeScript and types packages as `devDependencies`

```sh npm2yarn
npm i -D typescript @types/react @types/node
```

### `tsconfig.json`

You can manually create a `tsconfig.json` file in the root of your project or
rename the extension of some of the existing files to `.ts` or `.tsx` and then
Next.js will detect TypeScript in your project and create a `tsconfig.json` file
for you.

</Steps>

## Type definitions

Nextra provides type definitions for distribution code for its components and
configurations. You can leverage these types by renaming your theme
configuration file to `.ts` or `.tsx` extension and importing a theme config
type, e.g. for `nextra-theme-docs`:

```tsx filename="theme.config.tsx"
import type { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  // Your theme configuration
}
export default config
```

By leveraging TypeScript in your Nextra project, you can catch errors early,
improve code quality, and enhance the developer experience with better
autocompletion and type inference.



================================================
FILE: docs/app/docs/blog-theme/page.mdx
================================================
---
asIndexPage: true
sidebarTitle: Blog Theme
---

import {
  ChevronRightIcon,
  FilesIcon,
  RSSIcon,
  TagsIcon
} from '@components/icons'
import { FileIcon } from 'nextra/icons'
import { OverviewPage } from '../../_components/overview-page'

# Nextra Blog Theme

<OverviewPage
  filePath={metadata.filePath}
  icons={{
    ChevronRightIcon,
    FilesIcon,
    FileIcon,
    TagsIcon,
    RSSIcon
  }}
/>



================================================
FILE: docs/app/docs/blog-theme/get-posts-and-tags/page.mdx
================================================
---
icon: FilesIcon
---

import { ExampleCode } from 'components/example-code'

# Get Posts and Their Tags

The following code snippet demonstrates how to retrieve all posts along with
their associated tags.

<ExampleCode
  example="blog"
  filePath="app/posts/get-posts.js"
  metadata="/getPageMap/"
/>



================================================
FILE: docs/app/docs/blog-theme/posts/page.mdx
================================================
---
icon: FileIcon
---

import { ExampleCode } from 'components/example-code'

# Posts Page

The following code snippet demonstrates how to create `/posts` page.

<ExampleCode
  example="blog"
  filePath="app/posts/page.jsx"
  metadata="/getPosts/ /getTags/"
/>



================================================
FILE: docs/app/docs/blog-theme/rss/page.mdx
================================================
---
icon: RSSIcon
---

import { ExampleCode } from 'components/example-code'

# Generate RSS feed

The following code snippet demonstrates how to create `/rss.xml` route.

<ExampleCode
  example="blog"
  filePath="app/rss.xml/route.js"
  metadata="/getPosts/"
/>



================================================
FILE: docs/app/docs/blog-theme/start/page.mdx
================================================
---
icon: ChevronRightIcon
---

import InstallNextraTheme from '@components/install-nextra-theme.mdx'
import ReadyToGo from '@components/ready-to-go.mdx'
import { ExampleCode } from '@components/example-code'
import { Steps } from 'nextra/components'

# Get Started

> [!NOTE]
>
> An example of the blog theme can be found [here](https://demo.vercel.blog),
> with source code [here](https://github.com/vercel/nextjs-portfolio-starter).

Similar to the [Docs Theme](/docs/docs-theme/start), you can install the blog
theme with the following commands:

## Start as a new project

<Steps>
### Install

To create a Nextra Blog site manually, you have to install **Next.js**,
**React**, **Nextra**, and **Nextra Blog Theme**. In your project directory, run
the following command to install the dependencies:

```sh npm2yarn
npm i next react react-dom nextra nextra-theme-blog
```

> [!NOTE]
>
> If you already have Next.js installed in your project, you only need to
> install `nextra` and `nextra-theme-blog` as the add-ons.

<InstallNextraTheme />

<ExampleCode example="blog" filePath="app/layout.jsx" />

{/*

### Create Blog Theme Config

Lastly, create the corresponding `theme.config.jsx` file in your project's root
directory. This will be used to configure the Nextra Blog theme:

```jsx filename="theme.config.jsx"
export default {
  footer: <p>MIT 2023 © Nextra.</p>,
  head: ({ title, meta }) => (
    <>
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
    </>
  ),
  readMore: 'Read More →',
  postFooter: null,
  darkMode: false,
  navs: [
    {
      url: 'https://github.com/shuding/nextra',
      name: 'Nextra'
    }
  ]
}
```

*/}

<ReadyToGo />

</Steps>

## Layout Props

<APIDocs
  componentName="Layout"
  packageName="../packages/nextra-theme-blog"
/>



================================================
FILE: docs/app/docs/blog-theme/tags/page.mdx
================================================
---
icon: TagsIcon
---

import { ExampleCode } from 'components/example-code'

# Tags Page

The following code snippet demonstrates how to create `/tags/:id` pages.

<ExampleCode
  example="blog"
  filePath="app/tags/[tag]/page.jsx"
  metadata="/getPosts/ /getTags/"
/>



================================================
FILE: docs/app/docs/built-ins/page.mdx
================================================
---
asIndexPage: true
sidebarTitle: Built-In Components
---

import {
  CardsIcon,
  FolderTreeIcon,
  IdCardIcon,
  OneIcon,
  TableIcon
} from '@components/icons'
import { Callout } from 'nextra/components'
import { GitHubWarningIcon } from 'nextra/icons'
import { OverviewPage } from '../../_components/overview-page'
import { getEnhancedPageMap } from '../../../components/get-page-map'

# Built-Ins

<Callout type="info">
  This API reference is automatically generated from the catch-all route file
  `/docs/built-ins/[name]/page.tsx` using the new [Nextra `<TSDoc />`
  component](/docs/built-ins/tsdoc).
</Callout>

Nextra includes a couple of built-in components that you can use to better style
your content:

{/* `pageMap` prop will be removed once Nextra will add dynamic routes in pageMap */}

<OverviewPage
  filePath={metadata.filePath}
  pageMap={
    (await getEnhancedPageMap())
      .find(o => o.name === 'docs')
      .children.find(o => o.name === 'built-ins').children
  }
  icons={{
    WarningIcon: GitHubWarningIcon,
    IdCardIcon,
    FolderTreeIcon,
    OneIcon,
    TableIcon,
    CardsIcon
  }}
/>



================================================
FILE: docs/app/docs/built-ins/[name]/page.tsx
================================================
import path from 'node:path'
import { generateApiReference } from '@components/generate-api-reference'
import type { ApiReference } from '@components/generate-api-reference'
import { useMDXComponents as getMDXComponents } from 'next-mdx-import-source-file'
import type { MdxFile } from 'nextra'
import { generateDefinition } from 'nextra/tsdoc'
import type { FC } from 'react'

type ComponentApiReference = ApiReference & { groupKeys?: string }

const API_REFERENCE: (
  | ComponentApiReference
  | { type: 'separator'; title: string; name: string }
)[] = [
  { type: 'separator', title: 'Layout Components', name: '_' },
  {
    name: 'Banner',
    packageName: 'nextra/components',
    groupKeys: 'HTMLAttributes<HTMLDivElement>'
  },
  {
    name: 'Head',
    packageName: 'nextra/components',
    isFlattened: true
  },
  { name: 'Search', packageName: 'nextra/components', isFlattened: false },
  { type: 'separator', title: 'Content Components', name: '_2' },
  {
    name: 'Bleed',
    packageName: 'nextra/components',
    groupKeys: 'HTMLAttributes<HTMLDivElement>'
  },
  {
    name: 'Callout',
    packageName: 'nextra/components',
    groupKeys: 'HTMLAttributes<HTMLDivElement>'
  },
  {
    // TODO: add
    // <APIDocs componentName="Cards.Card" />
    name: 'Cards',
    packageName: 'nextra/components',
    groupKeys: 'HTMLAttributes<HTMLDivElement>'
  },
  {
    // TODO: add
    // <APIDocs componentName="FileTree.Folder" />
    // <APIDocs componentName="FileTree.File" />
    name: 'FileTree',
    packageName: 'nextra/components',
    groupKeys: 'HTMLAttributes<HTMLUListElement>'
  },
  {
    name: 'Steps',
    packageName: 'nextra/components',
    groupKeys: 'HTMLAttributes<HTMLDivElement>'
  },
  {
    // TODO: add
    // <APIDocs componentName="Table.Tr" groupKeys="ComponentProps<'tr'>" />
    // <APIDocs componentName="Table.Th" groupKeys="ComponentProps<'th'>" />
    // <APIDocs componentName="Table.Td" groupKeys="ComponentProps<'td'>" />
    name: 'Table',
    packageName: 'nextra/components',
    groupKeys: 'HTMLAttributes<HTMLTableElement>'
  },
  { name: 'Tabs', packageName: 'nextra/components' },
  { type: 'separator', title: 'Other Components', name: '_3' },
  { name: 'MDXRemote', packageName: 'nextra/mdx-remote' },
  { name: 'Playground', packageName: 'nextra/components' },
  { name: 'TSDoc', packageName: 'nextra/tsdoc' }
]

const routes = API_REFERENCE.filter(
  (o): o is ComponentApiReference => !('type' in o)
)

export const generateStaticParams = () =>
  routes.map(o => ({ name: o.name.toLowerCase() }))

// @ts-expect-error -- fixme
export const pageMap: (MdxFile & { title: string })[] = API_REFERENCE.map(o =>
  'type' in o
    ? o
    : {
        name: o.name.toLowerCase(),
        route: `/docs/built-ins/${o.name.toLowerCase()}`,
        title:
          o.name === 'TSDoc' ? (
            <span className="badge-new">{o.name}</span>
          ) : (
            o.name
          )
      }
)

const Wrapper = getMDXComponents().wrapper

async function getReference(props: PageProps) {
  const params = await props.params
  const apiRefIndex = routes.findIndex(
    o => o.name.toLowerCase() === params.name
  )
  const apiRef = routes[apiRefIndex]
  if (!apiRef) {
    throw new Error(`API reference not found for "${params.name}"`)
  }
  const { name, packageName, groupKeys, isFlattened } = apiRef
  const result = groupKeys
    ? `Omit<MyProps, keyof ${groupKeys}> & { '...props': ${groupKeys} }>`
    : 'MyProps'
  const code =
    apiRef.code ??
    `
import type { ComponentProps, HTMLAttributes } from 'react'
import { ${name} as MyComponent } from '${packageName}'

type MyProps = ComponentProps<typeof MyComponent>
type $ = ${result}

export default $`
  const flattened = isFlattened !== false
  const fcPropsDefinition = generateDefinition({ code, flattened })
  const {
    // @ts-expect-error -- exist
    signatures: _signatures,
    ...fcDefinition
  } = generateDefinition({
    code: `export { ${name} as default } from '${packageName}'`,
    flattened
  })
  const definition = {
    ...fcPropsDefinition,
    ...fcDefinition
  }
  const res = await generateApiReference(apiRef, {
    title: 'Component',
    subtitle: 'Props',
    definition
    //     bottomMdxContent: `<Callout type="default">
    // **Tip for TypeScript users:**<br/>
    // You can retrieve the props type for the \`<${name}>\` component using \`React.ComponentProps<typeof ${name}>\`.
    // </Callout>`
  })
  const filePath =
    fcDefinition.filePath &&
    path
      .relative('..', fcDefinition.filePath)
      .replace(/\.d.ts$/, '.tsx')
      .replace('/dist/', '/src/')
  // Add edit on GitHub link to points on a source file
  res.metadata.filePath = `https://github.com/shuding/nextra/tree/main/${filePath}`

  return res
}

export async function generateMetadata(props: PageProps) {
  const { metadata } = await getReference(props)
  return metadata
}

type PageProps = Readonly<{
  params: Promise<{ name: string }>
}>

const Page: FC<PageProps> = async props => {
  const { default: MDXContent, toc, metadata } = await getReference(props)
  return (
    <Wrapper toc={toc} metadata={metadata}>
      <MDXContent />
    </Wrapper>
  )
}

export default Page



================================================
FILE: docs/app/docs/custom-theme/old.mdx
================================================
### Render metadata for the active page

> [!WARNING]
>
> Docs from Nextra 3

Other than `children`, some other useful props are passed to the theme layout
too. With the `pageOpts` props, the theme can access the page's meta
information.

For example, let's implement these features:

- Render the page title in `<title>`
- Show a simple Table of Contents via MDX `<Wrapper>` component
- Add a meta tag for `og:image` via the front matter

```tsx filename="theme.tsx" /pageOpts/
import Head from 'next/head'
import type { NextraThemeLayoutProps } from 'nextra'
import { MDXProvider } from 'nextra/mdx'

export default function Layout({ children, pageOpts }: NextraThemeLayoutProps) {
  const { title, frontMatter } = pageOpts

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="og:image" content={frontMatter.image} />
      </Head>
      <MDXProvider components={{ wrapper: MyWrapper }}>{children}</MDXProvider>
    </>
  )
}

function MyWrapper({ children, toc }) {
  return (
    <>
      <h1>My Theme</h1>
      Table of Contents:
      <ul>
        {toc.map(heading => (
          <li key={heading.value}>{heading.value}</li>
        ))}
      </ul>
      <div style={{ border: '1px solid' }}>{children}</div>
    </>
  )
}
```

### Use page map of the entire site

> [!WARNING]
>
> Docs from Nextra 3

Now, if you want to render something like a sidebar or a navigation bar, which
relies on information of not only the current page but also other pages, you can
use the `pageMap` value.

For example, we can render a simple navigation list with all the pages in the
top level:

```tsx filename="theme.tsx" /pageMap/
import Link from 'next/link'
import type { NextraThemeLayoutProps } from 'nextra'

export default function Layout({ children, pageOpts }: NextraThemeLayoutProps) {
  const { pageMap } = pageOpts

  return (
    <div>
      <h1>My Theme</h1>
      {pageMap.map(item => {
        if ('route' in item && !('children' in item)) {
          return (
            <Link key={item.name} href={item.route}>
              {item.route}
            </Link>
          )
        }
      })}
      <div style={{ border: '1px solid' }}>{children}</div>
    </div>
  )
}
```

There are other item kinds such as `Folder` (for directories) and `Meta` (for
`_meta` files). All the items are typed so you can easily know the properties.



================================================
FILE: docs/app/docs/custom-theme/page.mdx
================================================
import { ExampleCode } from 'components/example-code'
import { Steps } from 'nextra/components'
import OldDocs from './old.mdx'

# Custom Theme

A theme in Nextra works like a layout, that will be rendered as a wrapper for
all pages. This docs will walk you through the process of creating a custom
theme.

> [!NOTE]
>
> Source code for the following custom theme can be found
> [here](https://github.com/shuding/nextra/tree/main/examples/custom-theme).

## Create a custom theme

<Steps>
### Create a root layout

<ExampleCode example="custom-theme" filePath="app/layout.tsx" />

### Create [`mdx-components` file](/docs/file-conventions/mdx-components-file)

<ExampleCode
  example="custom-theme"
  filePath="mdx-components.jsx"
  metadata="/toc/2 {9}"
/>
<ExampleCode
  example="custom-theme"
  filePath="app/_components/toc.tsx"
  metadata="/toc/"
/>

### Create a basic theme

You can now start working on your theme! Create the `nextra-theme.tsx` file, it
accepts a `children` prop, which is the MDX content of the current page, and
wraps some other elements around the content:

<ExampleCode
  example="custom-theme"
  filePath="app/_components/nextra-theme.tsx"
  metadata="/children/"
/>

### Create navbar and footer

<ExampleCode example="custom-theme" filePath="app/_components/footer.tsx" />
<ExampleCode
  example="custom-theme"
  filePath="app/_components/navbar.tsx"
  metadata="/topLevelNavbarItems/"
/>

### Create sidebar

<ExampleCode
  example="custom-theme"
  filePath="app/_components/sidebar.tsx"
  metadata="/docsDirectories/"
/>

### Add first MDX page

After creating the theme, you can simply add a MDX file as `app/page.mdx` and
see the result:

![Custom theme](/assets/docs/custom-theme.png)

<br />

Inside your theme layout, you can use CSS imports or other ways to style it.
Next.js hooks such as `usePathname` are also available.

{process.env.NODE_ENV !== 'production' && <OldDocs />}

</Steps>



================================================
FILE: docs/app/docs/docs-theme/page.mdx
================================================
---
asIndexPage: true
sidebarTitle: Docs Theme
---

# Nextra Docs Theme

import { BoxIcon, ChevronRightIcon } from '@components/icons'
import { OverviewPage } from '../../_components/overview-page'

<OverviewPage
  filePath={metadata.filePath}
  icons={{
    ChevronRightIcon,
    BoxIcon
  }}
/>



================================================
FILE: docs/app/docs/docs-theme/api/page.mdx
================================================
# API

## `useThemeConfig` hook

The `useThemeConfig` hook returns values of your
[theme configuration](/docs/docs-theme/theme-configuration) and is made to
dynamically configure your project.

```js
import { useThemeConfig } from 'nextra-theme-docs'
```

<APIDocs
  code="export type { useThemeConfig as default } from 'nextra-theme-docs'"
  flattened
/>

## `useConfig` hook

```js
import { useConfig } from 'nextra-theme-docs'
```

The `useConfig` hook returns data from your current page context.

<APIDocs
  code="export type { useConfig as default } from 'nextra-theme-docs'"
  flattened
/>



================================================
FILE: docs/app/docs/docs-theme/built-ins/page.mdx
================================================
---
asIndexPage: true
sidebarTitle: Built-In Components
icon: BoxIcon
---

import { OverviewPage } from '../../../_components/overview-page'

# Built-Ins

<OverviewPage filePath={metadata.filePath} />



================================================
FILE: docs/app/docs/docs-theme/built-ins/footer/page.mdx
================================================
---
sidebarTitle: Footer
---

import { ToggleVisibilitySection } from 'components/toggle-visibility-section'

# Footer Component

The footer area of the website. You can specify content for your default footer.

## Props

<APIDocs
  componentName="Footer"
  packageName="nextra-theme-docs"
  groupKeys="ComponentProps<'footer'>"
/>

## Example

You can add content, such as copyright information by passing it as `children`
of the `Footer` component:

```jsx filename="app/layout.jsx"
import { Footer, Layout } from 'nextra-theme-docs'

export default function MyLayout({ children, ...props }) {
  return (
    <Layout>
      {children}
      <Footer>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://nextra.site" target="_blank">
          Nextra
        </a>
        .
      </Footer>
      {children}
    </Layout>
  )
}
```

<ToggleVisibilitySection element="`<Footer>`" property="footer" />



================================================
FILE: docs/app/docs/docs-theme/built-ins/layout/old.mdx
================================================
## MDX Components [!TODO]

Provide custom [MDX components](https://mdxjs.com/table-of-components) to render
the content. For example, you can use a custom `pre` component to render code
blocks.



================================================
FILE: docs/app/docs/docs-theme/built-ins/layout/page.mdx
================================================
---
sidebarTitle: Layout
---

import { ToggleVisibilitySection } from 'components/toggle-visibility-section'

export function PartialTSDoc({ flattened, props }) {
  return (
    <APIDocs
      flattened={flattened}
      code={`
import { Layout } from 'nextra-theme-docs'
type $ = Pick<React.ComponentProps<typeof Layout>, ${props.map(prop => JSON.stringify(prop)).join('|')}>
export default $`}
    />
  )
}

# Layout Component

The theme is configured with the `<Layout>` component. You should pass your
config options as Layout's `props`, for example:

```jsx filename="app/layout.jsx" {8-9}
import { Layout } from 'nextra-theme-docs'

export default function MyLayout({ children, ...props }) {
  return (
    <html lang="en">
      <body>
        <Layout
          sidebar={{ autoCollapse: true }}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
```

Detailed information for each option is listed below.

## Props

## Page Map

<PartialTSDoc props={['pageMap']} />

## Banner

<PartialTSDoc props={['banner']} />

## Navbar

<PartialTSDoc props={['navbar']} />

<ToggleVisibilitySection element="`<Navbar>`" property="navbar" />

## Footer

<PartialTSDoc props={['footer']} />

<ToggleVisibilitySection element="`<Footer>`" property="footer" />

## Search

<PartialTSDoc props={['search']} />

## Docs Repository

Set the repository URL of the documentation. It's used to generate the
"[Edit this page](#edit-link)" link, the "[Feedback](#feedback-link)" link and
"[Report of broken link](./not-found)" on
[not found page](https://nextjs.org/docs/app/api-reference/file-conventions/not-found).

<PartialTSDoc props={['docsRepositoryBase']} />

### Specify a Path

If the documentation is inside a monorepo, a subfolder, or a different branch of
the repository, you can simply set the `docsRepositoryBase` to the root path of
the `app/` (App Router) folder of your docs. For example:

```jsx filename="app/layout.jsx"
<Layout docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs">
  {children}
</Layout>
```

Then Nextra will automatically generate the correct file path for all pages.

## Dark Mode and Themes

Customize the theme behavior of the website.

<PartialTSDoc props={['darkMode', 'nextThemes']} />

import Old from './old.mdx'

{process.env.NODE_ENV !== 'production' && <Old />}

## Edit Link

Show an "Edit this page" link on the page that points to the file URL on GitHub
(or other places).

<PartialTSDoc props={['editLink']} />

> [!TIP]
>
> To disable it, you can set `editLink` to `null`.

## Feedback Link

The built-in feedback link provides a way for users to submit feedback about the
documentation.

<PartialTSDoc props={['feedback']} flattened />

> [!TIP]
>
> To disable it, you can set `feedback.content` to `null`.

## I18n

<PartialTSDoc props={['i18n']} />

## Last Updated Date

Show the last updated date of a page. It's useful for showing the freshness of
the content.

<PartialTSDoc props={['lastUpdated']} />

<ToggleVisibilitySection element="last update date" property="timestamp" />

## Navigation

Show previous and next page links on the bottom of the content. It's useful for
navigating between pages.

<PartialTSDoc props={['navigation']} />

![Navigation](/assets/docs/navigation.png)

```jsx filename="app/layout.jsx"
<Layout
  navigation={{
    prev: true,
    next: true
  }}
>
  {children}
</Layout>
```

The above is also equivalent to `navigation: true{:js}`.

<ToggleVisibilitySection element="navigation" property="pagination" />

## Sidebar

<PartialTSDoc props={['sidebar']} flattened />

### Menu Collapse Level

By default, the sidebar menu is collapsed at level `2`. You can change it by
setting `sidebar.defaultMenuCollapseLevel` to a different number. For example,
when set to `1`, every folder will be collapsed by default and when set to
`Infinity`, all nested folders will be expanded by default.

If `sidebar.autoCollapse` is set to `true`, then all folders that do not contain
an active/focused route will automatically collapse up to the level set by
`sidebar.defaultMenuCollapseLevel`. e.g. if `defaultMenuCollapseLevel` is `2`,
then top-level folders will not auto-collapse.

### Customize Sidebar Content

Together with the [Separators](/docs/docs-theme/page-configuration#separators)
item, you can customize how the sidebar content is rendered by using JSX
elements:

```jsx filename="_meta.jsx" {5-10}
export default {
  index: 'Intro',
  '--': {
    type: 'separator',
    title: (
      <div className="flex items-center gap-2">
        <MyLogo />
        {children}
      </div>
    )
  },
  frameworks: 'JS Frameworks & Libs',
  about: 'About'
}
```

![Customized Sidebar](/assets/docs/sidebar-customized.png)

<ToggleVisibilitySection element="`<Sidebar>`" property="sidebar" />

### Customize Sidebar with Front Matter

In addition, you can customize the sidebar title using the `sidebarTitle`
property in your front matter:

```mdx filename="getting-started.mdx"
---
sidebarTitle: Getting Started 🚀
---
```

The priority of the sidebar title is as follows:

1. A non-empty title from the `_meta` file.
1. `sidebarTitle` in the front matter.
1. `title` in the front matter.
1. The title derived from the first `h1` Markdown heading (e.g.
   `# Dima Machina`).
1. If none of the above are available, it falls back to the filename of the
   page, formatted according to [The Chicago Manual of Style](https://title.sh).

## Theme Switch

<PartialTSDoc props={['themeSwitch']} />

You are able to customize the option names for localization or other purposes:

```jsx filename="app/layout.jsx"
<Layout
  themeSwitch={{
    dark: 'Темный',
    light: 'Светлый',
    system: 'Системный'
  }}
>
  {children}
</Layout>
```

## Table of Contents (TOC)

Show a table of contents on the right side of the page. It's useful for
navigating between headings.

<PartialTSDoc props={['toc']} flattened />

### Floating TOC

When enabled, the TOC will be displayed on the right side of the page, and it
will be sticky when scrolling. If it's disabled, the TOC will be displayed
directly on the page sidebar.

<ToggleVisibilitySection element="`<TOC>`" property="toc" />



================================================
FILE: docs/app/docs/docs-theme/built-ins/navbar/page.mdx
================================================
---
sidebarTitle: Navbar
---

import { ToggleVisibilitySection } from 'components/toggle-visibility-section'
import { generateTsFromZod } from 'nextra/tsdoc'

# Navbar Component

## Props

<APIDocs componentName="Navbar" packageName="nextra-theme-docs" />

### Logo

The logo of the website rendered on the navbar.

<figure>
  <>![Customized Logo](/assets/docs/logo.png)</>
  {/* prettier-ignore */}
  <figcaption>[Live example on StackBlitz](https://stackblitz.com/edit/nextra-2-docs-yrlccm?file=theme.config.jsx)</figcaption>
</figure>

```jsx filename="app/layout.jsx"
<Navbar
  logo={
    <>
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M14.683 14.828a4.055 4.055 0 0 1-1.272.858a4.002 4.002 0 0 1-4.875-1.45l-1.658 1.119a6.063 6.063 0 0 0 1.621 1.62a5.963 5.963 0 0 0 2.148.903a6.035 6.035 0 0 0 3.542-.35a6.048 6.048 0 0 0 1.907-1.284c.272-.271.52-.571.734-.889l-1.658-1.119a4.147 4.147 0 0 1-.489.592z M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 2c2.953 0 5.531 1.613 6.918 4H5.082C6.469 5.613 9.047 4 12 4zm0 16c-4.411 0-8-3.589-8-8c0-.691.098-1.359.264-2H5v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1h.736c.166.641.264 1.309.264 2c0 4.411-3.589 8-8 8z"
        />
      </svg>
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        My Cool Project
      </span>
    </>
  }
/>
```

### Project link

Show a button that links to your project's homepage on the navbar. By default,
it links to Nextra's GitHub repository.

You can configure `projectLink` and `projectIcon` to customize the project link,
for example make it link to your GitLab repository:

![Project link](/assets/docs/project-link.png)

```jsx filename="app/layout.jsx"
<Navbar
  projectLink="https://gitlab.com/inkscape/inkscape"
  projectIcon={
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
      <path d="m231.9 169.8l-94.8 65.6a15.7 15.7 0 0 1-18.2 0l-94.8-65.6a16.1 16.1 0 0 1-6.4-17.3L45 50a12 12 0 0 1 22.9-1.1L88.5 104h79l20.6-55.1A12 12 0 0 1 211 50l27.3 102.5a16.1 16.1 0 0 1-6.4 17.3Z" />
    </svg>
  }
/>
```

### Chat link

Show a button that links to your project's forum or other social media on the
navbar.

You can configure `chatLink` and `chatIcon` to customize the chat link, for
example make it link to your Twitter account:

```jsx filename="app/layout.jsx"
<Navbar
  chatLink="https://twitter.com/shuding_"
  chatIcon={
    <svg width="24" height="24" viewBox="0 0 248 204">
      <path
        fill="currentColor"
        d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07a50.338 50.338 0 0 0 22.8-.87C27.8 117.2 10.85 96.5 10.85 72.46v-.64a50.18 50.18 0 0 0 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71a143.333 143.333 0 0 0 104.08 52.76 50.532 50.532 0 0 1 14.61-48.25c20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26a50.69 50.69 0 0 1-22.2 27.93c10.01-1.18 19.79-3.86 29-7.95a102.594 102.594 0 0 1-25.2 26.16z"
      />
    </svg>
  }
/>
```

### Menu and custom links

Check out [Page Configuration](/docs/docs-theme/page-configuration#navbar-items)
to learn how to add custom menus or links to the navbar.

<ToggleVisibilitySection element="`<Navbar>`" property="navbar" />



================================================
FILE: docs/app/docs/docs-theme/built-ins/not-found/page.mdx
================================================
---
sidebarTitle: NotFoundPage
---

# NotFoundPage Component

Options to configure report of broken link on not found page.

## Props

<APIDocs componentName="NotFoundPage" packageName="nextra-theme-docs" />

## Example

```jsx filename="app/not-found.jsx"
import { NotFoundPage } from 'nextra-theme-docs'

export default function NotFound() {
  return (
    <NotFoundPage content="Submit an issue" labels="broken-link">
      <h1>The page is not found</h1>
    </NotFoundPage>
  )
}
```



================================================
FILE: docs/app/docs/docs-theme/start/page.mdx
================================================
---
sidebarTitle: Get Started
icon: ChevronRightIcon
---

import InstallNextraTheme from '@components/install-nextra-theme.mdx'
import ReadyToGo from '@components/ready-to-go.mdx'

import { Steps } from 'nextra/components'

# Docs Theme

Nextra Docs Theme is a theme that includes almost everything you need to build a
modern documentation website. It includes:

- a top navigation bar
- a search bar
- a pages sidebar
- a table of contents (TOC)
- and other built-in components

> [!TIP]
>
> This website itself is built with the Nextra Docs Theme.

## Start as a New Project

<Steps>
### Install

To create a Nextra Docs site manually, you have to install **Next.js**,
**React**, **Nextra**, and **Nextra Docs Theme**. In your project directory, run
the following command to install the dependencies:

```sh npm2yarn
npm i next react react-dom nextra nextra-theme-docs
```

> [!NOTE]
>
> If you already have Next.js installed in your project, you only need to
> install `nextra` and `nextra-theme-docs` as the add-ons.

<InstallNextraTheme />

```jsx filename="app/layout.jsx"
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}

const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>
const navbar = (
  <Navbar
    logo={<b>Nextra</b>}
    // ... Your additional navbar options
  />
)
const footer = <Footer>MIT {new Date().getFullYear()} © Nextra.</Footer>

export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
```

<ReadyToGo />

</Steps>

See the [File Conventions](/docs/file-conventions) for more details on
organizing your documentation structure, and check out the
[Layout Component](/docs/docs-theme/built-ins/layout) for configuring the docs
site's theme.



================================================
FILE: docs/app/docs/file-conventions/page.mdx
================================================
---
asIndexPage: true
description:
  Nextra's File Conventions guide details the structure and organization of
  files and directories within a Nextra project, including the use of
  `page.mdx`, `_meta.js`, and `mdx-components.js` files, as well as the
  `content` and `src` directories.
---

import { FileIcon, FolderIcon, MdxIcon } from 'nextra/icons'
import { OverviewPage } from '../../_components/overview-page'

# File Conventions

<OverviewPage
  filePath={metadata.filePath}
  icons={{ FileIcon, FolderIcon, MdxIcon }}
/>



================================================
FILE: docs/app/docs/file-conventions/content-directory/page.mdx
================================================
---
icon: FolderIcon
sidebarTitle: content
description:
  The `content` directory in Nextra allows you to organize your Markdown files
  without adhering to the `page` filename convention, simplifying the migration
  from Next.js `pages` router.
---

import fs from 'node:fs/promises'
import { compileMdx } from 'nextra/compile'
import { FileTree, Steps } from 'nextra/components'
import { MDXRemote } from 'nextra/mdx-remote'

export async function MDXPathPage() {
  const filename = '[[...mdxPath]]/page.jsx'
  const rawMdx = `~~~jsx filename="${filename}" showLineNumbers
${(await fs.readFile(`../examples/docs/src/app/docs/${filename}`, 'utf8')).trimEnd()}
~~~`
  const rawJs = await compileMdx(rawMdx, { defaultShowCopyCode: true })
  return <MDXRemote compiledSource={rawJs} />
}

# `content` Directory

The `content` directory is designed to:

1. Migrate your existing Next.js `pages` router with minimal changes, you just
   need to rename your `pages` directory to `content`.
1. Avoid having `page` filename convention, e.g. `app/configuration/page.mdx` ->
   `content/configuration.mdx`

## Setup

<Steps>

### Create your first MDX page as `content/index.mdx`:

```mdx filename="content/index.mdx"
# Welcome to Nextra

Hello, world!
```

> [!TIP]
>
> You can keep `content` directory in root of your project, or in
> [`src` directory](./src-directory).

### Set `contentDirBasePath` option in `next.config` file (_optional_)

If you want to serve your content from a different path, you can set
`contentDirBasePath` option:

```js filename="next.config.mjs" {4}
import nextra from 'nextra'

const withNextra = nextra({
  contentDirBasePath: '/docs' // Or even nested e.g. `/docs/advanced`
})
```

### Add `[[...mdxPath]]/page.jsx` file

Place this file in `app` directory with the following content:

<MDXPathPage />

you should get the following structure:

<FileTree>
  <FileTree.Folder name="app" open>
    <FileTree.File name="layout.jsx" />
    <FileTree.Folder name="[[...mdxPath]]" open active>
      <FileTree.File name="page.jsx" active />
    </FileTree.Folder>
  </FileTree.Folder>
  <FileTree.Folder name="content" open>
    <FileTree.File name="index.mdx" />
  </FileTree.Folder>
  <FileTree.File name="next.config.js" />
  <FileTree.File name="package.json" />
</FileTree>

> [!TIP]
>
> Consider the single catch-all route `[[...mdxPath]]/page.jsx` as a gateway to
> your `content` directory.
>
> If you set `contentDirBasePath` option in `next.config` file, you should put
> `[[...mdxPath]]/page.jsx` in the corresponding directory.

### You are ready to go!

> [!NOTE]
>
> Many existing solutions such as
> [Refreshing the Next.js App Router When Your Markdown Content Changes](https://steveruiz.me/posts/nextjs-refresh-content)
> rely on extra dependencies like `concurrently` and `ws`. These approaches
> include
> [Dan Abramov workaround with `<AutoRefresh>` component and dev web socket server](https://github.com/hashicorp/next-remote-watch/issues/42#issuecomment-1794052655).
>
> Nextra's `content` directory delivers a streamlined solution right out of the
> box:
>
> - you don't need to install unnecessary dependencies
> - you don't need to restart your server on changes in `content` directory
> - hot reloading works out of the box
> - you can use `import` statements in MDX files and
>   [static images](/docs/guide/image#static-image) works as well
>
> Checkout Nextra's
> [docs website](https://github.com/shuding/nextra/tree/main/examples/docs) and
> [i18n website example](https://github.com/shuding/nextra/tree/main/examples/swr-site).

</Steps>



================================================
FILE: docs/app/docs/file-conventions/mdx-components-file/page.mdx
================================================
---
icon: MdxIcon
sidebarTitle: mdx-components.js
description:
  The `mdx-components` file in Nextra is essential for customizing styles via
  the `useMDXComponents` function, allowing you to define and override MDX
  components globally.
---

# `mdx-components.js` File

The `mdx-components` file is **required**, you use it to customize styles via
`useMDXComponents` function.

## Example

The `mdx-components.js` file must export
[a single function named `useMDXComponents`](/api/usemdxcomponents).

```ts filename="mdx-components.js"
import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs' // nextra-theme-blog or your custom theme

// Get the default MDX components
const themeComponents = getThemeComponents()

// Merge components
export function useMDXComponents(components) {
  return {
    ...themeComponents,
    ...components
  }
}
```

## Errors

### Module not found: Can't resolve `'next-mdx-import-source-file'`

To fix this, update the `turbopack.resolveAlias` section in your `next.config`
file:

> [!NOTE]
>
> - If you're using Next.js < 15.3, use `experimental.turbopack.resolveAlias`
> - If you're using Next.js ≥ 15.3, use `turbopack.resolveAlias`

```diff filename="next.config.mjs"
import nextra from 'nextra'

const withNextra = nextra()

export default withNextra({
+ turbopack: {
+   resolveAlias: {
+     // Path to your `mdx-components` file with extension
+     'next-mdx-import-source-file': './src/mdx-components.tsx'
+   }
+ }
})
```

> [!TIP]
>
> - You can keep `mdx-components` file in root of your project, or in
>   [`src` directory](./src-directory).
> - The `.js`, `.jsx`, or `.tsx` file extensions can be used for
>   `mdx-components` file.
> - When importing `useMDXComponents`, alias it as `getMDXComponents` to avoid a
>   false positive error from the ESLint React Hooks plugin.
>
> ```bash filename="react-hooks/rules-of-hooks"
> React Hook "useMDXComponents" cannot be called at the top level.
> React Hooks must be called in a React function component or a custom React Hook function.
> ```



================================================
FILE: docs/app/docs/file-conventions/meta-file/page.mdx
================================================
---
icon: FileIcon
sidebarTitle: _meta.js
description:
  The `_meta` file in Nextra allows you to customize page sidebar titles, order,
  and theme visibility, enhancing site organization and user experience.
---

import { ContentAndAppFileTee } from 'components/content-and-app-file-tree'
import { Video } from 'components/video'
import { FileTree } from 'nextra/components'
import { generateTsFromZod } from 'nextra/tsdoc'
import { pageThemeSchema } from 'private-next-root-dir/../packages/nextra/dist/server/schemas'

export function Block({ children }) {
  return (
    <div className="flex gap-2 *:last:w-full *:last:min-w-0 max-lg:flex-wrap">
      {children}
    </div>
  )
}

# `_meta.js` File

In Nextra, the site and individual page structure can be configured via the
co-located `_meta` files. Those configurations affect the overall layout of your
Nextra theme, especially the navigation bar and the sidebar:

<figure>
  <>![Example of Nextra Theme Docs](/assets/routing@1x.png)</>
  {/* prettier-ignore */}
  <figcaption>Example: [Nextra Docs Theme](/docs/docs-theme) has sidebar and navbar generated automatically from Markdown files.</figcaption>
</figure>

{/* It's very common to customize each page's title, rather than just relying on filenames. Having a page titled "Index" lacks clarity. It is preferable to assign a meaningful title that accurately represents the content, such as "Home". */}
{/* That's where `_meta` files comes in. You can have an `_meta` file in each directory, and it will be used to override the default configuration of each page. */}

## Organizing files

Nextra allows you to organize files in the following ways:

- **In Next.js'
  [`app` directory](https://nextjs.org/docs/app/getting-started/project-structure#top-level-folders):**<br />Nextra
  gathers all `page` files, including
  [`page.md` and `page.mdx` files](/docs/file-conventions/page-file) as well as
  `_meta` files.

- **In Nextra's
  [`content` directory](/docs/file-conventions/content-directory):**<br/>Nextra
  collects all `.md` and `.mdx` files, along with `_meta` files.

Below the same file-based routing structure is represented for `content` and
`app`-only directories:

<ContentAndAppFileTee>
  <FileTree.Folder name="about" defaultOpen>
    <FileTree.File name="_meta.js" active />
    <FileTree.File name="index.mdx" />
    <FileTree.File name="legal.md" />
  </FileTree.Folder>
  <FileTree.File name="_meta.js" active />
  <FileTree.File name="contact.md" />
  <FileTree.File name="index.mdx" />
</ContentAndAppFileTee>

> [!NOTE]
>
> You can combine both organizational ways for your project:
>
> - [x] the `content` directory with `.mdx` files
> - [x] the `app` directory with `page` files

### `pageMap` structure

Afterward, Nextra generates a `pageMap` array containing information about your
entire site's routes and directories structure. Features such as the navigation
bar and sidebar can be generated based on the `pageMap` information.

The generated `pageMap` will be:

```jsonc filename="pageMap" copy=false
[
  // content/_meta.js
  { "data": {} },
  {
    // content/index.mdx
    "name": "index",
    "route": "/",
    "title": "Index",
    "frontMatter": {}
  },
  {
    // content/contact.md
    "name": "contact",
    "route": "/contact",
    "title": "Contact",
    "frontMatter": {}
  },
  {
    // content/about
    "name": "about",
    "route": "/about",
    "title": "About",
    "children": [
      // content/about/_meta.js
      { "data": {} },
      {
        // content/about/index.mdx
        "name": "index",
        "route": "/about",
        "title": "Index",
        "frontMatter": {}
      },
      {
        // content/about/legal.md
        "name": "legal",
        "route": "/about/legal",
        "title": "Legal",
        "frontMatter": {}
      }
    ]
  }
]
```

And the global `pageMap` will be imported to each page by Nextra. Then,
configured theme will render the actual UI with that `pageMap`.

## API

The title and order of a page shown in the sidebar/navbar can be configured in
the `_meta` file as key-value pairs.

```ts filename="_meta.ts"
import type { MetaRecord } from 'nextra'

/**
 * type MetaRecordValue =
 *  | TitleSchema
 *  | PageItemSchema
 *  | SeparatorSchema
 *  | MenuSchema
 *
 * type MetaRecord = Record<string, MetaRecordValue>
 **/
const meta: MetaRecord = {
  // ...
}

export default meta
```

### `title` type

When specifying a `title` in `_meta` file, you can define it as either a simple
string or a JSX element.

```ts copy=false
type TitleSchema = string | ReactElement
```

For the below file structure:

<ContentAndAppFileTee className="shrink-0">
  <FileTree.File name="_meta.js" active />
  <FileTree.File name="about.mdx" />
  <FileTree.File name="contact.mdx" />
  <FileTree.File name="index.mdx" />
</ContentAndAppFileTee>

The following `_meta` file defines pages titles:

```jsx filename="_meta.jsx"
import { GitHubIcon } from 'nextra/icons'

export default {
  index: 'My Homepage',
  // You can use JSX elements to change the look of titles in the sidebar, e.g. insert icons
  contact: (
    <Italic className="my-class">
      <GitHubIcon height="20" />
      Contact Us
    </Italic>
  ),
  about: {
    // Alternatively, you can set title with `title` property
    title: 'About Us'
    // ... and provide extra configurations
  }
}

// Custom component for italicized text
function Italic({ children, ...props }) {
  return <i {...props}>{children}</i>
}
```

### Pages

In `_meta` file you can define how the pages are shown in the sidebar, e.g. for
the following file structure:

<Block>
<ContentAndAppFileTee className='shrink-0'>
  <FileTree.File name="_meta.js" active />
  <FileTree.File name="about.mdx" />
  <FileTree.File name="contact.mdx" />
  <FileTree.File name="index.mdx" />
</ContentAndAppFileTee>
```js filename="_meta.js" copy=false
export default {
  index: 'My Homepage',
  contact: 'Contact Us',
  about: 'About Us'
}
```
</Block>

> [!NOTE]
>
> If any routes are not listed in the `_meta` file, they will be appended to the
> end of the sidebar and sorted alphabetically (except for `index` key which
> comes first if it's not specified in `_meta` file).

```ts
type PageItemSchema = {
  type: 'page' | 'doc' // @default 'doc'
  display: 'normal' | 'hidden' | 'children' // @default 'normal'
  title?: TitleSchema
  theme?: PageThemeSchema
}
```

#### `type: 'page'` option

By defining a top-level page or folder as `type: 'page'{:js}`, it will be shown
as a special page on the navigation bar, instead of the sidebar. With this
feature, you can have multiple "sub docs", and special pages or links such as
"Contact Us" that are always visible.

For example, you can have 2 docs folders `frameworks` and `fruits` in your
project. In your top-level `_meta` file, you can set everything as a page,
instead of a normal sidebar item:

<Block>
<ContentAndAppFileTee className='shrink-0'>
  <FileTree.Folder name="frameworks" defaultOpen active>
    <FileTree.File name="react.mdx" />
    <FileTree.File name="svelte.mdx" />
    <FileTree.File name="vue.mdx" />
  </FileTree.Folder>
  <FileTree.Folder name="fruits" defaultOpen active>
    <FileTree.File name="apple.mdx" />
    <FileTree.File name="banana.mdx" />
  </FileTree.Folder>
  <FileTree.File name="_meta.js" active />
  <FileTree.File name="about.mdx" />
  <FileTree.File name="index.mdx" />
</ContentAndAppFileTee>
```js filename="_meta.js" copy=false {4,8,12,16}
export default {
  index: {
    title: 'Home',
    type: 'page'
  },
  frameworks: {
    title: 'Frameworks',
    type: 'page'
  },
  fruits: {
    title: 'Fruits',
    type: 'page'
  },
  about: {
    title: 'About',
    type: 'page'
  }
}
```
</Block>

And it will look like this:

<figure>
  <Video src="/assets/docs/sub-docs.mp4" />
  {/* prettier-ignore */}
  <figcaption>[Live example on StackBlitz](https://stackblitz.com/edit/nextra-2-docs-eszspq?file=pages%2F_meta.js)</figcaption>
</figure>

> [!TIP]
>
> You can also hide links like `Home` from the navbar with the
> [`display: 'hidden'{:js}`](#display-hidden-option) option.
>
> You can have external links in the navbar, similar to the
> [links section](#links):
>
> ```js filename="_meta.js" {4-5}
> export default {
>   contact: {
>     title: 'Contact Us',
>     type: 'page',
>     href: 'https://example.com/contact'
>   }
> }
> ```

#### `display: 'hidden'` option

By default, all MDX routes in the filesystem will be shown on the sidebar. But
you can hide a specific pages or folders by using the `display: 'hidden'{:ts}`
configuration:

```js filename="_meta.js" {3}
export default {
  contact: {
    display: 'hidden'
  }
}
```

> [!NOTE]
>
> The page will still be accessible via the `/contact` URL, but it will not be
> shown in the sidebar.

#### `theme` option

You can configure the theme for each page using the `theme` option. For example,
you can disable or enable specific components for specific pages:

```js filename="_meta.js" {4}
export default {
  about: {
    theme: {
      sidebar: false
    }
  }
}
```

> [!WARNING]
>
> This option will be inherited by all child pages if set to a folder.

<APIDocs
  code={`type $ = ${generateTsFromZod(pageThemeSchema)}
export default $`}
/>

##### Layouts

By default, each page has `layout: 'default'{:js}` in their theme config, which
is the default behavior. You might want to render some page with the full
container width and height, but keep all the other styles. You can use the
`'full'{:js}` layout to do that:

```js filename="_meta.js" {4}
export default {
  about: {
    theme: {
      layout: 'full'
    }
  }
}
```

##### Typesetting

The `typesetting` option controls typesetting details like font features,
heading styles and components like `<li>` and `<code>`. There are
`'default'{:js}` and `'article'{:js}` typesettings available in the docs theme.

The default one is suitable for most cases like documentation, but you can use
the `'article'{:js}` typesetting to make it look like an elegant article page:

<figure>
```js filename="_meta.js" {4}
export default {
  about: {
    theme: {
      typesetting: 'article'
    }
  }
}
```
  <figcaption>[Live example on StackBlitz](https://stackblitz.com/edit/nextra-2-docs-hg77h3?file=pages%2F_meta.js,pages%2Findex.mdx)</figcaption>
</figure>
### Folders

Folders can be configured in the same way as pages.

For example, the following top-level `_meta` file contains the meta information
for the top-level pages and folders.<br/> The nested `_meta` file contains the
meta information for pages in the same folder:

<Block>
<ContentAndAppFileTee className='shrink-0'>
  <FileTree.Folder name="fruits" defaultOpen>
    <FileTree.File name="_meta.js" active />
    <FileTree.File name="apple.mdx" />
    <FileTree.File name="banana.mdx" />
  </FileTree.Folder>
  <FileTree.File name="_meta.js" active />
  <FileTree.File name="about.mdx" />
  <FileTree.File name="contact.mdx" />
  <FileTree.File name="index.mdx" />
</ContentAndAppFileTee>
<div className='mt-6'>
```js filename="_meta.js" copy=false
export default {
  index: 'My Homepage',
  contact: 'Contact Us',
  fruits: 'Delicious Fruits',
  about: 'About Us'
}
```
```js filename="fruits/_meta.js" copy=false
export default {
  apple: 'Apple',
  banana: 'Banana'
}
```
</div>
</Block>

> [!NOTE]
>
> You can move directories around without having to change the `_meta` file
> since information for pages are grouped together in directories.

#### With `/index` page

To create a folder with an index page, add `asIndexPage: true{:js}` to its front
matter.

For example, to create a `/fruits` route, setting `asIndexPage: true{:js}` tells
Nextra that `/fruits` is a folder with an index page. Clicking the folder in the
sidebar will expand it and display the MDX page.

<Block>
<ContentAndAppFileTee className="shrink-0">
  <FileTree.Folder name="fruits" defaultOpen active>
    <FileTree.File name="_meta.js" />
    <FileTree.File name="apple.mdx" />
    <FileTree.File name="banana.mdx" />
    <FileTree.File name="index.mdx" active />
  </FileTree.Folder>
  <FileTree.File name="_meta.js" />
  <FileTree.File name="about.mdx" />
  <FileTree.File name="contact.mdx" />
  <FileTree.File name="index.mdx" />
</ContentAndAppFileTee>
```mdx filename="content/fruits/index.mdx or app/fruits/page.mdx" copy=false {4}
---
title: All Fruits
sidebarTitle: 🍒 Fruits
asIndexPage: true
---
```

</Block>

### Links

```ts
type LinkSchema = {
  href: string
  title?: TitleSchema
}
```

You can add external links to the sidebar by adding an item with `href` in
`_meta` file:

```js filename="_meta.js" {2-5}
export default {
  github_link: {
    title: 'Nextra',
    href: 'https://github.com/shuding/nextra'
  }
}
```

> [!TIP]
>
> You can use this option to link to relative internal links too.

### Separators

```ts
type SeparatorSchema = {
  type: 'separator'
  title?: TitleSchema
}
```

You can use a "placeholder" item with `type: 'separator'{:js}` to create a
separator line between items in the sidebar:

```js filename="_meta.js" {3-4}
export default {
  '###': {
    type: 'separator',
    title: 'My Items' // Title is optional
  }
}
```

### Menus

You can also add menus to the navbar using `type: 'menu'{:js}` and the `items`
option:

<figure>
  <>![Navbar menu](/assets/docs/menu.png)</>
  {/* prettier-ignore */}
  <figcaption>[Live example on StackBlitz](https://stackblitz.com/edit/nextra-2-docs-2qopvp?file=pages%2F_meta.js)</figcaption>
</figure>

```ts
type MenuItemSchema =
  | TitleSchema
  | { title: TitleSchema }
  | (LinkSchema & { type?: 'page' | 'doc' })
  | SeparatorSchema

type MenuSchema = {
  type: 'menu'
  title?: TitleSchema
  items: Record<string, MenuItemSchema>
}
```

```js filename="_meta.js"
export default {
  company: {
    title: 'Company',
    type: 'menu',
    items: {
      about: {
        title: 'About',
        href: '/about'
      },
      contact: {
        title: 'Contact Us',
        href: 'mailto:hi@example.com'
      }
    }
  }
}
```

### Fallbacks

In the [`type: 'page'{:js}` option](#type-page-option) above, we have to define
the `type: 'page'{:js}` option for every page. To make it easier, you can use
the `'*'` key to define the fallback configuration for all items in this folder:

```js filename="_meta.js" {2-4}
export default {
  '*': {
    type: 'page'
  },
  index: 'Home',
  frameworks: 'Frameworks',
  fruits: 'Fruits',
  about: 'About'
}
```

They are equivalent where all items have `type: 'page'{:js}` set.

### `_meta.global` file

You can also define all your pages in a single `_meta` file, suffixed with
`.global`. The API remains the same as for folder-specific `_meta` files, with 1
exception: **folder items must include an `items` field**.

For the following structure, you might use the following `_meta` files:

<Block>

<ContentAndAppFileTee className='shrink-0'>
  <FileTree.Folder name="fruits" open>
    <FileTree.File name="_meta.js" active />
    <FileTree.File name="apple.mdx" />
    <FileTree.File name="banana.mdx" />
  </FileTree.Folder>
  <FileTree.File name="_meta.js" active />
  <FileTree.File name="index.mdx" />
</ContentAndAppFileTee>
<div className='mt-6'>
```js filename="_meta.js" copy=false
export default {
  fruits: {
    type: 'page',
    title: '✨ Fruits'
  }
}
```
```js filename="fruits/_meta.js" copy=false
export default {
  apple: '🍎 Apple',
  banana: '🍌 BaNaNa'
}
```
</div>
</Block>

With single `_meta.global` file it can be defined as below:

```js filename="_meta.global.js" copy=false
export default {
  fruits: {
    type: 'page',
    title: '✨ Fruits',
    items: {
      apple: '🍎 Apple',
      banana: '🍌 BaNaNa'
    }
  }
}
```

> [!WARNING]
>
> You can't use both `_meta.global` and `_meta` files in your project.

## Good to know

### Sorting pages

You can use ESLint's built-in `sort-keys` rule, append
`/* eslint sort-keys: error */` comment at the top of your `_meta` file, and you
will receive ESLint's errors about incorrect order.

### Type of `_meta` keys

The type of your `_meta` keys should always **be a string** and **not a number**
because
[numbers are always ordered first](https://dev.to/frehner/the-order-of-js-object-keys-458d)
in JavaScript objects.

For example, consider the following:

```js filename="_meta.js" copy=false
export default {
  foo: '',
  1992_10_21: '',
  1: ''
}
```

will be converted to:

{/* prettier-ignore */}
```js filename="_meta.js" copy=false
export default {
  '1': '',
  '19921021': '',
  foo: ''
}
```

> [!TIP]
>
> The `.js`, `.jsx`, or `.tsx` file extensions can be used for `_meta` file.



================================================
FILE: docs/app/docs/file-conventions/page-file/page.mdx
================================================
---
icon: FileIcon
sidebarTitle: page.mdx
description:
  The `page.mdx` file in Nextra is a special Next.js App Router convention file
  that allows you to define UI unique to a route. By default, `.js`, `.jsx`, or
  `.tsx` file extensions can be used for `page`, and Nextra enhances them with
  `.md` and `.mdx` extensions.
---

import { FileTree } from 'nextra/components'

# `page.mdx` File

[`page` file](https://nextjs.org/docs/app/api-reference/file-conventions/page)
is a special
[Next.js App Router convention file](https://nextjs.org/docs/app/getting-started/project-structure#routing-files)
which allows you to define UI that is unique to a route:

<FileTree>
  <FileTree.Folder name="app" open>
    <FileTree.File name="layout.jsx" />
    <FileTree.File name="page.jsx" active />
    <FileTree.Folder name="docs" open>
      <FileTree.File name="page.mdx" active />
      <FileTree.Folder name="getting-started" open>
        <FileTree.File name="page.mdx" active />
      </FileTree.Folder>
    </FileTree.Folder>
  </FileTree.Folder>
</FileTree>

> [!TIP]
>
> By default, the `.js`, `.jsx`, or `.tsx` file extensions can be used for
> `page`.<br/> Nextra enhance them with `.md` and `.mdx` extensions.



================================================
FILE: docs/app/docs/file-conventions/src-directory/page.mdx
================================================
---
icon: FolderIcon
sidebarTitle: src
description:
  The `src` directory in Nextra allows you to organize your application code
  separately from project configuration files, enhancing code structure and
  maintainability.
---

import { FileTree } from 'nextra/components'

# `src` Directory

As an alternative to having the special Nextra `content` directory and
`mdx-components` file in the root of your project, Nextra also supports the
common pattern of placing application code under the `src` directory.

This separates application code from project configuration files which mostly
live in the root of a project, which is preferred by some individuals and teams.

To use the `src` directory, move the `content` directory and `mdx-components`
file to `src/content` or `src/mdx-components` respectively.

export const nextConfigPackageJson = (
  <>
    <FileTree.File name="next.config.js" />
    <FileTree.File name="package.json" />
  </>
)

export const folders = (
  <>
    <FileTree.Folder name="app" open>
      <FileTree.Folder name="[[...mdxPath]]" open>
        <FileTree.File name="page.jsx" />
      </FileTree.Folder>
      <FileTree.File name="layout.jsx" />
    </FileTree.Folder>
    <FileTree.Folder name="content" open active>
      <FileTree.File name="index.mdx" active />
    </FileTree.Folder>
    <FileTree.File name="mdx-components.js" active />
  </>
)

<FileTree>
  **Without `src` directory**
  <FileTree.Folder name="your-project" open>
    {folders}
    {nextConfigPackageJson}
  </FileTree.Folder>
</FileTree>

<FileTree>
  **With `src` directory**
  <FileTree.Folder name="your-project" open>
    <FileTree.Folder name="src" open active>
      {folders}
    </FileTree.Folder>
    {nextConfigPackageJson}
  </FileTree.Folder>
</FileTree>



================================================
FILE: docs/app/docs/guide/page.mdx
================================================
---
asIndexPage: true
---

import {
  BrushIcon,
  GlobeIcon,
  LightningIcon,
  PictureIcon,
  StarsIcon
} from '@components/icons'
import { InformationCircleIcon, LinkIcon, MarkdownIcon } from 'nextra/icons'
import { OverviewPage } from '../../_components/overview-page'

# Guide

The following features are configured via the Next.js configuration and are
available in all themes.

<OverviewPage
  filePath={metadata.filePath}
  icons={{
    MarkdownIcon,
    StarsIcon,
    LinkIcon,
    PictureIcon,
    LightningIcon,
    GlobeIcon,
    BrushIcon,
    InformationCircleIcon
  }}
/>



================================================
FILE: docs/app/docs/guide/custom-css/page.mdx
================================================
---
sidebarTitle: Custom CSS
icon: BrushIcon
---

# Custom CSS Support

Nextra is 100% compatible with the
[built-in CSS support of Next.js](https://nextjs.org/docs/basic-features/built-in-css-support),
including `.css`, `.module.css`, and Sass (`.scss`, `.sass`, `.module.scss`,
`.module.sass`) files.

For example, consider the following stylesheet named `styles.css`:

```css filename="styles.css"
body {
  font-family:
    'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial',
    sans-serif;
  padding: 20px 20px 60px;
  max-width: 680px;
  margin: 0 auto;
}
```

To apply your global styles, import your CSS file in the root layout file:

```jsx filename="app/layout.jsx"
import '../path/to/your/styles.css'

export default async function RootLayout({ children }) {
  // ... Your layout logic here
}
```

For more information on how to use CSS in Next.js, check out the
[Next.js CSS Support documentation](https://nextjs.org/docs/basic-features/built-in-css-support).



================================================
FILE: docs/app/docs/guide/github-alert-syntax/page.mdx
================================================
---
icon: InformationCircleIcon
---

# GitHub Alert Syntax

`nextra-theme-docs` and `nextra-theme-blog` support replacing
[GitHub alert syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts)
with `<Callout>` component for `.md`/`.mdx` files.

## Usage

```md filename="Markdown"
> [!NOTE]
>
> Useful information that users should know, even when skimming content.

> [!TIP]
>
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
>
> Key information users need to know to achieve their goal.

> [!WARNING]
>
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
>
> Advises about risks or negative outcomes of certain actions.
```

## Example

> [!NOTE]
>
> Useful information that users should know, even when skimming content.

> [!TIP]
>
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
>
> Key information users need to know to achieve their goal.

> [!WARNING]
>
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
>
> Advises about risks or negative outcomes of certain actions.

## Usage with your own theme

If you want to benefit this feature with your own theme and your own `<Callout>`
component:

import { Steps } from 'nextra/components'

<Steps>

### Create a `<Blockquote>` component

To create a `<Blockquote>` component, start by importing `withGitHubAlert` from
`nextra/components`. You should then create the `<Blockquote>` component by
invoking the `withGitHubAlert` function.

The first argument should be a React HOC component that handles the GitHub alert
syntax, and the second argument should be your standard `<blockquote>`
component.

The `type` prop can be one of the following:
`'note' | 'tip' | 'important' | 'warning' | 'caution'{:ts}`.

```jsx
import { withGitHubAlert } from 'nextra/components'

const Blockquote = withGitHubAlert(({ type, ...props }) => {
  return <MyCalloutComponent type={type} {...props} />
}, MyBlockquoteComponent)
```

### Provide `<Blockquote>` to `useMDXComponents`

To make the `<Blockquote>` component available, you should integrate it into the
`useMDXComponents` function:

```jsx filename="mdx-components.jsx"
export function useMDXComponents(components) {
  return {
    blockquote: Blockquote,
    ...components
  }
}
```

</Steps>



================================================
FILE: docs/app/docs/guide/i18n/page.mdx
================================================
---
icon: GlobeIcon
---

import { ExampleCode } from '@components/example-code'
import { Steps } from 'nextra/components'

# Next.js I18n

> [!WARNING]
>
> This feature is only available in `nextra-theme-docs`.

Nextra supports
[Next.js Internationalized Routing](https://nextjs.org/docs/advanced-features/i18n-routing)
out of the box. These docs explain how to configure and use it.

<Steps>
## Add i18n config

To add multi-language pages to your Nextra application, you need to config
`i18n` in `next.config.mjs` first:

```js filename="next.config.mjs" {8-11}
import nextra from 'nextra'

const withNextra = nextra({
  // ... other Nextra config options
})

export default withNextra({
  i18n: {
    locales: ['en', 'zh', 'de'],
    defaultLocale: 'en'
  }
})
```

> [!NOTE]
>
> You can use any format of
> [UTS Locale Identifiers](https://www.unicode.org/reports/tr35/tr35-59/tr35.html#Identifiers)
> for defining your locales in the `next.config` file, e.g. language with region
> format `en-US` (English as spoken in the United States).

## Configure the docs theme

Add the `i18n` option to your `theme.config.jsx` to configure the language
dropdown:

```js filename="theme.config.jsx"
i18n: [
  { locale: 'en', name: 'English' },
  { locale: 'zh', name: '中文' },
  { locale: 'de', name: 'Deutsch' },
  { locale: 'ar', name: 'العربية', direction: 'rtl' }
]
```

## Automatically detect and redirect to user-selected language (_optional_)

You can automatically detect the user's preferred language and redirect them to
the corresponding version of the site. To achieve this, create a `middleware.ts`
or `middleware.js` file in the root of your project and export Nextra's
middleware function from `nextra/locales`:

<ExampleCode example="swr-site" filePath="middleware.ts" metadata="{1}" />

> [!WARNING]
>
> This approach will not work for i18n sites that are statically exported with
> `output: 'export'` in `nextConfig`.

## Custom 404 page (_optional_)

You can have a custom `not-found.jsx` with translations for an i18n website that
uses a shared theme layout. For guidance on implementing this, you can check out
the
[SWR i18n example](https://github.com/shuding/nextra/blob/c9d0ffc8687644401412b8adc34af220cccddf82/examples/swr-site/app/%5Blang%5D/not-found.ts).

</Steps>



================================================
FILE: docs/app/docs/guide/image/page.mdx
================================================
---
icon: PictureIcon
---

# Next.js Image

The standard way to use
[Next.js Image](https://nextjs.org/docs/basic-features/image-optimization)
inside MDX is to directly import the component:

```mdx filename="MDX"
import Image from 'next/image'

<Image src="/demo.png" alt="Hello" width={500} height={500} />
```

## Static image

> [!NOTE]
>
> This feature is enabled via `staticImage: true` in the Nextra config by
> default.

Nextra supports automatically optimizing your static image imports with the
Markdown syntax. You do not need to specify the width and height of the image,
just use the `![]()` Markdown syntax:

```md filename="Markdown"
![Hello](/demo.png)
```

This loads the `demo.png` file inside the `public` folder, and automatically
wraps it with Next.js `<Image>`.

> [!TIP]
>
> You can also use `![](../public/demo.png)` to load the image from a relative
> path, if you don't want to host it via `public`.

With Next.js Image, there will be no layout shift, and a beautiful blurry
placeholder will be shown by default when loading the images:

![Nextra](/opengraph-image.jpeg)

## Image zoom

> [!NOTE]
>
> The image zoom feature is enabled globally by default.

In the default configuration, if you want to use this feature, simply insert
images using `![]()` Markdown syntax.

### Disable image zoom

For `nextra-docs-theme` and `nextra-blog-theme`, you can disable image zoom by
replacing the `img` component used in MDX.

```jsx filename="theme.config.jsx"
import { Image } from 'nextra/components'

export default {
  // ... your other configurations
  components: {
    img: props => <Image {...props} />
  }
}
```

### Enable/disable image zoom for specific images

When zoom is **disabled globally**, but you want to enable it for specific
images, you can do so by using the `<ImageZoom>` component:

```mdx
import { ImageZoom } from 'nextra/components'

<ImageZoom src="/demo.png" />
```

When zoom is **enabled globally**, and you want to disable zoom for a specific
image, you can simply use the `<Image>` component:

```mdx
import { Image } from 'nextra/components'

<Image src="/demo.png" />
```



================================================
FILE: docs/app/docs/guide/link/page.mdx
================================================
---
icon: LinkIcon
---

# Next.js Link

All relative Markdown links are automatically converted into
[Next.js links](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating).
This means that the target page will be prefetched. When you click on a link,
the page will be loaded on the client-side like a
[Single-Page Application (SPA)](https://en.wikipedia.org/wiki/Single-page_application),
without making a full page load. For example:

```md filename="Markdown"
Click [here](/about) to read more.
```

Will be equivalent to:

```mdx filename="MDX"
import Link from 'next/link'

Click <Link href="/about">here</Link> to read more.
```

This feature makes navigation between Nextra pages fast and seamless.



================================================
FILE: docs/app/docs/guide/markdown/_counter.tsx
================================================
'use client'

import type { FC, ReactNode } from 'react'
import { useState } from 'react'

export const Counter: FC<{ children: ReactNode }> = ({ children }) => {
  const [count, setCount] = useState(0)
  return (
    <button onClick={() => setCount(prev => prev + 1)}>
      {children}
      {count}
    </button>
  )
}



================================================
FILE: docs/app/docs/guide/markdown/page.mdx
================================================
---
icon: MarkdownIcon
---

import { Shadow } from '@components/shadow'
import { Counter } from './_counter'

# Markdown

## MDX

With Nextra, all your `.mdx` files under the `content` directory will be
rendered with [MDX](https://mdxjs.com/about), it's an advanced Markdown format
with React component support.

For example, you can use import and use React components inside your MDX files
like this:

```mdx filename="MDX"
## Hello MDX

import { useState } from 'react'

export function Counter({ children }) {
  const [count, setCount] = useState(0)
  return (
    <button onClick={() => setCount(prev => prev + 1)}>
      {children}
      {count}
    </button>
  )
}

<Counter>**Clicks**: </Counter>
```

Generates:

<Shadow mode="open" className="nextra-border mt-6 rounded-xl border p-4">
  <h2>Hello MDX</h2>
  <Counter>**Clicks**: </Counter>
</Shadow>

Besides basic MDX, Nextra also has some advanced Markdown features built-in.

## GitHub Flavored Markdown

[GFM](https://github.github.com/gfm) is an extension of Markdown, created by
GitHub, that adds support for strikethrough, task lists, tables, and more.

### Strikethrough

~~removed~~

```md filename="Markdown"
~~removed~~
```

### Task list

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

```md filename="Markdown"
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
```

### Table

| Syntax        | Description |   Test Text |
| :------------ | :---------: | ----------: |
| Header        |    Title    | Here's this |
| Paragraph     |    Text     |    And more |
| Strikethrough |             |    ~~Text~~ |

```md filename="Markdown"
| Syntax        | Description |   Test Text |
| :------------ | :---------: | ----------: |
| Header        |    Title    | Here's this |
| Paragraph     |    Text     |    And more |
| Strikethrough |             |    ~~Text~~ |
```

### Autolinks

Visit https://nextjs.org.

```md
Visit https://nextjs.org.
```

### Custom heading id

You can specify custom heading id using the format `## My heading [#custom-id]`.
For example:

```md filename="Markdown"
## Long heading about Nextra [#about-nextra]
```

In this example, `#about-nextra` will be used as the heading link, replacing the
default `#long-heading-about-nextra`.



================================================
FILE: docs/app/docs/guide/search/page.mdx
================================================
import { Steps, Tabs } from 'nextra/components'

# Search Engine

Nextra includes a full-page search feature that makes it easy for users to find
relevant content across your entire documentation site.

> [!TIP]
>
> Check the
> [migration guide](https://the-guild.dev/blog/nextra-4#new-search-engine--pagefind)
> for more information.

## Setup

Nextra integrates with [Pagefind](https://pagefind.app), a static search library
that indexes your HTML files and provides lightning-fast, client-side full-text
search — all with no server required.

<Steps>
### Install `pagefind` as a dev dependency

```sh npm2yarn
npm i -D pagefind
```

### Add a `postbuild` script

Pagefind indexes `.html` files, so the indexing must happen **after building**
your application.

Add a `postbuild` script to your `package.json`:

<Tabs items={['Server builds', 'Static exports']}>
  <Tabs.Tab>
    ```json filename="package.json"
    "scripts": {
      "postbuild": "pagefind --site .next/server/app --output-path public/_pagefind"
    }
    ```
  </Tabs.Tab>
  <Tabs.Tab>
    ```json filename="package.json"
    "scripts": {
      "postbuild": "pagefind --site .next/server/app --output-path out/_pagefind"
    }
    ```
  </Tabs.Tab>
</Tabs>

### Ignore generated files

Add `_pagefind/` to your `.gitignore` file to avoid committing generated index
files.

### Verify indexing output

After building and running the `postbuild` script, check that a `_pagefind/`
directory exists in `public/` or `out/`. Start your app and test the search bar
to confirm everything is working.

</Steps>

## Configuration

Search is enabled by default. You can disable it entirely by setting
`search: false{:js}` in your `next.config.mjs` file:

```js filename="next.config.mjs" {4}
import nextra from 'nextra'

const withNextra = nextra({
  search: false
})
export default withNextra()
```

To disable code block indexing while keeping search enabled set
`search: { codeblocks: false }{:js}`:

```js filename="next.config.mjs" {4}
import nextra from 'nextra'

const withNextra = nextra({
  search: { codeblocks: false }
})
export default withNextra()
```



================================================
FILE: docs/app/docs/guide/ssg/page.mdx
================================================
---
icon: LightningIcon
---

import { compileMdx } from 'nextra/compile'
import { Callout } from 'nextra/components'
import { MDXRemote } from 'nextra/mdx-remote'

# Next.js Static Rendering

[Static Rendering](https://nextjs.org/docs/app/building-your-application/rendering/server-components#static-rendering-default)
is default server rendering strategy, where routes are rendered at **build
time** or in the background after
[data revalidation](https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration).
The result is cached and can be distributed via a
[Content Delivery Network (CDN)](https://developer.mozilla.org/docs/Glossary/CDN)
for optimal performance.

Static rendering is ideal for routes with non-personalized data that can be
determined at build time, such as blog posts or product pages.

<SSGPage />

export async function SSGPage() {
  const starsComponent = `{/* Via async components */}
export async function Stars() {
  const response = await fetch('https://api.github.com/repos/shuding/nextra')
  const repo = await response.json()
  const stars = repo.stargazers_count
  return <b>{stars}</b>
}

{/* Via async functions */}
export async function getUpdatedAt() {
  const response = await fetch('https://api.github.com/repos/shuding/nextra')
  const repo = await response.json()
  const updatedAt = repo.updated_at
  return new Date(updatedAt).toLocaleDateString()
}

<Callout emoji="🏆">
  Nextra has <Stars /> stars on GitHub!

  Last repository update _{await getUpdatedAt()}_.
</Callout>`
  const mdx = `${starsComponent}

The number above was generated at build time via MDX server components. With
[Incremental Static Regeneration](https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration)
enabled, it will be kept up to date.

## Example

Here's the MDX code for the example above:

~~~mdx filename="MDX"
${starsComponent}
~~~
`
  const rawJs = await compileMdx(mdx)
  return <MDXRemote compiledSource={rawJs} components={{ Callout }} />
}



================================================
FILE: docs/app/docs/guide/static-exports/page.mdx
================================================
import { Steps } from 'nextra/components'

# Static Exports

Export your pages statically, and deploy with [Nginx](https://nginx.org),
[GitHub Pages](https://pages.github.com) and more.

## Getting started

<Steps>

### Configuration

To enable a static export, update the options in `next.config.mjs` file as
follows:

```js filename="next.config.mjs" {7-10}
import nextra from 'nextra'

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true // mandatory, otherwise won't export
  }
  // Optional: Change the output directory `out` -> `dist`
  // distDir: "build"
}
const withNextra = nextra({
  // ... other Nextra config options
})

export default withNextra(nextConfig)
```

### Update `postbuild` script

Update the Pagefind [search engine setup](./search#add-a-postbuild-script) to
set the correct output path:

```json filename="package.json"
"scripts": {
  "postbuild": "pagefind --site .next/server/app --output-path out/_pagefind"
}
```

### Building

Run the `build` command according to your package manager:

```sh npm2yarn
npm run build
```

By default, static export will be stored in `out` directory in the root of your
project.

For more in detail documentation for static export visit
[Next.js docs](https://nextjs.org/docs/app/building-your-application/deploying/static-exports).

</Steps>



================================================
FILE: docs/app/docs/guide/syntax-highlighting/_dynamic-code.tsx
================================================
'use client'

import { Button } from 'nextra/components'
import type { FC, ReactNode } from 'react'
import { useEffect, useRef } from 'react'

export const DynamicCode: FC<{ children: ReactNode }> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null!)
  const tokenRef = useRef<HTMLSpanElement>(undefined)
  // Find the corresponding token from the DOM
  useEffect(() => {
    tokenRef.current = [
      ...ref.current.querySelectorAll<HTMLSpanElement>('code > span > span')
    ].find(el => el.textContent === '1')
  }, [])
  return (
    <>
      <div ref={ref} className="mt-6">
        {children}
      </div>
      <div className="mt-3 flex justify-center gap-3 text-sm">
        <Button
          variant="outline"
          onClick={() => {
            const token = tokenRef.current!
            const prev = token.textContent!
            token.textContent = String((+prev || 0) + 1)
          }}
        >
          Increase the number
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            tokenRef.current!.textContent = '1 + 1'
          }}
        >
          Change to `1 + 1`
        </Button>
      </div>
    </>
  )
}



================================================
FILE: docs/app/docs/guide/syntax-highlighting/page.mdx
================================================
---
icon: StarsIcon
---

import { OptionTable } from 'components/_table'
import { compileMdx } from 'nextra/compile'
import { MDXRemote } from 'nextra/mdx-remote'

# Syntax Highlighting

Nextra uses [Shiki](https://shiki.style) to do syntax highlighting at build
time. It's very reliable and performant. For example, adding this in your
Markdown file:

````md copy=false filename="Markdown"
```js
console.log('hello, world')
```
````

Results in:

```js copy=false
console.log('hello, world')
```

## Features

### Inlined code

Inlined syntax highlighting like `let x = 1{:jsx}` is also supported via the
`{:}` syntax:

```md copy=false filename="Markdown"
Inlined syntax highlighting is also supported `let x = 1{:jsx}` via:
```

### Highlighting lines

You can highlight specific lines of code by adding a `{}` attribute to the code
block:

````md copy=false filename="Markdown"
```js {1,4-5}
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```
````

Result:

```js copy=false {1,4-5}
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```

### Highlighting substrings

You can highlight specific substrings of code by adding a `//` attribute to the
code block:

````md copy=false filename="Markdown"
```js /useState/
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```
````

```js copy=false /useState/
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```

You can highlight only a part of the occurrences of that substring by adding a
number it: `/str/1`, or multiple: `/str/1-3`, `/str/1,3`.

### Copy button

By adding a `copy` attribute, a copy button will be added to the code block when
the user hovers over it:

````md copy=false filename="Markdown"
```js copy
console.log('hello, world')
```
````

Renders:

```js copy
console.log('hello, world')
```

> [!NOTE]
>
>  You can enable this feature globally by setting `defaultShowCopyCode: true` in
>  your Nextra configuration (`next.config.mjs` file). Once it's enabled
>  globally, you can disable it via the `copy=false` attribute.

### Line numbers

You can add line numbers to your code blocks by adding a `showLineNumbers`
attribute:

````md copy=false filename="Markdown"
```js showLineNumbers
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```
````

Renders:

```js copy=false showLineNumbers
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```

### Filenames and titles

You can add a filename or a title to your code blocks by adding a `filename`
attribute:

````md copy=false filename="Markdown"
```js filename="example.js"
console.log('hello, world')
```
````

Renders:

```js copy=false filename="example.js"
console.log('hello, world')
```

### ANSI highlighting

You can highlight ANSI escape codes:

<ANSI />

export async function ANSI() {
  const rawAnsi = `\`\`\`ansi
[0m [0;32m✓[0m [0;2msrc/[0mindex[0;2m.test.ts (1)[0m
  [0;2m Test Files [0m [0;1;32m1 passed[0;98m (1)[0m
  [0;2m      Tests [0m [0;1;32m1 passed[0;98m (1)[0m
  [0;2m   Start at [0m 23:32:41
  [0;2m   Duration [0m 11ms
  [42;1;39;0m PASS [0;32m Waiting for file changes...[0m
         [0;2mpress [0;1mh[0;2m to show help, press [0;1mq[0;2m to quit
\`\`\``
  const rawJs = await compileMdx(`~~~md filename="Markdown"
${rawAnsi}
~~~

Renders:

${rawAnsi}
`)
  return <MDXRemote compiledSource={rawJs} />
}

## Supported languages

Check [this list](https://github.com/shikijs/shiki/blob/main/docs/languages.md)
for all supported languages.

{/* ## Customize the Theme */}

{/* Nextra uses CSS variables to define the colors for tokens. */}

## With dynamic content

Since syntax highlighting is done at build time, you can't use dynamic content
in your code blocks. However, since MDX is very powerful there is a workaround
via client JS. For example:

import { DynamicCode } from './_dynamic-code'

<DynamicCode>
```js copy=false filename="dynamic-code.js"
function hello() {
  const x = 2 + 3
  console.log(1)
}
```
</DynamicCode>

This workaround has a limitation that updated content won't be re-highlighted.
For example if we update the number to `1 + 1`, it will be incorrectly
highlighted.

Check out the
[code](https://github.com/shuding/nextra/blob/main/docs/app/docs/guide/syntax-highlighting/_dynamic-code.tsx)
to see how it works.

## Disable syntax highlighting

You can opt out of syntax highlighting for using one of your own. You can
disable syntax highlighting globally by setting `codeHighlight: false` in your
Nextra configuration (`next.config.mjs` file).

<OptionTable
  options={[
    [
      'codeHighlight',
      'boolean',
      'Enable or disable syntax highlighting. Defaults to `true`.'
    ]
  ]}
/>

## Custom grammar

Shiki accepts a
[VSCode TextMate Grammar](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide)
for syntax highlighting with custom language grammars.

You can provide these grammars by overriding the `getHighlighter` function in
`mdxOptions.rehypePrettyCodeOptions` option in your Nextra config inside
`next.config.mjs`:

```js copy=false filename="next.config.mjs" {13-18}
import { BUNDLED_LANGUAGES } from 'shiki'

nextra({
  // ... other Nextra config options
  mdxOptions: {
    rehypePrettyCodeOptions: {
      getHighlighter: options =>
        getHighlighter({
          ...options,
          langs: [
            ...BUNDLED_LANGUAGES,
            // custom grammar options, see the Shiki documentation for how to provide these options
            {
              id: 'my-lang',
              scopeName: 'source.my-lang',
              aliases: ['mylang'], // Along with id, aliases will be included in the allowed names you can use when writing Markdown
              path: '../../public/syntax/grammar.tmLanguage.json'
            }
          ]
        })
    }
  }
})
```

## Custom themes

Within `mdxOptions.rehypePrettyCodeOptions` you may also provide custom themes
instead of [relying on CSS Variables](/docs/guide/syntax-highlighting):

```js copy=false filename="next.config.mjs" {4}
nextra({
  // ... other Nextra config options
  mdxOptions: {
    rehypePrettyCodeOptions: {
      // VSCode theme or built-in Shiki theme, see Shiki documentation for more information
      theme: JSON.parse(
        readFileSync('./public/syntax/arctis_light.json', 'utf8')
      )
    }
  }
})
```

### Multiple themes (dark and light mode)

Pass your themes to `theme`, where the keys represent the color mode:

```js copy=false filename="next.config.mjs" {5-8}
nextra({
  // ... other Nextra config options
  mdxOptions: {
    rehypePrettyCodeOptions: {
      theme: {
        dark: 'nord',
        light: 'min-light'
      }
    }
  }
})
```



================================================
FILE: docs/app/docs/guide/turbopack/page.mdx
================================================
# Usage with Turbopack

To use [Turbopack](https://nextjs.org/docs/architecture/turbopack), simple
append the `--turbopack` flag to your development command:

```diff filename="package.json"
"scripts": {
-  "dev": "next dev"
+  "dev": "next dev --turbopack"
}
```

> [!NOTE]
>
> Without `--turbopack` flag Next.js under the hood uses
> [Webpack](https://github.com/webpack/webpack), written in JavaScript.

## Only serializable options are supported

For this moment only JSON serializable values can be passed in `nextra`
function. This mean that with Turbopack enabled you can't pass custom
`remarkPlugins`, `rehypePlugins` or `recmaPlugins` since they are functions.

The following options could be passed only without Turbopack or only while
building your app with `next build`
([since Turbopack isn't support `next build` for now](https://nextjs.org/docs/architecture/turbopack#unsupported-features)
and Webpack is used instead).

```js filename="next.config.js" {5-7}
import nextra from 'nextra'

const withNextra = nextra({
  mdxOptions: {
    remarkPlugins: [myRemarkPlugin],
    rehypePlugins: [myRehypePlugin],
    recmaPlugins: [myRecmaPlugin]
  }
})
```

If you try to pass them, you'll get an error from Turbopack:

```text copy=false
Error: loader nextra/loader for match "./{src/app,app}/**/page.{md,mdx}" does not have serializable options.
Ensure that options passed are plain JavaScript objects and values.
```


