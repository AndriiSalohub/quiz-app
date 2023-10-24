"use client";
import { useQuizStore } from "@/store/store";
import { FC } from "react";

const QuestionNumberHeading: FC = () => {
    const currentQuestion = useQuizStore(
        (state) => state.config.currentQuestion
    );
    return (
        <h2 className="lg:text-5xl text-3xl font-bold mt-10">
            Question Number{" "}
            <span className="text-blue-600">№{currentQuestion}</span>.
        </h2>
    );
};

export default QuestionNumberHeading;
