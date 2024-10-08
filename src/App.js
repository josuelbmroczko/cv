// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { theme } from './styles/theme';
import HeaderComponent from './components/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import FooterComponent from './components/Footer';
import Curriculo from './pages/Curriculo';
import CustomCursor from './components/CustomCursor'; // Importar o novo componente

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <CustomCursor>
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/curriculo" element={<Curriculo />} /> 
          </Routes>
          <FooterComponent />
        </CustomCursor>
      </Router>
    </ThemeProvider>
  );
}

export default App;
