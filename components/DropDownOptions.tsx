"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ICategories, useQuizStore } from "@/store/store";
import { FC, useEffect, useState } from "react";

const levels = ["Easy", "Medium", "Hard"];
const types = ["Boolean", "Multiple"];

const DropDownOptions: FC = () => {
    const { config, changeCategory, changeLevel, changeType } = useQuizStore(
        (state) => state
    );
    const [categories, setCategories] = useState<ICategories[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const { trivia_categories } = await (
                await fetch("https://opentdb.com/api_category.php")
            ).json();
            setCategories(trivia_categories);
        };
        fetchCategories();
    }, []);

    return (
        <section className="flex justify-between mt-5 gap-4">
            <DropdownMenu>
                <DropdownMenuTrigger className="flex justify-center items-center w-full bg-white p-3 rounded-md shadow-lg hover:bg-blue-500 duration-300 ease-in-out hover:text-white">
                    {config.category.name || "Select category"}
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {categories.map((item: ICategories) => (
                        <DropdownMenuItem
                            key={item.id}
                            onClick={() => changeCategory(item)}
                        >
                            {item.name}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
                <DropdownMenuTrigger className="flex justify-center items-center w-full bg-white p-3 rounded-md shadow-lg hover:bg-blue-500 duration-300 ease-in-out hover:text-white">
                    {config.level || "Select level"}
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {levels.map((level: string) => (
                        <DropdownMenuItem
                            key={level}
                            onClick={() => changeLevel(level)}
                        >
                            {level}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
                <DropdownMenuTrigger className="flex justify-center items-center w-full bg-white p-3 rounded-md shadow-lg hover:bg-blue-500 duration-300 ease-in-out hover:text-white">
                    {config.type || "Select type"}
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {types.map((type: string) => (
                        <DropdownMenuItem
                            key={type}
                            onClick={() => changeType(type)}
                        >
                            {type}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </section>
    );
};

export default DropDownOptions;
