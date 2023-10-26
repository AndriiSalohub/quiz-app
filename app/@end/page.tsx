"use client";
import { Button } from "@/components/ui/button";
import { useQuizStore } from "@/store/store";
import { FC } from "react";

const EndPage: FC = () => {
    const { score, numberOfQuestions } = useQuizStore((state) => state.config);
    const restartTest = useQuizStore((state) => state.restartTest);
    return (
        <main className="flex flex-col items-center justify-center mt-10">
            <h2 className="lg:text-5xl text-3xl font-bold mt-10 text-blue-600">
                Good Job!
            </h2>
            <h3 className="text-xl mt-4">
                Your result: {score}/{numberOfQuestions}
            </h3>
            <p className="text-lg mt-3 text-center">
                I hope you enjoyed the test and had a good experience.
            </p>
            <Button
                className="hover:bg-blue-500 duration-300 ease-in-out hover:text-white mt-5 w-80"
                onClick={() => restartTest()}
            >
                Start Over
            </Button>
        </main>
    );
};

export default EndPage;
