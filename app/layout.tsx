import { Montserrat } from 'next/font/google'
import Navbar from '@/app/components/Navbar';

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'The nkini project',
  description: 'Embrace your legacy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <div>
           {children}
        </div>
      </body>
    </html>
  );
}