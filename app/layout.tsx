import '../styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ANKS Consulting — BA Training',
  description: 'Hands-on BA training, real case studies, and interview prep.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ background: '#f9fafb', color: '#111' }}>{children}</body>
    </html>
  );
}
