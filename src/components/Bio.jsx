import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { once: true },
})

const Bio = () => {
  return (
    <section id="bio" className="bg-[#0a0f1e] pt-10 pb-16 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">

        <motion.div {...fade(0)}>
          <h2 className="font-serif text-4xl text-white tracking-widest mb-8 text-center">
            About Me
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-16 text-center max-w-2xl mx-auto">
            My name is Iman Nadeem, and I'm a vocal coach, artist, multi-instrumentalist, and songwriter/producer based in Milwaukee, Wisconsin. I work both remotely and in person, and additionally offer warm-ups and lessons the day of a show for artists on tour within a two-hour radius of Milwaukee.
          </p>
        </motion.div>

        <motion.div {...fade(0.15)} className="flex flex-col md:flex-row items-stretch">
          <div className="md:w-1/2">
            <img
              src="/iman-bio.jpg"
              alt="Iman Nadeem performing"
              className="w-full h-72 md:h-full object-cover object-[center_30%]"
            />
          </div>
          <div className="md:w-1/2 bg-[#060912] p-12">
            <h3 className="font-serif text-2xl text-[#6ba3d6] tracking-widest mb-6">
              Why Work With Me?
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Whether you're a beginner or a professional, you deserve coaching that's clear, practical, and truly effective. In every lesson, you'll get tailored guidance designed to help you make real progress. Together, we'll come up with specific objectives you want to attain, and I'll create a concrete approach to help you reach them.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              With a warm, down-to-earth approach, I focus on helping you achieve physiological efficiency and ease, regardless of genre, style, or goals. You'll have lasting improvements in technique that remove as much excess effort as possible, so you'll be working smarter, not harder. You'll learn to recognize and break habits and mental blocks that hold you back, so you can sing with freedom.
            </p>
            <h3 className="font-serif text-2xl text-[#6ba3d6] tracking-widest mb-6">
              Who Do I Work With?
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              I work with teens and adults of any skill level. For artists, I'll work with you as you prepare for a tour, studio time, or to improve overall as a vocalist. I currently specialize in clean vocals, and I'm pursuing further education on vocal distortion. I hope to be offering coaching for screaming and other forms of distortion starting in late 2026.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Bio
