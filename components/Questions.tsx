"use client";

import { useQuizStore } from "@/store/store";
import { FC, useEffect } from "react";

const Questions: FC = () => {
    const { numberOfQuestions, category, level, type } = useQuizStore(
        (state) => state.config
    );

    console.log(
        `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category.id}&difficulty=${level}&type=${type}`
    );

    useEffect(() => {
        const getQuestions = async () => {
            const results = await (
                await fetch(
                    `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${
                        category.id
                    }&difficulty=${level.toLowerCase()}&type=${type.toLowerCase()}`
                )
            ).json();
        };

        getQuestions();
    }, []);
    return (
        <section className="flex flex-col items-center justify-center p-10 w-[90%] shadow-2xl shadow-blue-200 rounded-lg">
            <h2 className="lg:text-3xl text-2xl font-bold text-blue-600">
                How old he was whe he...
            </h2>
        </section>
    );
};

export default Questions;
