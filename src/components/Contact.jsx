import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { once: true },
})

const Contact = () => {
  return (
    <section id="contact" className="bg-[#0a0f1e] py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">

        <motion.div {...fade(0)}>
          <h2 className="font-serif text-4xl text-white tracking-widest mb-6">
            Get in Touch
          </h2>
        </motion.div>

        <motion.div {...fade(0.15)}>
          <p className="text-gray-400 text-lg leading-relaxed mb-16">
            Ready to get started or have questions? Reach out, I'd love to hear from you!
          </p>

          <div className="flex flex-col gap-8 items-center">

            <div>
              <h3 className="text-[#6ba3d6] tracking-widest uppercase text-xs mb-2">
                Location
              </h3>
              <p className="text-gray-400">
                Milwaukee, WI — Available Remotely Worldwide
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
        </motion.div>

      </div>
    </section>
  )
}

export default Contact
