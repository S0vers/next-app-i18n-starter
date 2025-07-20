import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import { WebSite, WithContext } from "schema-dts";
import { jsonLdScriptProps } from "react-schemaorg";
import { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../globals.css";

import { routing } from "@/i18n/routing";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="light dark" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Next.js i18n Template" />
        <meta name="application-name" content="Next.js i18n Template" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Language alternates for better SEO */}
        <link
          rel="alternate"
          hrefLang="en"
          href="https://next-app-i18n-starter.vercel.app/en"
        />
        <link
          rel="alternate"
          hrefLang="ar"
          href="https://next-app-i18n-starter.vercel.app/ar"
        />
        <link
          rel="alternate"
          hrefLang="es"
          href="https://next-app-i18n-starter.vercel.app/es"
        />
        <link
          rel="alternate"
          hrefLang="ja"
          href="https://next-app-i18n-starter.vercel.app/jp"
        />
        <link
          rel="alternate"
          hrefLang="zh"
          href="https://next-app-i18n-starter.vercel.app/zh"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://next-app-i18n-starter.vercel.app/en"
        />
        
        <meta name="keywords" content={t("keywords")} />
        <meta name="author" content="Sovers Tonmoy Pandey" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Enhanced structured data */}
        <script
          {...jsonLdScriptProps<WithContext<WebSite>>({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: t("title"),
            description: t("description"),
            url: "https://next-app-i18n-starter.vercel.app",
            inLanguage: locale,
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://next-app-i18n-starter.vercel.app/search?q={search_term_string}",
              },
              "query-input": "required name=search_term_string",
            },
            publisher: {
              "@type": "Person",
              name: "Sovers Tonmoy Pandey",
              url: "https://github.com/S0vers",
            },
            sameAs: [
              "https://github.com/S0vers/next-app-i18n-starter",
              "https://vercel.com/templates/next.js/next-app-i18n-starter",
            ],
          })}
        />
        
        {/* Additional schema for SoftwareApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Next.js i18n Template",
              description: t("description"),
              url: "https://next-app-i18n-starter.vercel.app",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Any",
              permissions: "Public",
              isAccessibleForFree: true,
              author: {
                "@type": "Person",
                name: "Sovers Tonmoy Pandey",
                url: "https://github.com/S0vers",
              },
              codeRepository: "https://github.com/S0vers/next-app-i18n-starter",
              programmingLanguage: ["TypeScript", "JavaScript", "React"],
              runtimePlatform: "Node.js",
              targetProduct: {
                "@type": "SoftwareApplication",
                name: "Next.js",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  const baseUrl = "https://next-app-i18n-starter.vercel.app";
  const canonicalUrl = `${baseUrl}/${locale}`;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: t("title"),
      template: `%s | ${t("title")}`,
    },
    description: t("description"),
    keywords: t("keywords"),
    authors: [
      {
        name: "Sovers Tonmoy Pandey",
        url: "https://github.com/S0vers",
      },
    ],
    creator: "Sovers Tonmoy Pandey",
    publisher: "Sovers Tonmoy Pandey",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    verification: {
      google: "sVYBYfSJfXdBca3QoqsZtD6lsWVH6sk02RCH4YAbcm8",
    },
    category: "Technology",
    classification: "Web Development Template",
    openGraph: {
      type: "website",
      siteName: "Next.js i18n Template",
      title: t("title"),
      description: t("description"),
      url: canonicalUrl,
      locale: locale,
      alternateLocale: ["en", "ar", "zh", "es", "ja"],
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: t("title"),
          type: "image/png",
        },
        {
          url: `${baseUrl}/og-image-square.png`,
          width: 1200,
          height: 1200,
          alt: t("title"),
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@s0ver5",
      creator: "@s0ver5",
      title: t("title"),
      description: t("description"),
      images: {
        url: `${baseUrl}/og-image.png`,
        alt: t("title"),
      },
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/en`,
        ar: `${baseUrl}/ar`,
        zh: `${baseUrl}/zh`,
        es: `${baseUrl}/es`,
        ja: `${baseUrl}/jp`,
        "x-default": `${baseUrl}/en`,
      },
      types: {
        "application/rss+xml": [
          {
            url: `${baseUrl}/rss.xml`,
            title: `${t("title")} RSS Feed`,
          },
        ],
      },
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: [
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon.ico", sizes: "any" },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
      shortcut: "/favicon.ico",
    },
    manifest: "/manifest.json",
    other: {
      "msapplication-TileColor": "#000000",
      "msapplication-config": "/browserconfig.xml",
    },
  };
}
