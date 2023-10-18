import ReduxProvide from "@/redux/provider";
import "@/styles/globals.css";
import "@/styles/reset.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FC, ReactNode } from "react";

interface IProps {
    children: ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "NextJS Quiz App",
    description:
        "Quiz app with tests on different topics with different difficulties and different types",
};

const RootLayout: FC<IProps> = ({ children }) => {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ReduxProvide>{children}</ReduxProvide>
            </body>
        </html>
    );
};

export default RootLayout;
