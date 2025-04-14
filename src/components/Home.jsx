"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import MatrixBackground from "./common/MatrixBackground"
import CyberSpinner from "./common/CyberSpinner"
import { FaShieldAlt, FaBook, FaClipboardList, FaMapMarkedAlt, FaTools, FaQuestion } from "react-icons/fa"
import { RiAlarmWarningLine } from "react-icons/ri"
import { useTheme } from "../contexts/ThemeContext"

const Home = () => {
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState(null)
  const { theme } = useTheme()

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setStats({
        activeCases: 1243,
        resolvedComplaints: 892,
        ongoingInvestigations: 351,
        securityAlerts: 17,
      })
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  const features = [
    {
      id: 1,
      title: "Cyber Laws",
      description: "Comprehensive guide to Indian cyber laws and regulations",
      icon: <FaBook size={30} />,
      link: "/laws",
      color: "from-blue-500 to-cyan-400",
    },
    {
      id: 2,
      title: "Complaint Filing",
      description: "Step-by-step guide to file cyber crime complaints",
      icon: <FaClipboardList size={30} />,
      link: "/complaint-guide",
      color: "from-purple-500 to-indigo-400",
    },
    {
      id: 3,
      title: "Threat Map",
      description: "Real-time visualization of cyber threats across India",
      icon: <FaMapMarkedAlt size={30} />,
      link: "/threat-map",
      color: "from-red-500 to-pink-400",
    },
    {
      id: 4,
      title: "Security Tools",
      description: "Free tools to enhance your digital security",
      icon: <FaTools size={30} />,
      link: "/security-tools",
      color: "from-green-500 to-teal-400",
    },
    {
      id: 5,
      title: "Security Checklist",
      description: "Essential steps to secure your digital presence",
      icon: <FaShieldAlt size={30} />,
      link: "/security-checklist",
      color: "from-yellow-500 to-amber-400",
    },
    {
      id: 6,
      title: "FAQ",
      description: "Answers to commonly asked cybersecurity questions",
      icon: <FaQuestion size={30} />,
      link: "/faq",
      color: "from-orange-500 to-amber-400",
    },
  ]

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <CyberSpinner size={80} />
      </div>
    )
  }

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0 opacity-20">
        <MatrixBackground />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
              Savdhaan India
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
              Your trusted partner in cybersecurity awareness and protection in the digital age
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium shadow-lg shadow-blue-500/30"
              >
                <Link to="/complaint-guide">File a Complaint</Link>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-md bg-gradient-to-r from-gray-800 to-gray-700 text-white font-medium border border-gray-600"
              >
                <Link to="/resources">Learn More</Link>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-12 px-4 sm:px-6 lg:px-8 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-gray-800/80 rounded-lg p-6 border border-gray-700 shadow-lg"
            >
              <div className="text-cyan-400 mb-2">
                <RiAlarmWarningLine size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">{stats.activeCases}</h3>
              <p className="text-gray-400">Active Cases</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-gray-800/80 rounded-lg p-6 border border-gray-700 shadow-lg"
            >
              <div className="text-green-400 mb-2">
                <FaClipboardList size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">{stats.resolvedComplaints}</h3>
              <p className="text-gray-400">Resolved Complaints</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-gray-800/80 rounded-lg p-6 border border-gray-700 shadow-lg"
            >
              <div className="text-purple-400 mb-2">
                <FaClipboardList size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">{stats.ongoingInvestigations}</h3>
              <p className="text-gray-400">Ongoing Investigations</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-gray-800/80 rounded-lg p-6 border border-gray-700 shadow-lg"
            >
              <div className="text-red-400 mb-2">
                <RiAlarmWarningLine size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">{stats.securityAlerts}</h3>
              <p className="text-gray-400">Security Alerts</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive cybersecurity resources tailored for Indian citizens
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`bg-gray-800/80 rounded-xl p-6 border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-${feature.color.split("-")[1]}-400/50`}
              >
                <Link to={feature.link} className="block h-full">
                  <div
                    className={`w-14 h-14 mb-4 rounded-full flex items-center justify-center bg-gradient-to-br ${feature.color} text-white`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Stay Protected in the Digital World</h2>
            <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Join thousands of Indians who are taking proactive steps to secure their digital lives. Learn about the
              latest threats, understand your rights, and access resources to stay safe online.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-lg shadow-lg shadow-blue-500/30"
            >
              <Link to="/register">Create Free Account</Link>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
