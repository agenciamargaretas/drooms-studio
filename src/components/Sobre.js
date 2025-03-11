import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SobreSection = styled.section`
  padding: 80px 0;
  background-color: #f9f9f9;
`;

const SobreContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SobreTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 40px;
  text-align: center;
  position: relative;
  font-family: var(--heading-font);
  letter-spacing: 2px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: #95e1d3;
  }
`;

const SobreContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const SobreImage = styled.div`
  width: 48%;
  height: 400px;
  background-image: url('https://source.unsplash.com/random/800x600/?music,studio,band');
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;

const SobreInfo = styled.div`
  width: 48%;
  
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const SobreText = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 20px;
  color: #666;
  font-family: var(--body-font);
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  
  @media screen and (max-width: 480px) {
    flex-wrap: wrap;
  }
`;

const StatItem = styled(motion.div)`
  text-align: center;
  width: 30%;
  
  @media screen and (max-width: 480px) {
    width: 48%;
    margin-bottom: 20px;
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #95e1d3;
  margin-bottom: 5px;
  font-family: var(--heading-font);
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: #666;
  font-family: var(--body-font);
`;

function Sobre() {
  return (
    <SobreSection id="sobre">
      <SobreContainer>
        <SobreTitle>SOBRE A DROOMS</SobreTitle>
        <SobreContent>
          <SobreImage />
          <SobreInfo>
            <SobreText>
              A Drooms é um estúdio de música fundado em 2015 por músicos apaixonados que entendiam a necessidade de um espaço de qualidade para ensaios e gravações.
            </SobreText>
            <SobreText>
              Nossa missão é proporcionar um ambiente inspirador e profissional para músicos de todos os níveis. Contamos com 5 salas temáticas, cada uma com equipamentos de alta qualidade e tratamento acústico profissional.
            </SobreText>
            <SobreText>
              Além das salas de ensaio, oferecemos serviços de gravação, mixagem e masterização, com engenheiros de som experientes e equipamentos de ponta.
            </SobreText>
            
            <StatsContainer>
              <StatItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <StatNumber>5</StatNumber>
                <StatLabel>Salas Temáticas</StatLabel>
              </StatItem>
              <StatItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <StatNumber>1000+</StatNumber>
                <StatLabel>Bandas Atendidas</StatLabel>
              </StatItem>
              <StatItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <StatNumber>8</StatNumber>
                <StatLabel>Anos de Experiência</StatLabel>
              </StatItem>
            </StatsContainer>
          </SobreInfo>
        </SobreContent>
      </SobreContainer>
    </SobreSection>
  );
}

export default Sobre; 