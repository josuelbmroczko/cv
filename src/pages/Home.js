import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import { Link } from 'react-router-dom';
import systemLoquazImg from '../assets/images/SystemLoquaz.png';
import projetoGeracaoResgate from '../assets/images/projetoGeracaoSaude.png';
import projetoPolitico from '../assets/images/projetoPolitico.png';
import { MaquinaDeEscrever } from '../components/maquinaDeEscrever';  
import SliderDeTecnologias from '../components/sliderDeTecnologias';

const HomeSection = styled.section`
  
  text-align: center;
  background: linear-gradient(135deg, #00BCD4 0%, #00BFAE 100%);
  color: white; /* Cor do texto */
  min-height: 100vh; /* Garantir altura mínima da seção */
  position: relative;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 50px;
  padding: 0 20px; /* Adiciona um padding lateral para o grid */
`;

const StyledLink = styled(Link)`
  color: #fff;
  background-color: #00BCD4;
  padding: 12px 24px;
  text-decoration: none;
  font-size: 1.2rem;
  border-radius: 8px;
  display: inline-block;
  margin-top: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, background-color 0.3s ease;
margin-bottom: 30px;
  &:hover {
    transform: translateY(-3px);
    background-color: #0097A7;
  }
`;

const StyledTextContainer = styled.div`
position: relative;
top: 10px;
  font-size: 1.5rem;
  color: #ffffff;
  margin: 20px 0;
  font-weight: 600;
  text-align: center;
  max-width: 800px; /* Limita a largura máxima do texto */
  margin: 0 auto; /* Centraliza o texto */
  line-height: 1.6; /* Aumenta o espaçamento entre linhas */
  padding: 10px;
  background: rgba(0, 0, 0, 0.5); /* Adiciona um fundo semitransparente */
  border-radius: 10px; /* Bordas arredondadas */
  animation: fadeIn 2s ease-in-out; /* Animação para o texto aparecer suavemente */
  font-family: "Space Mono", monospace;

  font-style: normal;
  @keyframes fadeIn {
    from {
      opacity: 0; /* Começa invisível */
    }
    to {
      opacity: 1; /* Termina visível */
    }
  }
  @media (max-width:620px){
    font-size: 1rem;
  }
`;

const CustomParagraph = styled.p`
position: relative;
  font-size: 1.5rem;
  padding-top: 10px;
  color: #ffffff;
  margin: 20px 0;
   width: 80%;
  left: 10%;
  line-height: 1.5;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

function Home() {
  const projects = [
    {
      link: 'https://www.systemloquaz.com/',
      image: systemLoquazImg,
      title: 'Site pessoal de vendas',
      description: 'Esse foi meu primeiro grande projeto que me resultou nos meus primeiros clientes',
    },
    {
      link: 'https://www.projetogeraaoresgate.com/',
      image: projetoGeracaoResgate,
      title: 'Trabalho voluntário',
      description: 'Projeto Doado para a Ong `Projeto Geração Resgate`',
    },
    {
      link: 'https://www.professoredsonconstantino.com.br/',
      image: projetoPolitico,
      title: 'Projeto POLITICO',
      description: 'Projeto POLITICO',
    },
  ];

  return (
    <HomeSection id="home">
      <StyledTextContainer>
        
        <MaquinaDeEscrever 
          text="Olá sou o josuel e gostaria de me apresentar melhor!" 
          esconderCursor 
        />
      </StyledTextContainer>
      <StyledTextContainer>
        
        <MaquinaDeEscrever 
          text="Sou um Desenvolvedor Front-end com foco principal em React.js, apaixonado por criar experiências web envolventes. Tenho proficiência em HTML, CSS e uma boa base em JavaScript. Estou constantemente aprimorando minhas habilidades para construir soluções inovadoras e de alta qualidade." delay={6000}
            
        />
      </StyledTextContainer>
      <CustomParagraph>"Aqui estão alguns dos meus projetos que estão ativamente hospedados e disponíveis online."</CustomParagraph>
      <CustomParagraph>Todos criados com React.JS, styled-components,flex-box e Router.</CustomParagraph>
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
      <StyledLink to="/projects">Clique e veja mais Projetos</StyledLink>
      
<SliderDeTecnologias/> 
    </HomeSection>
  );
}

export default Home;
