"use client";

import { useQuizStore } from "@/store/store";
import "@/styles/globals.css";
import "@/styles/reset.css";
import { Inter } from "next/font/google";
import { FC, ReactNode } from "react";

interface IProps {
    children: ReactNode;
    quiz: ReactNode;
    end: ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

const RootLayout: FC<IProps> = ({ children, quiz, end }) => {
    const status = useQuizStore((state) => state.config.status);
    const endQuiz = useQuizStore((state) => state.config.quizEnd);

    return (
        <html lang="en">
            <body className={inter.className}>
                {status && !endQuiz ? quiz : endQuiz && status ? end : children}
            </body>
        </html>
    );
};

export default RootLayout;
