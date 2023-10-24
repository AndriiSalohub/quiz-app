"use client";
import { useQuizStore } from "@/store/store";
import { FC } from "react";

const ScoreBoard: FC = () => {
    const score = useQuizStore((state) => state.config.score);
    return <p className="text-lg mt-3 mb-10">Score: {score}</p>;
};

export default ScoreBoard;
