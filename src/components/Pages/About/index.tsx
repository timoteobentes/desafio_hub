'use client'

import { motion } from "framer-motion";

export const AboutSection = () => {
    return (
        <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb=[110px]">
            <div className="container flex items-center justify-center flex-col-reverse lg:flex-row">
                <motion.div>
                    <h2 className="text-4xl text-center font-medium mt-2">
                    O Hub Tecnologia e Inovação é um pólo tecnológico localizado na Escola Superior de Tecnologia da UEA, em Manaus/AM.
                    Atualmente composto pelos laboratórios LSE (sistemas embarcados) ILUM (química) Indústria 4.0 (integração de tecnologias digitais), o Hub tem como missão potencializar o desenvolvimento técnico e pessoal de nossos parceiros, fornecendo soluções tecnológicas, inovadoras e sustentáveis.
                    Conheça mais sobre nossos projetos e acompanhe aqui nosso trabalho.
                    </h2>
                </motion.div>
            </div>
        </section>
    );
}