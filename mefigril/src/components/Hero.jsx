import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { Pill, Sparkles, ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden py-8">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/back.jpg" 
          alt="Medical background" 
          className="w-full h-full object-cover"
        />
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#143301]/20 to-[#143301]/40"></div>
      </div>

      <div className="max-w-7xl mt-10 mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Relief and{' '}
              <span className="text-[#9ee970]">Balance</span>
              <br />
              — Every Month.
            </motion.h1>

            {/* Sub-text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mb-6">
                Mefigril-T 500 combines <span className="text-[#9ee970] font-semibold">Tranexamic Acid (500 mg)</span> and <span className="text-white font-semibold">Mefenamic Acid (250 mg)</span> to provide comprehensive relief from menstrual pain and heavy bleeding.
              </p>
              
              {/* Benefits List */}
              <div className="space-y-3 max-w-md mx-auto lg:mx-0">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#143301] rounded-full flex-shrink-0"></div>
                  <span className="text-white/80 text-sm sm:text-base">Controls heavy menstrual bleeding</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#143301] rounded-full flex-shrink-0"></div>
                  <span className="text-white/80 text-sm sm:text-base">Relieves menstrual pain and cramps</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#143301] rounded-full flex-shrink-0"></div>
                  <span className="text-white/80 text-sm sm:text-base">Reduces inflammation</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Visual Element */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-sm sm:max-w-md"
            >
              {/* Main Container */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/10 shadow-lg">
                <div className="flex items-center justify-center space-x-4 sm:space-x-6 lg:space-x-8">
                  
                  {/* Tranexamic Acid */}
                  <div className="text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#143301] rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-md">
                      <Pill className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-white" />
                    </div>
                    <div className="text-white">
                      <div className="font-semibold text-sm sm:text-base lg:text-lg">Tranexamic Acid</div>
                      <div className="text-xs sm:text-sm opacity-70 mt-1">500mg</div>
                    </div>
                  </div>

                  {/* Plus Sign */}
                  <div className="text-xl sm:text-2xl text-white/80 font-light">+</div>

                  {/* Mefenamic Acid */}
                  <div className="text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 border border-white/20 shadow-md">
                      <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-[#143301]" />
                    </div>
                    <div className="text-white">
                      <div className="font-semibold text-sm sm:text-base lg:text-lg">Mefenamic Acid</div>
                      <div className="text-xs sm:text-sm opacity-70 mt-1">250mg</div>
                    </div>
                  </div>
                </div>

                {/* Connecting Line */}
                <div className="h-px bg-white/20 mt-4 sm:mt-6 lg:mt-8 rounded-full" />
                
                {/* Result */}
                <div className="text-center mt-4 sm:mt-6">
                  <div className="text-white font-semibold text-lg sm:text-xl mb-1 sm:mb-2">Dual-Action Therapy</div>
                  <div className="text-white/60 text-xs sm:text-sm">Hemostatic Control + Analgesic Relief</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero