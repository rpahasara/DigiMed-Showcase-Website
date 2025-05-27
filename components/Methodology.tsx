import { motion } from 'framer-motion';
import { CogIcon, CloudIcon, CpuChipIcon, SignalIcon } from '@heroicons/react/24/outline';

const methodologySteps = [
    {
        title: "Phase 1: Data Acquisition & Preprocessing",
        icon: SignalIcon,
        description: "Collection of real-world healthcare data, including anonymized patient records, simulated DDoS traffic via Wireshark, smart contract logs, and clinical web app interactions. Rigorous preprocessing such as data anonymization, traffic pattern labeling, text vectorization for XSS detection, and noise reduction on network logs to ensure high-quality input for AI models.",
        color: "from-blue-500 to-blue-600"
    },
    {
        title: "Phase 2: AI & Blockchain Intelligence Core",
        icon: CpuChipIcon,
        description: "Development of an LSTM-based DDoS detection model to identify abnormal traffic spikes. Deep learning classifiers (Rndom Forest, Bi-LSTM) for XSS attack prediction using encoded web payloads. Integration of blockchain smart contracts (Solidity + JWT) for secure data logging and auditability. Implementation of Zero-Knowledge Proofs (ZKP) to enhance data integrity and confidentiality.",
        color: "from-green-500 to-green-600"
    },
    {
        title: "Phase 3: System Architecture & Integration",
        icon: CloudIcon,
        description: "Microservice-based architecture using Python (Flask) for AI services, Node.js for backend APIs, and React + Tailwind CSS for a responsive frontend dashboard. IPFS and MongoDB for decentralized and scalable health data storage. Secure RESTful APIs with JWT authentication, access control, and blockchain interoperability via Web3.js.",
        color: "from-purple-500 to-purple-600"
    },
    {
        title: "Phase 4: Usability, Evaluation & Deployment",
        icon: CogIcon,
        description: "Development of intuitive dashboards for threat visualization, patient data access, and blockchain logs. Real-time alert system for administrators with email/SMS triggers. Comprehensive evaluation via confusion matrix, ROC-AUC for ML models, smart contract gas efficiency checks, and usability testing (SUS, heuristic evaluation) in clinical simulation environments.",
        color: "from-orange-500 to-orange-600"
    }
];

const systemComponents = [
    {
        component: "LSTM AI - DDoS Detection Module",
        description: "Network traffic analysis using packet captures (Wireshark) and time-series deep learning (LSTM) to identify abnormal traffic patterns indicative of DDoS attacks. Visual insights for admins via interactive dashboards.",
        technologies: ["Wireshark","Python", "TensorFlow", "LSTM", "Scikit-learn"]
    },
    {
        component: "XSS Shield AI - Web Threat Intelligence",
        description: "Advanced DL-based model for detecting Cross-Site Scripting (XSS) payloads using Rndom Forest and Bi-LSTM architectures. Enhanced input sanitization, pattern recognition, and model training on real-world datasets",
        technologies: ["OpenCV", "U-Net", "HTML/JS Payload Datasets", "TensorFlow", "Python"]
    },
    {
        component: "SecureAuth - Blockchain + MFA Authentication",
        description: "JWT-enabled biometric authentication layer backed by smart contracts. Ensures data immutability, secure login sessions, and blockchain traceability using ZKP for added confidentiality.",
        technologies: ["Solidity", "Web3.js", "JWT", "Metamask", "Zero-Knowledge Proof (ZKP)"]
    },
    {
        component: "MedChain Storage - Decentralized Data Management",
        description: "Integration of IPFS and MongoDB for hybrid decentralized health data storage. Enables secure, scalable, and immutable patient record access with audit logs via blockchain",
        technologies: ["IPFS", "MongoDB", "Node.js", "REST APIs", "Smart Contracts"]
    },
    {
        component: "IInsightHub - Admin & Patient Dashboard",
        description: "Interactive React-based interface with modular components for data visualization, alerts, ML predictions, and blockchain logs. Role-based access for patients and medical staff.",
        technologies: ["React.js", "Chart.js", "Tailwind CSS", "Axios", "React-Router"]
    },
];

export default function Methodology() {
    return (
        <section id="methodology" className="py-12 sm:py-16 md:py-20 bg-zinc-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Methodology
                        </h2>
                        <div className="w-20 h-0.5 bg-blue-500/50 mx-auto rounded-full"></div>
                    </div>

                    {/* System Architecture Overview */}
                    <div className="mb-16">
                        <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-8 text-center">
                            Building DigiMed Systematically
                        </h3>
                        <div className="bg-white/5 p-6 sm:p-8 rounded-lg border border-white/10 mb-8">
                            <p className="text-gray-300 text-lg leading-relaxed text-center">
                                The DigiMed platform was engineered through a structured, multi-phase methodology, combining cutting-edge research with real-world healthcare needs in Sri Lanka. Our approach ensures secure data acquisition, accurate AI-based threat detection, seamless blockchain integration, and a streamlined user experience for both patients and healthcare professionals.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {methodologySteps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative"
                                >
                                    <div className={`absolute -inset-1 bg-gradient-to-r ${step.color} rounded-lg blur opacity-25`}></div>
                                    <div className="relative bg-white/5 p-6 rounded-lg border border-white/10 h-full">
                                        <div className="flex items-center mb-4">
                                            <step.icon className="h-8 w-8 text-white mr-3" />
                                            <h4 className="text-lg font-semibold text-white">{step.title}</h4>
                                        </div>
                                        <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* System Components */}
                    <div className="mb-16">
                        <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-8 text-center">
                            DigiMed Component Architecture
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {systemComponents.map((component, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white/5 p-6 rounded-lg border border-white/10"
                                >
                                    <h4 className="text-lg font-semibold text-white mb-3">{component.component}</h4>
                                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{component.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {component.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/10"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Key Achievements */}
                    <div>
                        <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-8 text-center">
                            Methodology Achievements
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="bg-white/5 p-6 sm:p-8 rounded-lg border border-white/10">
                                <h4 className="text-xl font-semibold text-white mb-4">Data Processing Excellence</h4>
                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                                        <span className="text-gray-300 text-sm">Multi-source data ingestion from Wireshark network captures, health records, biometric inputs, and user-generated web inputs</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                                        <span className="text-gray-300 text-sm">Advanced preprocessing: packet filtering, timestamp alignment, biometric encoding, and XSS payload sanitization</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                                        <span className="text-gray-300 text-sm">Token-based session handling and smart contract data structuring for immutable logs</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white/5 p-6 sm:p-8 rounded-lg border border-white/10">
                                <h4 className="text-xl font-semibold text-white mb-4">AI Model Innovation</h4>
                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3"></span>
                                        <span className="text-gray-300 text-sm">LSTM deep learning for sequential DDoS attack pattern recognition with high temporal accuracy</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3"></span>
                                        <span className="text-gray-300 text-sm">Blockchain-based Zero-Knowledge Proof (ZKP) integration for privacy-preserving identity verification</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3"></span>
                                        <span className="text-gray-300 text-sm">JWT-secured biometric authentication with failover MFA mechanisms and blockchain auditability</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                            <h4 className="text-green-400 font-semibold mb-2">Systematic Impact</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                This multi-phase, AI-enhanced, blockchain-backed methodology enabled DigiMed to become a secure, intelligent, and scalable health data management platform. It delivers high accuracy in threat detection, robust patient data protection, and efficient user access management—setting a new benchmark for healthcare systems in Sri Lanka.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 