import { ProjectIntroduction } from '../../components/Pages/Projects/ProjectIntroduction'
import { ProjectsList } from '../../components/Pages/Projects/ProjectsList'
import { ProjectsPageData } from '@/types/page-info'
import { fetchHygraphQuery } from '@/utils/fetch-hygraph-query'

export const metadata = {
  title: 'Projetos',
}

const getPageData = async (): Promise<ProjectsPageData> => {
  const query = `
    query ProjectsQuery {
      projects {
        shortDescription
        slug
        title
        thumbnail {
          url
        }
        technologies {
          name
        }
      }
    }
    `

  return fetchHygraphQuery(
    query,
    1000 * 60 * 60 * 24, // 1 day
  )
}

export default async function Projects() {
  /* const { projects } = await getPageData() */

  return (
    <>
      <ProjectIntroduction />
      {/* <ProjectsList projects={projects} /> */}
    </>
  )
}