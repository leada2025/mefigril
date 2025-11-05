import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const FAQ = () => {
  const [openItems, setOpenItems] = useState({})

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const faqItems = [
    {
      question: 'What is Mefigril-T 500 Tablet?',
      answer: 'Mefigril-T 500 is a combination medicine containing Tranexamic Acid (500 mg) and Mefenamic Acid (250 mg). It is specifically designed to treat heavy menstrual bleeding and menstrual pain by controlling bleeding and relieving pain and inflammation.'
    },
    {
      question: 'Is Mefigril-T 500 safe during pregnancy?',
      answer: 'Mefigril-T 500 should only be used during pregnancy under strict medical supervision. Consult your doctor before taking this medication if you are pregnant, planning to become pregnant, or breastfeeding.'
    },
    {
      question: 'What if I miss a dose?',
      answer: 'If you miss a dose, take it as soon as you remember. However, if it is almost time for your next dose, skip the missed dose and continue with your regular schedule. Do not double the dose to make up for a missed one.'
    },
    {
      question: 'Can I drive after taking Mefigril-T 500?',
      answer: 'It is recommended to avoid driving or operating machinery if you experience dizziness, drowsiness, or visual disturbances after taking Mefigril-T 500. Assess your individual response to the medication before engaging in activities that require alertness.'
    },
    {
      question: 'What are the common side effects?',
      answer: 'Common side effects may include nausea, vomiting, heartburn, indigestion, diarrhea, headache, tiredness, and nasal congestion. These are usually mild and temporary. Consult your doctor if any side effects persist or worsen.'
    }
  ]

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#143301] mb-4">
            Frequently Asked <span className="text-[#9ee970]">Questions</span>
          </h2>
          <p className="text-xl text-[#143301]/60 max-w-3xl mx-auto">
            Find answers to common questions about Mefigril-T 500
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-[#9ee970]/20 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[#9ee970]/5 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-[#143301] pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0 bg-[#9ee970]/20 p-1 rounded-lg">
                  {openItems[index] ? (
                    <Minus className="h-4 w-4 text-[#143301]" />
                  ) : (
                    <Plus className="h-4 w-4 text-[#143301]" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openItems[index] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-[#9ee970]/10"
                  >
                    <div className="px-6 py-4 bg-[#9ee970]/5">
                      <p className="leading-relaxed text-[#143301]/80">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Additional Help */}
     
      </div>
    </section>
  )
}

export default FAQ