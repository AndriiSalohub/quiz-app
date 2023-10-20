import DropDownOptions from "@/components/DropDownOptions";
import Heading from "@/components/Heading";
import QuestionNumberInput from "@/components/QuestionNumberInput";
import StartQuizBtn from "@/components/StartQuizBtn";
import { FC } from "react";

const Home: FC = () => {
    return (
        <main className="flex flex-col justify-center items-center my-20">
            <>
                <Heading />
                <section className="my-2 rounded-lg shadow-xl lg:w-[50%] bg-white p-10 sm:w-[65%]">
                    <QuestionNumberInput />
                    <DropDownOptions />
                    <StartQuizBtn />
                </section>
            </>
        </main>
    );
};

export default Home;
