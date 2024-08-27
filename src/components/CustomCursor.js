import React, { useEffect } from 'react';
import styled from 'styled-components';
 

const CursorWrapper = styled.div`
  cursor: none; /* Remove o cursor padrão */
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const RastroCursor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 20px; /* Tamanho do círculo do cursor */
  height: 20px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(25, 20, 10, 0.6) 0%, rgba(0, 204, 255, 0.6) 100%);
  transform: translate(-50%, -50%);
  pointer-events: none; /* Impede a interação com o cursor */
  transition: background 0.3s ease, transform 0.1s ease;
  z-index: 9999;
`;

const CustomCursor = ({ children }) => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursor = document.querySelector('.rastro-cursor');
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <CursorWrapper>
      <RastroCursor className="rastro-cursor" />
      {children}
    </CursorWrapper>
  );
};

export default CustomCursor;