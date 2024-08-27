// src/pages/Projects.js
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';

const ProjectsSection = styled.section`
  padding: 100px 50px;
  background-color: #0f0f0f;

  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

function Projects() {
  const projects = [
    {
      image: 'project1.jpg',
      title: 'Project 1',
      description: 'A cool frontend project.',
    },
    {
      image: 'project2.jpg',
      title: 'Project 2',
      description: 'Another awesome project.',
    },
    // Adicione mais projetos aqui
  ];

  return (
    <ProjectsSection id="projects">
      <h2>My Projects</h2>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
          />
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
}

export default Projects;
