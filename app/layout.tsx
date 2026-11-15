import "./globals.css";
import type { Metadata } from 'next';

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.eudemonia-almada.pt'), 
  title: 'Eudemonia Almada',
  description: 'Música. Comunidade. Inclusão. Eudemonia.',
  openGraph: {
    title: 'Eudemonia Almada',
    description: 'Música. Comunidade. Inclusão. Eudemonia.',
    url: 'https://www.eudemonia-almada.pt',
    siteName: 'Eudemonia',
    images: [
      {
        url: '/logo.png', // Resolves to https://yourdomain.com
        width: 1200,
        height: 1200,
        alt: 'eudemonia almada',
      },
    ],
    type: 'website',
  }
};
