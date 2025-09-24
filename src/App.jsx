import './App.css'
import React, { useEffect, useState } from "react"
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import CallToAction from './components/CallToAction'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingCTA from './components/FloatingCTA'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("lang") || "pt";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <div className="min-h-screen">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <Projects lang={lang} />
        <About lang={lang} />
        <Testimonials lang={lang} />
        <CallToAction lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
      <FloatingCTA lang={lang} />
    </div>
  )
}

export default App

