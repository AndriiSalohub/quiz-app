import Questions from "@/components/Questions";
import { FC } from "react";

const Quiz: FC = () => {
    return (
        <main className="flex flex-col items-center justify-center">
            <h2 className="lg:text-5xl text-3xl font-bold mt-10">
                Question Number <span className="text-blue-600">№1</span>.
            </h2>
            <p className="text-lg mt-3 mb-10">Score: 0</p>
            <Questions />
        </main>
    );
};

export default Quiz;
