import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import RoomsPage from './pages/RoomsPage';
import BookingPage from './pages/BookingPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/salas" element={<RoomsPage />} />
            <Route path="/agendar" element={<BookingPage />} />
            <Route path="/agendar/:salaId" element={<BookingPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 