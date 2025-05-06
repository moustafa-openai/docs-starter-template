"use client";

import { usePathname } from "next/navigation";
import { PageMapItem } from "nextra";
import { Layout } from "nextra-theme-docs";
import { Search } from "nextra/components";
import { Nav } from "./navbar";
export const NextraLayout = ({
  pageMap,
  children,
}: {
  pageMap: PageMapItem[];
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isReference = pathname.includes("/reference");
  return (
    <Layout
      search={<Search placeholder={"search docs"} />}
      navbar={
        <div className="flex  sticky top-0 z-30 bg-[var(--primary-bg)] flex-col">
          <Nav />
        </div>
      }
      pageMap={pageMap}
      nextThemes={{
        forcedTheme: "dark",
      }}
      toc={{
        title: "On This Page",
        extraContent: <div className="flex flex-col"></div>,
      }}
      sidebar={{
        autoCollapse: false,
        defaultMenuCollapseLevel: isReference ? 1 : 2,
      }}
      editLink
      feedback={{
        content: "",
      }}
    >
      {children}
    </Layout>
  );
};
