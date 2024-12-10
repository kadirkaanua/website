import React from 'react';
import { Github, Linkedin, Mail, Menu, X, Terminal, Cloud, Database, Code, Server } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const devopsSkills = [
    { category: 'Cloud Platforms', skills: [
      { name: 'AWS', level: '90%' },
      { name: 'Azure', level: '85%' },
      { name: 'GCP', level: '80%' }
    ]},
    { category: 'Container & Orchestration', skills: [
      { name: 'Docker', level: '95%' },
      { name: 'Kubernetes', level: '85%' },
      { name: 'Docker Compose', level: '90%' }
    ]},
    { category: 'CI/CD & IaC', skills: [
      { name: 'Jenkins', level: '90%' },
      { name: 'Terraform', level: '85%' },
      { name: 'GitLab CI', level: '88%' }
    ]},
    { category: 'Monitoring & Logging', skills: [
      { name: 'Prometheus', level: '85%' },
      { name: 'Grafana', level: '90%' },
      { name: 'ELK Stack', level: '80%' }
    ]}
  ];

  const experiences = [
    {
      title: 'DevOps Engineer',
      company: 'Şirket Adı',
      period: '2023 - Şimdi',
      responsibilities: [
        'Kubernetes cluster yönetimi ve optimizasyonu',
        'CI/CD pipeline geliştirme ve bakımı',
        'Cloud altyapı tasarımı ve implementasyonu'
      ]
    }
  ];

  const certifications = [
    'AWS Certified DevOps Engineer Professional',
    'Certified Kubernetes Administrator (CKA)',
    'HashiCorp Certified Terraform Associate'
  ];

  return (
    <div className="min-h-screen bg-gray-100">
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
              <a href="#certifications" className="hover:text-blue-400">Sertifikalar</a>
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
              <a href="#certifications" className="block px-3 py-2 hover:bg-gray-700">Sertifikalar</a>
              <a href="#contact" className="block px-3 py-2 hover:bg-gray-700">İletişim</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Profile Photo */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8 flex justify-center">
            <img 
              src="/src/assets/profile.jpg" 
              alt="Kadir Kaan" 
              className="rounded-full w-48 h-48 object-cover border-4 border-white shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Kadir Kaan</h1>
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
              DevOps ve Cloud teknolojileri konusunda deneyimli bir mühendisim. Kubernetes, Docker, AWS, Azure 
              ve diğer modern teknolojiler konusunda uzmanlığa sahibim. Sürekli entegrasyon ve sürekli dağıtım 
              (CI/CD) süreçlerini optimize ederek, yazılım geliştirme ve operasyon süreçlerini iyileştirmeye 
              odaklanıyorum.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Teknik Yetenekler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {devopsSkills.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">{skill.name}</span>
                      <span>{skill.level}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 rounded-full h-2" 
                        style={{width: skill.level}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">İş Deneyimi</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                <p className="text-gray-600 mb-2">{exp.company} | {exp.period}</p>
                <ul className="list-disc list-inside text-gray-600">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex} className="mb-1">{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Sertifikalar</h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <ul className="space-y-4">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-center">
                  <div className="h-4 w-4 rounded-full bg-blue-600 mr-4"></div>
                  <span className="text-gray-700">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">İletişim</h2>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/kadirkaanua" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
              <Linkedin size={24} />
            </a>
            <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-blue-600">
              <Mail size={24} />
            </a>
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
