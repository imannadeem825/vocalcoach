import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'Bio', href: '#bio', id: 'bio' },
  { label: 'Testimonials', href: '#testimonials', id: 'testimonials' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

const Nav = () => {
  const [active, setActive] = useState('home')

  useEffect(() => {
    let clickedId = null
    let clickTimeout = null

    const handleClick = (id) => {
      clickedId = id
      setActive(id)
      clearTimeout(clickTimeout)
      clickTimeout = setTimeout(() => { clickedId = null }, 1000)
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
          if (entry.isIntersecting && clickedId !== id) setActive(id)
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
      <span className="font-serif text-white tracking-widest text-lg">
        Iman Nadeem
      </span>
      <ul className="flex gap-8 list-none">
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
    </nav>
  )
}

export default Nav