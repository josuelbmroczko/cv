import React, { useEffect } from 'react';
import styled from 'styled-components';

const CurriculoContainer = styled.section`
  padding: 50px;
  background-color: #0d0d0d;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
text-decoration:none;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  background-color: blanchedalmond;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #0d0d0d;
  margin-bottom: 20px;
  text-align: start;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h3`
  font-size: 1.8rem;
  color: dimgray;
  margin-bottom: 15px;
  text-align: start;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Item = styled.div`
  margin-bottom: 20px;
`;

const ItemTitle = styled.h4`
  font-size: 1.4rem;
  font-weight: bold;
  color: #0d0d0d;
  text-align: start;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ItemPeriod = styled.p`
  font-size: 1.2rem;
  color: grey;
  text-align: start;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ItemDescription = styled.p`
  font-size: 1rem;
  color: #333;
  text-align: start;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ContactInfo = styled.div`
  font-size: 1rem;
  color: #333;
  text-align: start;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  a {
    color: slategrey;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Curriculo = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <CurriculoContainer>
      <ContentWrapper>
        <Title>CV. Josuel B. Mroczko</Title>

        <Section>
          <SectionTitle>Formação Acadêmica</SectionTitle>
          <Item>
            <ItemTitle>Engenharia de Software - Bacharelado</ItemTitle>
            <ItemPeriod>Centro Universitário UniFatecie | Conclusão: 12/2025</ItemPeriod>
          </Item>
        </Section>

        <Section>
          <SectionTitle>Experiência Profissional</SectionTitle>
          <Item>
            <ItemTitle>Desenvolvedor Front-End React.js</ItemTitle>
            <ItemPeriod>Julho 2023 – Agosto 2023</ItemPeriod>
            <ItemDescription>
              - Desenvolvimento de software<br />
              - Criação de telas em React.js<br />
              - Criação de testes unitários
            </ItemDescription>
          </Item>

          <Item>
            <ItemTitle>Desenvolvedor Front-End</ItemTitle>
            <ItemPeriod>Novembro 2022 – Presente</ItemPeriod>
            <ItemDescription>
              - Desenvolvedor voluntário na Sociedade Plural<br />
              - Criação de páginas web<br />
            </ItemDescription>
          </Item>
        </Section>

        <Section>
          <SectionTitle>Habilidades</SectionTitle>
          <ItemDescription>
            - React.JS<br />
            - Styled Components<br />
            - Flexbox<br />
            - HTML<br />
            - CSS<br />
            - JavaScript<br />
            - Design Responsivo
          </ItemDescription>
        </Section>

        <Section>
          <SectionTitle>Informações de Contato</SectionTitle>
          <ContactInfo>
            Data de nascimento: 18/08/1997, 26 anos<br />
            Endereço:R. Ubaldo de Abreu, 82 - Vila Água Funda São Paulo, SP.<br />
            Telefone: (11) 99309-3681<br />
            Email: <a href="mailto:josuelbeserramroczko@outloo.com">josuelbeserramroczko@outlook.com</a><br />
            LinkedIn: <a href="https://linkedin.com/in/josuel-mroczko-677b36183/" target="_blank">linkedin.com/in/josuel-mroczko-677b36183/</a><br />
            Loja de Sites: <a href="https://www.systemloquaz.com/" target="_blank">https://www.systemloquaz.com/</a><br />
            Contabil: <a href="https://contabil-five.vercel.app/" target="_blank">https://contabil-five.vercel.app/</a><br />
            Certificado Completo Alura: <a href="https://cursos.alura.com.br/user/josuelbeserramroczko/fullCertificate/cd9e7955b308746f1eac0ed6fe1a784d" target="_blank">Certificado Alura</a>
          </ContactInfo>
        </Section>
        <a href='https://1drv.ms/b/s!AoErj53_Ws5zlZdvarc-LTUTyimilQ?e=mCuwCe' target='blank'>Abrir no OneDrive</a>
      </ContentWrapper>
    </CurriculoContainer>
  );
};

export default Curriculo;
