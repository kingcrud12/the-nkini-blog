import { Montserrat } from 'next/font/google'
import Navbar from '@/components/Navbar';

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
      <body className={`${montserrat.className} bg-banner w-full bg-center bg-fixed bg-no-repeat bg-cover p-b-[300px] `}>
        <div className="w-full h-full pb-96 bg-black opacity-80 text-white bg-cover">
          <Navbar />
           {children}
        </div>
      </body>
    </html>
  );
}