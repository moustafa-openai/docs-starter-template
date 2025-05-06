import path from "path";
import fs from "fs/promises";

function extractFrontMatter(content: string) {
  const frontMatterRegex = /^---\n([\s\S]*?)\n---/;
  const match = content.match(frontMatterRegex);
  if (!match) return {};

  const frontMatterStr = match[1];
  const result: Record<string, string> = {};

  const fields = ["title", "description"];
  fields.forEach((field) => {
    const match = frontMatterStr.match(new RegExp(`${field}:\\s*([^\n]+)`));
    if (match) {
      result[field] = match[1].trim().replace(/['"]|\\'/g, "");
    }
  });

  return result;
}

async function concatenateMDXDocs(sourceDir: string) {
  console.log(`Starting documentation generation from: ${sourceDir}`);

  // Validate source directory exists
  try {
    const stats = await fs.stat(sourceDir);
    if (!stats.isDirectory()) {
      throw new Error(`Source path ${sourceDir} is not a directory`);
    }
  } catch (error) {
    console.error(
      `Error accessing source directory: ${
        error instanceof Error ? error?.message : error
      }`
    );
    process.exit(1);
  }

  const outputDir = path.join(process.cwd(), "public");
  // Ensure output directory exists
  try {
    await fs.mkdir(outputDir, { recursive: true });
  } catch (error) {
    console.error(
      `Error creating output directory: ${
        error instanceof Error ? error?.message : error
      }`
    );
    process.exit(1);
  }

  const mdxFiles: Array<{
    path: string;
    content: string;
    title: string;
    description?: string;
  }> = [];

  async function processDirectory(dirPath: string) {
    try {
      const entries = await fs.readdir(dirPath, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);

        if (entry.isDirectory()) {
          if (!entry.name.startsWith(".") && entry.name !== "node_modules") {
            await processDirectory(fullPath);
          }
          continue;
        }

        if (!entry.name.endsWith(".mdx")) continue;

        try {
          const content = await fs.readFile(fullPath, "utf-8");
          const relativePath = path
            .relative(sourceDir, fullPath)
            .replaceAll("\\", "/");
          const frontMatter = extractFrontMatter(content);

          mdxFiles.push({
            path: relativePath,
            content,
            title: frontMatter.title || path.basename(relativePath, ".mdx"),
            description: frontMatter.description,
          });
        } catch (error) {
          console.error(
            `Error processing file ${fullPath}: ${
              error instanceof Error ? error?.message : error
            }`
          );
          // Continue processing other files
        }
      }
    } catch (error) {
      console.error(
        `Error reading directory ${dirPath}: ${
          error instanceof Error ? error?.message : error
        }`
      );
      throw error;
    }
  }

  try {
    // Process both English and Japanese directories
    const enDir = path.join(sourceDir, "src/content");

    await processDirectory(enDir);

    if (mdxFiles.length === 0) {
      console.warn("No MDX files found in the specified directories");
      return;
    }

    // Write full content with source URLs
    const fullContent = mdxFiles
      .map((file) => {
        const content = file.content;
        const languagePrefix = `[${file.path.split("/")[0].toUpperCase()}] `;

        // Find the position after the title (h1 or h2)
        const titleMatch = content.match(/^(#|##)\s+.*$/m);
        if (titleMatch) {
          const titleIndex = content.indexOf(titleMatch[0]);
          const beforeTitle = content.slice(
            0,
            titleIndex + titleMatch[0].length
          );
          const afterTitle = content.slice(titleIndex + titleMatch[0].length);
          return `${beforeTitle}\n${languagePrefix}Source: ${afterTitle}`;
        }

        // If no title found, add source URL after frontmatter if it exists
        const frontMatterMatch = content.match(/^---\n[\s\S]*?\n---/m);
        if (frontMatterMatch) {
          const frontMatterIndex = content.indexOf(frontMatterMatch[0]);
          const beforeFrontMatter = content.slice(
            0,
            frontMatterIndex + frontMatterMatch[0].length
          );
          const afterFrontMatter = content.slice(
            frontMatterIndex + frontMatterMatch[0].length
          );
          return `${beforeFrontMatter}\n${languagePrefix}Source: ${afterFrontMatter}`;
        }

        // If neither title nor frontmatter found, prepend source URL
        return `${languagePrefix}Source: \n\n${content}`;
      })
      .join("\n\n");

    await fs.writeFile(
      path.join(outputDir, "llms-full.txt"),
      fullContent,
      "utf-8"
    );
    console.log(`Generated llms-full.txt`);

    // Group files by language and parent directory
    const groupedFiles = mdxFiles.reduce((groups, file) => {
      const pagesIndex = file.path.indexOf("src/content/");
      if (pagesIndex === -1) {
        console.warn(
          `File ${file.path} is not under src/content/, skipping from index`
        );
        return groups;
      }

      // Get the first directory after 'src/content/'
      const pathAfterContent = file.path.slice(
        pagesIndex + "src/content/".length
      );
      const [language, firstDir] = pathAfterContent.split("/");

      const groupKey = `${language}/${firstDir}`;
      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }
      groups[groupKey].push(file);
      return groups;
    }, {} as Record<string, typeof mdxFiles>);

    // Load the project description from an external markdown file so that it can
    // be edited without touching the build script itself.
    const descriptionPath = path.join(process.cwd(), "project-description.md");

    let projectDescription: string;
    try {
      projectDescription = await fs.readFile(descriptionPath, "utf-8");
    } catch (error) {
      console.error(
        `Error reading project-description.md: ${
          error instanceof Error ? error?.message : error
        }`
      );
      console.warn(
        `Could not find project-description.md at ${descriptionPath}. ` +
          `Falling back to the default description.`
      );

      // Fallback description – identical to the previous inline value so that
      // behaviour stays the same if the file does not exist.
      projectDescription = [
        "# Project Documentation",
        "> This is an open-source TypeScript agent framework designed to provide the essential primitives for building AI applications. It enables developers to create AI agents with memory and tool-calling capabilities, implement deterministic LLM workflows, and leverage RAG for knowledge integration. With features like model routing, workflow graphs, and automated evals, this framework provides a complete toolkit for developing, testing, and deploying AI applications.",
        "",
        "This documentation covers everything from getting started to advanced features, APIs, and best practices for working with agent-based architectures.",
        "",
        "The documentation is organized into key sections:",
        "- **docs**: Core documentation covering concepts, features, and implementation details",
        "- **examples**: Practical examples and use cases demonstrating the framework's capabilities",
        "- **showcase**: A showcase of applications built using this framework",
        "",
        "Each section contains detailed markdown files that provide comprehensive information about the framework's features and how to use them effectively.",
      ].join("\n");
    }

    // Start the index with the project description. We will append section
    // groupings below.
    const indexContent: string[] = [projectDescription.trimEnd()];

    for (const [group, files] of Object.entries(groupedFiles)) {
      const [language, section] = group.split("/");
      indexContent.push(`\n## ${language.toUpperCase()} - ${section}`);
      for (const file of files) {
        indexContent.push(
          `- [${file.title}](${file.path})${
            file.description ? ": " + file.description : ""
          }`
        );
      }
    }

    try {
      await fs.writeFile(
        path.join(outputDir, "llms.txt"),
        indexContent.join("\n"),
        "utf-8"
      );
      console.log("Generated llms.txt");
    } catch (error) {
      console.error(
        `Error writing index file: ${
          error instanceof Error ? error?.message : error
        }`
      );
      throw error;
    }
  } catch (error) {
    console.error(
      "Fatal error during documentation generation:",
      error instanceof Error ? error?.message : error
    );
    process.exit(1);
  }
}

const docsDir = process.argv[2] || ".";
console.log(docsDir);

concatenateMDXDocs(docsDir).catch((error) => {
  console.error(
    "Unhandled error:",
    error instanceof Error ? error?.message : error
  );
  process.exit(1);
});
