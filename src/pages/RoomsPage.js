import React from 'react';
import styled from 'styled-components';
import RoomCard from '../components/RoomCard';

const RoomsContainer = styled.div`
  padding: 40px 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 40px;
  text-shadow: 2px 2px 0px #95e1d3;
  font-family: 'Courier New', monospace;
  color: #343434;
`;

const RoomsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const rooms = [
  {
    id: 1,
    name: "SALA ROCK",
    description: "Perfeita para bandas de rock, com amplificadores Marshall e bateria Pearl."
  },
  {
    id: 2,
    name: "SALA POP",
    description: "Equipada com sistema de som JBL e teclado Yamaha, ideal para música pop."
  },
  {
    id: 3,
    name: "SALA ACÚSTICA",
    description: "Ambiente tratado acusticamente para gravações e ensaios acústicos."
  },
  {
    id: 4,
    name: "SALA METAL",
    description: "Preparada para bandas pesadas, com double pedal e amplificadores potentes."
  },
  {
    id: 5,
    name: "SALA EXPERIMENTAL",
    description: "Equipada com sintetizadores e equipamentos para experimentação sonora."
  }
];

function RoomsPage() {
  return (
    <RoomsContainer>
      <Title>NOSSAS SALAS</Title>
      <RoomsGrid>
        {rooms.map(room => (
          <RoomCard key={room.id} room={room} />
        ))}
      </RoomsGrid>
    </RoomsContainer>
  );
}

export default RoomsPage; 