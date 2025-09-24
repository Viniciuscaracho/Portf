import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Clock, Users, TrendingUp } from 'lucide-react'

const translations = {
  pt: {
    title: 'Disponível para novos projetos',
    subtitle: 'Aceitando apenas 3 projetos por mês para garantir qualidade',
    cta: 'Reservar minha agenda',
    available: 'Disponível',
    limited: 'Vagas limitadas'
  },
  en: {
    title: 'Available for new projects',
    subtitle: 'Accepting only 3 projects per month to ensure quality',
    cta: 'Book my calendar',
    available: 'Available',
    limited: 'Limited spots'
  }
}

const UrgencyBanner = ({ lang = 'pt' }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const endOfDay = new Date()
      endOfDay.setHours(23, 59, 59, 999)
      
      const difference = endOfDay - now
      
      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const t = translations[lang]

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 shadow-lg"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span className="text-sm font-medium">{t.available}</span>
          </div>
          
          <div className="hidden sm:flex items-center gap-2">
            <Users className="w-5 h-5" />
            <span className="text-sm">{t.limited}</span>
          </div>

          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            <span className="text-sm">3 projetos/mês</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="text-xs text-blue-100 mb-1">Tempo restante hoje</div>
            <div className="flex gap-2 text-sm">
              <span className="bg-white/20 px-2 py-1 rounded">
                {timeLeft.hours.toString().padStart(2, '0')}
              </span>
              <span>:</span>
              <span className="bg-white/20 px-2 py-1 rounded">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </span>
              <span>:</span>
              <span className="bg-white/20 px-2 py-1 rounded">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </span>
            </div>
          </div>

          <button
            onClick={() => scrollToSection('cta')}
            className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors duration-200 font-medium text-sm"
          >
            {t.cta}
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default UrgencyBanner 