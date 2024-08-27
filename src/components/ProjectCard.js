import styled from 'styled-components';

const Card = styled.div`
  background-color: #0A0A0A;
  border: none;
  border-radius: 8px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  max-height: 190px;
  object-fit: cover;
  transition: transform 0.3s ease;
 
  &:hover {
    transform: scale(1.1);
  }
`;

const Content = styled.div`
  padding: 20px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.2rem;
`;

const Description = styled.p`
  color: #666;
`;

const CardLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

function ProjectCard({ link, image, title, description }) {
  return (
    <Card>
      <CardLink href={link} target="_blank" rel="noopener noreferrer">
        <Image src={image} alt={title} />
        <Content>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Content>
      </CardLink>
    </Card>
  );
}

export default ProjectCard;
