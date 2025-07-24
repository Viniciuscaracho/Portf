import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, Database, Globe, Code, Server } from 'lucide-react'

const translations = {
  pt: {
    myProjects: 'Meus Projetos',
    myProjectsDesc: 'Uma seleção dos projetos que desenvolvi, demonstrando minhas habilidades em diferentes tecnologias e áreas de desenvolvimento.',
    categories: ['Todos', 'Full Stack', 'Backend', 'Frontend', 'Data Engineering'],
    code: 'Código',
    demo: 'Demo',
    more: 'Quer ver mais projetos? Confira meu GitHub para uma visão completa do meu trabalho.',
    github: 'Ver GitHub Completo',
  },
  en: {
    myProjects: 'My Projects',
    myProjectsDesc: 'A selection of projects I have developed, showcasing my skills in different technologies and development areas.',
    categories: ['All', 'Full Stack', 'Backend', 'Frontend', 'Data Engineering'],
    code: 'Code',
    demo: 'Demo',
    more: 'Want to see more projects? Check out my GitHub for a complete view of my work.',
    github: 'See Full GitHub',
  }
}

const Projects = ({ lang = 'pt' }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: {
        pt: 'Resume',
        en: 'Resume'
      },
      description: {
        pt: 'Sistema completo com painel admin, backend e frontend para gerenciamento de currículos.',
        en: 'Complete system with admin panel, backend and frontend for resume management.'
      },
      technologies: ['JavaScript', 'Ruby', 'HTML', 'CSS'],
      icon: <Code className="w-8 h-8" />, // ou outro ícone se preferir
      github: 'https://github.com/Viniciuscaracho/Resume',
      demo: null,
      category: 'Full Stack'
    },
    {
      title: 'ETL Deputies',
      description: 'Sistema web desenvolvido em Ruby on Rails para exibir dados extraídos da Câmara dos Deputados. Inclui pipeline ETL em Python para processamento de dados e deploy na AWS.',
      technologies: ['Ruby on Rails', 'Python', 'AWS', 'ETL'],
      icon: <Database className="w-8 h-8" />,
      github: 'https://github.com/viniciuscaracho/ETL_Deputies',
      demo: null,
      category: 'Full Stack'
    },
    {
      title: 'NBA WebCrawler',
      description: 'WebCrawler desenvolvido com Scrapy para automação de extração de dados de estatísticas da NBA. Inclui validação, limpeza e integração dos dados em banco online.',
      technologies: ['Python', 'Scrapy', 'Web Scraping', 'Data Processing'],
      icon: <Globe className="w-8 h-8" />,
      github: 'https://github.com/viniciuscaracho/Scrapy-WebDriver',
      demo: null,
      category: 'Data Engineering'
    },
    {
      title: 'MaxMilhas Challenge',
      description: 'Desafio backend desenvolvido em Java demonstrando habilidades em desenvolvimento de APIs e arquitetura de software.',
      technologies: ['Java', 'Spring Boot', 'API', 'Backend'],
      icon: <Server className="w-8 h-8" />,
      github: 'https://github.com/viniciuscaracho/MaxMilhasChallange',
      demo: null,
      category: 'Backend'
    },
    {
      title: 'Casa Organizada Users',
      description: 'Sistema de gerenciamento de usuários desenvolvido em Java, focado em boas práticas de desenvolvimento e arquitetura limpa.',
      technologies: ['Java', 'Backend', 'User Management'],
      icon: <Code className="w-8 h-8" />,
      github: 'https://github.com/viniciuscaracho/CasaOrganizadaUsers',
      demo: null,
      category: 'Backend'
    },
    {
      title: 'Landing Page',
      description: 'Landing page responsiva desenvolvida com HTML e CSS, demonstrando habilidades em frontend e design responsivo.',
      technologies: ['HTML', 'CSS', 'Responsive Design'],
      icon: <Globe className="w-8 h-8" />,
      github: 'https://github.com/viniciuscaracho/Landing_Page',
      demo: null,
      category: 'Frontend'
    },
    {
      title: 'Backend Project',
      description: 'Projeto backend desenvolvido em Ruby, explorando conceitos avançados de desenvolvimento server-side.',
      technologies: ['Ruby', 'Backend', 'API'],
      icon: <Server className="w-8 h-8" />,
      github: 'https://github.com/viniciuscaracho/BackEndProject',
      demo: null,
      category: 'Backend'
    },
    {
      title: {
        pt: 'Extract Web Kubernetes',
        en: 'Extract Web Kubernetes'
      },
      description: {
        pt: 'Projeto para extração de dados web utilizando Python, Ruby e integração com Kubernetes.',
        en: 'Project for web data extraction using Python, Ruby, and Kubernetes integration.'
      },
      technologies: ['Python', 'Ruby', 'Kubernetes'],
      icon: <Database className="w-8 h-8" />, // ou outro ícone se preferir
      github: 'https://github.com/Viniciuscaracho/Extract-Web-Kubernetes',
      demo: null,
      category: 'Data Engineering'
    },
  ]

  const t = translations[lang];
  const categories = t.categories;
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const filteredProjects = selectedCategory === categories[0] 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="projects" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.myProjects}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t.myProjectsDesc}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Project Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-blue-600 group-hover:scale-110 transition-transform duration-200">
                    {project.icon}
                  </div>
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{typeof project.title === 'string' ? project.title : project.title[lang]}</h3>
                <p className="text-gray-600 leading-relaxed">{typeof project.description === 'string' ? project.description : project.description[lang]}</p>
              </div>

              {/* Technologies */}
              <div className="p-6 pt-4">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Github size={18} />
                    <span className="text-sm font-medium">{t.code}</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm font-medium">{t.demo}</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            {t.more}
          </p>
          <a
            href="https://github.com/viniciuscaracho"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-all duration-200 transform hover:scale-105"
          >
            <Github size={20} />
            {t.github}
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

