import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import BookingForm from '../components/BookingForm';

const BookingContainer = styled.div`
  padding: 40px 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 40px;
  text-shadow: 2px 2px 0px #95e1d3;
  font-family: 'Courier New', monospace;
  color: #343434;
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 30px;
  color: #343434;
  text-decoration: none;
  font-weight: bold;
  font-family: 'Courier New', monospace;
  border-bottom: 2px solid #95e1d3;
  padding-bottom: 2px;
  
  &:hover {
    color: #95e1d3;
  }
`;

function BookingPage() {
  const { salaId } = useParams();
  
  return (
    <BookingContainer>
      <Title>AGENDAR ENSAIO</Title>
      <BackLink to="/salas">← VOLTAR PARA SALAS</BackLink>
      
      {salaId ? (
        <BookingForm roomId={salaId} />
      ) : (
        <div>
          <p>Por favor, selecione uma sala primeiro.</p>
          <BackLink to="/salas">IR PARA SALAS</BackLink>
        </div>
      )}
    </BookingContainer>
  );
}

export default BookingPage; 