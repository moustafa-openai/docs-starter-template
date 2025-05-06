import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import "nextra-theme-docs/style.css";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { fonts } from "./font/setup";
import "./globals.css";
import { NextraLayout } from "@/components/nextra-layout";

export type RootLayoutProps = {
  children: React.ReactNode;
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pageMap = await getPageMap(`/`);

  return (
    <html
      dir="ltr"
      className={cn(
        "antialiased",
        fonts.geistMono.variable,
        fonts.inter.variable
      )}
      suppressHydrationWarning
    >
      <Head
        // primary-color
        color={{
          hue: 143,
          saturation: 97,
          lightness: 54,
        }}
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <NextraLayout pageMap={pageMap}>{children}</NextraLayout>
        <Toaster />
      </body>
    </html>
  );
}
