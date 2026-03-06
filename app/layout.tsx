import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { VercelToolbar } from '@vercel/toolbar/next';
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/Navbar";
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://octavo.corrupiola.com.br'),
  title: {
    default: 'Gerador de Octavo Editorial',
    template: '%s | Gerador Octavo'
  },
  description: 'Gerador de cadernos octavos para diagramação manual',
  keywords: ['editoração', 'diagramação', 'octavo', 'fanzine', 'corrupiola', 'autopublicação', 'livromanual'],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://octavo.corrupiola.com.br',
    title: 'Gerador de Octavo Editorial',
    description: 'Gerador de cadernos octavos para diagramação manual',
    siteName: 'Gerador Octavo',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gerador de Octavo Editorial',
    description: 'Gerador de cadernos octavos para diagramação manual',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans antialiased text-neutral-900 bg-[#FAFAFA] selection:bg-neutral-200">
        <TooltipProvider>
          <Navbar />
          {children}
        </TooltipProvider>
        <Analytics />
        <VercelToolbar />
      </body>
    </html>
  );
}