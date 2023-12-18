'use client'

import { motion } from "framer-motion";

export const HomeSection = () => {
    return (
        <section className="w-full lg:h-[590px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb=[110px]">
            <div className="container flex items-center justify-center flex-col-reverse lg:flex-row">
                <motion.div
                    className="w-full lg:max-w-[530px]"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl text-center font-medium mt-2">Portfólio de Projetos <br /> Hub Inteligência & Inovação</h1>
                </motion.div>
            </div>
        </section>
    );
}