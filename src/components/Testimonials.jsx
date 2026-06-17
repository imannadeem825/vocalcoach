const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-[#0a0f1e] py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-4xl text-white tracking-widest mb-16 text-center">
          What Students Are Saying
        </h2>

        <div className="flex flex-col gap-16">

          <blockquote className="border-l-2 border-[#6ba3d6] pl-8">
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              "Iman is a masterful singer, fantastic educator and wonderful human being. She has been extremely helpful for colleagues, friends, and myself problem-solve to tackle vocal obstacles and reach our goals. I highly recommend her guidance for singers of all skill levels!"
            </p>
            <cite className="text-[#6ba3d6] tracking-widest text-sm not-italic">
              — Andy Cizek (Makari, A Lot Like Birds, and more)
            </cite>
          </blockquote>

          <blockquote className="border-l-2 border-[#6ba3d6] pl-8">
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              "I loved working with Iman! She helped me a ton in my preparation to sing a 26 song set with Issues. She's extremely good at catering to any very specific needs of her clients, and she'll be able to sus out any weaknesses you might have just from hearing you perform/sing. I have a lot of faith that pretty much any vocalist would get a lot out of working with her."
            </p>
            <cite className="text-[#6ba3d6] tracking-widest text-sm not-italic">
              — Brian Butcher (The Home Team)
            </cite>
          </blockquote>

          <blockquote className="border-l-2 border-[#6ba3d6] pl-8">
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              "Lessons with Iman have helped mold me into the singer I want to be. Her welcoming and warm demeanor keeps me feeling relaxed, and her focus on growth lesson to lesson has me surpassing my own expectations. I cannot recommend a better teacher!"
            </p>
            <cite className="text-[#6ba3d6] tracking-widest text-sm not-italic">
              — Jay Tomasso (Makari)
            </cite>
          </blockquote>

        </div>

        <div className="mt-24 text-center">
          <h3 className="font-serif text-2xl text-white tracking-widest mb-8">
            Also Worked With
          </h3>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-5">

            <span>
              <span className="text-white">Kurt Travis</span>
              <span className="text-gray-500"> — A Lot Like Birds, Dance Gavin Dance, Royal Coda, Gold Necklace</span>
            </span>
            <span>
              <span className="text-white">Skyler Acord</span>
              <span className="text-gray-500"> — Issues, Twenty One Pilots, letlive.</span>
            </span>
            <span>
              <span className="text-white">Vic Viramontes-Pattison</span>
              <span className="text-gray-500"> — Arrows in Action</span>
            </span>
            <span>
              <span className="text-white">Hansel Romero</span>
              <span className="text-gray-500"> — Nightlife</span>
            </span>
            <span>
              <span className="text-white">Patrick Middelthon</span>
              <span className="text-gray-500"> — HOLYWATR</span>
            </span>
            <span>
              <span className="text-white">Sace</span>
              <span className="text-gray-500"> — sace6</span>
            </span>
            <span>
              <span className="text-white">Adam Blasi</span>
              <span className="text-gray-500"> — palettes</span>
            </span>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Testimonials