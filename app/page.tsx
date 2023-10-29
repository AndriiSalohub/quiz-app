import DropDownOptions from "@/components/DropDownOptions";
import Heading from "@/components/Heading";
import QuestionNumberInput from "@/components/QuestionNumberInput";
import StartQuizBtn from "@/components/StartQuizBtn";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
    title: "Quiz App",
    description:
        "Welcome to 'QuizApp' the ultimate hub for testing your intellect and expanding your horizons. Immerse yourself in a world of quizzes, challenges, and knowledge-building exercises on a wide range of subjects. From trivia to in-depth assessments, we've got something for everyone. Join us to discover, learn, and put your knowledge to the test!",
};

const Home: FC = () => {
    return (
        <>
            <main className="flex flex-col justify-center items-center my-20">
                <Heading />
                <section className="my-2 rounded-lg shadow-xl lg:w-[50%] bg-white p-10 sm:w-[65%]">
                    <QuestionNumberInput />
                    <DropDownOptions />
                    <StartQuizBtn />
                </section>
            </main>
        </>
    );
};

export default Home;
