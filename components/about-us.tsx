"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function AboutUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [videoRef, videoInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [sectionsRef, sectionsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#f7bd00]/50 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#f7bd00]/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#f7bd00]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold mb-6">
            About <span className="text-[#f7bd00]">Us</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-[#f7bd00] mx-auto mb-10"></motion.div>
        </motion.div>

        {/* Video Section */}
        <motion.div
          ref={videoRef}
          initial={{ opacity: 0, y: 50 }}
          animate={videoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="max-w-4xl mx-auto">
            <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden shadow-2xl border border-gray-800">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/ZYZB-8kejoo"
                title="Revivalists Promo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </motion.div>

        {/* Mission Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={videoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 shadow-xl"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#f7bd00]">The Mission Behind the Voice</h3>
            <p className="text-gray-300 leading-relaxed">
              Why is the time now? Because we are witnessing a world where false ideas are eroding our identities and
              values. Adversaries are actively working to misguide and claim the hearts of our generations, leading them
              away from their true purpose. In these times, the need for awareness is no longer a choice but a
              necessity.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              At Revivalists, we raise our voice to protect and empower. We are committed to awakening the common man to
              the traps laid before us, fostering an unshakable understanding of our spiritual and cultural heritage.
              Our mission is to inspire individuals to reclaim their dignity and responsibility, standing firm against
              the currents of falsehood.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              Together, we should strive for a revival—a return to the purity of authentic values, grounded in truth and
              unity. By educating and guiding with sincerity, we aim to save not only this generation but generations to
              come. This is what being a revivalist truly means.
            </p>
          </motion.div>
        </div>

        {/* Three Subsections */}
        <motion.div
          ref={sectionsRef}
          initial="hidden"
          animate={sectionsInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Cultural Revival */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800 shadow-xl hover:shadow-2xl hover:border-[#f7bd00]/30 transition-all duration-300 group"
          >
            <div className="mb-6 overflow-hidden rounded-lg">
              <Image
                src="/cultural_revival.jpg?height=300&width=500"
                alt="Cultural Revival"
                width={500}
                height={300}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#f7bd00]">Cultural Revival</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Our culture is our identity. In a world where the media come to a point of increasing secularism, we stand
              for guarding; otherwise, we shall lose fundamental cores of Islamic values. To this regard, we shall
              utilize legal avenues to oppose the cultural invasion of the secular media and advocate for their content
              to respect our tradition while enriching our minds. Our commitment to non-violence is steered on
              democratic principles as we embrace freedom of expression in calling for peaceful boycotts. Our success
              will be measured not only by the visible reduction in harmful and valueless content but also by the paved
              media that uplifts and educates.
            </p>
          </motion.div>

          {/* Intellectual Revival */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800 shadow-xl hover:shadow-2xl hover:border-[#f7bd00]/30 transition-all duration-300 group"
          >
            <div className="mb-6 overflow-hidden rounded-lg">
              <Image
                src="/intelect_revival.jpg?height=300&width=500"
                alt="Intellectual Revival"
                width={500}
                height={300}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#f7bd00]">Intellectual Revival</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              We firmly believe in the power of knowledge and genius of our ancestors during the Golden Ages of Islam.
              Precisely because of that, we labor in reviving that culture of inquiry and innovation. We wish to ensure
              that by the year 2035, we shall create a generation of 500,000 new scientists, philosophers, polymaths,
              tech developers, and AI experts who shall remain rooted in our cultural ethos and be able to take up the
              reins of the world in scientific and technological advancements. Our journey will be charted through the
              use of ongoing assessments of our work, which will ensure that we are on track and follow the way of
              intellectual resurgence.
            </p>
          </motion.div>

          {/* Serving University Students */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800 shadow-xl hover:shadow-2xl hover:border-[#f7bd00]/30 transition-all duration-300 group"
          >
            <div className="mb-6 overflow-hidden rounded-lg">
              <Image
                src="/serve_uni.jpg?height=300&width=500"
                alt="Serving University Students"
                width={500}
                height={300}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#f7bd00]">Serving University Students</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              At the universities our youth find themselves bombarded by a host of conflicting narratives on the
              realization of Islam and modern ideologies. We step in to provide clarity and direction. We shall, through
              the affiliations with the universities, avail training in the science, philosophy, and Islamic apologetics
              that shall be of help to the students in steering through and rationalizing their belief in the modern
              world. Our efforts will be evidenced in a series of impactful events fostering a well-informed and
              enlightened student body.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
