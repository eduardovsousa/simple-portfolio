/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  ContactContainer,
  ContactOption,
  ContactOptions,
  Container,
  Form,
  Section,
} from './styles';
import { MdOutlineEmail, MdWhatsapp } from 'react-icons/md';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

export function Contact() {
  const form = useRef();

  // @ts-ignore
  const sendEmail = (e) => {
    e.preventDefault();
    // @ts-ignore
    emailjs.sendForm('service_3m5fy6n', 'template_bl4jp2f', form.current, 'C4dgFXu_10rvtFCjd');

    e.target.reset();
  };

  return (
    <Container id="contact" className="container">
      <Section>
        <h5>Vamos conversar</h5>
        <h2>Entre em contato</h2>

        <ContactContainer>
          <ContactOptions>
            <ContactOption>
              <MdOutlineEmail className="Icon" />
              <h4>E-mail</h4>
              <h5>devevs@outlook.com.br</h5>
              <a href="mailto:devevs@outlook.com.br?subject=Contato para dúvidas&body=Escreva sua mensagem aqui 🙋‍♂️">Mande uma mensagem</a>
            </ContactOption>

            <ContactOption>
              <MdWhatsapp className="Icon" />
              <h4>WhatsApp</h4>
              <h5>+55 (11) 97951-1654</h5>
              <a
                target="_blank"
                href="https://wa.me/5511979511654?text=Ol%C3%A1%2C+vi+seu+site+e+tenho+perguntas."
                rel="noreferrer"
              >
                Mande uma mensagem
              </a>
            </ContactOption>
          </ContactOptions>

          {/* @ts-ignore */}
          <Form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="*Nome"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="*E-mail"
              required
            />
            <textarea
              name="message"
              rows={7}
              id="message"
              placeholder="*Mensagem"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Enviar mensagem
            </button>
          </Form>

        </ContactContainer>
      </Section>
    </Container>
  );
}
