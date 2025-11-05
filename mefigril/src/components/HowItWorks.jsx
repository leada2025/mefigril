import React from 'react'
import { motion } from 'framer-motion'
import { Droplets, Zap, Combine } from 'lucide-react'

const HowItWorks = () => {
  const components = [
    {
      icon: Droplets,
      title: 'Tranexamic Acid',
      dosage: '500 mg',
      description: 'Prevents breakdown of blood clots to control excessive bleeding during periods',
      function: 'Antifibrinolytic agent'
    },
    {
      icon: Zap,
      title: 'Mefenamic Acid',
      dosage: '250 mg',
      description: 'NSAID that relieves pain and inflammation by blocking prostaglandin production',
      function: 'Pain reliever & anti-inflammatory'
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#143301] mb-4">
            How It <span className="text-[#9ee970]">Works</span>
          </h2>
          <p className="text-xl text-[#143301]/60 max-w-3xl mx-auto">
            Dual-action formula for comprehensive menstrual relief
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {components.map((component, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="border border-[#9ee970]/20 rounded-3xl p-8 bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-[#9ee970] to-[#7ac74f] p-4 rounded-2xl inline-block shadow-lg">
                  <component.icon className="h-8 w-8 text-[#143301]" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-[#143301] text-center mb-2">
                {component.title}
              </h3>
              
              <div className="text-center mb-4">
                <span className="bg-[#9ee970]/20 text-[#143301] px-3 py-1 rounded-full text-sm font-semibold">
                  {component.dosage}
                </span>
              </div>

              <p className="text-[#143301]/70 text-center mb-4 leading-relaxed">
                {component.description}
              </p>

              <div className="text-center">
                <span className="text-[#143301] text-sm font-medium">
                  {component.function}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Synergy Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-[#9ee970] to-[#7ac74f] rounded-full flex items-center justify-center shadow-lg">
              <Combine className="h-6 w-6 text-[#143301]" />
            </div>
          </div>
          
          <h4 className="text-2xl font-semibold text-[#143301] mb-3">
            Combined Effectiveness
          </h4>
          
          <p className="text-lg text-[#143301]/70 max-w-2xl mx-auto leading-relaxed">
            "Together, they provide targeted relief for menstrual pain and heavy bleeding, 
            working synergistically to restore comfort and normalcy during your menstrual cycle."
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks