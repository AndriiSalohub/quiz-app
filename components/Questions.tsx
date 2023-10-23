"use client";

import { useQuizStore } from "@/store/store";
import { FC, useEffect, useState } from "react";
import AnswerButton from "./AnswerButton";
import NextButton from "./NextButton";

const Questions: FC = () => {
    const [questions, setQuestions] = useState<any>([]);

    const { numberOfQuestions, category, level, type } = useQuizStore(
        (state) => state.config
    );

    useEffect(() => {
        const getQuestions = async () => {
            const { results } = await (
                await fetch(
                    `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${
                        category.id
                    }&difficulty=${level.toLowerCase()}&type=${type.toLowerCase()}`
                )
            ).json();

            let shuffledQuestions = results.map((e: any) => {
                let value = [...e.incorrect_answers, e.correct_answer]
                    .map((value) => ({ value, sort: Math.random() }))
                    .sort((a, b) => a.sort - b.sort)
                    .map(({ value }) => value);
                e.answers = [...value];
                return e;
            });

            console.log(shuffledQuestions, "shuffeled");
            setQuestions([...shuffledQuestions]);
        };

        getQuestions();
    }, [category, type, level]);

    const handleNext = () => {
        let remainingQuestions = [...questions];
        remainingQuestions.shift();
        setQuestions([...remainingQuestions]);
    };

    console.log(questions);

    return (
        <section className="flex flex-col items-center justify-center p-10 w-[90%] shadow-2xl shadow-blue-200 rounded-lg">
            <h2 className="lg:text-3xl text-2xl font-bold text-blue-600 text-center">
                {questions[0]?.question}
            </h2>
            <div className="flex justify-evenly items-center w-full my-10 flex-wrap">
                {questions[0]?.answers.map((answer: string) => (
                    <AnswerButton key={answer} text={answer} />
                ))}
            </div>
            <NextButton handleNext={handleNext} />
        </section>
    );
};

export default Questions;
