import * as ProjectStyles from './styles'

interface ProjectProps {
  project: any
}

export const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <ProjectStyles.ProjectContainer>
      <img src={project.image}  alt={project.image} />
      <ProjectStyles.ProjectInfo>
        <h1>{project.name}</h1>
        <h2>{project.company}</h2>
        <p>{project.description}</p>

        <ProjectStyles.TechContainer>
          {project.tech.map((tech: any) => (
            <ProjectStyles.Tech>
              {/* <span>{tech.name}</span> */}
              <img src={tech.icon} alt={tech.icon} />
            </ProjectStyles.Tech>
          ))}
        </ProjectStyles.TechContainer>

      </ProjectStyles.ProjectInfo>
    </ProjectStyles.ProjectContainer>
  )
}