import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { name: 'Why Mefigril-T 500', to: 'why' },
        { name: 'How It Works', to: 'how-it-works' },
        { name: 'How to Use', to: 'how-to-use' },
        { name: 'Side Effects', to: 'side-effects' },
        { name: 'FAQ', to: 'faq' },
      ]
    },
  ];

  return (
    <footer id="contact" className="bg-[#143301] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section with Larger Logo */}
          <div className="lg:col-span-2">
            <motion.div 
              className="flex items-start space-x-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Larger Logo Image */}
              <div className="w-44 h-40 flex items-center justify-center flex-shrink-0">
                <img 
                  src="/Nvron.webp" 
                  alt="Mefigril-T Menstrual Wellness" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback if logo image doesn't exist
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback logo */}
                <div 
                  className="w-20 h-20 bg-[#9ee970] rounded-full flex items-center justify-center hidden"
                  style={{ display: 'none' }}
                >
                  <span className="text-[#143301] font-bold text-xl">M</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-1 text-white">Mefigril-T™ 500</h3>
                <p className="text-[#9ee970] text-base mb-3">Menstrual Wellness Formula</p>
                
                {/* Company Info */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h5 className="font-semibold text-xl mb-1 text-[#9ee970]">Nvron Life Sciences</h5>
                  <p className="text-gray-300 text-sm">Innovating Women's Healthcare Solutions</p>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-gray-300 mb-6 leading-relaxed max-w-md text-base"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Dedicated to advancing women's health through scientifically formulated medications. 
              Mefigril-T™ 500 combines Tranexamic Acid and Mefenamic Acid to effectively manage heavy 
              menstrual bleeding and menstrual pain, supporting women's wellness during their cycles.
            </motion.p>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 + 0.2 }}
            >
              <h4 className="font-bold text-lg mb-4 text-white">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li key={link.to}>
                    <Link
                      to={link.to}
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      className="text-gray-300 hover:text-[#9ee970] transition-colors duration-300 hover:underline cursor-pointer"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-bold text-lg mb-4 text-white">Contact Information</h4>
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#9ee970] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-[#143301]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 font-medium">Email</p>
                  <a 
                    href="mailto:info@nvron.in" 
                    className="text-[#9ee970] hover:text-[#b4f58e] transition-colors break-all"
                  >
                    info@nvron.in
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#9ee970] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-[#143301]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 font-medium">Phone</p>
                  <a 
                    href="tel:+917904389003" 
                    className="text-[#9ee970] hover:text-[#b4f58e] transition-colors"
                  >
                    +91 79043 89003
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#9ee970] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-[#143301]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 font-medium">Address</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    SF No 434, 29/2, Athipalayam Rd,<br />
                    Sri Lakshmi Nagar, Ganapathy,<br />
                    Coimbatore, Tamil Nadu - 641006
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div 
          className="border-t border-[#9ee970]/20 mt-8 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#9ee970]/20 bg-[#0f2a01]">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p 
              className="text-gray-300 text-sm text-center md:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              © {currentYear} Nvron Life Sciences. All Rights Reserved.
            </motion.p>
            
            <motion.div 
              className="text-gray-400 text-sm text-center md:text-right"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Developed by Leada Digital Dynamics
            </motion.div>
          </div>

          {/* Medical Disclaimer */}
          <motion.div 
            className="mt-4 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-gray-400 text-xs max-w-4xl mx-auto">
              💊 Medical Disclaimer: Mefigril-T™ 500 is a prescription medication containing Tranexamic Acid (500mg) 
              and Mefenamic Acid (250mg) for the treatment of heavy menstrual bleeding and menstrual pain. 
              Consult your healthcare provider before use. This product is not recommended during pregnancy 
              without medical supervision. Do not exceed the prescribed dosage. Individual results may vary. 
              Always follow your healthcare provider's guidance and read the prescription information carefully.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;