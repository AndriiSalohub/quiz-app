import { useQuizStore } from "@/store/store";
import { FC } from "react";
import { Button } from "./ui/button";

interface IProps {
    handleNext: () => void;
}

const NextButton: FC<IProps> = ({ handleNext }) => {
    const { currentQuestion, numberOfQuestions } = useQuizStore(
        (state) => state.config
    );
    const endQuiz = useQuizStore((state) => state.endQuiz);

    return (
        <Button
            className="hover:bg-blue-500 duration-300 ease-in-out hover:text-white"
            onClick={() => {
                handleNext();
                currentQuestion + 1 > numberOfQuestions ? endQuiz() : null;
            }}
        >
            Next
        </Button>
    );
};

export default NextButton;
