"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ArrowRight, Code2, Palette, Zap, Database, Globe, Smartphone, ChevronDown, ExternalLink, Star, Facebook } from 'lucide-react';
import { generateResumePDF } from './utils/generateResumePDF';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const textArray = ['Front-End Developer', 'UI/UX Enthusiast', '', 'Tech Innovator'];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % textArray.length;
      const fullText = textArray[i];

      setCurrentText(
        isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopNum, typingSpeed]);


  const projects = [
    {
      title: "Lawlaw Delights",
      description: "Your trusted marketplace for authentic Filipino seafood delicacies from Bulan, Sorsogon. Features secure shopping, recipes, and fast delivery of fresh products.",
      demo: "https://bulan-lawlaw-delicacy-system-production.up.railway.app/login",
      github: "https://github.com/KaiiGritt/Bulan-lawlaw-delicacy-system"
    },
    {
      title: "GhostSec",
      description: "A cybersecurity education platform focused on ethical hacking and digital security. Includes interactive tools like password analyzers, threat maps, and phishing tests.",
      demo: "https://ghostsec-michaelas-projects-43685615.vercel.app/index.html?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExYlUwNWtqa21pc2NVNDZzYXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR4KjObBlSC8pYRZXF-CclVJAwvkoFob5rUJmxW9nO4EfGH71UzdPjYuF7rO3A_aem_zkZZNE7SfaY3wkwUGq8aLA",
      github: "https://github.com/yourrepo"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 50%)`
          }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-shift"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzE2MTgyMiIgc3Ryb2tlLXdpZHRoPSIuNSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </div>

      {/* Cursor Follower */}
      <div 
        className="fixed w-96 h-96 rounded-full pointer-events-none z-0 blur-3xl transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1), transparent 70%)'
        }}
      ></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-xl border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {"<DEV/>"}
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Skills', 'Work', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
            >
              Hire Me
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800">
            {['Home', 'Services', 'Work', 'Testimonials', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-6 py-4 hover:bg-gray-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto w-full z-10">
          <div className="text-center">
            <div className="mb-6 inline-block">
              <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium backdrop-blur-sm">
                👋 Welcome to my portfolio
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-text">
                John Loyd Serapion
              </span>
            </h1>
            
            <div className="h-20 flex items-center justify-center mb-8">
              <h2 className="text-3xl md:text-4xl text-gray-300">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                  {currentText}
                </span>
                <span className="animate-blink">|</span>
              </h2>
            </div>
            
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              I craft exceptional digital experiences through clean code, innovative design, 
              and a passion for solving complex problems. Let's build something amazing together.
            </p>
            
<div className="flex flex-wrap justify-center gap-4 mb-16">
  {/* View Work Button */}
  <a 
    href="#work" 
    className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2"
  >
    View My Work
    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </a>

  {/* Download Resume Button */}
  <button
    onClick={generateResumePDF}
    className="px-8 py-4 border border-gray-700 rounded-full hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
  >
    Download Resume
  </button>

  {/* Get In Touch Button */}
  <a 
    href="#contact" 
    className="px-8 py-4 border border-gray-700 rounded-full hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
  >
    Get In Touch
  </a>
</div>




            <div className="flex justify-center gap-6">
              <a href="https://github.com/KaiiGritt.com" className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-500 hover:scale-110 transition-all duration-300 border border-gray-700">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/oreonuts.com" className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-500 hover:scale-110 transition-all duration-300 border border-gray-700">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="johnloydserapion96@gmail.com" className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-500 hover:scale-110 transition-all duration-300 border border-gray-700">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-blue-400" />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              Skills & Expertise
            </h2>
            <p className="text-gray-400 mt-3">
              A blend of frontend development, UI/UX design, and essential tools.
            </p>
          </div>

          {/* 3 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* FRONTEND */}
            <div className="bg-gray-900/40 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 shadow-lg transition hover:border-purple-500/40 hover:shadow-purple-500/20">
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-semibold">Frontend Development</h3>
              </div>

              <div className="space-y-4">

                <div className="flex items-center gap-3 text-gray-300">
                  <Globe className="w-5 h-5 text-blue-400" /> HTML5
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <Palette className="w-5 h-5 text-teal-400" /> CSS3
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <Zap className="w-5 h-5 text-yellow-300" /> JavaScript (ES6+)
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <Code2 className="w-5 h-5 text-cyan-300" /> React.js
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <Code2 className="w-5 h-5 text-indigo-300" /> Next.js
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <Palette className="w-5 h-5 text-sky-300" /> Tailwind CSS
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <Zap className="w-5 h-5 text-orange-300" /> Framer Motion
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <Smartphone className="w-5 h-5 text-green-300" /> Responsive Layouts
                </div>
              </div>
            </div>

            {/* UI / UX */}
            <div className="bg-gray-900/40 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 shadow-lg transition hover:border-pink-500/40 hover:shadow-pink-500/20">
              <div className="flex items-center gap-3 mb-6">
                <Palette className="w-6 h-6 text-pink-400" />
                <h3 className="text-xl font-semibold">UI / UX Design</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Palette className="w-5 h-5 text-purple-300" /> Figma
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <Smartphone className="w-5 h-5 text-blue-300" /> Mobile UI Design
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <Globe className="w-5 h-5 text-yellow-300" /> Website UI Design
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <Zap className="w-5 h-5 text-green-300" /> Prototyping
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <Star className="w-5 h-5 text-pink-200" /> Design Systems
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <Star className="w-5 h-5 text-indigo-300" /> Wireframing & User Flows
                </div>
              </div>
            </div>

            {/* TOOLS */}
            <div className="bg-gray-900/40 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 shadow-lg transition hover:border-yellow-500/40 hover:shadow-yellow-500/20">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-6 h-6 text-yellow-400" />
                <h3 className="text-xl font-semibold">Tools & Technologies</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Github className="w-5 h-5 text-white" /> Git & GitHub
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <ExternalLink className="w-5 h-5 text-blue-400" /> Vercel Deployment
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-red-400" /> Collaboration & Communication
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <Zap className="w-5 h-5 text-green-300" /> Problem Solving
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <Star className="w-5 h-5 text-purple-200" /> Creativity
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Projects Section */}
      <section id="projects" className="relative py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              Featured Projects
            </h2>
            <p className="text-gray-400 mt-3">
              A selection of the work I've completed — blending development and design.
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gray-900/40 backdrop-blur-xl border border-gray-800 rounded-3xl overflow-hidden shadow-lg transition hover:shadow-purple-500/20 hover:border-purple-500/40"
              >
                {/* Live Demo Preview */}
                <div className="relative overflow-hidden h-64 bg-gray-950">
                  <iframe
                    src={project.demo}
                    title={project.title}
                    className="w-full h-full border-0 pointer-events-none scale-[0.5] origin-top-left"
                    style={{
                      width: '200%',
                      height: '200%',
                      transform: 'scale(0.5)',
                      transformOrigin: 'top left'
                    }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>

                  {/* Hover overlay to make iframe clickable */}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-950/80 backdrop-blur-sm"
                  >
                    <div className="text-center">
                      <ExternalLink className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                      <span className="text-white font-semibold">View Live Demo</span>
                    </div>
                  </a>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                  {/* Buttons */}
                  <div className="flex items-center gap-3 mt-4">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-purple-600/20 border border-purple-600/40 text-purple-300 hover:bg-purple-600/30 transition text-sm flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-gray-800/40 border border-gray-700 text-gray-300 hover:bg-gray-800 transition text-sm flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" /> Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto z-10 text-center">
          <div className="inline-block px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full text-pink-400 text-sm font-medium backdrop-blur-sm mb-6">
            Get In Touch
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create something exceptional together.
          </p>
          
          <a 
            href="mailto:johnloydserapion96@gmail.com" 
            className="inline-block px-12 py-5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Start a Project
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400">
            © 2024 John Loyd Serapion. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Terms</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(50px, 50px) scale(1.1); }
        }
        .animate-gradient-shift {
          animation: gradient-shift 15s ease infinite;
        }
        @keyframes gradient-text {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-text {
          background-size: 200% 200%;
          animation: gradient-text 5s ease infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-start infinite;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;