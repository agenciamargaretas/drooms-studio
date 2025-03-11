import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const FooterSection = styled.footer`
  background-color: #343434;
  color: #fff;
  padding: 80px 0 30px;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"%3E%3Cpath fill="%2395e1d3" fill-opacity="0.05" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"%3E%3C/path%3E%3C/svg%3E');
    background-size: cover;
    background-position: center;
    opacity: 0.1;
    z-index: 0;
  }
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  z-index: 1;
`;

const FooterColumn = styled(motion.div)`
  width: 23%;
  margin-bottom: 30px;
  
  @media screen and (max-width: 768px) {
    width: 48%;
  }
  
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const FooterLogo = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: #95e1d3;
  font-family: var(--heading-font);
  letter-spacing: 2px;
`;

const FooterDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 20px;
  color: rgba(255, 255, 255, 0.7);
  font-family: var(--body-font);
`;

const SocialIcons = styled.div`
  display: flex;
  margin-top: 20px;
`;

const SocialIcon = styled.a`
  color: #fff;
  font-size: 1.2rem;
  margin-right: 15px;
  transition: all 0.3s ease;
  
  &:hover {
    color: #95e1d3;
    transform: translateY(-3px);
  }
`;

const FooterTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 25px;
  color: #fff;
  position: relative;
  font-family: var(--heading-font);
  letter-spacing: 1px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 40px;
    height: 2px;
    background-color: #95e1d3;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 12px;
`;

const FooterLinkItem = styled(Link)`
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  font-family: var(--body-font);
  cursor: pointer;
  display: inline-block;
  
  &:hover {
    color: #95e1d3;
    transform: translateX(5px);
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  font-family: var(--body-font);
`;

const ContactIcon = styled.div`
  margin-right: 10px;
  color: #95e1d3;
`;

const Copyright = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 30px;
  margin-top: 50px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
  font-family: var(--body-font);
`;

const columnVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: (custom) => ({ 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.8, delay: custom * 0.1 }
  })
};

function Footer() {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterColumn
          variants={columnVariants}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <FooterLogo>DROOMS</FooterLogo>
          <FooterDescription>
            Estúdio de música com 5 salas temáticas para ensaios e gravações. Equipamentos de alta qualidade e ambiente profissional para músicos de todos os níveis.
          </FooterDescription>
          <SocialIcons>
            <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </SocialIcon>
            <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </SocialIcon>
            <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </SocialIcon>
            <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </SocialIcon>
          </SocialIcons>
        </FooterColumn>
        
        <FooterColumn
          variants={columnVariants}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <FooterTitle>LINKS RÁPIDOS</FooterTitle>
          <FooterLinks>
            <FooterLink>
              <FooterLinkItem to="home" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                Home
              </FooterLinkItem>
            </FooterLink>
            <FooterLink>
              <FooterLinkItem to="salas" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                Salas
              </FooterLinkItem>
            </FooterLink>
            <FooterLink>
              <FooterLinkItem to="agenda" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                Agenda
              </FooterLinkItem>
            </FooterLink>
            <FooterLink>
              <FooterLinkItem to="sobre" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                Sobre
              </FooterLinkItem>
            </FooterLink>
            <FooterLink>
              <FooterLinkItem to="parceiros" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                Parceiros
              </FooterLinkItem>
            </FooterLink>
          </FooterLinks>
        </FooterColumn>
        
        <FooterColumn
          variants={columnVariants}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <FooterTitle>CONTATO</FooterTitle>
          <ContactItem>
            <ContactIcon>
              <i className="fas fa-map-marker-alt"></i>
            </ContactIcon>
            <div>Av. Paulista, 1000, São Paulo - SP</div>
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <i className="fas fa-phone-alt"></i>
            </ContactIcon>
            <div>(11) 99999-9999</div>
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <i className="fas fa-envelope"></i>
            </ContactIcon>
            <div>contato@drooms.com.br</div>
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <i className="fas fa-clock"></i>
            </ContactIcon>
            <div>Seg - Dom: 10h às 22h</div>
          </ContactItem>
        </FooterColumn>
        
        <FooterColumn
          variants={columnVariants}
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <FooterTitle>NEWSLETTER</FooterTitle>
          <FooterDescription>
            Inscreva-se para receber novidades, promoções e dicas para músicos.
          </FooterDescription>
          <form>
            <input 
              type="email" 
              placeholder="Seu e-mail" 
              style={{
                width: '100%',
                padding: '12px',
                marginBottom: '10px',
                border: 'none',
                borderRadius: '0',
                fontFamily: 'var(--body-font)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: '#fff'
              }}
            />
            <button 
              type="submit"
              style={{
                padding: '12px 20px',
                backgroundColor: '#95e1d3',
                color: '#343434',
                border: 'none',
                borderRadius: '0',
                cursor: 'pointer',
                fontWeight: '600',
                fontFamily: 'var(--body-font)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                transition: 'all 0.3s ease'
              }}
            >
              Inscrever-se
            </button>
          </form>
        </FooterColumn>
        
        <Copyright>
          &copy; {new Date().getFullYear()} Drooms Estúdio. Todos os direitos reservados.
        </Copyright>
      </FooterContainer>
    </FooterSection>
  );
}

export default Footer; 