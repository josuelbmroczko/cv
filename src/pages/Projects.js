// src/pages/Projects.js
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import PetShop from '../assets/images/PetShop.png'
import contabilidade from '../assets/images/contabilidade.png' 
import adv2 from '../assets/images/adv2.png'
import adv1 from '../assets/images/adv1.png'
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
      link:'https://comercio2.vercel.app/',
      image: PetShop,
      title: 'Project 1',
      description: 'A cool frontend project.',
    },
    {
      link:'https://contabil-five.vercel.app/',
      image: contabilidade,
      title: 'Project 2',
      description: 'Another awesome project.',
    },
    {
      link:'https://adevogado2-main.vercel.app/',
      image: adv2,
      title: 'Project 2',
      description: 'Another awesome project.',
    },
    {
      link:'https://adv-main1.vercel.app/',
      image: adv1,
      title: 'Project 2',
      description: 'Another awesome project.',
    },
    // Adicione mais projetos aqui
  ];

  return (
    <ProjectsSection id="projects">
      <h2>Meus projetos.</h2>
      <p>Todos criados com React.JS, styled-components,flex-box e Router.</p>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            link={project.link}
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
