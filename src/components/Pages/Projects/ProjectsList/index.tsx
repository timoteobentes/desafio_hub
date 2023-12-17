'use client'

import { Project } from "@/types/projects";
import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUpAnimation } from "@/lib/animations";

type ProjectsListProps = {
    projects: Project[];
}

export const ProjectsList = ({ projects }: ProjectsListProps) => {
    return (
        <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
            {projects.map((project, i) => (
                <motion.div
                    key={i}
                    { ...fadeUpAnimation }
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                    <Link href={`/projects/${project.slug}`}>
                        <ProjectCard project={project} />
                    </Link>
                </motion.div>
            ))}
        </section>
    );
}