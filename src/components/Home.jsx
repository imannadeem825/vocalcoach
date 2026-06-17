const Home = () => {
  return (
    <section id="home" className="min-h-screen bg-[#0a0f1e] flex items-center justify-center text-center px-6">
      <div>
        <h1 className="text-6xl font-serif text-white tracking-widest mb-4">
          Iman Nadeem
        </h1>
        <h2 className="text-xl font-sans text-[#6ba3d6] tracking-[0.3em] uppercase mb-8">
          Vocal Coach
        </h2>
        <p className="text-gray-400 text-lg mb-10">
          Based in Milwaukee, WI — available remotely and in person
        </p>
        <a
          href="#contact"
          className="border border-[#6ba3d6] text-[#6ba3d6] px-8 py-3 tracking-widest uppercase text-sm hover:bg-[#6ba3d6] hover:text-[#0a0f1e] transition-all duration-300"
        >
          Work with me
        </a>
      </div>
    </section>
  )
}

export default Home