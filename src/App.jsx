import React from 'react';
import { FaFolder, FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaArrowRight } from 'react-icons/fa';

function App() {
  // Lista de links
  const links = [
    {
      title: 'Portfólio Principal',
      description: 'Projetos, cases e experiências profissionais',
      icon: <FaFolder size={20} />,
      url: 'portfolio-ks12khhxq-moraes-projects-d7153032.vercel.app', // Substitua pelos seus links reais
    },
    {
      title: 'LinkedIn',
      description: 'Perfil profissional e conexões',
      icon: <FaLinkedin size={20} />,
      url: 'https://www.linkedin.com/in/paulo-gabriel-688437222/',
    },
    {
      title: 'GitHub',
      description: 'Meus códigos e projetos open-source',
      icon: <FaGithub size={20} />,
      url: 'https://github.com/Gabri3lMoraes',
    },
    {
      title: 'Instagram Tech',
      description: 'Conteúdo sobre tecnologia e IA',
      icon: <FaInstagram size={20} />,
      url: '#',
    },
    {
      title: 'Contato',
      description: 'Fale comigo por WhatsApp ou Email',
      icon: <FaEnvelope size={20} />,
      url: 'https://wa.me/5581997713780',
    },
  ];

  return (
    /* Container Principal */
    <div className="relative min-h-screen text-gray-100 font-sans overflow-hidden bg-black">
      
      {/* 1. Camada de Fundo: O Vídeo */}
      <video
  autoPlay
  loop
  muted
  playsInline
  preload="auto"
  className="absolute inset-0 w-full h-full object-cover z-0"
>
  <source src="/f.mp4" type="video/mp4" />
  Seu navegador não suporta vídeos.
</video>
      
      {/* 2. Camada do Meio: Overlay Escuro para dar contraste aos botões */}
      <div className="absolute inset-0 bg-[#0b1120]/80 z-10 pointer-events-none"></div>

      {/* 3. Camada da Frente: Conteúdo da Página */}
      <div className="relative z-20 flex flex-col items-center py-16 px-4 w-full min-h-screen overflow-y-auto">
        
        {/* Cabeçalho / Perfil */}
        <div className="flex flex-col items-center max-w-3xl text-center mb-10">
          <div className="w-24 h-24 mb-4 rounded-full bg-gray-800 p-1 border-2 border-[#1e293b] overflow-hidden">
            <img 
              src="/foto.png" 
              alt="Moraes" 
              className="w-full h-100 object-cover rounded-full"
            />
          </div>
          
          <h1 className="text-2xl font-bold text-white mb-2 shadow-black drop-shadow-lg">
            Gabriel Moraes
          </h1>
          
          <p className="text-[#00d8ff] font-medium text-sm md:text-base mb-2 drop-shadow-md">
            Professor de TIC | Analista de Sistemas | IA · RAG · n8n · React · Mobile
          </p>
          
          <p className="text-gray-300 text-sm">
            Engenheiro de Prompts e Desenvolvedor Full Stack.
          </p>
        </div>

        {/* Lista de Links */}
        <div className="w-full max-w-2xl flex flex-col gap-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center p-4 bg-[#111827]/75 backdrop-blur-md border border-gray-700 hover:border-[#00d8ff]/50 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,216,255,0.15)]"
            >
              {/* Ícone */}
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#1f2937]/80 text-[#00d8ff] group-hover:bg-[#00d8ff] group-hover:text-black transition-colors duration-300">
                {link.icon}
              </div>
              
              {/* Textos */}
              <div className="ml-4 flex-grow">
                <h2 className="text-base font-semibold text-gray-100 group-hover:text-white transition-colors">
                  {link.title}
                </h2>
                <p className="text-sm text-gray-400 mt-1">
                  {link.description}
                </p>
              </div>
              
              {/* Seta indicativa */}
              <div className="ml-4 text-gray-500 group-hover:text-[#00d8ff] transition-colors duration-300">
                <FaArrowRight size={18} />
              </div>
            </a>
          ))}
        </div>

        {/* Rodapé */}
        <footer className="mt-16 text-center text-xs text-gray-400">
          © 2026 Gabriel Moraes. Desenvolvido com React & Tailwind.
        </footer>

      </div>
    </div>
  );
}

export default App;