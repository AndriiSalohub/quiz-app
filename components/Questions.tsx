"use client";

import { useQuizStore } from "@/store/store";
import { FC, useEffect, useState } from "react";
import AnswerButton from "./AnswerButton";
import NextButton from "./NextButton";

interface IQuestions {
    answers: string[];
    category: string;
    correct_answer: string;
    difficult: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

const Questions: FC = () => {
    const [questions, setQuestions] = useState<IQuestions[]>([]);
    const [userAnswer, setUserAnswer] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const { numberOfQuestions, category, level, type } = useQuizStore(
        (state) => state.config
    );

    const updateScore = useQuizStore((state) => state.updateScore);
    const updateCurrentQuestion = useQuizStore(
        (state) => state.updateCurrentQuestion
    );

    useEffect(() => {
        const getQuestions = async () => {
            setLoading(true);
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

            console.log(shuffledQuestions);
            setQuestions([...shuffledQuestions]);
            setLoading(false);
        };

        getQuestions();
    }, [category, type, level]);

    const handleNext = () => {
        let remainingQuestions = [...questions];
        remainingQuestions.shift();
        setQuestions([...remainingQuestions]);
        setUserAnswer("");
        updateCurrentQuestion();
    };

    const checkAnswer = (answer: string) => {
        if (answer === questions[0].correct_answer) {
            updateScore();
        }
        setUserAnswer(questions[0].correct_answer);
    };

    return (
        <section className="flex flex-col items-center justify-center p-10 w-[90%] shadow-2xl shadow-blue-200 rounded-lg">
            {loading && (
                <h3 className="lg:text-3xl text-2xl font-bold text-blue-600 text-center">
                    Loading...
                </h3>
            )}
            <h2 className="lg:text-3xl text-2xl font-bold text-blue-600 text-center">
                {questions[0]?.question.replace(/&quot;/g, '"')}
            </h2>
            <div className="flex justify-evenly items-center w-full my-10 flex-wrap">
                {questions[0]?.answers.map((answer: string) => (
                    <AnswerButton
                        key={answer}
                        answer={answer}
                        checkAnswer={checkAnswer}
                        userAnswer={userAnswer}
                    />
                ))}
            </div>
            <NextButton handleNext={handleNext} />
        </section>
    );
};

export default Questions;
