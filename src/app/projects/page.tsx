import { promises as fs } from 'fs';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from "@/types/projects";
import { ProjectIntroduction } from '../../components/Pages/Projects/ProjectIntroduction';
/* import * as Projects from '../../api/dbapi'; */
import * as Moment from 'moment';
import 'moment/locale/pt-br';
Moment.locale('pt-br')

export const metadata = {
    title: 'Projetos | Hub T&I',
}

/* type ProjectsProps = {
    project: Project
} */

/* export default async function Projects({ project }: ProjectsProps) { */
export default async function Projects() {
    const file = await fs.readFile(process.cwd() + '/src/utils/db.json', 'utf8');
    const data = JSON.parse(file)['projects'];
    /* const response = Projects.getProjects(); */
    const moment =  require('moment');
    /* Não desistir de implementar do JSON-Server */

    return (
        <>
            <ProjectIntroduction />
            <div className='mx-auto'>
                {data.map((pro: any) => (
                    <Link key={pro.id} href={`/projects/projectDetail`} className="rounded-lg h-[550px] w-96 mx-auto mb-4 flex flex-col bg-gray-800 overflow-hidden group transition-all border-2 border-gray-800 hover:border-orange-500 opacity-70 hover:opacity-100 cursor-pointer">
                        <div className="w-full h-48 overflow-hidden">
                            <Image
                                width={380}
                                height={200}
                                className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"
                                alt={`Thumbnail do projeto ${pro.name}`}
                                src={pro.iconUrl}
                                unoptimized
                            />
                        </div>

                        <div className="flex-1 flex flex-col p-8">
                            <strong className="font-medium text-gray-50/90 group-hover:text-orange-500 transition-all">
                                { pro.name }
                            </strong>
                            <p className="mt-2 text-gray-400 line-clamp-4">
                                { pro.description }
                            </p>

                            <span className="text-gray-300 text-sm font-medium block mt-auto truncate">
                                Tags: { pro.tags }
                            </span>
                            <br />
                            <a href={ pro.projectLink } className='hover:text-orange-500 transition-all' >{ pro.projectLink }</a>

                            <span><strong><i>INÍCIO:</i></strong> { moment(pro.startDate).format('LL') }</span>
                            <span><strong><i>TÉRMINO:</i></strong> { moment(pro.endDate).format('LL') }</span>

                            <span><strong><i>CLIENTE:</i></strong> { pro.companyName }</span>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}