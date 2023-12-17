import { HeartIcon } from "@heroicons/react/20/solid";

export const Footer = () => {
    return (
        <footer className="h-14 w-full flex items-center justify-center bg-orange-950">
            <span className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-gray-400">
                Feito com
                <HeartIcon className="text-orange-500 w-6 h-6" />
                por
                <strong className="font-medium">Timóteo Bentes</strong>
            </span>
        </footer>
    );
}