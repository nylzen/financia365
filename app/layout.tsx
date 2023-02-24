import { Navbar } from '@/components';
import { Routes } from '@/models';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head />
      <body>
        <Navbar pathNames={[Routes.HOME]} />
        {children}
      </body>
    </html>
  );
}
