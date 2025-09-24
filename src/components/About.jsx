import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

// Import dos ícones das tecnologias
import pythonIcon from '../assets/icons/python.png'
import javaIcon from '../assets/icons/java.png'
import railsIcon from '../assets/icons/rails.png'
import nodejsIcon from '../assets/icons/nodejs.png'
import awsIcon from '../assets/icons/aws.png'
import dockerIcon from '../assets/icons/docker.png'
import seleniumIcon from '../assets/icons/selenium.png'
import cypressIcon from '../assets/icons/cypress.png'
import postmanIcon from '../assets/icons/postman.png'
import githubIcon from '../assets/icons/github.png'

const translations = {
  pt: {
    about: 'Sobre Mim',
    aboutDesc: 'Sou um analista de QA e entusiasta de DevOps com foco em automação, garantia de qualidade e integração de sistemas. Atualmente cursando Engenharia de Software na UTFPR.',
    experience: 'Experiência Profissional',
    education: 'Educação',
    degree: 'Bacharelado em Engenharia de Software',
    university: 'Universidade Tecnológica Federal do Paraná (UTFPR)',
    period: '2023 - 2027',
    tech: 'Tecnologias & Ferramentas',
    methodologies: 'Metodologias',
    methodologiesList: ['Agile', 'BDD', 'TDD', 'DevOps', 'CI/CD'],
    certifications: 'Certificações',
  },
  en: {
    about: 'About Me',
    aboutDesc: 'I am a QA analyst and DevOps enthusiast focused on automation, quality assurance, and systems integration. Currently studying Software Engineering at UTFPR.',
    experience: 'Professional Experience',
    education: 'Education',
    degree: 'Bachelor in Software Engineering',
    university: 'Federal University of Technology – Paraná (UTFPR)',
    period: '2023 - 2027',
    tech: 'Technologies & Tools',
    methodologies: 'Methodologies',
    methodologiesList: ['Agile', 'BDD', 'TDD', 'DevOps', 'CI/CD'],
    certifications: 'Certifications',
  }
}

const About = ({ lang = 'pt' }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const technologies = [
    { name: 'Python', icon: pythonIcon, category: 'language' },
    { name: 'Java', icon: javaIcon, category: 'language' },
    { name: 'Ruby on Rails', icon: railsIcon, category: 'language' },
    { name: 'Node.js', icon: nodejsIcon, category: 'language' },
    { name: 'AWS Cloud', icon: awsIcon, category: 'cloud' },
    { name: 'Docker', icon: dockerIcon, category: 'tool' },
    { name: 'Selenium', icon: seleniumIcon, category: 'tool' },
    { name: 'Cypress', icon: cypressIcon, category: 'tool' },
    { name: 'Postman', icon: postmanIcon, category: 'tool' },
    { name: 'GitHub', icon: githubIcon, category: 'tool' }
  ]

  const experience = [
    {
      company: 'Ciss S.A.',
      position: 'QA Analyst',
      period: '2024 - Presente',
      description: 'Automação de interface desktop, testes manuais e de carga. Criação de documentos de análise e mapeamento de testes com BDD.'
    },
    {
      company: 'Codengage',
      position: 'Junior QA Analyst',
      period: '2023 - 2024',
      description: 'Criação e automação de testes de integração, unitários e GUI usando Minitest (Rails). Implementação de BDD com Selenium.'
    }
  ]

  const t = translations[lang];

  const certifications = [
    {
      name: 'Certificado Docker Essentials',
      issuer: 'LINUXtips',
      date: 'Nov 2023',
      link: 'https://www.linkedin.com/in/vinicius-caracho-3ab946229/details/certifications/1743033233349/single-media-viewer/?type=DOCUMENT&profileId=ACoAADlFKrMBahPbGXPtwMXVRjmNXKr5Op52h8Q&locale=en_US'
    },
    {
      name: 'Prometheus | The Complete Hands-On for Monitoring & Alerting',
      issuer: 'LINUXtips',
      date: '2023',
      link: 'https://www.linkedin.com/in/vinicius-caracho-3ab946229/details/certifications/1743033233349/single-media-viewer/?locale=en_US&profileId=ACoAADlFKrMBahPbGXPtwMXVRjmNXKr5Op52h8Q'
    },
    {
      name: 'Kubernetes for the Absolute Beginners - Hands-on',
      issuer: 'LINUXtips',
      date: '2023',
      link: 'https://www.linkedin.com/in/vinicius-caracho-3ab946229/details/certifications/1743033153077/single-media-viewer/?type=DOCUMENT&profileId=ACoAADlFKrMBahPbGXPtwMXVRjmNXKr5Op52h8Q&locale=en_US'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.about}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t.aboutDesc}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Experiência Profissional */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">{t.experience}</h3>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="border-l-4 border-blue-600 pl-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-xl font-semibold text-gray-900">{exp.position}</h4>
                    <span className="text-blue-600 font-medium">{exp.period}</span>
                  </div>
                  <p className="text-gray-700 font-medium mb-2">{exp.company}</p>
                  <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Educação */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t.education}</h3>
              <div className="border-l-4 border-blue-600 pl-6">
                <h4 className="text-xl font-semibold text-gray-900">{t.degree}</h4>
                <p className="text-gray-700 font-medium">{t.university}</p>
                <span className="text-blue-600 font-medium">{t.period}</span>
              </div>
            </motion.div>

            {/* Certificações */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t.certifications}</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    className="border-l-4 border-green-600 pl-6"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{cert.name}</h4>
                      <span className="text-green-600 font-medium">{cert.date}</span>
                    </div>
                    <p className="text-gray-700 font-medium mb-1">{cert.issuer}</p>
                    <a 
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200"
                    >
                      Ver certificado →
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Tecnologias */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">{t.tech}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-200 group"
                >
                  <img 
                    src={tech.icon} 
                    alt={tech.name}
                    className="w-12 h-12 mx-auto mb-3 group-hover:scale-110 transition-transform duration-200"
                  />
                  <p className="text-sm font-medium text-gray-700">{tech.name}</p>
                </motion.div>
              ))}
            </div>

            {/* Metodologias */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t.methodologies}</h3>
              <div className="flex flex-wrap gap-3">
                {t.methodologiesList.map((methodology, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                    className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {methodology}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

