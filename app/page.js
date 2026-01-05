'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const observerRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in-view');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('.scroll-animate');
    sections.forEach((section) => observerRef.current.observe(section));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowBackToTop(window.scrollY > 300);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const skills = [
    {
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js'],
      icon: (
        <div className="w-16 h-16 bg-[#64ffda]/10 rounded-lg flex items-center justify-center group-hover:bg-[#64ffda]/20 transition-all">
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="#e6f1ff">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>
      ),
    },
    {
      title: 'Backend Development',
      description: 'Creating robust server-side applications',
      technologies: ['Node.js', 'Express', 'Laravel', 'Spring Boot', 'ASP.NET'],
      icon: (
        <div className="w-16 h-16 bg-[#64ffda]/10 rounded-lg flex items-center justify-center group-hover:bg-[#64ffda]/20 transition-all">
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="#e6f1ff">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
          </svg>
        </div>
      ),
    },
    {
      title: 'Application Development',
      description: 'Building professional desktop applications',
      technologies: ['C#', 'Windows Forms', 'WPF'],
      icon: (
        <div className="w-16 h-16 bg-[#64ffda]/10 rounded-lg flex items-center justify-center group-hover:bg-[#64ffda]/20 transition-all">
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="#e6f1ff">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
      ),
    },
    {
      title: 'Database Management',
      description: 'Designing and managing efficient databases',
      technologies: ['MongoDB', 'MySQL', 'PostgreSQL', 'SSMS'],
      icon: (
        <div className="w-16 h-16 bg-[#64ffda]/10 rounded-lg flex items-center justify-center group-hover:bg-[#64ffda]/20 transition-all">
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="#e6f1ff">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
          </svg>
        </div>
      ),
    },
    {
      title: 'Design & Tools',
      description: 'Crafting beautiful and user-friendly designs',
      technologies: ['Figma', 'Photoshop', 'Canva', 'UI/UX Design'],
      icon: (
        <div className="w-16 h-16 bg-[#64ffda]/10 rounded-lg flex items-center justify-center group-hover:bg-[#64ffda]/20 transition-all">
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="#e6f1ff">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        </div>
      ),
    },
    {
      title: 'Cloud & Marketing',
      description: 'Deploying and promoting digital solutions',
      technologies: ['AWS', 'Digital Marketing', 'SEO'],
      icon: (
        <div className="w-16 h-16 bg-[#64ffda]/10 rounded-lg flex items-center justify-center group-hover:bg-[#64ffda]/20 transition-all">
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="#e6f1ff">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        </div>
      ),
    },
  ];

  const experiences = [
    {
      title: 'Co-Founder & Lead Developer',
      company: 'Flax Digital Marketing Agency',
      period: '2025 - Present',
      responsibilities: [
        'Developing custom web applications and portfolio websites for clients',
        'Leading full-stack development using modern technologies',
        'Designing UI/UX for client projects using Figma',
        'Managing cloud infrastructure and deployments on AWS',
      ],
      technologies: ['React', 'Next.js', 'Laravel', 'Spring Boot', 'AWS'],
    },
    {
      title: 'Freelance Graphic Designer',
      company: 'Self-Employed',
      period: '2022 - Present',
      responsibilities: [
        'Creating web designs and prototypes in Figma',
        'Designing logos and social media posts using Canva and Photoshop',
        'Providing design solutions for various clients',
      ],
      technologies: ['Figma', 'Photoshop', 'Canva', 'UI/UX'],
    },
  ];

  const projects = [
    {
      title: 'Elandra - Luxury Handbag Store',
      category: 'E-commerce Development',
      description: 'Full-featured luxury handbag e-commerce platform with admin panel, product management, and secure checkout system',
      technologies: ['Laravel', 'PHP', 'MongoDB', 'MySQL'],
      githubUrl: 'https://github.com/LakminaLK/Elandra',  // Replace with your GitHub link
      liveUrl: '#',    // Replace with your live site link
      icon: (
        <div className="w-12 h-12 bg-[#64ffda]/10 rounded-lg flex items-center justify-center">
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="#e6f1ff">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </div>
      ),
    },
    {
      title: 'TripMate - Tourism Platform',
      category: 'Web Application',
      description: 'Hotel booking platform designed for Sri Lankan tourism, serving both locals and international tourists with real-world problem solving',
      technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
      githubUrl: 'https://github.com/LakminaLK/TripMate',
      liveUrl: '#',  // Replace with your live site link
      icon: (
        <div className="w-12 h-12 bg-[#64ffda]/10 rounded-lg flex items-center justify-center">
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="#e6f1ff">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
      ),
    },
    {
      title: 'GreenGrocer - Grocery Store',
      category: 'Frontend Development',
      description: 'Modern and responsive grocery store website with interactive UI and smooth user experience',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/LakminaLK/Green-grocer',  // Replace with your GitHub link
      liveUrl: '#',    // Replace with your live site link
      icon: (
        <div className="w-12 h-12 bg-[#64ffda]/10 rounded-lg flex items-center justify-center">
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="#e6f1ff">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
      ),
    },
    {
      title: 'Event Management System',
      category: 'Desktop Application',
      description: 'Windows application using C# and SSMS for Event management system including Customer management, Event management, Resource management',
      technologies: ['C#', 'SSMS', 'Windows Forms'],
      githubUrl: '#',  // Replace with your GitHub link
      liveUrl: '#',    // Replace with your live site link
      icon: (
        <div className="w-12 h-12 bg-[#64ffda]/10 rounded-lg flex items-center justify-center">
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="#e6f1ff">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      ),
    },
    {
      title: 'Catering Management System',
      category: 'Full Stack Application',
      description: 'Complete business management system for Grand Lakmina Catering Service, handling products, bookings, items, bills and business operations',
      technologies: ['PostgreSQL', 'Express', 'React', 'Node.js'],
      githubUrl: '#',  // Replace with your GitHub link
      liveUrl: '#',    // Replace with your live site link
      icon: (
        <div className="w-12 h-12 bg-[#64ffda]/10 rounded-lg flex items-center justify-center">
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="#e6f1ff">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        </div>
      ),
    },
    {
      title: 'POS System - Laki Bake House',
      category: 'Enterprise Application',
      description: 'Point of Sale system for bakery business with inventory management, sales tracking, and reporting features',
      technologies: ['Spring Boot', 'Java', 'MySQL'],
      githubUrl: '#',  // Replace with your GitHub link
      liveUrl: '#',    // Replace with your live site link
      icon: (
        <div className="w-12 h-12 bg-[#64ffda]/10 rounded-lg flex items-center justify-center">
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="#e6f1ff">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a192f] text-[#e6f1ff]">
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-[#0a192f]/80 backdrop-blur-lg shadow-lg border-[#64ffda]/10'
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#home" className="text-xl font-bold text-[#64ffda] hover:text-[#52ccb8] transition-colors">
              Lakmina Welagedara
            </a>
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`hover:text-[#64ffda] transition-colors ${
                    activeSection === link.href.slice(1) ? 'text-[#64ffda]' : ''
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            {/* Mobile menu button */}
            <button className="md:hidden text-[#64ffda]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f]"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#64ffda] rounded-full filter blur-[128px]"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#64ffda] rounded-full filter blur-[128px]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            Hi, I'm <span className="text-[#64ffda]">Lakmina Welagedara</span>
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-[#8892b0] animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Full Stack Developer | Application Developer | UI/UX Designer
          </p>
          <p className="text-base md:text-lg mb-8 text-[#8892b0] max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            I'm a 2nd year BSc (Hons) Computer Science undergraduate at APIIT / Staffordshire University UK, 
            crafting modern web applications and designing intuitive user experiences from Kegalle, Sri Lanka
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <a
              href="#projects"
              className="bg-[#64ffda] text-[#0a192f] px-8 py-3 rounded-lg font-semibold hover:bg-[#52ccb8] transition-all hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-[#64ffda] text-[#64ffda] px-8 py-3 rounded-lg font-semibold hover:bg-[#64ffda]/10 transition-all"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4 scroll-animate">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About <span className="text-[#64ffda]">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center animate-slide-in-left">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-[#64ffda] to-[#112240] p-1">
                <div className="w-full h-full rounded-full bg-[#112240] overflow-hidden relative">
                  {/* Replace 'profile.jpg' with your actual image filename */}
                  <Image
                    src="/dp2.jpeg"
                    alt="Lakmina Welagedara"
                    fill
                    sizes="(max-width: 768px) 256px, 320px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="animate-slide-in-right">
              <h3 className="text-2xl font-bold mb-4 text-[#64ffda]">
                Computer Science Student & Full-Stack Developer
              </h3>
              <p className="text-[#8892b0] mb-6 leading-relaxed">
                I'm currently pursuing my BSc (Hons) in Computer Science at APIIT, affiliated with Staffordshire University UK. 
                My journey began at Pinnawala Central College, where I developed a passion for technology and problem-solving. 
                Today, I combine my academic knowledge with practical experience to create innovative digital solutions.
              </p>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-[#112240] p-4 rounded-lg border border-[#64ffda]/20 hover:border-[#64ffda] transition-all hover:transform hover:-translate-y-1">
                  <p className="text-2xl font-bold text-[#64ffda]">3+</p>
                  <p className="text-sm text-[#8892b0]">Years Experience</p>
                </div>
                <div className="bg-[#112240] p-4 rounded-lg border border-[#64ffda]/20 hover:border-[#64ffda] transition-all hover:transform hover:-translate-y-1">
                  <p className="text-2xl font-bold text-[#64ffda]">5+</p>
                  <p className="text-sm text-[#8892b0]">Happy Clients</p>
                </div>
                <div className="bg-[#112240] p-4 rounded-lg border border-[#64ffda]/20 hover:border-[#64ffda] transition-all hover:transform hover:-translate-y-1">
                  <p className="text-2xl font-bold text-[#64ffda]">6+</p>
                  <p className="text-sm text-[#8892b0]">Live Websites</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise Section */}
      <section id="skills" className="py-20 px-4 bg-[#0a192f] scroll-animate">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
            Skills & <span className="text-[#64ffda]">Expertise</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group bg-[#112240] p-6 rounded-lg border border-[#64ffda]/20 hover:border-[#64ffda] transition-all hover:transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-[#64ffda]">{skill.title}</h3>
                <p className="text-[#8892b0] mb-4 text-sm">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-[#64ffda]/10 text-[#64ffda] px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-20 px-4 scroll-animate">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
            Work <span className="text-[#64ffda]">Experience</span>
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#64ffda]/30 hidden md:block"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="mb-12 relative animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-[#64ffda] rounded-full hidden md:block"></div>
                
                <div className="md:ml-20 bg-[#112240] p-6 rounded-lg border border-[#64ffda]/20 hover:border-[#64ffda] transition-all">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-[#64ffda]">{exp.title}</h3>
                    <p className="text-[#8892b0]">{exp.company}</p>
                    <p className="text-sm text-[#64ffda]/70">{exp.period}</p>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-[#8892b0] flex items-start">
                        <span className="text-[#64ffda] mr-2">▹</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-[#64ffda]/10 text-[#64ffda] px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 px-4 bg-[#0a192f] scroll-animate">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
            Featured <span className="text-[#64ffda]">Projects</span>
          </h2>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#112240] p-6 rounded-lg border border-[#64ffda]/20 hover:border-[#64ffda] transition-all hover:transform hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="flex-shrink-0">{project.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-[#64ffda]">{project.title}</h3>
                        <span className="text-xs bg-[#64ffda]/10 text-[#64ffda] px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-[#8892b0] mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-[#0a192f] text-[#64ffda] px-3 py-1 rounded-full border border-[#64ffda]/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    {project.githubUrl === '#' ? (
                      <div className="relative group">
                        <div className="w-10 h-10 bg-[#8892b0]/10 rounded-lg flex items-center justify-center cursor-not-allowed opacity-50">
                          <svg className="w-5 h-5" fill="#8892b0" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                          </svg>
                        </div>
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-[#112240] text-[#8892b0] text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-[#64ffda]/20">
                          Not Available
                        </div>
                      </div>
                    ) : (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-[#64ffda]/10 hover:bg-[#64ffda]/20 rounded-lg flex items-center justify-center transition-all"
                      >
                        <svg className="w-5 h-5" fill="#e6f1ff" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                    
                    {project.liveUrl === '#' ? (
                      <div className="relative group">
                        <div className="w-10 h-10 bg-[#8892b0]/10 rounded-lg flex items-center justify-center cursor-not-allowed opacity-50">
                          <svg className="w-5 h-5" fill="none" stroke="#8892b0" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-[#112240] text-[#8892b0] text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-[#64ffda]/20">
                          Not Available
                        </div>
                      </div>
                    ) : (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-[#64ffda]/10 hover:bg-[#64ffda]/20 rounded-lg flex items-center justify-center transition-all"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="#e6f1ff" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Work Together Section */}
      <section id="contact" className="py-20 px-4 scroll-animate">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Let's Work <span className="text-[#64ffda]">Together</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Get In Touch */}
            <div className="bg-[#112240] p-8 rounded-lg border border-[#64ffda]/20">
              <h3 className="text-2xl font-bold mb-4 text-[#64ffda]">Get In Touch</h3>
              <p className="text-[#8892b0] mb-6">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#64ffda]/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="#e6f1ff" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[#8892b0]">Location</p>
                    <p className="text-[#64ffda]">Kegalle, Sri Lanka</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#64ffda]/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="#e6f1ff" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[#8892b0]">Email</p>
                    <a href="mailto:lkpcc500@gmail.com" className="text-[#64ffda] hover:underline">
                      lkpcc500@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#64ffda]/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="#e6f1ff" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[#8892b0]">Phone</p>
                    <a href="tel:+94742931329" className="text-[#64ffda] hover:underline">
                      +94 742 931 329
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#64ffda]/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5" fill="#e6f1ff" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[#8892b0]">WhatsApp</p>
                    <a 
                      href="https://wa.me/94726931329?text=Hi%20Lakmina%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you." 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#64ffda] hover:underline"
                    >
                      +94 726 931 329
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#64ffda]/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="#e6f1ff" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[#8892b0]">Availability</p>
                    <p className="text-[#64ffda]">Open for freelance work</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ready to Start */}
            <div className="bg-[#112240] p-8 rounded-lg border border-[#64ffda]/20 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4 text-[#64ffda]">Ready to start a project?</h3>
              <p className="text-[#8892b0] mb-6">
                Let's discuss your project requirements and how I can help bring your ideas to life. 
                Schedule a meeting and let's get started!
              </p>

              <a
                href="https://wa.me/94726931329?text=Hi%20Lakmina%2C%20I%27d%20like%20to%20schedule%20a%20meeting%20to%20discuss%20a%20project.%20Are%20you%20available%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#64ffda] text-[#0a192f] px-8 py-3 rounded-lg font-semibold hover:bg-[#52ccb8] transition-all hover:scale-105 text-center mb-6 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Schedule A Meeting
              </a>

              <div className="flex gap-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/lakminawelagedara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#64ffda]/10 hover:bg-[#64ffda]/20 rounded-lg flex items-center justify-center transition-all"
                >
                  <svg className="w-6 h-6" fill="#e6f1ff" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/LakminaLK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#64ffda]/10 hover:bg-[#64ffda]/20 rounded-lg flex items-center justify-center transition-all"
                >
                  <svg className="w-6 h-6" fill="#e6f1ff" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/lakmina_lk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#64ffda]/10 hover:bg-[#64ffda]/20 rounded-lg flex items-center justify-center transition-all"
                >
                  <svg className="w-6 h-6" fill="#e6f1ff" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://web.facebook.com/people/Lakmina-Welagedara/61555485236522/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#64ffda]/10 hover:bg-[#64ffda]/20 rounded-lg flex items-center justify-center transition-all"
                >
                  <svg className="w-6 h-6" fill="#e6f1ff" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a192f] border-t border-[#64ffda]/10 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#8892b0]">© 2026 Lakmina Welagedara. All rights reserved.</p>
            
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/lakminawelagedara"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#64ffda]/10 hover:bg-[#64ffda]/20 rounded-lg flex items-center justify-center transition-all"
              >
                <svg className="w-5 h-5" fill="#e6f1ff" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://github.com/LakminaLK"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#64ffda]/10 hover:bg-[#64ffda]/20 rounded-lg flex items-center justify-center transition-all"
              >
                <svg className="w-5 h-5" fill="#e6f1ff" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/lakmina_lk/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#64ffda]/10 hover:bg-[#64ffda]/20 rounded-lg flex items-center justify-center transition-all"
              >
                <svg className="w-5 h-5" fill="#e6f1ff" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://web.facebook.com/people/Lakmina-Welagedara/61555485236522/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#64ffda]/10 hover:bg-[#64ffda]/20 rounded-lg flex items-center justify-center transition-all"
              >
                <svg className="w-5 h-5" fill="#e6f1ff" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 w-12 h-12 bg-[#64ffda] hover:bg-[#52ccb8] rounded-lg flex items-center justify-center text-[#0a192f] transition-all hover:scale-110 shadow-lg ${
              showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
            }`}
            aria-label="Back to top"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </footer>
    </div>
  );
}