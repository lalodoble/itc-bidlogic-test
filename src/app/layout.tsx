import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IT Crowd Backoffice',
  description: 'IT Crowd Backoffice Application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="itc">
      <head>
        {/* Unicons from CDN */}
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
} 