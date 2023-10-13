"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ICategories } from "@/store/QuizSlice";
import { useEffect, useState } from "react";

const DropDownOptions = () => {
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
        <section className="flex justify-between mt-5">
            <DropdownMenu>
                <DropdownMenuTrigger className="bg-white p-3 rounded-md shadow-lg hover:bg-blue-500 duration-300 ease-in-out hover:text-white">
                    Select category
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {categories.map((item) => (
                        <DropdownMenuItem>{item.name}</DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
                <DropdownMenuTrigger className="bg-white p-3 rounded-md shadow-lg hover:bg-blue-500 duration-300 ease-in-out hover:text-white">
                    Select level
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>Easy</DropdownMenuItem>
                    <DropdownMenuItem>Medium</DropdownMenuItem>
                    <DropdownMenuItem>Hard</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
                <DropdownMenuTrigger className="bg-white p-3 rounded-md shadow-lg hover:bg-blue-500 duration-300 ease-in-out hover:text-white">
                    Select type
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>Boolean</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </section>
    );
};

export default DropDownOptions;
