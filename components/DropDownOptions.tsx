import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DropDownOptions = () => {
    return (
        <section className="flex justify-between mt-5">
            <DropdownMenu>
                <DropdownMenuTrigger className="bg-white p-3 rounded-md shadow-lg hover:bg-blue-500 duration-300 ease-in-out hover:text-white">
                    Select category
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
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
