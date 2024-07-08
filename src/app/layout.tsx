import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Roboto_Mono, Space_Mono } from 'next/font/google'

const robotoMono = Roboto_Mono({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Tejas Jagtap',
    description: 'Portfolio site made using NextJS',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={robotoMono.className}>{children}</body>
        </html>
    )
}
