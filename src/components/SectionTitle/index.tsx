'use client'

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type SectionTitleProps = {
    subTitle: string
    title: string
    className?: string
}

export const SectionTitle = ({
    subTitle,
    title,
    className
}: SectionTitleProps) => {
    const animProps = {
        initial: { opacity: 0, x: -100 },
        whiteInView: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
    }

    return (
        <div className={cn('flex flex-col gap-4', className)}>
            <motion.span
                className="font-mono text-sm text-orange-400"
                { ...animProps }
                transition={{ duration: 0.5 }}
            >
                { `../${subTitle}` }
            </motion.span>
            <motion.h3
                className="text-3xl font-medium"
                { ...animProps }
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                { title }
            </motion.h3>
        </div>
    )
}