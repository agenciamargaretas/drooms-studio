import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const ChatButton = styled(motion.div)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  background-color: #95e1d3;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #343434;
  font-size: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  z-index: 999;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25);
  }
`;

const ChatWindow = styled(motion.div)`
  position: fixed;
  bottom: 100px;
  right: 30px;
  width: 350px;
  height: 450px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 999;
`;

const ChatHeader = styled.div`
  background-color: #95e1d3;
  color: #343434;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--heading-font);
  letter-spacing: 1px;
`;

const ChatTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
`;

const CloseButton = styled.div`
  cursor: pointer;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.2);
  }
`;

const ChatMessages = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Message = styled.div`
  max-width: 80%;
  padding: 10px 15px;
  border-radius: 15px;
  font-size: 0.9rem;
  line-height: 1.4;
  font-family: var(--body-font);
  
  ${props => props.isUser ? `
    align-self: flex-end;
    background-color: #95e1d3;
    color: #343434;
    border-bottom-right-radius: 5px;
  ` : `
    align-self: flex-start;
    background-color: #f1f1f1;
    color: #343434;
    border-bottom-left-radius: 5px;
  `}
`;

const ChatInput = styled.div`
  display: flex;
  padding: 10px;
  border-top: 1px solid #eee;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 20px;
  font-size: 0.9rem;
  outline: none;
  font-family: var(--body-font);
  
  &:focus {
    border-color: #95e1d3;
  }
`;

const SendButton = styled.button`
  background-color: #95e1d3;
  color: #343434;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #343434;
    color: #fff;
  }
`;

const chatVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { 
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.8, 
    y: 20,
    transition: { 
      duration: 0.3
    }
  }
};

const buttonVariants = {
  initial: { scale: 0, opacity: 0 },
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      type: "spring",
      stiffness: 300,
      damping: 20,
      delay: 1
    }
  },
  hover: { 
    scale: 1.1,
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.25)",
    transition: { 
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  tap: { scale: 0.9 }
};

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Olá! Como posso ajudar você hoje?", isUser: false }
  ]);
  const [input, setInput] = useState("");
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  
  const handleSendMessage = () => {
    if (input.trim() === "") return;
    
    // Adiciona a mensagem do usuário
    setMessages([...messages, { text: input, isUser: true }]);
    setInput("");
    
    // Simula resposta automática após 1 segundo
    setTimeout(() => {
      const botResponses = [
        "Obrigado por entrar em contato! Um de nossos atendentes responderá em breve.",
        "Você pode agendar uma sala diretamente pelo nosso site na seção 'Agenda'.",
        "Temos 5 salas temáticas disponíveis para ensaio e gravação.",
        "Nosso horário de funcionamento é de segunda a domingo, das 10h às 22h.",
        "Oferecemos pacotes especiais para bandas que agendam horários regulares."
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      setMessages(prev => [...prev, { text: randomResponse, isUser: false }]);
    }, 1000);
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  
  return (
    <>
      <ChatButton 
        onClick={toggleChat}
        variants={buttonVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
      >
        <i className={isOpen ? "fas fa-times" : "fas fa-comments"}></i>
      </ChatButton>
      
      <AnimatePresence>
        {isOpen && (
          <ChatWindow
            variants={chatVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ChatHeader>
              <ChatTitle>CHAT DROOMS</ChatTitle>
              <CloseButton onClick={toggleChat}>
                <i className="fas fa-times"></i>
              </CloseButton>
            </ChatHeader>
            
            <ChatMessages>
              {messages.map((message, index) => (
                <Message key={index} isUser={message.isUser}>
                  {message.text}
                </Message>
              ))}
            </ChatMessages>
            
            <ChatInput>
              <Input 
                type="text" 
                placeholder="Digite sua mensagem..." 
                value={input} 
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
              />
              <SendButton onClick={handleSendMessage}>
                <i className="fas fa-paper-plane"></i>
              </SendButton>
            </ChatInput>
          </ChatWindow>
        )}
      </AnimatePresence>
    </>
  );
}

export default ChatWidget; 