// src/pages/Projects.js
import styled from 'styled-components';
import ScrollReveal from 'scrollreveal';
import ProjectCard from '../components/ProjectCard';
import PetShop from '../assets/images/PetShop.png'
import contabilidade from '../assets/images/contabilidade.png' 
import adv2 from '../assets/images/adv2.png'
import adv1 from '../assets/images/adv1.png'
import simples from '../assets/images/simples.png'
import academia from '../assets/images/academia.png'
import { useEffect } from 'react';


const ProjectsSection = styled.section`
  padding: 100px 50px;
  background-color: #0f0f0f;
  font-family: "Space Mono", monospace;

  font-style: normal;
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
      description: 'Projeto petshop / Veterinario',
    },
    {
      link:'https://contabil-five.vercel.app/',
      image: contabilidade,
      title: 'Project 2',
      description: 'Landing Page - Contabilidade.',
    },
    {
      link:'https://adevogado2-main.vercel.app/',
      image: adv2,
      title: 'Project 3',
      description: 'Landing Page - advogado.',
    },
    {
      link:'https://adv-main1.vercel.app/',
      image: adv1,
      title: 'Project 4',
      description: 'Landing Page - advogado + equipe.',
    },
    {
      link:'https://landing-page-simples-bay.vercel.app/',
      image: simples,
      title: 'Project 5',
      description: 'Landing Page - Em andamento', academia
    },
    {
      link:'https://academia-a.vercel.app/',
      image: academia,
      title: 'Project 6',
      description: 'Landing Page - Academia Em andamento', 
    },
    // Adicione mais projetos aqui
  ];
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])


  useEffect(() => {
    ScrollReveal().reveal('.project-card', {
      origin: 'right',
      distance: '100px',
      duration: 1000,
      easing: 'ease-in-out',
      reset: true,
      interval: 200,
    });
  }, []);
  return (
    <ProjectsSection id="projects">
      <h2>Meus projetos.</h2>
      <p>Todos criados com React.JS, styled-components,flex-box e Router.</p>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
          <ProjectCard
            key={index}
            link={project.link}
            image={project.image}
            title={project.title}
            description={project.description}
          />
          </div>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
}

export default Projects;
