import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeContainer = styled.div`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
`;

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 60px;
`;

const Title = styled.h1`
  font-size: 5rem;
  margin: 0;
  letter-spacing: -2px;
  text-shadow: 3px 3px 0px #95e1d3;
  transform: rotate(-1deg);
  font-family: 'Courier New', monospace;
  color: #343434;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-top: 10px;
  font-family: 'Courier New', monospace;
  color: #343434;
`;

const BrutalBox = styled.div`
  border: 4px solid #343434;
  padding: 30px;
  margin-top: 40px;
  transform: rotate(-2deg);
  background-color: #95e1d3;
  box-shadow: 8px 8px 0px #343434;
  max-width: 600px;
  width: 100%;
`;

const BrutalButton = styled(Link)`
  display: inline-block;
  background-color: #343434;
  color: #ffffff;
  border: none;
  padding: 15px 30px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
  transform: rotate(2deg);
  transition: transform 0.2s;
  text-decoration: none;
  font-family: 'Courier New', monospace;
  
  &:hover {
    transform: rotate(0deg) scale(1.05);
    background-color: #000000;
  }
`;

const CDGraphic = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(circle, #95e1d3 0%, #ffffff 70%);
  border: 1px solid #343434;
  margin: 40px auto;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #343434;
    border: 2px solid #95e1d3;
  }
`;

function HomePage() {
  return (
    <HomeContainer>
      <HeroSection>
        <Title>DROOMS</Title>
        <Subtitle>ESTÚDIO DE MÚSICA</Subtitle>
        <CDGraphic />
        <BrutalBox>
          <h2>FAÇA SUA MÚSICA ACONTECER</h2>
          <p>5 SALAS DE ENSAIO DISPONÍVEIS PARA SUA BANDA</p>
          <BrutalButton to="/salas">AGENDE AGORA</BrutalButton>
        </BrutalBox>
      </HeroSection>
    </HomeContainer>
  );
}

export default HomePage; 