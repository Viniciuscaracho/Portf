import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { X, MessageCircle, Mail, Linkedin, MessageSquare } from 'lucide-react'

const translations = {
  pt: {
    title: 'Vamos conversar?',
    subtitle: 'Disponível para novos projetos',
    contact: 'Contato',
    email: 'Email',
    linkedin: 'LinkedIn'
  },
  en: {
    title: 'Let\'s talk?',
    subtitle: 'Available for new projects',
    contact: 'Contact',
    email: 'Email',
    linkedin: 'LinkedIn'
  }
}

const FloatingCTA = ({ lang = 'pt' }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Mostra o CTA flutuante após 30% da página
      if (scrollY > windowHeight * 0.3 && scrollY < documentHeight - windowHeight - 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const t = translations[lang]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsExpanded(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="relative">
            {/* Expanded CTA */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 mb-4 min-w-[280px]"
                >
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {t.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {t.subtitle}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={() => scrollToSection('contact')}
                      className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2 font-medium"
                    >
                      <MessageCircle size={16} />
                      {t.contact}
                    </button>

                    <div className="grid grid-cols-3 gap-2">
                      <a
                        href="mailto:viniciuscaracho77@gmail.com"
                        className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm"
                      >
                        <Mail size={14} />
                        {t.email}
                      </a>
                      <a
                        href="https://linkedin.com/in/vinicius-caracho-3ab946229"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm"
                      >
                        <Linkedin size={14} />
                        {t.linkedin}
                      </a>
                      <a
                        href="https://wa.me/5511981504864?text=Olá%20Vinicius!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm"
                      >
                        <MessageSquare size={14} />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main CTA Button */}
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200"
            >
              {isExpanded ? (
                <X size={24} />
              ) : (
                <MessageCircle size={24} />
              )}
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default FloatingCTA 