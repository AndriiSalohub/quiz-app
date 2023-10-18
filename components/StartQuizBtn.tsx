import { FC } from "react";
import { Button } from "./ui/button";

const StartQuizBtn: FC = () => {
    return (
        <div className="flex justify-center items-center mt-5">
            <Button>Start Quiz</Button>
        </div>
    );
};

export default StartQuizBtn;
