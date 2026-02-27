import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/Navbar";
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Gerador de Octavo Editorial',
  description: 'Gerador de cadernos octavos para diagramação manual',
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
      </body>
    </html>
  );
}