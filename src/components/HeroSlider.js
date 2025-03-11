import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const HeroContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  position: relative;
  z-index: 1;
  overflow: hidden;
`;

const HeroBackground = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), 
              url(${props => props.bgImage}) no-repeat center center;
  background-size: cover;
  z-index: -1;
`;

const HeroContent = styled(motion.div)`
  z-index: 3;
  max-width: 1200px;
  position: relative;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroH1 = styled(motion.h1)`
  color: #fff;
  font-size: 64px;
  text-align: center;
  font-family: var(--heading-font);
  letter-spacing: 2px;
  margin-bottom: 24px;
  
  @media screen and (max-width: 768px) {
    font-size: 48px;
  }
  
  @media screen and (max-width: 480px) {
    font-size: 36px;
  }
`;

const HeroP = styled(motion.p)`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  font-family: var(--body-font);
  margin-bottom: 40px;
  
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

const HeroBtnWrapper = styled(motion.div)`
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Button = styled(Link)`
  border-radius: 0;
  background: ${({ primary }) => (primary ? '#95e1d3' : 'transparent')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '16px 48px' : '14px 36px')};
  color: ${({ primary }) => (primary ? '#343434' : '#ffffff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: ${({ primary }) => (primary ? 'none' : '2px solid #ffffff')};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  font-family: var(--body-font);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${({ primary }) => (primary ? '#343434' : '#95e1d3')};
    transition: all 0.3s ease;
    z-index: -1;
  }
  
  &:hover {
    color: ${({ primary }) => (primary ? '#ffffff' : '#343434')};
  }
  
  &:hover:before {
    left: 0;
  }
`;

const SliderDots = styled.div`
  position: absolute;
  bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? '#95e1d3' : '#ffffff')};
  margin: 0 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.2);
  }
`;

const slides = [
  {
    image: 'https://source.unsplash.com/random/1600x900/?band',
    title: 'FAÇA SUA MÚSICA ACONTECER',
    description: 'Estúdio profissional com 5 salas temáticas para ensaios e gravações'
  },
  {
    image: 'https://source.unsplash.com/random/1600x900/?guitar',
    title: 'EQUIPAMENTOS DE PRIMEIRA',
    description: 'Amplificadores, instrumentos e equipamentos de alta qualidade'
  },
  {
    image: 'https://source.unsplash.com/random/1600x900/?studio',
    title: 'AMBIENTE INSPIRADOR',
    description: 'Espaço projetado para potencializar sua criatividade musical'
  }
];

const backgroundVariants = {
  initial: { scale: 1.2, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 1 } },
  exit: { opacity: 0, transition: { duration: 0.5 } }
};

const contentVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.5 } },
  exit: { y: -50, opacity: 0, transition: { duration: 0.5 } }
};

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === slides.length - 1 ? 0 : current + 1);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [current]);
  
  return (
    <HeroContainer id="home">
      <AnimatePresence mode="wait">
        <HeroBackground 
          key={`bg-${current}`}
          bgImage={slides[current].image}
          variants={backgroundVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        />
      </AnimatePresence>
      
      <AnimatePresence mode="wait">
        <HeroContent
          key={`content-${current}`}
          variants={contentVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <HeroH1>{slides[current].title}</HeroH1>
          <HeroP>{slides[current].description}</HeroP>
          <HeroBtnWrapper>
            <Button 
              to="salas" 
              smooth={true} 
              duration={800} 
              spy={true} 
              exact="true" 
              offset={-80}
              primary="true" 
              dark="true"
            >
              Conheça as Salas
            </Button>
            <Button 
              to="agenda" 
              smooth={true} 
              duration={800} 
              spy={true} 
              exact="true" 
              offset={-80}
            >
              Agende Agora
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </AnimatePresence>
      
      <SliderDots>
        {slides.map((_, index) => (
          <Dot 
            key={index} 
            active={index === current} 
            onClick={() => setCurrent(index)} 
          />
        ))}
      </SliderDots>
    </HeroContainer>
  );
}

export default HeroSlider; 