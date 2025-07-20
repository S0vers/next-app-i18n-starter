import { Metadata } from "next";

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  locale?: string;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  section?: string;
  tags?: string[];
}

const defaultSEO = {
  title: "Next.js 15 i18n Template - Multilingual Starter with TypeScript & Tailwind",
  description: "Professional Next.js 15 internationalization starter template with TypeScript, Tailwind CSS, and shadcn/ui. Features Arabic RTL support, 5 languages, and modern web development best practices for multilingual applications.",
  keywords: ["Next.js 15", "internationalization", "i18n", "multilingual", "TypeScript", "Tailwind CSS", "shadcn/ui", "Arabic RTL", "React", "starter template"],
  image: "/og-image.png",
  url: "https://next-app-i18n-starter.vercel.app",
  locale: "en",
  type: "website" as const,
};

export function generateSEOMetadata(props: SEOProps = {}): Metadata {
  const {
    title = defaultSEO.title,
    description = defaultSEO.description,
    keywords = defaultSEO.keywords,
    image = defaultSEO.image,
    url = defaultSEO.url,
    locale = defaultSEO.locale,
    type = defaultSEO.type,
    publishedTime,
    modifiedTime,
    authors = ["Sovers Tonmoy Pandey"],
    section,
    tags,
  } = props;

  const baseUrl = "https://next-app-i18n-starter.vercel.app";
  const fullImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;
  const fullUrl = url.startsWith('http') ? url : `${baseUrl}${url}`;

  const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: {
      default: title,
      template: `%s | Next.js i18n Template`,
    },
    description,
    keywords: keywords.join(", "),
    authors: authors.map(author => ({ name: author })),
    creator: "Sovers Tonmoy Pandey",
    publisher: "Next.js i18n Template",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    category: "Technology",
    openGraph: {
      type,
      siteName: "Next.js i18n Template",
      title,
      description,
      url: fullUrl,
      locale,
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: title,
          type: "image/png",
        },
      ],
      ...(type === "article" && {
        publishedTime,
        modifiedTime,
        authors,
        section,
        tags,
      }),
    },
    twitter: {
      card: "summary_large_image",
      site: "@s0ver5",
      creator: "@s0ver5",
      title,
      description,
      images: {
        url: fullImageUrl,
        alt: title,
      },
    },
    alternates: {
      canonical: fullUrl,
      languages: {
        en: `${baseUrl}/en`,
        ar: `${baseUrl}/ar`,
        zh: `${baseUrl}/zh`,
        es: `${baseUrl}/es`,
        ja: `${baseUrl}/jp`,
        "x-default": `${baseUrl}/en`,
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
  };

  return metadata;
}

export function generateStructuredData(props: SEOProps & { 
  type?: "WebSite" | "SoftwareApplication" | "Article" | "BreadcrumbList";
  breadcrumbs?: Array<{ name: string; url: string }>;
}) {
  const {
    title = defaultSEO.title,
    description = defaultSEO.description,
    url = defaultSEO.url,
    locale = defaultSEO.locale,
    type = "WebSite",
    publishedTime,
    modifiedTime,
    authors = ["Sovers Tonmoy Pandey"],
    breadcrumbs,
  } = props;

  const baseUrl = "https://next-app-i18n-starter.vercel.app";
  const fullUrl = url.startsWith('http') ? url : `${baseUrl}${url}`;

  switch (type) {
    case "WebSite":
      return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: title,
        description,
        url: fullUrl,
        inLanguage: locale,
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${baseUrl}/search?q={search_term_string}`,
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
      };

    case "SoftwareApplication":
      return {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: title,
        description,
        url: fullUrl,
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
      };

    case "Article":
      return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        url: fullUrl,
        datePublished: publishedTime,
        dateModified: modifiedTime || publishedTime,
        author: authors.map(author => ({
          "@type": "Person",
          name: author,
        })),
        publisher: {
          "@type": "Organization",
          name: "Next.js i18n Template",
          logo: {
            "@type": "ImageObject",
            url: `${baseUrl}/logo.png`,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": fullUrl,
        },
      };

    case "BreadcrumbList":
      return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs?.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`,
        })),
      };

    default:
      return null;
  }
}

export const structuredDataScript = (data: any) => ({
  type: "application/ld+json",
  dangerouslySetInnerHTML: { __html: JSON.stringify(data) },
});

// Common SEO configurations for different page types
export const seoConfigs = {
  home: {
    title: "Next.js 15 i18n Template - Multilingual Starter with TypeScript & Tailwind",
    description: "Professional Next.js 15 internationalization starter template with TypeScript, Tailwind CSS, and shadcn/ui. Features Arabic RTL support, 5 languages, and modern web development best practices.",
    keywords: ["Next.js 15", "internationalization", "i18n", "multilingual", "TypeScript", "Tailwind CSS", "shadcn/ui", "Arabic RTL"],
    url: "/",
  },
  features: {
    title: "Features - Next.js i18n Template",
    description: "Explore the powerful features of our Next.js i18n template including multi-language support, modern UI components, TypeScript integration, and SEO optimization.",
    keywords: ["Next.js features", "i18n features", "multilingual features", "TypeScript", "shadcn/ui", "RTL support"],
    url: "/features",
  },
  docs: {
    title: "Documentation - Next.js i18n Template",
    description: "Complete documentation for the Next.js i18n template. Learn how to customize, deploy, and extend your multilingual application.",
    keywords: ["Next.js documentation", "i18n docs", "multilingual setup", "TypeScript guide", "deployment guide"],
    url: "/docs",
  },
};