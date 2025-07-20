import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://next-app-i18n-starter.vercel.app';
  const date = new Date().toISOString();

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Next.js i18n Template - Multilingual Starter</title>
    <description>Professional Next.js 15 internationalization starter template with TypeScript, Tailwind CSS, and shadcn/ui. Features Arabic RTL support, 5 languages, and modern web development best practices.</description>
    <link>${baseUrl}</link>
    <language>en-us</language>
    <lastBuildDate>${date}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <managingEditor>contact@next-app-i18n-starter.vercel.app (Next.js i18n Template)</managingEditor>
    <webMaster>contact@next-app-i18n-starter.vercel.app (Next.js i18n Template)</webMaster>
    <category>Technology</category>
    <category>Web Development</category>
    <category>Next.js</category>
    <category>Internationalization</category>
    
    <item>
      <title>Next.js 15 i18n Template Launch</title>
      <description>A comprehensive internationalization starter template for Next.js 15 with TypeScript, Tailwind CSS, and multi-language support including Arabic RTL.</description>
      <link>${baseUrl}</link>
      <guid>${baseUrl}/announcement</guid>
      <pubDate>${date}</pubDate>
      <category>Release</category>
    </item>
    
    <item>
      <title>Features Overview</title>
      <description>Explore the powerful features of this Next.js i18n template including 5 language support, modern UI components, and SEO optimization.</description>
      <link>${baseUrl}/features</link>
      <guid>${baseUrl}/features</guid>
      <pubDate>${date}</pubDate>
      <category>Features</category>
    </item>
  </channel>
</rss>`;

  return new NextResponse(rssXml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  });
}