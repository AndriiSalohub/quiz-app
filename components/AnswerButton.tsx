"use client";

import { cn } from "@/lib/utils";
import { FC } from "react";

interface IProps {
    text: string;
}

const AnswerButton: FC<IProps> = ({ text }) => {
    return (
        <button
            className={cn(
                "w-[40%] my-4 bg-white hover:bg-blue-500 duration-300 ease-in-out hover:text-white text-gray-800 font-semibold py-4 px-4 shadow-blue-200  rounded-lg shadow-2xl"
            )}
        >
            {text}
        </button>
    );
};

export default AnswerButton;
