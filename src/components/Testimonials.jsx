import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const translations = {
  pt: {
    title: 'O que dizem sobre meu trabalho',
    subtitle: 'Depoimentos de clientes e colegas de trabalho',
    viewAll: 'Ver todos os projetos',
    testimonial1: {
      name: 'João Silva',
      role: 'Tech Lead - Ciss S.A.',
      content: 'Vinicius demonstrou excelente capacidade técnica na automação de testes. Evitou diversos bugs em produção e entregou o projeto com muito mais rapidez e qualidade.',
      rating: 5
    },
    testimonial2: {
      name: 'Murilo Marçal',
      role: 'Tech Lead - Codengage',
      content: 'Trabalhei com o Vinicius no projeto, e lembro muito bem de como se esforçou para implementar ferramentas novas e que além da automação, ele também se preocupou com a qualidade do código e a performance do projeto.',
      rating: 5
    },
    testimonial3: {
      name: 'Carlos Oliveira',
      role: 'Freelance Client',
      content: 'Contratei o Vinicius para a criação de um site para minha empresa. Ele entregou o projeto com muito mais rapidez e qualidade do que eu esperava, além de ter ajudado a aumentar o faturamento da empresa com conversão de leads.',
      rating: 5
    }
  },
  en: {
    title: 'What they say about my work',
    subtitle: 'Testimonials from clients and colleagues',
    viewAll: 'View all projects',
    testimonial1: {
      name: 'João Silva',
      role: 'Tech Lead - Ciss S.A.',
      content: 'Vinicius demonstrated excellent technical skills in test automation. He prevented numerous production bugs and delivered the project much faster and with higher quality.',
      rating: 5
    },
    testimonial2: {
      name: 'Murilo Marçal',
      role: 'Tech Lead - Codengage',
      content: 'I worked with Vinicius on the project, and I remember very well how he strived to implement new tools and that beyond automation, he also cared about code quality and project performance.',
      rating: 5
    },
    testimonial3: {
      name: 'Carlos Oliveira',
      role: 'Freelance Client',
      content: 'I hired Vinicius to create a website for my company. He delivered the project much faster and with higher quality than I expected, and also helped increase the company\'s revenue through lead conversion.',
      rating: 5
    }
  }
}

const Testimonials = ({ lang = 'pt' }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const t = translations[lang];

  const testimonials = [
    t.testimonial1,
    t.testimonial2,
    t.testimonial3
  ]

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, i) => (
      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
    ))
  }

  return (
    <section id="testimonials" className="py-20 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <div className="mb-6">
                <Quote className="w-8 h-8 text-blue-600 mb-4" />
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
          >
            {t.viewAll}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials 