import Heading from "@/components/Heading";
import QuestionNumberInput from "@/components/QuestionNumberInput";

const Home = () => {
    return (
        <main className="flex flex-col justify-center items-center my-20">
            <Heading />
            <section className="my-2 rounded-lg shadow-xl w-[50%] bg-white p-10">
                <QuestionNumberInput />
            </section>
        </main>
    );
};

export default Home;
