import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Terminal, Cloud, Code, Server } from 'lucide-react';

// Countdown Timer Component
const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = useCallback(() => {
    const difference = targetDate - new Date();
    if (difference > 0) {
      return {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { hours: 0, minutes: 0, seconds: 0 };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <div className="bg-blue-900 text-white text-center py-4">
      <h2 className="text-2xl font-bold">Geri Sayım</h2>
      <p className="text-lg">
        {timeLeft.hours} Saat, {timeLeft.minutes} Dakika, {timeLeft.seconds} Saniye
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

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Hakkımda</h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-gray-600 leading-relaxed">
              Yaklaşık 4 yıldır, Mühendislik eğitimi ve teknolojik ilgilerim doğrultusunda, ilerleyen teknolojiler ve sürekli olarak gelişen DevOps kültüründe, sürekli olarak öğrenmeyi ve gelişmeyi hedefleyen birisi olarak çalışmaktayım. Cloud platformları, konteynerizasyon, CI/CD ve IaC gibi modern DevOps pratiklerinde deneyim sahibiyim. Özellikle Kubernetes, Docker, AWS, Terraform ve Ansible konularında uzmanlık geliştirdim.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Teknik Yetenekler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Cloud & Infrastructure</h3>
              <p>AWS, Kubernetes, Docker</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 kadirkan.cloud - Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

