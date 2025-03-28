import Link from "next/link";
import i18n from "@/i18n";

import '../i18n'; 
import { dir } from 'i18next';
import { languages } from '../i18nConfig';

export const metadata = {
  title: 'My App',
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ locale: lng }));
}







export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Event Archiver</title>
      </head>
      <body className="bg-gray-100">
        <header className="bg-white shadow">
          <div className="container mx-auto px-4 py-4 flex space-x-4">
            <Link href="/" className="text-blue-500 hover:underline">Home</Link>
            <Link href="/dashboard" className="text-blue-500 hover:underline">Dashboard</Link>
            <Link href="/admin" className="text-blue-500 hover:underline">Admin</Link>
            <Link href="/upload/1" className="text-blue-500 hover:underline">Upload</Link>
            <Link href="/event/sample-subdomain" className="text-blue-500 hover:underline">Event</Link>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
