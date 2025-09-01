import {NextIntlClientProvider} from 'next-intl';
import React from 'react';
import './globals.css';
import Navbar from "@/components/Navbar";

type Props = {
    children: React.ReactNode;
};

export default async function RootLayout({children}: Props) {
    return (
        <html>
            <body>
            <NextIntlClientProvider>
                <Navbar />
                <main className="pt-24">
                    {children}
                </main>
            </NextIntlClientProvider>
            </body>
        </html>
    );
}