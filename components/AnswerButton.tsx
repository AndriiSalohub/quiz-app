"use client";

import { cn } from "@/lib/utils";
import { FC } from "react";

interface IProps {
    answer: string;
    checkAnswer: (answer: string) => void;
    userAnswer: string;
}

const AnswerButton: FC<IProps> = ({ answer, checkAnswer, userAnswer }) => {
    return (
        <button
            className={cn(
                "w-[40%] my-4 bg-white sm:hover:bg-blue-500 active:bg-blue-500 duration-300 ease-in-out hover:text-white text-gray-800 font-semibold py-4 px-4 shadow-blue-200  rounded-lg shadow-2xl",
                {
                    "bg-blue-600": answer && answer === userAnswer,
                    "bg-white": answer && answer !== userAnswer,
                    "hover:bg-blue-500": answer && userAnswer === "",
                    "bg-red-500": userAnswer && answer && answer !== userAnswer,
                }
            )}
            onClick={() => checkAnswer(answer)}
        >
            {answer.replace(/&quot;/g, '"')}
        </button>
    );
};

export default AnswerButton;
