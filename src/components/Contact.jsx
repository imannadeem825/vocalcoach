const Contact = () => {
  return (
    <section id="contact" className="bg-[#060912] py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-4xl text-white tracking-widest mb-6">
          Get in Touch
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-16">
          Ready to get started or have questions? Reach out — I'd love to hear from you.
        </p>

        <div className="flex flex-col gap-8 items-center">

          <div>
            <h3 className="text-[#6ba3d6] tracking-widest uppercase text-xs mb-2">
              Location
            </h3>
            <p className="text-gray-400">
              Milwaukee, WI — available remotely worldwide
            </p>
          </div>

          <div>
            <h3 className="text-[#6ba3d6] tracking-widest uppercase text-xs mb-2">
              Email
            </h3>
            <a
              href="mailto:iman.nadeem.music@gmail.com"
              className="text-white hover:text-[#6ba3d6] transition-colors duration-300 text-lg tracking-wide"
            >
              iman.nadeem.music@gmail.com
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact