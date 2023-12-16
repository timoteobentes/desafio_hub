import * as React from "react";
import NextLink from "next/link";
import Image from "next/image";
import {
    AcademicCapIcon,
    RocketLaunchIcon,
    BuildingOfficeIcon
} from "@heroicons/react/24/outline";

export default function Header() {

    return (
        <>
            <header className="navbar bg-base-100 mx-auto max-w-7x1 mt-4 shadow-xl rounded-box">
                <div className="navbar-start">
                    <Image
                        src="/hub_logo.jpg"
                        alt="Hub Logo"
                        className="dark:invert"
                        width={100}
                        height={24}
                        priority
                    />
                </div>
                <div className="navbar-end">
                    <NextLink href="#" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <AcademicCapIcon className="w-6 h-6" />
                            <span>Projetos</span>
                        </div>
                    </NextLink>
                    <NextLink href="#" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <RocketLaunchIcon className="w-6 h-6" />
                            <span>Participantes</span>
                        </div>
                    </NextLink>
                    <NextLink href="#" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <BuildingOfficeIcon className="w-6 h-6" />
                            <span>Sobre o Hub</span>
                        </div>
                    </NextLink>
                </div>
            </header>
        </>
    );
}