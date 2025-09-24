import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, CheckCircle, Star, Users, Zap, MessageCircle } from 'lucide-react'

const translations = {
  pt: {
    title: 'Vamos Trabalhar Juntos?',
    subtitle: 'Transforme suas ideias em realidade com soluções de qualidade',
    description: 'Especialista em automação de testes e garantia de qualidade. Disponível para projetos freelance e oportunidades de trabalho.',
    benefits: {
      title: 'Por que escolher meus serviços?',
      items: [
        'Automação de testes eficiente e confiável',
        'Experiência em múltiplas tecnologias',
        'Comunicação clara e transparência',
        'Entrega dentro do prazo e orçamento',
        'Suporte contínuo e manutenção'
      ]
    },
    cta: {
      primary: 'Iniciar Conversa',
      secondary: 'Ver Projetos',
      freelance: 'Disponível para Freelance',
      fulltime: 'Aberto a Oportunidades'
    },
    stats: {
      projects: 'Projetos Concluídos',
      experience: 'Anos de Experiência',
      satisfaction: 'Satisfação do Cliente'
    }
  },
  en: {
    title: 'Let\'s Work Together?',
    subtitle: 'Transform your ideas into reality with quality solutions',
    description: 'Specialist in test automation and quality assurance. Available for freelance projects and work opportunities.',
    benefits: {
      title: 'Why choose my services?',
      items: [
        'Efficient and reliable test automation',
        'Experience in multiple technologies',
        'Clear communication and transparency',
        'Delivery within deadline and budget',
        'Continuous support and maintenance'
      ]
    },
    cta: {
      primary: 'Start Conversation',
      secondary: 'View Projects',
      freelance: 'Available for Freelance',
      fulltime: 'Open to Opportunities'
    },
    stats: {
      projects: 'Completed Projects',
      experience: 'Years of Experience',
      satisfaction: 'Client Satisfaction'
    }
  }
}

const CallToAction = ({ lang = 'pt' }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const t = translations[lang];

  const stats = [
    { icon: <Zap className="w-6 h-6" />, value: '50+', label: t.stats.projects, color: 'text-blue-600' },
    { icon: <Users className="w-6 h-6" />, value: '2+', label: t.stats.experience, color: 'text-green-600' },
    { icon: <Star className="w-6 h-6" />, value: '100%', label: t.stats.satisfaction, color: 'text-yellow-600' }
  ]

  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t.subtitle}
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Benefits & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className={`${stat.color} mb-2 flex justify-center`}>
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                {t.benefits.title}
              </h3>
              <div className="space-y-4">
                {t.benefits.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - CTA Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Primary CTA */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {t.cta.primary}
                </h3>
                <p className="text-gray-600">
                  Vamos discutir seu projeto e como posso ajudar
                </p>
              </div>
              <div className="space-y-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center justify-center gap-2 font-medium text-lg"
                >
                  {t.cta.primary}
                  <ArrowRight size={20} />
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="w-full border-2 border-blue-600 text-blue-600 px-6 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 font-medium"
                >
                  {t.cta.secondary}
                </button>
              </div>
            </motion.div>

            {/* Availability Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl text-center"
              >
                <div className="text-2xl font-bold mb-2">✓</div>
                <div className="font-medium">{t.cta.freelance}</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-xl text-center"
              >
                <div className="text-2xl font-bold mb-2">✓</div>
                <div className="font-medium">{t.cta.fulltime}</div>
              </motion.div>
            </div>

            {/* Quick Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="bg-gray-50 p-6 rounded-xl text-center"
            >
              <p className="text-gray-600 mb-4">
                Prefere contato direto?
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="mailto:viniciuscaracho77@gmail.com"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm"
                >
                  Email
                </a>
                <a
                  href="https://linkedin.com/in/vinicius-caracho-3ab946229"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm"
                >
                  LinkedIn
                </a>
                <a
                  href="https://wa.me/5511981504864?text=Olá%20Vinicius!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm"
                >
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction 