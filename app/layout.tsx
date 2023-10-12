import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./reset.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "NextJS Quiz App",
    description:
        "Quiz app with tests on different topics with different difficulties and different types",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
