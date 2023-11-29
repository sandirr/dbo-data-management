import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '@/components/NavigationBar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DBO Data Management',
  applicationName: 'DBO Data Management',
  description: 'DBO Data Management: Customer Management, Order Management, & Authentication Management',
  keywords: ['DBO', 'Data', 'Management', 'Customer', 'Order', 'Authentication'],
  creator: 'Andi Irsandi R',
  authors: [{name: 'Andi Irsandi R'}]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationBar/>
        {children}
      </body>
    </html>
  )
}
