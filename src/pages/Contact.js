// src/pages/Contact.js
import styled from 'styled-components';
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
`;

function Contact() {
  return (
    <ContactSection id="contact">
      <h2>Contact Me</h2>
      <Form>
        <Input type="text" placeholder="Your Name" />
        <Input type="email" placeholder="Your Email" />
        <TextArea placeholder="Your Message"></TextArea>
        <Button>Send Message</Button>
      </Form>
    </ContactSection>
  );
}

export default Contact;
