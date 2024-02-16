import React, { type ReactNode, Suspense } from "react";
import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/react";

import { SpeedInsights } from "@vercel/speed-insights/next";
import ReactQueryProvider from "@/context/ReactQueryProvider";
import AuthProvider from "@/context/AuthProvider";
import NextUiProviderComponent from "@/context/NextUiProviderComponent";

import "./globals.css";
import "@smastrom/react-rating/style.css";

import dynamic from "next/dynamic";
import ServerIntlProvider from "@/context/i18nProvider";
import getIntl from "@/utils/intl";
import { EdgeStoreProvider } from "@/context/Edgestore";
const Navigation = dynamic(() => import("@/modules/navigation/Navigation"));
const Footer = dynamic(() => import("../../modules/footer"));
const BackgroundSwithcer = dynamic(
  () => import("@/components/BackgroundSwitcher/BackgroundSwithcer")
);

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const intl = await getIntl(params.locale);
  return (
    <html lang={intl.locale}>
      <body
        className={
          "flex min-h-[100dvh] flex-col bg-background [&>div:first-child]:flex [&>div:first-child]:min-h-[100dvh] [&>div:first-child]:flex-col"
        }
      >
        <NextUiProviderComponent>
          <ReactQueryProvider>
            <AuthProvider>
              <EdgeStoreProvider>
                <ServerIntlProvider messages={intl.messages} locale={intl.locale}>
                  <BackgroundSwithcer />
                  <Navigation />
                  {children}
                  <Suspense fallback={null}>
                    <Footer />
                  </Suspense>
                </ServerIntlProvider>
              </EdgeStoreProvider>
            </AuthProvider>
          </ReactQueryProvider>
        </NextUiProviderComponent>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

export function generateStaticParams(): Array<{ locale: string }> {
  const locales = ["en", "uk"];

  return locales.map((locale) => ({ locale }));
}

export const revalidate = 60;
