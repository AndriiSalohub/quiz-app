import { FC } from "react";
import { Button } from "./ui/button";

const NextButton: FC = () => {
    return (
        <Button className="hover:bg-blue-500 duration-300 ease-in-out hover:text-white">
            Next
        </Button>
    );
};

export default NextButton;
