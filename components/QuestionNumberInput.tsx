"use client";

import { useAppDispatch } from "@/hooks/redux-toolkit";
import { updateNumberOfQuestions } from "@/redux/slices/quizSlice";
import { ChangeEvent, FC } from "react";

const QuestionNumberInput: FC = () => {
    const dispatch = useAppDispatch();

    return (
        <>
            <label
                htmlFor="number-of-questions"
                className="text-sm font-bold mb-1 text-gray-700"
            >
                Number of Questions
            </label>
            <input
                className="border w-full py-2 px-3 rounded-sm bg-gray-100"
                type="number"
                id="number-of-questions"
                defaultValue={10}
                min={0}
                max={50}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    dispatch(updateNumberOfQuestions(+e.target.value))
                }
            />
        </>
    );
};

export default QuestionNumberInput;
