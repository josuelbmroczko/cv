import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import js from '../assets/images/javascript.png';
import router from '../assets/images/router-dom.png';
import reagir from '../assets/images/reagir.png';
import styledimg from '../assets/images/styledimg.png';
import css from '../assets/images/iconcss.png';
import html from '../assets/images/icon-html.jpg';
import sass from '../assets/images/sass.png';

const SliderContainer = styled.div`
  width: 90%;
  max-width: 1200px; /* Define um tamanho máximo para o carrossel */
  margin: 0 auto;
  padding: 40px 0;
  background-color: #333;
  color: white;
  text-align: center;

  span {
    display: block;
    font-size: 24px;
    margin-bottom: 20px;
    color: #fff;
    font-weight: bold;
  }

  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;

    img {
      object-fit: cover;
      width: 100px;
      height: 100px;
      border-radius: 10px; /* Adiciona bordas arredondadas às imagens */
    }
  }

  .slick-prev, .slick-next {
    z-index: 1;
    color: #fff;
  }

  .slick-dots {
    bottom: -30px; /* Ajusta a posição dos indicadores de navegação */
  }
`;

const SliderDeTecnologias = () => {
  const settings = {
    dots: true,            // Exibe indicadores de navegação
    infinite: true,        // Permite a rotação infinita dos slides
    speed: 1000,           // Velocidade da transição entre slides
    slidesToShow: 3,       // Número de slides exibidos ao mesmo tempo
    slidesToScroll: 1,     // Número de slides a serem rolados por vez
    autoplay: true,        // Habilita o autoplay
    autoplaySpeed: 1000,   // Velocidade do autoplay (2000 ms = 2 segundos)
    arrows: true,          // Exibe setas de navegação
    pauseOnHover: true,    // Pausa o autoplay ao passar o mouse sobre o carrossel
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Exibe 2 slides em telas menores que 1024px
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Exibe 1 slide em telas menores que 600px
        }
      }
    ]
  };

  return (
    <SliderContainer>
      <span>Habilidades</span>
      <Slider {...settings}>
        <div>
          <img src={html} alt="HTML" />
        </div>
        <div>
          <img src={css} alt="CSS" />
        </div>
        <div>
          <img src={js} alt="JavaScript" />
        </div>
        <div>
          <img src={reagir} alt="React.js" />
        </div>
        <div>
          <img src={styledimg} alt="Styled Components" />
        </div>
        <div>
          <img src={router} alt="React Router" />
        </div>
        <div>
          <img src={sass} alt="React Router" /> 
        </div>
      </Slider>
    </SliderContainer>
  );
};

export default SliderDeTecnologias;
