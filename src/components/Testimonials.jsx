import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { once: true },
})

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-[#0a0f1e] py-32 px-6">
      <div className="max-w-5xl mx-auto">

        <motion.div {...fade(0)}>
          <h2 className="font-serif text-4xl text-white tracking-widest mb-16 text-center">
            What Students Are Saying
          </h2>
        </motion.div>

        <div className="flex flex-col gap-8">

          <motion.div {...fade(0.1)} className="flex items-stretch">
            <div className="w-48 shrink-0">
              <img src="/andy-cizek-live.jpeg" alt="Andy Cizek" className="w-full h-full object-cover rounded-l-lg" />
            </div>
            <blockquote className="bg-[#060912] p-10 flex flex-col justify-center">
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                "Iman is a masterful singer, fantastic educator and wonderful human being. She has been extremely helpful for colleagues, friends, and myself to problem-solve, tackle vocal obstacles and reach our goals. I highly recommend her guidance for singers of all skill levels!"
              </p>
              <cite className="text-[#6ba3d6] tracking-widest text-sm not-italic">
                Andy Cizek — <em>Makari, A Lot Like Birds, and more</em>
              </cite>
            </blockquote>
          </motion.div>

          <motion.div {...fade(0.2)} className="flex items-stretch">
            <div className="w-48 shrink-0">
              <img src="/brian-butcher-live.jpg" alt="Brian Butcher" className="w-full h-full object-cover rounded-l-lg" />
            </div>
            <blockquote className="bg-[#060912] p-10 flex flex-col justify-center">
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                "I loved working with Iman! She helped me a ton in my preparation to sing a 26 song set with Issues. She's extremely good at catering to any very specific needs of her clients, and she'll be able to sus out any weaknesses you might have just from hearing you perform/sing. I have a lot of faith that pretty much any vocalist would get a lot out of working with her."
              </p>
              <cite className="text-[#6ba3d6] tracking-widest text-sm not-italic">
                Brian Butcher — <em>The Home Team</em>
              </cite>
            </blockquote>
          </motion.div>

          <motion.div {...fade(0.3)} className="flex items-stretch">
            <div className="w-48 shrink-0">
              <img src="/jay-tomasso-live.jpg" alt="Jay Tomasso" className="w-full h-full object-cover rounded-l-lg" />
            </div>
            <blockquote className="bg-[#060912] p-10 flex flex-col justify-center">
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                "Lessons with Iman have helped mold me into the singer I want to be. Her welcoming and warm demeanor keeps me feeling relaxed, and her focus on growth lesson to lesson has me surpassing my own expectations. I cannot recommend a better teacher!"
              </p>
              <cite className="text-[#6ba3d6] tracking-widest text-sm not-italic">
                Jay Tomasso — <em>Makari</em>
              </cite>
            </blockquote>
          </motion.div>

        </div>

        <motion.div {...fade(0.1)} className="mt-24 text-center">
          <h3 className="font-serif text-2xl text-white tracking-widest mb-8">
            Also Worked With
          </h3>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-5">
            <span>
              <span className="text-white">Kurt Travis</span>
              <span className="text-gray-500"> — <em>A Lot Like Birds, Dance Gavin Dance, Royal Coda, Gold Necklace</em></span>
            </span>
            <span>
              <span className="text-white">Skyler Acord</span>
              <span className="text-gray-500"> — <em>Issues, Twenty One Pilots, letlive.</em></span>
            </span>
            <span>
              <span className="text-white">Vic Viramontes-Pattison</span>
              <span className="text-gray-500"> — <em>Arrows in Action</em></span>
            </span>
            <span>
              <span className="text-white">Hansel Romero</span>
              <span className="text-gray-500"> — <em>Nightlife</em></span>
            </span>
            <span>
              <span className="text-white">Patrick Middelthon</span>
              <span className="text-gray-500"> — <em>HOLYWATR</em></span>
            </span>
            <span>
              <span className="text-white">Sace</span>
              <span className="text-gray-500"> — <em>sace6</em></span>
            </span>
            <span>
              <span className="text-white">Adam Blasi</span>
              <span className="text-gray-500"> — <em>palettes</em></span>
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Testimonials
