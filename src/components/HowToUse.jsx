import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Calendar, 
  Clock, 
  Utensils, 
  AlertCircle,
  ChevronRight,
  CheckCircle2
} from 'lucide-react'

const HowToUse = () => {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      icon: Calendar,
      title: 'Start on Day 1',
      description: 'Begin taking the tablets on the first day of your period for optimal results',
      details: 'Starting early ensures maximum effectiveness in controlling bleeding and pain.'
    },
    {
      icon: Clock,
      title: 'Regular Timing',
      description: 'Take one tablet at the same time each day to maintain consistent relief',
      details: 'Consistent timing helps maintain stable medication levels in your body.'
    },
    {
      icon: Utensils,
      title: 'With Food',
      description: 'Always take with or after meals to prevent stomach discomfort',
      details: 'Taking with food helps reduce the risk of gastrointestinal side effects.'
    },
    {
      icon: CheckCircle2,
      title: 'Follow Duration',
      description: 'Continue as prescribed, usually for 3-5 days during your period',
      details: 'Complete the prescribed course unless advised otherwise by your doctor.'
    }
  ]

  return (
    <section id="how-to-use" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#143301] mb-4">
            How to <span className="text-[#9ee970]">Use</span>
          </h2>
          <p className="text-xl text-[#143301]/60 max-w-3xl mx-auto">
            Simple steps for effective relief and better menstrual health
          </p>
        </motion.div>

        {/* Steps Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#9ee970]/10 rounded-2xl p-2 flex flex-wrap justify-center gap-2">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 ${
                  activeStep === index
                    ? 'bg-white shadow-lg text-[#143301] border border-[#9ee970]/30'
                    : 'text-[#143301]/60 hover:text-[#143301] hover:bg-white/50'
                }`}
              >
                <step.icon className="h-5 w-5" />
                <span className="font-medium">{step.title}</span>
                {index < steps.length - 1 && (
                  <ChevronRight className="h-4 w-4 ml-2 text-[#143301]/40" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="border border-[#9ee970]/20 rounded-3xl p-8 bg-white shadow-lg"
            >
              <div className="flex items-start space-x-6">
                <div className="bg-gradient-to-r from-[#9ee970] to-[#7ac74f] p-4 rounded-2xl shadow-lg">
                  {React.createElement(steps[activeStep].icon, { 
                    className: "h-8 w-8 text-[#143301]" 
                  })}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#143301] mb-3">
                    {steps[activeStep].title}
                  </h3>
                  
                  <p className="text-lg text-[#143301]/70 mb-4 leading-relaxed">
                    {steps[activeStep].description}
                  </p>
                  
                  <p className="text-[#143301]/60 leading-relaxed">
                    {steps[activeStep].details}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Important Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto mt-12"
        >
          <div className="bg-[#9ee970]/10 border border-[#9ee970]/30 rounded-2xl p-6 shadow-lg">
            <div className="flex items-start space-x-4">
              <AlertCircle className="h-6 w-6 text-[#143301] mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-semibold text-[#143301] mb-2">
                  Important Safety Note
                </h4>
                <p className="text-[#143301]/80 leading-relaxed">
                  Always follow your doctor's advice regarding dosage and duration. 
                  Do not exceed the prescribed amount. Consult your healthcare provider 
                  if symptoms persist or worsen.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowToUse