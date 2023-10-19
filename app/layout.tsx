"use client";

import { useQuizStore } from "@/store/store";
import "@/styles/globals.css";
import "@/styles/reset.css";
import { Inter } from "next/font/google";
import { FC, ReactNode } from "react";

interface IProps {
    children: ReactNode;
    quiz: ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

const RootLayout: FC<IProps> = ({ children, quiz }) => {
    const status = useQuizStore((state) => state.config.status);

    return (
        <html lang="en">
            <body className={inter.className}>{status ? quiz : children}</body>
        </html>
    );
};

export default RootLayout;
