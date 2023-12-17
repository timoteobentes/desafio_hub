import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, className, ...props }: ButtonProps) => {
    return (
        <button
            className={cn(
                'bg-orange-600 py-3 px-4 rounded-lg text-gray-50 flex justify-center items-center gap-2 hover:bg-orange-500 transition-all disabled:opacity-50',
                className,
            )}
            { ...props }
        >
            { children }
        </button>
    );
}