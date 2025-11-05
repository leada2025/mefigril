import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'
import {
  Heart,
  Pill,
  Shield,
  Star,
  Phone,
  User,
  ChevronDown,
  Menu,
  X,
} from 'lucide-react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = [
        'hero',
        'why',
        'how-it-works',
        'how-to-use',
        'side-effects',
        'faq',
        'contact',
      ]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Why Mefigril-T 500', to: 'why', icon: Heart },
    { name: 'How It Works', to: 'how-it-works', icon: Shield },
    { name: 'How to Use', to: 'how-to-use', icon: Pill },
    { name: 'Side Effects', to: 'side-effects', icon: Star },
    { name: 'FAQ', to: 'faq', icon: User },
  ]

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-lg shadow-xl py-3 text-green-800'
            : 'bg-transparent py-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3 group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="relative"
                whileHover={{ rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden ${
                    scrolled
                      ? 'bg-green-700'
                      : 'bg-gradient-to-br from-green-600 to-green-900'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                 <img src="/Nvron.webp" alt="" />
                </div>
              </motion.div>

              <div className="flex flex-col">
                <motion.span
                  className={`text-2xl font-bold ${
                    scrolled
                      ? 'text-green-800'
                      : 'bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'
                  }`}
                >
                  Mefigril™-T 500
                </motion.span>
                <motion.span
                  className={`text-xs font-semibold tracking-wider ${
                    scrolled ? 'text-green-700' : 'text-[#9ee970]'
                  }`}
                >
                  MENSTRUAL WELLNESS
                </motion.span>
              </div>
            </motion.div>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.to
                return (
                  <Link
                    key={item.name}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    onSetActive={() => setActiveSection(item.to)}
                    className="relative group cursor-pointer"
                  >
                    <motion.div
                      className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 ${
                        isActive
                          ? 'bg-green-500/20 text-green-700'
                          : scrolled
                          ? 'text-green-800 hover:text-green-600'
                          : 'text-white hover:text-green-300'
                      }`}
                      whileHover={{ y: -2 }}
                    >
                      <item.icon
                        className={`w-4 h-4 ${
                          scrolled
                            ? 'text-green-700 group-hover:text-green-600'
                            : 'text-green-400 group-hover:text-green-300'
                        }`}
                      />
                      <span className="font-medium">{item.name}</span>
                    </motion.div>
                  </Link>
                )
              })}

              {/* Contact Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-2"
              >
                <Link
                  to="contact"
                  smooth={true}
                  duration={800}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-semibold shadow-lg transition-all duration-500 cursor-pointer ${
                    scrolled
                      ? 'bg-gradient-to-r from-green-700 to-green-900 text-white shadow-green-700/40'
                      : 'bg-gradient-to-r from-green-600 to-green-800 text-white shadow-green-500/30 hover:shadow-green-500/50'
                  }`}
                >
                  <Phone className="w-4 h-4" />
                  <span>Contact</span>
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="transition-all"
              >
                {isMobileMenuOpen ? (
                  <X
                    className={`w-7 h-7 ${
                      scrolled ? 'text-green-800' : 'text-white'
                    }`}
                  />
                ) : (
                  <Menu
                    className={`w-7 h-7 ${
                      scrolled ? 'text-green-800' : 'text-white'
                    }`}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Dimmed Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-lg lg:hidden"
            />

            {/* Floating Menu */}
           <motion.div
  initial={{ opacity: 0, y: -20, scale: 0.95 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  exit={{ opacity: 0, y: -20, scale: 0.95 }}
  className="fixed top-20 inset-x-2 mx-auto w-[calc(100%-1rem)] max-w-sm z-50 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-xl lg:hidden text-white overflow-hidden"
>

              <div className="p-4 space-y-1">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.to
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.to}
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        onSetActive={() => setActiveSection(item.to)}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 ${
                          isActive
                            ? 'bg-white/20 text-green-400'
                            : 'hover:bg-white/10'
                        }`}
                      >
                        <item.icon className="w-5 h-5 text-green-400" />
                        <span className="font-medium flex-1">{item.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 transform -rotate-90 ${
                            isActive
                              ? 'text-green-400'
                              : 'text-white/70'
                          }`}
                        />
                      </Link>
                    </motion.div>
                  )
                })}

                {/* Contact CTA */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-2"
                >
                  <Link
                    to="contact"
                    smooth={true}
                    duration={800}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center space-x-3 bg-gradient-to-r from-green-600 to-green-800 text-white p-3 rounded-xl font-semibold shadow-lg shadow-green-500/40 hover:shadow-green-500/60 transition-all duration-300 cursor-pointer"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Contact</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar