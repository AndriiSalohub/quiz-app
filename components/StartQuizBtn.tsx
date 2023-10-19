import { useQuizStore } from "@/store/store";
import { FC } from "react";
import { Button } from "./ui/button";

const StartQuizBtn: FC = () => {
    const startQuiz = useQuizStore((state) => state.startQuiz);
    return (
        <div className="flex justify-center items-center mt-5">
            <Button onClick={() => startQuiz()}>Start Quiz</Button>
        </div>
    );
};

export default StartQuizBtn;
