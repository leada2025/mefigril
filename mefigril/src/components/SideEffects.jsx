import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, AlertTriangle, Shield } from 'lucide-react'

const SideEffects = () => {
  const [openSections, setOpenSections] = useState({})

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const sections = [
    {
      id: 'common',
      title: 'Common Side Effects',
      icon: AlertTriangle,
      content: (
        <div className="space-y-3">
          <p className="text-[#143301]/70 mb-4">
            These side effects are usually mild and temporary. Most disappear as your body adjusts to the medication:
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              'Nausea and vomiting',
              'Heartburn and indigestion',
              'Diarrhea or constipation',
              'Headache and dizziness',
              'Tiredness and fatigue',
              'Nasal congestion',
              'Mild skin rash',
              'Visual disturbances'
            ].map((effect, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#9ee970] rounded-full"></div>
                <span className="text-[#143301]/80">{effect}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'warnings',
      title: 'Important Warnings',
      icon: Shield,
      content: (
        <div className="space-y-4">
          {[
            {
              title: 'Alcohol Consumption',
              description: 'Avoid alcohol as it may increase the risk of stomach bleeding and liver problems.'
            },
            {
              title: 'Pregnancy & Breastfeeding',
              description: 'Consult your doctor before use during pregnancy or breastfeeding. Not recommended without medical supervision.'
            },
            {
              title: 'Driving & Machinery',
              description: 'Do not drive or operate heavy machinery if you experience dizziness, drowsiness, or visual disturbances.'
            },
            {
              title: 'Kidney Conditions',
              description: 'Use with caution if you have kidney disease. Regular monitoring may be required.'
            },
            {
              title: 'Allergic Reactions',
              description: 'Discontinue immediately and seek medical help if you experience swelling, difficulty breathing, or severe rash.'
            }
          ].map((warning, index) => (
            <div key={index} className="border-l-4 border-[#9ee970] pl-4 py-1">
              <h5 className="font-semibold text-[#143301] mb-1">{warning.title}</h5>
              <p className="text-[#143301]/70 text-sm">{warning.description}</p>
            </div>
          ))}
        </div>
      )
    },
    {
      id: 'storage',
      title: 'Storage Instructions',
      icon: Shield,
      content: (
        <div className="space-y-3">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <h5 className="font-semibold text-[#143301] mb-2">Do:</h5>
              <ul className="space-y-2 text-[#143301]/70">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#9ee970] rounded-full"></div>
                  <span>Store in a cool, dry place</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#9ee970] rounded-full"></div>
                  <span>Keep away from direct sunlight</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#9ee970] rounded-full"></div>
                  <span>Maintain below 30°C temperature</span>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-[#143301] mb-2">Don't:</h5>
              <ul className="space-y-2 text-[#143301]/70">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Keep in bathroom cabinets</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Store near children or pets</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Use expired medication</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <section id="side-effects" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#143301] mb-4">
            Safety & <span className="text-[#9ee970]">Side Effects</span>
          </h2>
          <p className="text-xl text-[#143301]/60 max-w-3xl mx-auto">
            Important information for safe and effective use
          </p>
        </motion.div>

        <div className="space-y-4">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg border border-[#9ee970]/10 overflow-hidden"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[#9ee970]/5 transition-colors duration-200"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-[#9ee970]/20 p-2 rounded-xl">
                    <section.icon className="h-5 w-5 text-[#143301]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#143301]">
                    {section.title}
                  </h3>
                </div>
                {openSections[section.id] ? (
                  <ChevronUp className="h-5 w-5 text-[#143301]" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-[#143301]" />
                )}
              </button>

              <AnimatePresence>
                {openSections[section.id] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-[#9ee970]/10"
                  >
                    <div className="px-6 py-4">
                      {section.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Emergency Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-[#9ee970]/10 border border-[#9ee970]/30 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-center space-x-3 mb-3">
              <AlertTriangle className="h-6 w-6 text-[#143301]" />
              <h4 className="text-lg font-semibold text-[#143301]">
                Emergency Medical Attention
              </h4>
            </div>
            <p className="text-[#143301]/80 leading-relaxed">
              Seek immediate medical help if you experience severe allergic reactions, 
              difficulty breathing, chest pain, severe stomach pain, or signs of bleeding.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SideEffects