import { Navbar } from '@/components';
import { poppins } from '@/fonts/fonts';
import { Routes } from '@/models';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={poppins.className}>
      <head />
      <body>
        <Navbar
          pathNames={[
            Routes.HOME,
            Routes.QUIENES_SOMOS,
            Routes.SERVICIOS,
            Routes.CONTACTO,
          ]}
        />
        {children}
      </body>
    </html>
  );
}
