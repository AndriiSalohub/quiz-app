import QuestionNumberHeading from "@/components/QuestionNumberHeading";
import Questions from "@/components/Questions";
import ScoreBoard from "@/components/ScoreBoard";
import { FC } from "react";

const Quiz: FC = () => {
    return (
        <main className="flex flex-col items-center justify-center">
            <QuestionNumberHeading />
            <ScoreBoard />
            <Questions />
        </main>
    );
};

export default Quiz;
