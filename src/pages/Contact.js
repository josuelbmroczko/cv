// src/pages/Contact.js
import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import Button from '../components/Button';

const ContactSection = styled.section`
  padding: 100px 50px;
  text-align: center;
  background-color: #0a0a0a;

  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: #151515;
  color: #fff;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: #151515;
  color: #fff;
  font-size: 1rem;
  height: 150px;
  resize: none;
`;

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [textareaRows, setTextareaRows] = useState(1);

  const sendEmail = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || message === '') {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    };

    emailjs.send("service_6n3k3e6", "template_zdv04fr", templateParams, "eb6YouwGZ_PxGm0rD")
      .then((response) => {
        console.log("Email enviado:", response.status, response.text);
        alert("Email enviado com sucesso!");
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error("Erro ao enviar email:", error);
        alert("Erro ao enviar email. Por favor, tente novamente mais tarde.");
      });
  };

  return (
    <ContactSection id="contact">
      <h2>Contato</h2>
      <Form onSubmit={sendEmail}>
        <Input
          type="text"
          placeholder="Seu Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Seu Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextArea
          placeholder="Sua Menssagem"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            const rows = Math.ceil(e.target.scrollHeight / 20); // Ajusta o número de linhas baseado na altura do texto
            setTextareaRows(rows);
          }}
          rows={textareaRows}
        />
        <Button type="submit">Enviar Menssagem</Button>
      </Form>
    </ContactSection>
  );
};

export default Contact;
