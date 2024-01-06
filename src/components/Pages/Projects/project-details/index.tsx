'use client'

import { Link } from "@/components/Link";
import { SectionTitle } from "@/components/SectionTitle";
import { Project } from "@/types/projects";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import { FiGlobe } from "react-icons/fi";
import { fadeUpAnimation } from "@/lib/animations";

type ProjectDetailsProps = {
    project: Project
}

export const ProjectDetails = ({ project }: ProjectDetailsProps) => {
    return (
        <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
            <motion.div
                className="absolute inset-0 z-[-1]"
                style={{
                    background: `linear-gradient(to  bottom, transparent, rgb(0, 0, 0)) rgb(0, 0, 0), url(${project.iconURL}) no-repeat center/cover`,
                }}
                initial={{ opacity: 0, scale: 1.3 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            />
            <SectionTitle
                subTitle="projetos"
                title={project.name}
                className="text-center items-center sm:[&>h3]:text-4xl"
            />
            <motion.div
                className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base"
                { ...fadeUpAnimation }
            >
                { project.description }
            </motion.div>
            <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
                {project.tags}
            </div>
            <motion.div
                className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row"
                { ...fadeUpAnimation }
            >
                {project?.projectLink && (
                    <a href={project.projectLink} target="_blank" rel="noreferrer">
                        <button
                            className="bg-orange-600 min-w-[180px] py-3 px-4 rounded-lg text-gray-50 flex justify-center items-center gap-2 hover:bg-orange-500 transition-all disabled:opacity-50"
                        >
                            <FiGlobe size={20} />
                            Visitar Projeto
                        </button>
                    </a>
                )}
            </motion.div>
            <Link href="/projects">
                <ArrowLeftIcon className="w-6 h-6" />
                Voltar para projetos
            </Link>
        </section>
    )
}