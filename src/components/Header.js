// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background-color: #0a0a0a;

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

const Logo = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    width: 100%;
    background-color: #0a0a0a;
    position: absolute;
    top: 70px;
    left: 0;
    padding: 20px;
    box-sizing: border-box;
    z-index: 1000;
  }
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  padding: 10px 20px;
  border-radius: 5px;
  border: 2px solid transparent;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #0a0a0a;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    text-align: center;
    width: 100%;
    box-sizing: border-box;

    &:hover {
        background-color: #0a0a0a;
      color: ${({ theme }) => theme.colors.primary};
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Line = styled.span`
  width: 25px;
  height: 3px;
  background-color: #fff;
  margin: 3px 0;
`;

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Header>
      <Logo>Josuel B. Mroczko</Logo>
      <Hamburger onClick={toggleMenu}>
        <Line />
        <Line />
        <Line />
      </Hamburger>
      <Nav isOpen={isOpen}>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/projects">Projetos</StyledLink>
        <StyledLink to="/contact">Contato</StyledLink>
        <StyledLink to="/curriculo">Curriculo</StyledLink>
      </Nav>
    </Header>

 
  );
};

export default HeaderComponent;

     
