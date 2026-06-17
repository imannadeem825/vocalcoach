const Footer = () => {
  return (
    <footer className="bg-[#060912] py-8 px-6 text-center border-t border-white/10">
      <p className="text-gray-600 text-sm tracking-widest uppercase mb-4">
        Iman Nadeem
      </p>
      <p className="text-gray-600 text-xs tracking-wide">
        © {new Date().getFullYear()} Iman Nadeem. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer