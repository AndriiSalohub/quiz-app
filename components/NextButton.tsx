import { FC } from "react";
import { Button } from "./ui/button";

interface IProps {
    handleNext: () => void;
}

const NextButton: FC<IProps> = ({ handleNext }) => {
    return (
        <Button
            className="hover:bg-blue-500 duration-300 ease-in-out hover:text-white"
            onClick={() => handleNext()}
        >
            Next
        </Button>
    );
};

export default NextButton;
