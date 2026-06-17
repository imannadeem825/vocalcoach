const Services = () => {
  return (
    <section id="services" className="bg-[#060912] py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-4xl text-white tracking-widest mb-16 text-center">
          Services
        </h2>

        <div className="grid grid-cols-1 gap-12">

          <div className="border-l-2 border-[#6ba3d6] pl-8">
            <h3 className="font-serif text-2xl text-white tracking-widest mb-4">
              Individual Lessons
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Personalized one-on-one coaching tailored to your goals, genre, and skill level.
            </p>
          </div>

          <div className="border-l-2 border-[#6ba3d6] pl-8">
            <h3 className="font-serif text-2xl text-white tracking-widest mb-4">
              Intro Bundle
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              New students are welcome to reach out about an introductory bundle of lessons at a reduced rate. Pricing is discussed individually based on your situation and goals.
            </p>
          </div>

          <div className="border-l-2 border-[#6ba3d6] pl-8">
            <h3 className="font-serif text-2xl text-white tracking-widest mb-4">
              Tour Day Sessions
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Warm-ups and lessons available the day of a show for artists on tour within a two-hour radius of Milwaukee.
            </p>
          </div>

          <div className="border-l-2 border-[#6ba3d6] pl-8">
            <h3 className="font-serif text-2xl text-white tracking-widest mb-4">
              Who I Work With
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Teens and adults of any skill level — beginners, working artists, and everyone in between.
            </p>
          </div>

        </div>

        <p className="text-gray-500 text-lg leading-relaxed mt-16 text-center">
          Available remotely and in person in Milwaukee, WI. Reach out to talk about scheduling and pricing — I'm happy to find something that works for you.
        </p>
      </div>
    </section>
  )
}

export default Services