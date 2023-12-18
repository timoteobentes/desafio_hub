'use client'

import { Button } from "@/components/Button";
import { Link } from "@/components/Link";
import { SectionTitle } from "@/components/SectionTitle";
import { TechBadge } from "@/components/TechBadge";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import { Project } from "@/types/projects";
import { RichText } from "@/components/RichText";
import { TbBrandGithub } from "react-icons/tb";
import { FiGlobe } from "react-icons/fi";
import { fadeUpAnimation, techBadgeAnimation } from "@/lib/animations";

type ProjectDetailsProps = {
    project: Project
}

export const ProjectDetails = ({ project }: ProjectDetailsProps) => {
    return (
        <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
            <motion.div
                className="absolute inset-0 z-[-1]"
                style={{
                    background: `url(/logo.png) no repeat center/cover, url(${project. pageThumbnail.url}) no-repeat center/cover`,
                }}
                initial={{ opacity: 0, scale: 1.3 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            />
            <SectionTitle
                subTitle="projetos"
                title={ project.title }
                className="text-center items sm:[&>h3]:text-4xl"
            />
            <motion.div
                className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base"
                { ...fadeUpAnimation }
            >
                <RichText content={ project.description.raw } />
            </motion.div>
            <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
                {project.technologies.map((tech, i) => (
                    <TechBadge
                        name={ tech.name }
                        key={ tech.name }
                        { ...techBadgeAnimation }
                        transition={{ duration: 0.3, delay: i + 0.1 }}
                    />
                ))}
            </div>
            <motion.div
                className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row"
                { ...fadeUpAnimation }
            >
                {project?.github && (
                    <a href={ project.github } target="_blank" rel="noreferrer">
                        <Button className="min-w-[180px]">
                            <TbBrandGithub size={20} />
                            Repositório
                        </Button>
                    </a>
                )}
                {project?.liveProjectUrl && (
                    <a href={ project.liveProjectUrl } target="_blank" rel="noreferrer">
                        <Button className="min-w-[180px]">
                            <FiGlobe size={20} />
                            Projeto Online
                        </Button>
                    </a>
                )}
            </motion.div>
            <Link href="/projects">
                <ArrowLeftIcon className="w-6 h-6" />
                Voltar para Projetos
            </Link>
        </section>
    );
}