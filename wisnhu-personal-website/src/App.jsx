import { React, useEffect, useState } from 'react'
import './App.css'
import ReactLogo from "./assets/react.svg"
import TailwindLogo from "./assets/tailwind.png"

function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize =() => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projects = [
    {
      title: "Personal Portofolio Website",
      description: "",
      tech: ["HTML", "JavaScript", "CSS"],
      link: "https://github.com/wisnhu106/portofolio",
      image: "/src/img/porto1.png"
    },
    {
      title: "Company Profile Website",
      description: "",
      tech: ["CSS", "React"],
      link: "https://github.com/wisnhu106/my-company-profile",
      image: ""
    },
    {
      title: "Personal Website",
      description: "",
      tech: ["React", "Tailwind", "Vite"],
      link: "https://github.com/wisnhu106/porto-react",
      image: "/src/img/porto3.png"
    }
  ]

  return (
    <>
      <header className='bg-[#0F172A] fixed shadow-md justify-center w-full z-100 opacity-90'>
        <nav className='max-w-7xl mx-auto px-4 py-4 w-screen flex text-[#F8FAFC] justify-between'>
          <a href='#' className='content-center text-2xl font-bold'>
            Muhammad <span className='text-[#38BDF8]'>Wisnhu</span>
          </a>
          <ul className='hidden md:flex justify-between gap-15 text-md items-center'>
            <li className='content-center'>
              <a href="#home" className='duration-300 hover:text-[#38BDF8]'>Home</a>
            </li>
            <li className='content-center'>
              <a href="#about" className='duration-300 hover:text-[#38BDF8]'>About Me</a>
            </li>
            <li className='content-center'>
              <a href="#projects" className='duration-300 hover:text-[#38BDF8]'>Projects</a>
            </li>
            <li className='content-center'>
              <a href="#contact" className='duration-300 hover:text-[#38BDF8]'>Contact</a>
            </li>
          </ul>

          <button
            type="button"
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-white transition ${open ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 w-6 bg-white transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-white transition ${open ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </nav>

        
        <div
          className={`
            md:hidden absolute top-full left-0 w-full bg-[#0F172A] border-t border-[#1E293B]
            overflow-hidden transition-all duration-300 ease-in-out
            ${open ? "max-h-80 opacity-100 pointer-events-auto" : "max-h-0 opacity-0 pointer-events-none"}
          `}
        >
          <ul className={`
            flex flex-col gap-5 px-6 text-[#CBD5E1] transition-all duration-300
            ${open ? "py-6" : "py-0"}
          `}>
            <li><a href="#home" onClick={() => setOpen(false)} className="hover:text-[#38BDF8] duration-300">Home</a></li>
            <li><a href="#about" onClick={() => setOpen(false)} className="hover:text-[#38BDF8] duration-300">About</a></li>
            <li><a href="#projects" onClick={() => setOpen(false)} className="hover:text-[#38BDF8] duration-300">Projects</a></li>
            <li><a href="#contact" onClick={() => setOpen(false)} className="hover:text-[#38BDF8] duration-300">Contact</a></li>
          </ul>
        </div>
      </header>

      <main className='bg-[linear-gradient(to_bottom,#020617_0%,#0F172A_35%,#1E1B4B_70%,#020617_100%)]'>
        <section id='home' className='relative w-full h-screen overflow-hidden flex items-center justify-center'>
          <img src={ReactLogo} alt="Logo React" className='absolute -top-30 -right-30 h-100 opacity-20 pointer-events-none animate-[spin_30s_linear_infinite]' />
          <img 
            src={TailwindLogo}
            alt='Logo Tailwind'
            className='absolute -left-30 bottom-0 pointer-events-none opacity-20 animate-[float_8s_ease-in-out_infinite] z-0'
          />
          <div className='max-w-3xl px-6 text-center z-10'>
            <h1 className='text-4xl md:text-5xl font-bold mb-4 text-[#F8FAFC]'>
              Hi, I'm Muhammad Wisnhu
            </h1>
            <h2 className='text-xl md:text-2xl text-[#CBD5E1] mb-6'>
              Frontend Developer crafting modern & responsive web experiences
            </h2>
            <p className='text-[#94A3B8] mb-8'>
              I build clean, fast, and user-friendly websites using modern frontend technologies.
            </p>
            <div className='flex gap-10 justify-center'>
              <a 
                href="#projects"
                className='px-6 py-4 rounded-lg bg-[#2563EB] text-white hover:bg-[#1D4ED8] duration-300'
              >
                View Projects
              </a>
              <a 
                href="#contact"
                className='px-6 py-4 rounded-lg border border-[#38BDF8] text-[#38BDF8] hover:bg-[#38BDF8] hover:text-[#020617] duration-300'
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>

        <section id='about' className='min-h-screen flex items-center px-6 md:pt-[10vh]'>
          <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center'>
            {/* photo profile */}
            <div className='relative group justify-self-center'>
              <div className='absolute -inset-1 bg-gradient-to-r from-[#38BDF8] to-[#2563EB] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000'></div>
              <div className='relative h-64 w-64 md:w-80 md:h-80 bg-[#1E293B] rounded-2xl border border-white/10 overflow-hidden'>
                <img src="/src/img/profile.jpeg" alt=" Profile Photo" className='w-full h-full object-cover' />
              </div>
            </div>

            {/* about content */}
            <div className='text-[#F8FAFC]'>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                About <span className='text-[#38BDF8]'>Me</span>
              </h2>
              <p className='text-[#94A3B8] leading-relaxed mb-6'>
                I am a Frontend Developer with a strong focus on creating high-performance, 
                visually stunning, and user-friendly web applications. My journey in web development 
                started with a curiosity about how things work on the internet, which evolved into a 
                professional career building seamless digital experiences.
              </p>

              {/* skill */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-2">
                  <span className="text-[#38BDF8]">▹</span>
                  <span className="text-sm text-[#CBD5E1]">React.js</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#38BDF8]">▹</span>
                  <span className="text-sm text-[#CBD5E1]">Tailwind CSS</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#38BDF8]">▹</span>
                  <span className="text-sm text-[#CBD5E1]">JavaScript (ES6+)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#38BDF8]">▹</span>
                  <span className="text-sm text-[#CBD5E1]">Responsive Design</span>
                </div>
              </div>
            </div>

          </div>
        </section>
        
        <section id='projects' className='min-h-screen px-6 py-20'>
          <div className='max-w-6xl mx-auto'>
            {/* Heading */}
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4'>
                Featured <span className='text-[#38BDF8]'>Projects</span>
              </h2>
              <div className='h-1 w-20 bg-[#38BDF8] mx-auto rounded-full'></div>
            </div>

            {/* Project Grid */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className='group bg-[#1E293B]/50 border border-white/10 rounded-2xl overflow-hidden hover:border-[#38BDF8]/50 transition-all duration-300 hover:-translate-y-2'
                >
                  {/* Project Image */}
                  <div className='relative h-48 overflow-hidden'>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' 
                    />
                    <div className='absolute inset-0 bg-[#0F172A]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center'>
                      <a href={project.link} target='_blank' className='bg-[#38BDF8] text-[#020617] px-4 py-2 rounded-full font-bold text-sm'>
                        View Details
                      </a>
                    </div>
                  </div>
              
                  {/* Project Info */}
                  <div className='p-6'>
                    <h3 className='text-xl font-bold text-[#F8FAFC] mb-2 group-hover:text-[#38BDF8] transition-colors'>
                      {project.title}
                    </h3>
                    <p className='text-[#94A3B8] text-sm mb-4 line-clamp-2'>
                      {project.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className='flex flex-wrap gap-2 mb-4'>
                      {project.tech.map((t, i) => (
                        <span key={i} className='text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-[#38BDF8]/10 text-[#38BDF8] rounded-md'>
                          {t}
                        </span>
                      ))}
                    </div>
                    
                    <a 
                      href={project.link} target='_blank'
                      className='text-sm text-[#CBD5E1] hover:text-[#38BDF8] flex items-center gap-2 transition-colors'
                    >
                      Github Repository <span>→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section id='contact' className='min-h-[95vh]'>
          <div></div>
        </section>
      </main>

      <footer className='bg-[#020617] h-[5vh]'>
        <div></div>
      </footer>
    </>
  )
}

export default App
