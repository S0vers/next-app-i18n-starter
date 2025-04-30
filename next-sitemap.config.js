/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://next-app-i18n-starter.vercel.app',
    generateRobotsTxt: true,
    changefreq: 'monthly',
    priority: 0.8,
    i18n: {
        locales: ['en', 'ar', 'zh', 'es', 'jp'],
        defaultLocale: 'en',
    },
};
