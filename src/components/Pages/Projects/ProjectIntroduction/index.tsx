'use client'

import { Link } from "@/components/Link";
import { SectionTitle } from "@/components/SectionTitle";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

export const ProjectIntroduction = () => {
    return (
        <section className="w-full h-[450px] lg:h-[360px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-2">
            <SectionTitle
                subTitle="projetos"
                title="Projetos"
                className="text-center items-center [&>h3]:text-4xl"
            />
            <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 1, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.6 }}
            >
                <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
                    Projetos desenvolvidos pelo <i>Hub Inteligência & Inovação</i>. Navegue à
                    vontade e explore os projetos para ver como foram criados, as
                    tecnologias utilizadas e as funcionalidades implementadas.
                </p>
                <Link href="/">
                    <ArrowLeftIcon className="w-6 h-6" />
                    Voltar paro o Início
                </Link>
            </motion.div>
        </section>
    );
}