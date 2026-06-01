import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { siteTitle, description, keywords } from '@/data/config';

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const outfit = Outfit({
  variable: '--font-display',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: siteTitle,
  description: description,
  keywords: keywords.split(','),
  authors: [{ name: 'Moataz Mohammady', url: 'https://github.com/MoatazAbdAlmageed' }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://moatazabdalmageed.github.io/',
  },
  openGraph: {
    type: 'website',
    url: 'https://moatazabdalmageed.github.io/',
    title: siteTitle,
    description: description,
    images: [
      {
        url: 'https://moatazabdalmageed.github.io/assets/img/avatar.webp',
        width: 1200,
        height: 630,
        alt: 'Moataz Mohammady | Senior PHP & Laravel Developer',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="preconnect" href="https://avatars.githubusercontent.com" crossOrigin="anonymous" />
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZRQERKGW82"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZRQERKGW82');
          `}
        </Script>
        {/* FontAwesome style icons loaded asynchronously via non-blocking dynamic injection */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
                link.crossOrigin = 'anonymous';
                link.referrerPolicy = 'no-referrer';
                document.head.appendChild(link);
              })();
            `
          }}
        />
      </head>
      <body className="font-sans antialiased bg-slate-950 text-slate-100 min-h-screen selection:bg-orange-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
