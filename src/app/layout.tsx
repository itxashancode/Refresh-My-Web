/* g:\RefreshMyWeb\src\app\layout.tsx */
import type { Metadata } from "next";
import { DM_Sans, Playfair_Display, Geist, Inter, Outfit, Geist_Mono, Bricolage_Grotesque } from "next/font/google";

import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

const dmSans = DM_Sans({ 
  subsets: ["latin"], 
  weight: ["400", "500", "700", "900"],
  variable: "--font-dm-sans" 
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400"],
  variable: "--font-playfair"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://refreshmyweb.com"),
  title: {
    default: "RefreshMyWeb | Elite Website Rebranding & Digital Transformation",
    template: "%s | RefreshMyWeb"
  },
  description: "Transform your dated online presence into a high-performance competitive advantage. We specialize in elite rebranding, modern rebuilding, and strategic maintenance for forward-thinking brands.",
  keywords: ["website rebranding", "modern web design", "digital transformation", "site maintenance", "UI/UX agency", "high-performance websites", "premium web design"],
  authors: [{ name: "RefreshMyWeb Team" }],
  creator: "RefreshMyWeb",
  publisher: "RefreshMyWeb",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://refreshmyweb.com",
    siteName: "RefreshMyWeb",
    title: "RefreshMyWeb | Elite Website Rebranding & Digital Transformation",
    description: "Transform your dated online presence into a high-performance competitive advantage. We specialize in elite rebranding, modern rebuilding, and strategic maintenance.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RefreshMyWeb - Digital Transformation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RefreshMyWeb | Elite Website Rebranding",
    description: "Transform your dated online presence into a high-performance competitive advantage.",
    images: ["/og-image.png"],
    creator: "@refreshmyweb",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-placeholder",
    yandex: "yandex-verification-placeholder",
    yahoo: "yahoo-verification-placeholder",
    other: {
      "msvalidate.01": "bing-verification-placeholder",
    },
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  }
};

import { Navbar, Footer } from "@/components/sections";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(dmSans.variable, playfair.variable, inter.variable, outfit.variable, geistMono.variable, bricolage.variable, "font-sans", geist.variable)} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'dark';
                  var root = document.documentElement;
                  if (theme === 'system') {
                    var dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    root.classList.add(dark ? 'dark' : 'light');
                  } else {
                    root.classList.add(theme);
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased font-sans">
        <ThemeProvider>
          <SmoothScroll>
            <Navbar />
            {children}
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
