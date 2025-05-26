import { motion } from 'framer-motion';
import { ChartBarIcon, ExclamationTriangleIcon, LightBulbIcon, FlagIcon } from '@heroicons/react/24/outline';

const literatureSurvey = [
    {
        title: "Biometric and Blockchain-Based Authentication System",
        content: "Recent literature highlights the growing adoption of biometric authentication (fingerprint, facial recognition) in healthcare systems for secure and user-friendly access control. Blockchain has also emerged as a promising solution for decentralized identity verification and data immutability. Studies combining these technologies, such as blockchain-based biometric identity systems, demonstrate enhanced security but often suffer from scalability and interoperability challenges. Few implementations are tailored specifically for healthcare contexts in developing nations, where secure yet lightweight authentication is critical."
    },
    {
        title: "LSTM-Based DDoS Detection System",
        content: "DDoS attacks pose a significant threat to the availability of health data systems. Recent research explores the use of machine learning, especially LSTM networks, for time-series-based detection of abnormal network behavior. Datasets such as CICDDoS2019 and custom Wireshark traffic captures have been used to train models for binary and multi-class classification. While LSTM models outperform traditional methods in temporal pattern recognition, their deployment in real-time healthcare environments remains limited due to processing overheads and lack of visual insights for administrators."
    },
    {
        title: " Deep Learning-Based XSS Attack Detection",
        content: "Cross-Site Scripting (XSS) remains a persistent web security threat, particularly in electronic health systems. Traditional rule-based detection systems are prone to evasion by obfuscated scripts. Recent works have explored Convolutional Neural Networks (CNNs), Recurrent Neural Networks (RNNs), and hybrid deep learning models for classifying and identifying XSS payloads in input fields. Despite promising accuracy levels, many studies lack real-time integration and adaptability to evolving attack patterns, especially in healthcare platforms that handle sensitive data."
    },
    {
        title: "Smart Contract-Driven Legacy Database Integration",
        content: "Integrating legacy healthcare databases with modern blockchain infrastructure is a growing area of research. Smart contracts offer automated, tamper-proof execution of data access and sharing policies. Prior work focuses on combining Solidity-based contracts with web interfaces and off-chain data access via oracles. However, challenges remain in ensuring compatibility, data integrity, and auditability across legacy systems. Few solutions address end-to-end workflows for health data management, particularly in low-resource settings with outdated infrastructure."
    }
];

const researchGaps = [
    "Lack of Integrated Cybersecurity Frameworks in Health Platforms. Most current solutions address isolated security concerns (e.g., DDoS, authentication, XSS) but lack an integrated, end-to-end framework that unifies these components within a single, scalable system tailored to healthcare environments.",
    "Inadequate Real-Time DDoS Detection with Visual Analytics While LSTM models have shown effectiveness in identifying DDoS attacks, many systems do not offer real-time detection capabilities combined with intuitive dashboards or alerts to support quick administrative responses in hospital networks.",
    "Limited Use of Blockchain for Authentication in Developing Regions Although blockchain-based identity management is well-researched, few implementations focus on healthcare systems in developing countries. There is a lack of lightweight, privacy-preserving blockchain authentication integrated with biometrics suitable for local infrastructure constraints.",
    "Poor Adaptability of XSS Detection Systems to Evolving Threats existing XSS detection mechanisms often rely on static rule-based or outdated datasets, making them less effective against emerging attack vectors. There’s a need for dynamic deep learning models that continuously learn from new payload patterns in medical web portals.",
    "Lack of Seamless Integration Between Smart Contracts and Legacy Databases Most smart contract applications focus on newly designed systems. Integrating blockchain-based automation with existing healthcare databases remains a challenge due to issues with data synchronization, compatibility, and operational overhead in legacy systems."
];

const researchObjectives = [
    {
        title: "AuthChain AI – Secure Access & Authentication",
        description: "Develop a blockchain-based multi-factor authentication system combining biometrics and JWT tokens to ensure secure, tamper-proof access to health data while minimizing unauthorized breaches."
    },
    {
        title: "DDoS Detect AI – Real-Time Threat Identification",
        description: "Design an LSTM-powered anomaly detection model to identify and mitigate DDoS attacks using real-time network traffic data. Provide administrators with visual insights and alert mechanisms for proactive defense."
    },
    {
        title: "XSS Shield AI – Web Threat Detection",
        description: "Implement machine learning techniques (e.g., CNN, Random Forest) to detect and classify Cross-Site Scripting (XSS) attacks within web-based health systems, enhancing application-level security and trust."
    },
    {
        title: "SmartHealthChain – Blockchain Health Data Management",
        description: "Build a secure and scalable health data management system using blockchain to ensure data integrity, auditability, and controlled sharing among authorized healthcare entities."
    }
];

export default function ProjectScope() {
    return (
        <section id="project-scope" className="py-12 sm:py-16 md:py-20 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Project Scope
                        </h2>
                        <div className="w-20 h-0.5 bg-green-500/50 mx-auto rounded-full"></div>
                    </div>

                    {/* Literature Survey */}
                    <div className="mb-16">
                        <div className="flex items-center mb-8">
                            <ChartBarIcon className="h-8 w-8 text-blue-400 mr-4" />
                            <h3 className="text-2xl sm:text-3xl font-semibold text-white">Literature Survey</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {literatureSurvey.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white/5 p-6 rounded-lg border border-white/10"
                                >
                                    <h4 className="text-lg font-semibold text-white mb-3">{item.title}</h4>
                                    <p className="text-gray-300 text-sm leading-relaxed">{item.content}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* References */}
                        <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                            <h4 className="text-blue-400 font-semibold mb-4">References</h4>
                                <div className="space-y-2 text-gray-300 text-sm">
                                <p>[1] M. A. Faneela, S. A. Khan, W. Alsuhibany, M. U. El-Shafai, and J. Ahmad, &quot;An immutable framework for smart healthcare using blockchain technology,&quot; <em>Computer Systems Science &amp; Engineering</em>, vol. 46, no. 1, pp. 165–179, 2023. https://doi.org/10.32604/csse.2023.035066</p>
                                <p>[2] J. Wang, W. Ou, O. Alfarraj, A. Tolba, G. Kim, and Y. Ren, &quot;Block verification mechanism based on zero-knowledge proof in blockchain,&quot; <em>Computer Systems Science &amp; Engineering</em>, vol. 45, no. 2, pp. 1805–1819, 2023. https://doi.org/10.32604/csse.2023.029622</p>
                                <p>[3] H. Al-Aswad, W. M. El-Medany, C. Balakrishna, N. Ababneh, and K. Curran, &quot;BZKP: Blockchain-based zero-knowledge proof model for enhancing healthcare security in Bahrain IoT smart cities and COVID-19 risk mitigation,&quot; <em>Arab Journal of Basic and Applied Sciences</em>, vol. 28, no. 1, pp. 154–171, 2021. https://doi.org/10.1080/25765299.2020.1870812</p>
                                <p>[4] J. Kaur, U. Garg, and G. Bathla, &quot;Detection of cross-site scripting (XSS) attacks using machine learning techniques: A review,&quot; <em>Artificial Intelligence Review</em>, vol. 56, pp. 1–45, 2023. https://doi.org/10.1007/s10462-023-10433-3</p>
                                <p>[5] M. Alsaffar, S. Aljaloud, B. A. Mohammed, Z. G. Al-Mekhlafi, T. S. Almurayziq, G. Alshammari, and A. Alshammari, &quot;Detection of web cross-site scripting (XSS) attacks,&quot; <em>Electronics</em>, vol. 11, no. 14, p. 2212, 2022. https://doi.org/10.3390/electronics11142212</p>
                                <p>[6] A. Mostafa, M. Ezz, M. Elbashir, M. Alruily, E. Hamouda, M. Alsarhani, and W. Said, &quot;Strengthening cloud security: An innovative multi-factor multi-layer authentication framework for cloud user authentication,&quot; <em>Applied Sciences</em>, vol. 13, p. 10871, 2023. https://doi.org/10.3390/app131910871</p>
                                <p>[7] M. Mettler, &quot;Blockchain technology in healthcare: The revolution starts here,&quot; in <em>Proc. IEEE Healthcom</em>, pp. 1–3, 2016. https://doi.org/10.1109/healthcom.2016.7749510</p>
                                <p>[8] A. Anyanwu, T. Olorunsogo, T. Abrahams, O. Akindote, and O. Reis, &quot;Data confidentiality and integrity: A review of accounting and cybersecurity controls in superannuation organizations,&quot; <em>Computer Science &amp; IT Research Journal</em>, vol. 5, pp. 237–253, 2024. https://doi.org/10.51594/csitrj.v5i1.735</p>
                                </div>
                        </div>
                    </div>

                    {/* Research Gap */}
                    <div className="mb-16">
                        <div className="flex items-center mb-8">
                            <ExclamationTriangleIcon className="h-8 w-8 text-orange-400 mr-4" />
                            <h3 className="text-2xl sm:text-3xl font-semibold text-white">Research Gap</h3>
                        </div>
                        <div className="bg-white/5 p-6 sm:p-8 rounded-lg border border-white/10">
                            <p className="text-gray-300 mb-6 text-lg">
                                Following areas are the research gaps found in existing health data management systems:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {researchGaps.map((gap, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-start"
                                    >
                                        <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span className="text-gray-300">{gap}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Research Problem & Solution */}
                    <div className="mb-16">
                        <div className="flex items-center mb-8">
                            <LightBulbIcon className="h-8 w-8 text-yellow-400 mr-4" />
                            <h3 className="text-2xl sm:text-3xl font-semibold text-white">Research Problem & Solution</h3>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="bg-red-500/10 p-6 sm:p-8 rounded-lg border border-red-500/20">
                                <h4 className="text-xl font-bold text-red-400 mb-4">The Problem</h4>
                                <p className="text-gray-300 leading-relaxed">
                                  How can a secure, efficient, and scalable health data management system leveraging blockchain for data integrity and AI for enhanced data usability address challenges in data security, integrity, and management workload, thereby improving patient care and operational efficiency in healthcare organizations in Sri Lanka?
                                </p>
                            </div>
                            <div className="bg-green-500/10 p-6 sm:p-8 rounded-lg border border-green-500/20">
                                <h4 className="text-xl font-bold text-green-400 mb-4">DigiMed – A Secure AI-Driven Health Data Ecosystem</h4>
                                <p className="text-gray-300 leading-relaxed mb-4">
                                   DigiMed is a unified, intelligent health data management platform engineered to ensure data integrity, usability, and operational efficiency in Sri Lankan healthcare systems through a synergy of blockchain technology and artificial intelligence. It integrates modular components focused on secure data handling, threat detection, and smarter clinical insights
                                </p>
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <span className="text-blue-400 font-semibold">BlockHealth Chain:</span>
                                        <span className="text-gray-300"> An AI-powered DDoS detection module leveraging LSTM-based models trained on real network traffic (e.g., Wireshark captures), offering real-time alerts and visual analytics to reduce cybersecurity workload and maintain service availability.</span>
                                    </div>
                                    <div>
                                        <span className="text-green-400 font-semibold">GuardSense AI:</span>
                                        <span className="text-gray-300"> Satellite-based urban vegetation analysis using U-Net CNNs for tree segmentation and LSTM networks for green coverage forecasting</span>
                                    </div>
                                    <div>
                                        <span className="text-purple-400 font-semibold">MedSec Scan:</span>
                                        <span className="text-gray-300"> A deep learning engine to detect XSS and injection attacks in healthcare web portals, using custom CNN/LSTM architectures and threat intelligence enrichment for proactive security monitoring.</span>
                                    </div>
                                    <div>
                                        <span className="text-orange-400 font-semibold">SmartInsight Engine:</span>
                                        <span className="text-gray-300"> An AI layer that extracts patterns from anonymized health data to support predictive diagnostics, resource optimization, and patient stratification, enhancing clinical decision-making and reducing manual workload for medical staff.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Research Objectives */}
                    <div>
                        <div className="flex items-center mb-8">
                            <FlagIcon className="h-8 w-8 text-purple-400 mr-4" />
                            <h3 className="text-2xl sm:text-3xl font-semibold text-white">Research Objectives</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {researchObjectives.map((objective, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white/5 p-6 rounded-lg border border-white/10"
                                >
                                    <h4 className="text-lg font-semibold text-white mb-3">{objective.title}</h4>
                                    <p className="text-gray-300 text-sm leading-relaxed">{objective.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 