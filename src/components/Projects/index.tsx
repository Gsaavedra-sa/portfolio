import projects from './data';
import { Project } from './Project'


export const Projects = () => {
  return (
    <>
      {/* for ... */}
      {projects.map((project: any) => (
        <Project project={project} />
      ))}
    </>
  )
}