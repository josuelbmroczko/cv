// documentaçao que usei para fazer a maquina de escrever
// https://blog.formacao.dev/como-fazer-o-efeito-de-maquina-de-escrever-com-react-js/

import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

// Animação do cursor
const blink = keyframes`
  from, to {
    background-color: transparent;
  }
  50% {
    background-color: #fff;
  }
`;

// Estilo do cursor
const Cursor = styled.span`
  display: inline-block;
  width: 2px;
  height: 1em; /* Ajusta o tamanho do cursor ao tamanho do texto */
  background-color: #fff; /* Cor do cursor */
  animation: ${blink} 0.75s step-start infinite;
`;

export function MaquinaDeEscrever(props) {
  const [text, setText] = useState("");
  const [mostrarCursor, setMostrarCursor] = useState(false);

  const escreverNaTela = (text, i = 0) => {
    if (i < text.length) {
      setMostrarCursor(true);
      setText(text.slice(0, i + 1)); 
      setTimeout(() => escreverNaTela(text, i + 1), 100);
    } else if (props?.esconderCursor) {
      setMostrarCursor(false);
    }
  };

  useEffect(() => {
    setTimeout(() => escreverNaTela(props.text), props?.delay ?? 200);  
  }, [props.text, props.delay]);

  return (
    <div>
      {text}
      {mostrarCursor && <Cursor />}
    </div>
  );
}
