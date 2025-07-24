import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/button'

const MoonIcon = () => (
  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
    <path d="M21 12.79A9 9 0 0111.21 3a1 1 0 00-1.09 1.27A7 7 0 1019.73 13.88a1 1 0 001.27-1.09z"/>
  </svg>
);

const translations = {
  pt: {
    home: 'Início',
    about: 'Sobre',
    projects: 'Projetos',
    contact: 'Contato',
    lang: 'PT',
    langAlt: 'EN',
  },
  en: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    contact: 'Contact',
    lang: 'EN',
    langAlt: 'PT',
  }
}

const Header = ({ darkMode, setDarkMode, lang, setLang }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const t = translations[lang] || translations.pt;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-900">
            Vinicius<span className="text-blue-600">.</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {t.home}
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {t.about}
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {t.projects}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              {t.contact}
            </button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Alternar dark mode"
              onClick={() => setDarkMode((prev) => !prev)}
              className="ml-2 text-gray-700 dark:text-gray-100"
            >
              <MoonIcon />
            </Button>
            <Button
              variant="outline"
              size="sm"
              aria-label="Trocar idioma"
              className="ml-2 px-2 py-1 border border-blue-600 text-blue-600 bg-white hover:bg-blue-50 dark:bg-gray-900 dark:text-blue-200 dark:border-blue-400 dark:hover:bg-gray-800"
              onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
            >
              {t.langAlt}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Alternar dark mode"
              onClick={() => setDarkMode((prev) => !prev)}
              className="mr-1"
            >
              <MoonIcon />
            </Button>
            <Button
              variant="outline"
              size="sm"
              aria-label="Trocar idioma"
              className="px-2 py-1 border border-blue-600 text-blue-600 hover:bg-blue-50"
              onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
            >
              {t.langAlt}
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {t.home}
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {t.about}
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {t.projects}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 w-fit"
              >
                {t.contact}
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header

