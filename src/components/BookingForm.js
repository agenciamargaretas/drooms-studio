import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const FormContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 30px;
  border: 3px solid #343434;
  background-color: #ffffff;
  box-shadow: 8px 8px 0px #95e1d3;
  transform: rotate(-1deg);
`;

const FormTitle = styled.h2`
  margin-bottom: 20px;
  font-family: 'Courier New', monospace;
  color: #343434;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  text-align: left;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  font-family: 'Courier New', monospace;
  color: #343434;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 2px solid #343434;
  font-family: 'Courier New', monospace;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 2px solid #343434;
  font-family: 'Courier New', monospace;
`;

const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  padding: 10px;
  border: 2px solid #343434;
  font-family: 'Courier New', monospace;
`;

const SubmitButton = styled.button`
  background-color: #343434;
  color: #ffffff;
  border: none;
  padding: 15px 30px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transform: rotate(2deg);
  transition: transform 0.2s;
  font-family: 'Courier New', monospace;
  margin-top: 20px;
  
  &:hover {
    transform: rotate(0deg) scale(1.05);
    background-color: #000000;
  }
`;

const timeSlots = [
  "10:00 - 12:00",
  "12:00 - 14:00",
  "14:00 - 16:00",
  "16:00 - 18:00",
  "18:00 - 20:00",
  "20:00 - 22:00"
];

function BookingForm({ roomId }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [timeSlot, setTimeSlot] = useState(timeSlots[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Agendamento realizado com sucesso!\n\nSala: ${roomId}\nData: ${selectedDate.toLocaleDateString()}\nHorário: ${timeSlot}\nNome: ${name}\nEmail: ${email}\nTelefone: ${phone}`);
    // Aqui você pode adicionar a lógica para enviar os dados para um backend
  };

  return (
    <FormContainer>
      <FormTitle>AGENDAR SALA {roomId}</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Data:</Label>
          <StyledDatePicker
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            minDate={new Date()}
            dateFormat="dd/MM/yyyy"
          />
        </FormGroup>
        
        <FormGroup>
          <Label>Horário:</Label>
          <Select value={timeSlot} onChange={e => setTimeSlot(e.target.value)}>
            {timeSlots.map(slot => (
              <option key={slot} value={slot}>{slot}</option>
            ))}
          </Select>
        </FormGroup>
        
        <FormGroup>
          <Label>Nome:</Label>
          <Input 
            type="text" 
            value={name} 
            onChange={e => setName(e.target.value)} 
            required 
          />
        </FormGroup>
        
        <FormGroup>
          <Label>Email:</Label>
          <Input 
            type="email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            required 
          />
        </FormGroup>
        
        <FormGroup>
          <Label>Telefone:</Label>
          <Input 
            type="tel" 
            value={phone} 
            onChange={e => setPhone(e.target.value)} 
            required 
          />
        </FormGroup>
        
        <SubmitButton type="submit">CONFIRMAR</SubmitButton>
      </form>
    </FormContainer>
  );
}

export default BookingForm; 