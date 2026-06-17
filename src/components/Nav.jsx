const Nav = () => {
  return (
    <nav className="fixed top-0 w-full bg-[#0a0f1e]/90 backdrop-blur-sm z-50 px-8 py-5 flex justify-between items-center">
      <span className="font-serif text-white tracking-widest text-lg">
        Iman Nadeem
      </span>
      <ul className="flex gap-8 list-none">
        <li><a href="#home" className="text-gray-400 hover:text-white tracking-widest uppercase text-xs transition-colors duration-300">Home</a></li>
        <li><a href="#bio" className="text-gray-400 hover:text-white tracking-widest uppercase text-xs transition-colors duration-300">Bio</a></li>
        <li><a href="#testimonials" className="text-gray-400 hover:text-white tracking-widest uppercase text-xs transition-colors duration-300">Testimonials</a></li>
        <li><a href="#services" className="text-gray-400 hover:text-white tracking-widest uppercase text-xs transition-colors duration-300">Services</a></li>
        <li><a href="#contact" className="text-gray-400 hover:text-white tracking-widest uppercase text-xs transition-colors duration-300">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Nav