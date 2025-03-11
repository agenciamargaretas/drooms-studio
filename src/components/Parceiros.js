import React from 'react';
import styled from 'styled-components';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';

const ParceirosSection = styled.section`
  padding: 80px 0;
  background-color: #ffffff;
  position: relative;
  overflow: hidden;
`;

const ParceirosContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
`;

const ParceirosTitle = styled(motion.h2)`
  font-size: 3.5rem;
  margin-bottom: 60px;
  text-align: center;
  position: relative;
  font-family: var(--heading-font);
  letter-spacing: 2px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: #95e1d3;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 40px;
  height: 100px;
`;

const Logo = styled.img`
  max-width: 150px;
  max-height: 80px;
  filter: grayscale(100%);
  opacity: 0.7;
  transition: all 0.3s ease;
  
  &:hover {
    filter: grayscale(0%);
    opacity: 1;
  }
`;

const parceiros = [
  {
    name: 'Fender',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Fender_logo.svg'
  },
  {
    name: 'Gibson',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Gibson_logo.svg'
  },
  {
    name: 'Marshall',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Marshall_logo.svg'
  },
  {
    name: 'Roland',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Roland_Corporation_logo.svg'
  },
  {
    name: 'Yamaha',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Yamaha_logo.svg'
  },
  {
    name: 'Shure',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Shure_logo.svg'
  },
  {
    name: 'Pearl',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Pearl_Drums_logo.svg'
  },
  {
    name: 'Zildjian',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Zildjian_Logo.svg'
  }
];

const titleVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.8 }
  }
};

function Parceiros() {
  return (
    <ParceirosSection id="parceiros">
      <ParceirosContainer>
        <ParceirosTitle
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          MARCAS E PARCEIROS
        </ParceirosTitle>
      </ParceirosContainer>
      
      <Marquee gradient={false} speed={40}>
        {parceiros.map((parceiro, index) => (
          <LogoContainer key={index}>
            <Logo src={parceiro.logo} alt={parceiro.name} />
          </LogoContainer>
        ))}
      </Marquee>
    </ParceirosSection>
  );
}

export default Parceiros; 