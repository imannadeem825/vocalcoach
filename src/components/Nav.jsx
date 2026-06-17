import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'Bio', href: '#bio', id: 'bio' },
  { label: 'Testimonials', href: '#testimonials', id: 'testimonials' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

const Nav = () => {
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    let clickTimeout = null

    const handleClick = (id) => {
      setActive(id)
      setMenuOpen(false)
      clearTimeout(clickTimeout)
      clickTimeout = setTimeout(() => {}, 1000)
    }

    links.forEach(({ id }) => {
      const el = document.querySelector(`a[href="#${id}"]`)
      if (el) el.addEventListener('click', () => handleClick(id))
    })

    const observers = links.map(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { threshold: 0.3 }
      )
      observer.observe(el)
      return observer
    })

    return () => {
      observers.forEach(o => o?.disconnect())
      clearTimeout(clickTimeout)
    }
  }, [])

  return (
    <nav className="fixed top-0 w-full bg-[#0a0f1e]/90 backdrop-blur-sm z-50 px-8 py-5 flex justify-between items-center">
      <a href="#home" className="font-serif text-white tracking-widest text-lg hover:text-[#6ba3d6] transition-colors duration-300">
        Iman Nadeem
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-8 list-none">
        {links.map(({ label, href, id }) => (
          <li key={id} className="relative">
            <a
              href={href}
              onClick={() => setActive(id)}
              className={`tracking-widest uppercase text-xs transition-colors duration-300 ${
                active === id ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {label}
            </a>
            {active === id && (
              <motion.div
                key={active}
                className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-[#93c5fd] to-[#3b82f6]"
                initial={{ scaleX: 0, originX: 1 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
            )}
          </li>
        ))}
      </ul>

      {/* Hamburger button */}
      <button
        className="md:hidden flex flex-col gap-1.5 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-[#0a0f1e]/95 backdrop-blur-sm flex flex-col items-center py-8 gap-8 md:hidden"
          >
            {links.map(({ label, href, id }) => (
              <a
                key={id}
                href={href}
                onClick={() => { setActive(id); setMenuOpen(false) }}
                className={`tracking-widest uppercase text-sm transition-colors duration-300 ${
                  active === id ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Nav