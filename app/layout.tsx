import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react'; // <-- Importação do Analytics
import './globals.css';

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
    <html lang="pt-BR">
      <body>
        {children}
        <Analytics /> {/* <-- O componente rodando invisível aqui */}
      </body>
    </html>
  );
}