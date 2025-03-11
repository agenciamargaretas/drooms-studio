import React, { useState } from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { motion } from 'framer-motion';

const AgendaSection = styled.section`
  padding: 100px 0;
  background-color: #ffffff;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"%3E%3Cpath fill="%2395e1d3" fill-opacity="0.05" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"%3E%3C/path%3E%3C/svg%3E');
    background-size: cover;
    background-position: center;
    opacity: 0.5;
    z-index: 0;
  }
`;

const AgendaContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
`;

const AgendaTitle = styled(motion.h2)`
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

const AgendaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const SalaCarousel = styled(motion.div)`
  width: 48%;
  position: relative;
  
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 40px;
  }
`;

const SalaImage = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  border-radius: 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
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
`;

const SalaInfo = styled.div`
  text-align: center;
`;

const SalaName = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: #343434;
  font-family: var(--heading-font);
  letter-spacing: 1px;
`;

const SalaDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
  font-family: var(--body-font);
`;

const CalendarWrapper = styled(motion.div)`
  width: 48%;
  background-color: #fff;
  border-radius: 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 30px;
  
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  
  .react-calendar {
    width: 100%;
    border: none;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
    font-family: var(--body-font);
    
    .react-calendar__tile--active {
      background-color: #95e1d3;
      color: #343434;
    }
    
    .react-calendar__tile--now {
      background-color: #f0f0f0;
    }
    
    .react-calendar__navigation button:enabled:hover,
    .react-calendar__navigation button:enabled:focus,
    .react-calendar__tile:enabled:hover,
    .react-calendar__tile:enabled:focus {
      background-color: rgba(149, 225, 211, 0.2);
    }
    
    .react-calendar__month-view__days__day--weekend {
      color: #d10000;
    }
  }
`;

const TimeSlots = styled.div`
  margin-top: 30px;
`;

const TimeSlotTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: #343434;
  font-family: var(--heading-font);
  letter-spacing: 1px;
`;

const TimeSlotGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TimeSlot = styled.div`
  padding: 10px;
  text-align: center;
  background-color: ${props => props.selected ? '#95e1d3' : props.available ? '#f9f9f9' : '#f0f0f0'};
  color: ${props => props.selected ? '#343434' : props.available ? '#343434' : '#999'};
  border: 1px solid ${props => props.selected ? '#95e1d3' : '#eee'};
  cursor: ${props => props.available ? 'pointer' : 'not-allowed'};
  transition: all 0.3s ease;
  font-family: var(--body-font);
  
  &:hover {
    background-color: ${props => props.available && !props.selected ? 'rgba(149, 225, 211, 0.2)' : ''};
  }
`;

const BookingForm = styled.div`
  margin-top: 30px;
  display: ${props => props.show ? 'block' : 'none'};
  animation: ${props => props.show ? 'fadeIn 0.5s ease' : 'none'};
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const FormTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: #343434;
  font-family: var(--heading-font);
  letter-spacing: 1px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 0.9rem;
  color: #666;
  font-family: var(--body-font);
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #eee;
  border-radius: 0;
  font-family: var(--body-font);
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #95e1d3;
    box-shadow: 0 0 0 2px rgba(149, 225, 211, 0.2);
  }
`;

const SubmitButton = styled.button`
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
  width: 100%;
  margin-top: 10px;
  
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

function Agenda() {
  const [date, setDate] = useState(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  
  const [salas, setSalas] = useState([
    {
      id: 'queen',
      name: 'Sala Queen',
      image: '/images/foto_0013.jpg',
      description: 'Inspirada na lendária banda Queen, esta sala oferece um ambiente sofisticado com equipamentos de alta qualidade.'
    },
    {
      id: 'led',
      name: 'Sala Led',
      image: '/images/foto_0031.jpg',
      description: 'Em homenagem ao Led Zeppelin, esta sala é ideal para bandas de rock que buscam um som potente e autêntico.'
    },
    {
      id: 'peppers',
      name: 'Sala Peppers',
      image: '/images/foto_0046.jpg',
      description: 'Inspirada no Red Hot Chili Peppers, esta sala é perfeita para bandas de funk rock e alternative.'
    },
    {
      id: 'rush',
      name: 'Sala Rush',
      image: '/images/foto_0053.jpg',
      description: 'Dedicada aos amantes do rock progressivo, a Sala Rush oferece espaço amplo e equipamentos de alta precisão.'
    }
  ]);
  
  const titleVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };
  
  const leftVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.8, delay: 0.2 }
    }
  };
  
  const rightVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.8, delay: 0.2 }
    }
  };
  
  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', 
    '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
  ];
  
  const handleDateChange = (newDate) => {
    setDate(newDate);
    setSelectedTimeSlot(null);
  };
  
  const handleTimeSlotSelect = (time) => {
    setSelectedTimeSlot(time);
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Agendamento confirmado!\nSala: ${salas[0].name}\nData: ${date.toLocaleDateString()}\nHorário: ${selectedTimeSlot}\nNome: ${formData.name}`);
    // Aqui você enviaria os dados para o backend
  };
  
  return (
    <AgendaSection id="agenda">
      <AgendaContainer>
        <AgendaTitle
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          AGENDE SEU HORÁRIO
        </AgendaTitle>
        
        <AgendaWrapper>
          <SalaCarousel
            variants={leftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SalaImage image={salas[0].image} />
            <SalaInfo>
              <SalaName>{salas[0].name}</SalaName>
              <SalaDescription>{salas[0].description}</SalaDescription>
            </SalaInfo>
          </SalaCarousel>
          
          <CalendarWrapper
            variants={rightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Calendar 
              onChange={handleDateChange} 
              value={date} 
              minDate={new Date()}
            />
            
            <TimeSlots>
              <TimeSlotTitle>HORÁRIOS DISPONÍVEIS - {date.toLocaleDateString()}</TimeSlotTitle>
              <TimeSlotGrid>
                {timeSlots.map((slot, index) => (
                  <TimeSlot 
                    key={index}
                    available={slot.available}
                    selected={selectedTimeSlot === slot.time && slot.available}
                    onClick={() => slot.available && handleTimeSlotSelect(slot.time)}
                  >
                    {slot.time}
                  </TimeSlot>
                ))}
              </TimeSlotGrid>
            </TimeSlots>
            
            <BookingForm show={selectedTimeSlot !== null}>
              <FormTitle>COMPLETE SEU AGENDAMENTO</FormTitle>
              <form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label>Nome:</Label>
                  <Input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleInputChange} 
                    required 
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label>Email:</Label>
                  <Input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    required 
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label>Telefone:</Label>
                  <Input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleInputChange} 
                    required 
                  />
                </FormGroup>
                
                <SubmitButton type="submit">Confirmar Agendamento</SubmitButton>
              </form>
            </BookingForm>
          </CalendarWrapper>
        </AgendaWrapper>
      </AgendaContainer>
    </AgendaSection>
  );
}

export default Agenda; 