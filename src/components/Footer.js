// src/components/Footer.js
import styled from 'styled-components';

const Footer = styled.footer`
  padding: 20px;
  background: ${({ theme }) => theme.colors.background};
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 50px;

  p {
    margin: 0;
  }
`;

function FooterComponent() {
  return (
    <Footer>
      <p>&copy; 2024 Meu Portfolio. 
      Todos os direitos reservados.</p>
    </Footer>
  );
}

export default FooterComponent;
