const QuestionNumberInput = () => {
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
            />
        </>
    );
};

export default QuestionNumberInput;
