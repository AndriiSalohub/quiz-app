import { useAppDispatch, useAppSelector } from "@/hooks/redux-toolkit";
import { startQuiz } from "@/redux/slices/quizSlice";
import Link from "next/link";
import { FC } from "react";
import { Button } from "./ui/button";

const StartQuizBtn: FC = () => {
    const dispatch = useAppDispatch();
    const { category, type, level } = useAppSelector((state) => state.quiz);

    return (
        <div className="flex justify-center items-center mt-5">
            <Button
                onClick={() => dispatch(startQuiz())}
                disabled={!(category.name && type && level)}
            >
                <Link href="/quiz">Start Quiz</Link>
            </Button>
        </div>
    );
};

export default StartQuizBtn;
