import { motion } from 'framer-motion';
import { FiPlay } from 'react-icons/fi';

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center pt-16 relative">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('/images/healthcare.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="absolute inset-0 bg-black/70" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-block mb-6 sm:mb-8"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                            DigiMed
                        </h1>
                        <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full mb-6"></div>
                    </motion.div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl text-green-400 mb-6 sm:mb-8 font-bold">
                        AI-Driven Secure Health Data Management System
                    </h2>
                    <h3 className="text-lg sm:text-xl text-blue-400 mb-6 font-medium">
                        Transforming Healthcare Security and Intelligence in Sri Lanka
                    </h3>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
                      DigiMed is a next-generation platform that integrates deep learning, blockchain, and smart analytics to protect sensitive health data. It offers real-time DDoS detection, biometric authentication, and smart contract support; ensuring secure, efficient, and future-ready health data management for modern healthcare ecosystems.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                        <motion.a
                            href="#project-scope"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-transparent text-sm sm:text-base font-medium rounded-lg text-white bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300"
                        >
                            Learn More
                        </motion.a>
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-white/20 text-sm sm:text-base font-medium rounded-lg text-gray-300 bg-white/5 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
                        >
                            <FiPlay className="h-5 w-5 mr-2" />
                            View Demo
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 