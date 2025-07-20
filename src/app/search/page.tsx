import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Search - Next.js i18n Template",
  description: "Search the Next.js i18n template documentation, features, and resources.",
  robots: {
    index: false,
    follow: false,
  },
};

function SearchContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Search</h1>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <input
            type="search"
            placeholder="Search documentation, features, and more..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Search
          </button>
        </div>
        <div className="text-gray-600">
          <p>Popular searches:</p>
          <ul className="mt-2 space-y-1">
            <li>• Getting started</li>
            <li>• Internationalization setup</li>
            <li>• TypeScript configuration</li>
            <li>• Deployment guide</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading search...</div>}>
      <SearchContent />
    </Suspense>
  );
}