import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  border: 3px solid #343434;
  background-color: #ffffff;
  padding: 20px;
  margin: 20px;
  width: 300px;
  transform: rotate(${props => props.rotate || '0deg'});
  transition: transform 0.3s;
  box-shadow: 6px 6px 0px #95e1d3;
  
  &:hover {
    transform: rotate(0deg) scale(1.03);
  }
`;

const RoomTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: #343434;
  font-family: 'Courier New', monospace;
`;

const RoomImage = styled.div`
  height: 180px;
  background-color: #95e1d3;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #343434;
  
  &::after {
    content: '${props => props.roomNumber}';
    font-size: 5rem;
    font-weight: bold;
    color: #343434;
  }
`;

const RoomDescription = styled.p`
  margin-bottom: 20px;
  font-family: 'Courier New', monospace;
`;

const BookButton = styled(Link)`
  display: inline-block;
  background-color: #343434;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  transform: rotate(-1deg);
  transition: all 0.2s;
  font-family: 'Courier New', monospace;
  
  &:hover {
    transform: rotate(1deg);
    background-color: #000000;
  }
`;

function RoomCard({ room }) {
  const rotations = ['-1deg', '1deg', '-2deg', '2deg', '0deg'];
  const randomRotation = rotations[Math.floor(Math.random() * rotations.length)];
  
  return (
    <Card rotate={randomRotation}>
      <RoomTitle>{room.name}</RoomTitle>
      <RoomImage roomNumber={room.id} />
      <RoomDescription>{room.description}</RoomDescription>
      <BookButton to={`/agendar/${room.id}`}>AGENDAR</BookButton>
    </Card>
  );
}

export default RoomCard; 