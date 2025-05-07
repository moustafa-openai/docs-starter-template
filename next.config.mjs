/** @type {import('next').NextConfig} */
import nextra from "nextra";

const withNextra = nextra({
  search: {
    codeblocks: true,
  },
  mdxOptions: {
    rehypePrettyCodeOptions: {
      theme: {
        displayName: "Docs",
        name: "docs",
        semanticHighlighting: true,
        semanticTokenColors: {
          customLiteral: "#fff",
          newOperator: "#C586C0",
          numberLiteral: "#b5cea8",
          stringLiteral: "#fff",
        },
        tokenColors: [
          {
            scope: "constant",
            settings: {
              //green
              foreground: "#46f488",
            },
          },
          {
            scope: "string",
            settings: {
              //green
              foreground: "#46f488",
            },
          },
          {
            scope: ["comment", "punctuation.definition.comment"],
            //subtle gray
            settings: {
              foreground: "#939393",
            },
          },
          {
            scope: [
              "keyword",
              "storage.type",
              "support.type",
              "storage.type.interface",
              "entity.name.type.interface",
              "storage.modifier.async",
              "storage.type.async",
              "keyword.control.loop",
              "keyword.control.from",
              "keyword.control.flow",
              "entity.name.type.ts",
            ],
            settings: {
              //orange
              foreground: "#fa7b6a",
            },
          },
          {
            scope: "parameter",
            settings: {
              foreground: "#fa7b6a",
            },
          },
          {
            scope: ["function", "entity.name.function", "meta.function-call"],
            //purple
            settings: {
              foreground: "#d06bee",
            },
          },
          {
            scope: "string.expression",
            //green
            settings: {
              foreground: "#46f488",
            },
          },
          {
            scope: [
              "punctuation",
              "meta.brace",
              "meta.array",
              "punctuation.definition",
              "meta.import",
              "meta.object.member",
              "meta.object.literal",
              "variable.object.property",
              "meta.interface",
              "variable.other.constant",
              "variable.other.property",
              "variable.other.object",
              "variable.other.readwrite",
              "variable",
              "meta.statement.command.shell",
            ],
            //white
            settings: {
              foreground: "#fff",
            },
          },
          {
            scope: "token.link",
            settings: {
              foreground: "#fff",
            },
          },
        ],
        type: "dark",
      },
    },
  },
});


export default withNextra({
  trailingSlash: false,
})