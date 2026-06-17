import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { once: true },
})

const Services = () => {
  return (
    <section id="services" className="bg-[#060912] py-16 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">

        <motion.div {...fade(0)}>
          <h2 className="font-serif text-4xl text-white tracking-widest mb-16 text-center">
            Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">

          <motion.div {...fade(0.1)} className="border-l-2 border-[#6ba3d6] pl-8">
            <h3 className="font-serif text-2xl text-white tracking-widest mb-4">
              Individual Lessons
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Personalized one-on-one coaching tailored to your goals, genre, and skill level.
            </p>
          </motion.div>

          <motion.div {...fade(0.2)} className="border-l-2 border-[#6ba3d6] pl-8">
            <h3 className="font-serif text-2xl text-white tracking-widest mb-4">
              Intro Bundle
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              New students are welcome to reach out about an introductory bundle of lessons at a reduced rate. Pricing is discussed individually based on your situation and goals.
            </p>
          </motion.div>

          <motion.div {...fade(0.3)} className="border-l-2 border-[#6ba3d6] pl-8">
            <h3 className="font-serif text-2xl text-white tracking-widest mb-4">
              Tour Day Sessions
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Warm-ups and lessons available the day of a show for artists on tour within a two-hour radius of Milwaukee.
            </p>
          </motion.div>

          <motion.div {...fade(0.4)} className="border-l-2 border-[#6ba3d6] pl-8">
            <h3 className="font-serif text-2xl text-white tracking-widest mb-4">
              Who I Work With
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Teens and adults of any skill level — beginners, working artists, and everyone in between.
            </p>
          </motion.div>

        </div>

        <motion.div {...fade(0.5)}>
          <p className="text-gray-500 text-lg leading-relaxed mt-16 text-center">
            Available remotely and in person in Milwaukee, WI. Reach out to talk about scheduling and pricing — I'm happy to find something that works for you!
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default Services
