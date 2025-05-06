# Getting Started

## 1. Copy the Env file

```bash
cp .env.example .env
```

## 2. Install Dependencies

```bash
pnpm install
```

## 3. Run the Dev Server

```bash
pnpm dev
```

The docs will be served on `localhost:3000/docs`.

---

## Search

Search is implemented with `pageFind` which indexes built `html` files. To get it to work, run:

```bash
pnpm build
pnpm dev
```

---

## Making Changes

The docs use [MDX](https://mdxjs.com/).

Adding new content requires:

- YAML frontmatter
- A navigation entry in a `meta.ts` file
- Content for the docs

Frontmatter looks like this. Title and description are mandatory.

```mdx
---
title: "Introduction | Docs"
description: "This is a TypeScript agent framework. It helps you build AI applications and features quickly. It gives you the set of primitives you need: workflows, agents, RAG, integrations, syncs and evals."
---
```

Navigation is defined in a relative `meta.ts` file. It modifies the title of the content in the sidebar:

```ts
const meta = {
  overview: "Overview",
};

export default meta;
```

### Components and Elements

This project is built on [Nextra](https://nextra.site/docs) and therefore uses custom components that Nextra provides, including `callouts`, `Tabs`, etc.

You can find the full list [here](https://nextra.site/docs/built-ins)

---

## Contribution Guidelines

**Finding Something to Work On:**

1. Check the open issues labeled 'documentation' or 'good first issue'.
2. Identify areas that are unclear, missing, or incorrect.

**Making Changes:**

1. Create a new branch for your changes (`git checkout -b my-docs-update`).
2. Make your desired edits to the documentation files (usually found in the `docs/en` directory).
3. Commit your changes with clear and concise messages.

**Style Guide:**

1. Ensure your writing is clear, concise, and uses consistent formatting.

**Submitting Changes:**

1. Push your branch to your fork (`git push origin my-docs-update`).
2. Open a Pull Request (PR) against the main repository's `main` branch.
3. Clearly describe the changes you've made in the PR description.

**Review Process:**

1. Maintainers will review your PR.
2. Address any feedback or requested changes.
3. Once approved, your changes will be merged.

We appreciate your contributions to improving our documentation.
