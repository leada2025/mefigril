import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden py-8">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/back.jpg" 
          alt="Medical background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#143301]/20 to-[#143301]/40"></div>
      </div>

      {/* Content */}
      <div className="w-full mt-10 pl-6 sm:pl-10 lg:pl-20 relative z-10">
        <div className="flex items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left max-w-3xl space-y-6"
          >

            {/* Small Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-3"
            >
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
                <span className="text-[#9ee970]">Relief and Balance</span>
                <br />
                <span className="text-white">— Every Month.</span>
              </h1>
            </motion.div>

            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              Mefigril™-T 500
            </h1>

            {/* Subtitle */}
            <span className="block text-base sm:text-lg md:text-xl lg:text-2xl font-normal mt-2 text-[#9ee970]">
              Tranexamic Acid (500mg) + Mefenamic Acid (250mg)
            </span>

            {/* Description */}
            <motion.p
              className="text-2xl sm:text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Mefigril-T 500 combines Tranexamic Acid (500 mg) and Mefenamic Acid (250 mg)
              to provide effective relief from menstrual pain and heavy bleeding.
              <br /><br />
              <span className="text-[#9ee970]">•</span> Controls heavy menstrual bleeding <br />
              <span className="text-[#9ee970]">•</span> Relieves menstrual pain and cramps <br />
              <span className="text-[#9ee970]">•</span> Reduces inflammation
            </motion.p>

          </motion.div>
          
        </div>
      </div>
    </section>
  )
}

export default Hero
