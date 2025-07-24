import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react'

const translations = {
  pt: {
    contact: 'Entre em Contato',
    contactDesc: 'Estou sempre aberto a novas oportunidades e colaborações. Vamos conversar sobre como posso contribuir para o seu projeto!',
    info: 'Informações de Contato',
    social: 'Redes Sociais',
    name: 'Nome',
    email: 'Email',
    phone: 'Telefone',
    location: 'Localização',
    message: 'Mensagem',
    placeholderName: 'Seu nome completo',
    placeholderEmail: 'seu@email.com',
    placeholderMessage: 'Conte-me sobre seu projeto ou oportunidade...',
    send: 'Enviar Mensagem',
  },
  en: {
    contact: 'Contact',
    contactDesc: 'I am always open to new opportunities and collaborations. Let\'s talk about how I can contribute to your project!',
    info: 'Contact Information',
    social: 'Social Networks',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    location: 'Location',
    message: 'Message',
    placeholderName: 'Your full name',
    placeholderEmail: 'your@email.com',
    placeholderMessage: 'Tell me about your project or opportunity...',
    send: 'Send Message',
  }
}

const Contact = ({ lang = 'pt' }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você pode implementar o envio do formulário
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  const t = translations[lang];
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />, title: t.email, value: '+55 (11) 98150-4864', link: 'tel:+5511981504864'
    },
    {
      icon: <Phone className="w-6 h-6" />, title: t.phone, value: 'vinicius@example.com', link: 'mailto:vinicius@example.com'
    },
    {
      icon: <MapPin className="w-6 h-6" />, title: t.location, value: 'Dois Vizinhos - Paraná', link: null
    }
  ]
  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />, name: 'GitHub', url: 'https://github.com/viniciuscaracho', color: 'hover:text-gray-900'
    },
    {
      icon: <Linkedin className="w-6 h-6" />, name: 'LinkedIn', url: 'https://linkedin.com/in/vinicius-caracho-3ab946229', color: 'hover:text-blue-600'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.contact}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t.contactDesc}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">{t.info}</h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="text-blue-600 bg-blue-50 p-3 rounded-lg">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      {info.title}
                    </p>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-gray-900 hover:text-blue-600 transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-900">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-4">{t.social}</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 text-gray-600 ${social.color} bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-200 transform hover:scale-110`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder={t.placeholderName}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder={t.placeholderEmail}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder={t.placeholderMessage}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center justify-center gap-2 font-medium"
              >
                <Send size={20} />
                {t.send}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

