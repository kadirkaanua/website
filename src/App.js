import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X, Terminal, Cloud, Code, Server } from 'lucide-react';

// Countdown Timer Component
const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = targetDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-blue-900 text-white text-center py-4">
      <h2 className="text-2xl font-bold">Geri Sayım</h2>
      <p className="text-lg">
        {timeLeft.hours || 0} Saat, {timeLeft.minutes || 0} Dakika, {timeLeft.seconds || 0} Saniye
      </p>
    </div>
  );
};

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Target date 36 hours from now
  const targetDate = new Date();
  targetDate.setHours(targetDate.getHours() + 36);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Countdown Timer */}
      <CountdownTimer targetDate={targetDate} />

      {/* Navigation */}
      <nav className="bg-gray-900 text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Cloud className="h-6 w-6" />
              <span className="text-xl font-bold">kadirkan.cloud</span>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-blue-400">Hakkımda</a>
              <a href="#skills" className="hover:text-blue-400">Yetenekler</a>
              <a href="#experience" className="hover:text-blue-400">Deneyim</a>
              <a href="#contact" className="hover:text-blue-400">İletişim</a>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#about" className="block px-3 py-2 hover:bg-gray-700">Hakkımda</a>
              <a href="#skills" className="block px-3 py-2 hover:bg-gray-700">Yetenekler</a>
              <a href="#experience" className="block px-3 py-2 hover:bg-gray-700">Deneyim</a>
              <a href="#contact" className="block px-3 py-2 hover:bg-gray-700">İletişim</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8 flex justify-center">
            <img 
              src="/assets/profile.jpg" 
              alt="Abdülkadir Kemal Kan" 
              className="rounded-full w-48 h-48 object-cover border-4 border-white shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Abdülkadir Kemal Kan</h1>
          <p className="text-xl md:text-2xl mb-6">DevOps Engineer</p>
          <div className="flex justify-center space-x-4">
            <Terminal className="h-8 w-8" />
            <Cloud className="h-8 w-8" />
            <Server className="h-8 w-8" />
            <Code className="h-8 w-8" />
          </div>
        </div>
      </div>

      {/* Remaining sections */}
    </div>
  );
};

export default Portfolio;

