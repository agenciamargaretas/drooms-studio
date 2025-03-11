import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const SalasSection = styled.section`
  padding: 100px 0;
  background-color: #f9f9f9;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"%3E%3Cpath fill="%2395e1d3" fill-opacity="0.05" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"%3E%3C/path%3E%3C/svg%3E');
    background-size: cover;
    background-position: center;
    opacity: 0.5;
    z-index: 0;
  }
`;

const SalasContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
`;

const SalasTitle = styled(motion.h2)`
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

const SalasWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SalasNav = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  flex-wrap: wrap;
  gap: 10px;
`;

const SalaTab = styled(motion.div)`
  padding: 12px 25px;
  margin: 0 5px;
  cursor: pointer;
  border: 2px solid ${({ active }) => (active ? '#95e1d3' : 'transparent')};
  background-color: ${({ active }) => (active ? '#95e1d3' : 'transparent')};
  color: ${({ active }) => (active ? '#343434' : '#666')};
  font-weight: ${({ active }) => (active ? '600' : '400')};
  transition: all 0.3s ease;
  font-family: var(--body-font);
  border-radius: 0;
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
    background-color: #95e1d3;
    transition: all 0.3s ease;
    z-index: -1;
  }
  
  &:hover {
    color: #343434;
    border-color: #95e1d3;
  }
  
  &:hover:before {
    left: 0;
  }
`;

const SalaContent = styled(motion.div)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const SalaImage = styled(motion.div)`
  width: 48%;
  height: 400px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  border-radius: 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
  }
  
  &:hover:before {
    background-color: rgba(0, 0, 0, 0.1);
  }
  
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;

const SalaInfo = styled(motion.div)`
  width: 48%;
  padding: 20px;
  
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const SalaName = styled.h3`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #343434;
  font-family: var(--heading-font);
  letter-spacing: 1px;
`;

const SalaDescription = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 30px;
  color: #666;
  font-family: var(--body-font);
`;

const SalaFeatures = styled.ul`
  list-style: none;
  margin-bottom: 30px;
`;

const SalaFeature = styled.li`
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 10px;
  color: #666;
  font-family: var(--body-font);
  display: flex;
  align-items: center;
  
  &:before {
    content: '✓';
    color: #95e1d3;
    margin-right: 10px;
    font-weight: bold;
  }
`;

const SalaButton = styled.a`
  display: inline-block;
  padding: 14px 36px;
  background-color: #95e1d3;
  color: #343434;
  border: none;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  font-family: var(--body-font);
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
    background-color: #343434;
    transition: all 0.3s ease;
    z-index: -1;
  }
  
  &:hover {
    color: #ffffff;
  }
  
  &:hover:before {
    left: 0;
  }
`;

const salas = [
  {
    id: 'queen',
    name: 'Sala Queen',
    image: 'https://source.unsplash.com/random/800x600/?music,band',
    description: 'Inspirada na lendária banda Queen, esta sala oferece um ambiente sofisticado com equipamentos de alta qualidade para ensaios e gravações.',
    features: [
      'Amplificador Marshall JCM800',
      'Bateria Pearl Reference',
      'Sistema de PA completo',
      'Tratamento acústico premium',
      'Capacidade para 6 músicos'
    ]
  },
  {
    id: 'led',
    name: 'Sala Led',
    image: 'https://source.unsplash.com/random/800x600/?guitar,rock',
    description: 'Em homenagem ao Led Zeppelin, esta sala é ideal para bandas de rock que buscam um som potente e autêntico.',
    features: [
      'Amplificadores Marshall e Orange',
      'Bateria Tama Starclassic',
      'Microfones Shure SM57 e SM58',
      'Iluminação temática',
      'Capacidade para 5 músicos'
    ]
  },
  {
    id: 'peppers',
    name: 'Sala Peppers',
    image: 'https://source.unsplash.com/random/800x600/?bass,funk',
    description: 'Inspirada no Red Hot Chili Peppers, esta sala é perfeita para bandas de funk rock e alternative. Ambiente colorido e vibrante para estimular a criatividade.',
    features: [
      'Amplificador Ampeg SVT para baixo',
      'Bateria DW Collector\'s Series',
      'Pedais de efeito variados',
      'Sistema de gravação básico',
      'Capacidade para 5 músicos'
    ]
  },
  {
    id: 'rush',
    name: 'Sala Rush',
    image: 'https://source.unsplash.com/random/800x600/?drums',
    description: 'Dedicada aos amantes do rock progressivo, a Sala Rush oferece espaço amplo e equipamentos de alta precisão para performances técnicas.',
    features: [
      'Bateria Tama Starclassic completa',
      'Amplificador Mesa Boogie Dual Rectifier',
      'Teclado Nord Stage 3',
      'Monitores de palco de alta definição',
      'Capacidade para 6 músicos'
    ]
  },
  {
    id: 'floyd',
    name: 'Sala Floyd',
    image: 'https://source.unsplash.com/random/800x600/?psychedelic',
    description: 'Em homenagem ao Pink Floyd, esta sala é ideal para experimentações sonoras e bandas psicodélicas. Ambiente imersivo com iluminação especial.',
    features: [
      'Sistema de som quadrifônico',
      'Projeções visuais nas paredes',
      'Sintetizadores e efeitos especiais',
      'Amplificadores Hiwatt Custom 100',
      'Capacidade para 7 músicos'
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.5 }
  }
};

const titleVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.8 }
  }
};

const tabVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: (custom) => ({ 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5, delay: custom * 0.1 }
  })
};

const contentVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5, delay: 0.3 }
  }
};

function Salas() {
  const [activeSala, setActiveSala] = useState(salas[0].id);
  
  const currentSala = salas.find(sala => sala.id === activeSala);
  
  return (
    <SalasSection id="salas">
      <SalasContainer>
        <SalasTitle
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          CONHEÇA NOSSAS SALAS
        </SalasTitle>
        <SalasWrapper>
          <SalasNav
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {salas.map((sala, index) => (
              <SalaTab 
                key={sala.id}
                active={activeSala === sala.id}
                onClick={() => setActiveSala(sala.id)}
                variants={tabVariants}
                custom={index}
              >
                {sala.name}
              </SalaTab>
            ))}
          </SalasNav>
          
          <AnimatePresence mode="wait">
            <SalaContent
              key={activeSala}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <SalaImage 
                image={currentSala.image}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <SalaInfo
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <SalaName>{currentSala.name}</SalaName>
                <SalaDescription>{currentSala.description}</SalaDescription>
                <SalaFeatures>
                  {currentSala.features.map((feature, index) => (
                    <SalaFeature key={index}>{feature}</SalaFeature>
                  ))}
                </SalaFeatures>
                <SalaButton href={`#agenda-${currentSala.id}`}>Agendar Esta Sala</SalaButton>
              </SalaInfo>
            </SalaContent>
          </AnimatePresence>
        </SalasWrapper>
      </SalasContainer>
    </SalasSection>
  );
}

export default Salas; 