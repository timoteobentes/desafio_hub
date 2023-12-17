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
        <section></section>
    );
}