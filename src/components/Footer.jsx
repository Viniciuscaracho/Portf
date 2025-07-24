import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const translations = {
  pt: {
    desc: 'QA Analyst & DevOps Enthusiast focado em automação, qualidade e integração de sistemas.',
    rights: 'Todos os direitos reservados.',
    made: 'Feito com',
    and: 'e React',
  },
  en: {
    desc: 'QA Analyst & DevOps Enthusiast focused on automation, quality, and systems integration.',
    rights: 'All rights reserved.',
    made: 'Made with',
    and: 'and React',
  }
}

const Footer = ({ lang = 'pt' }) => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com/viniciuscaracho',
      label: 'GitHub'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://linkedin.com/in/vinicius-caracho-3ab946229',
      label: 'LinkedIn'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      url: 'mailto:vinicius@example.com',
      label: 'Email'
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const t = translations[lang];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Description */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <button 
              onClick={scrollToTop}
              className="text-2xl font-bold mb-2 hover:text-blue-400 transition-colors duration-200"
            >
              Vinicius<span className="text-blue-400">.</span>
            </button>
            <p className="text-gray-400 max-w-md">
              {t.desc}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p className="mb-4 md:mb-0">
            © {currentYear} Vinicius Caracho. {t.rights}
          </p>
          
          <div className="flex items-center gap-1">
            <span>{t.made}</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>{t.and}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

