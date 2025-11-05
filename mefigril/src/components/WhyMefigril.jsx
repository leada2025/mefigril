import React from 'react'
import { motion } from 'framer-motion'
import { 
  Heart, 
  Shield, 
  Clock, 
  Activity
} from 'lucide-react'

const WhyMefigril = () => {
  const benefits = [
    {
      icon: Heart,
      title: 'Controls excessive bleeding',
      description: 'Effectively manages heavy menstrual flow'
    },
    {
      icon: Shield,
      title: 'Relieves pain and inflammation',
      description: 'Reduces menstrual cramps and discomfort'
    },
    {
      icon: Clock,
      title: 'Restores normal activity',
      description: 'Helps maintain daily routine during periods'
    },
    {
      icon: Activity,
      title: 'Promotes menstrual health',
      description: 'Supports overall reproductive wellness'
    }
  ]

  return (
    <section id="why" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Simple Professional Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#9ee970]/10 to-[#143301]/10 rounded-3xl p-8 shadow-lg h-96 flex items-center justify-center border border-[#9ee970]/20">
              <div className="text-center">
                <div className="bg-gradient-to-br from-[#9ee970] to-[#7ac74f] w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Heart className="h-12 w-12 text-[#143301]" fill="#143301" />
                </div>
                <h3 className="text-xl font-semibold text-[#143301] mb-2">
                  Menstrual Wellness
                </h3>
                <p className="text-[#143301]/80">
                  Comprehensive relief for menstrual discomfort
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-[#143301] mb-6">
              About <span className="text-[#9ee970]">Mefigril-T 500</span>
            </h2>
            
            <div className="border-l-4 border-[#9ee970] pl-6 mb-8">
              <p className="text-[#143301] text-lg leading-relaxed">
                Mefigril-T 500 is a combination medicine that treats heavy menstrual bleeding and menstrual pain. 
                It prevents excessive blood loss by stabilizing clots and relieves cramps by blocking pain messengers.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-[#143301] mb-6">
              Key Benefits:
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-4 shadow-md border border-[#9ee970]/20 hover:shadow-lg transition-all duration-300 hover:border-[#9ee970]/40"
                >
                  <div className="flex items-start space-x-3">
                    <div className="bg-[#9ee970]/20 p-2 rounded-lg">
                      <benefit.icon className="h-5 w-5 text-[#143301]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#143301] mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-[#143301]/70 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhyMefigril