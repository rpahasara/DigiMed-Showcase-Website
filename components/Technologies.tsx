import { motion } from 'framer-motion';
import { CodeBracketIcon, CommandLineIcon, ServerIcon, CloudIcon, CpuChipIcon } from '@heroicons/react/24/outline';
import { FaPython, FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt } from 'react-icons/fa';
import { SiTensorflow, SiTailwindcss, SiFirebase } from 'react-icons/si';

const technologyCategories = [
    {
        category: 'AI & Machine Learning',
        icon: CpuChipIcon,
        technologies: [
            { name: 'Python', icon: FaPython, description: 'Primary language for AI/ML' },
            { name: 'TensorFlow & Keras', icon: SiTensorflow, description: 'Deep learning frameworks' },
            { name: 'Scikit-learn', icon: null, description: 'ML models & algorithms' },
            { name: 'XGBoost', icon: null, description: 'Ensemble learning methods' },
            { name: 'LLaMA 3.3', icon: null, description: 'Large language model with RAG' },
            { name: 'U-Net CNN', icon: null, description: 'Tree segmentation architecture' },
            { name: 'LSTM Networks', icon: null, description: 'Time series forecasting' },
            { name: 'TOPSIS', icon: null, description: 'Multi-criteria decision making' },
        ],
        color: 'from-purple-500 to-purple-600',
    },
    {
        category: 'Data Processing Libraries',
        icon: CommandLineIcon,
        technologies: [
            { name: 'OpenCV', icon: null, description: 'Image processing & computer vision' },
            { name: 'Librosa', icon: null, description: 'Audio analysis & Mel-spectrograms' },
            { name: 'Pandas & NumPy', icon: null, description: 'Data manipulation & analysis' },
            { name: 'NDVI Calculation', icon: null, description: 'Vegetation index from RGB' },
        ],
        color: 'from-indigo-500 to-indigo-600',
    },
    {
        category: 'Backend Development',
        icon: ServerIcon,
        technologies: [
            { name: 'Python Flask', icon: FaPython, description: 'Lightweight ML serving framework' },
            { name: 'Node.js & Express', icon: FaNodeJs, description: 'Web application backend services' },
            { name: 'RESTful APIs', icon: null, description: 'API-driven communication' },
            { name: 'Axios', icon: null, description: 'Promise-based HTTP client' },
        ],
        color: 'from-green-500 to-green-600',
    },
    {
        category: 'Frontend Development',
        icon: CodeBracketIcon,
        technologies: [
            { name: 'React.js', icon: FaReact, description: 'Core frontend library' },
            { name: 'Tailwind CSS', icon: SiTailwindcss, description: 'Utility-first styling' },
            { name: 'Chart.js & ApexCharts', icon: null, description: 'Data visualization libraries' },
            { name: 'D3.js', icon: null, description: 'Dynamic charts & graphs' },
            { name: 'React-Leaflet', icon: null, description: 'Interactive mapping' },
            { name: 'Mapbox API', icon: null, description: 'Interactive mapping & geolocation' },
        ],
        color: 'from-blue-500 to-blue-600',
    },
    {
        category: 'Blockchain & Cloud Infrastructure',
        icon: CloudIcon,
        technologies: [
            { name: 'Ethereum / Hyperledger Fabric', description: 'Permissioned blockchain networks for data integrity and access control' },
            { name: 'Firebase', icon: SiFirebase, description: 'Real-time data synchronization' },
            { name: 'AWS/GCP/Azure', icon: FaAws, description: 'Cloud platforms (designed for)' },
            { name: 'Docker & Kubernetes', icon: FaDocker, description: 'Containerization & orchestration' },
            { name: 'Git', icon: FaGitAlt, description: 'Version control system' },
        ],
        color: 'from-orange-500 to-orange-600',
    },
];



export default function Technologies() {
    return (
        <section id="technologies" className="py-12 sm:py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Technologies Powering DigiMed
                        </h2>
                        <div className="w-20 h-0.5 bg-green-500/50 mx-auto rounded-full mb-6"></div>
                        <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
                            The Intelligent EcoUrban Monitoring System (DigiMed) leverages a sophisticated and modern technology stack,
                            carefully chosen to ensure high performance, scalability, and effective data processing across its diverse components.
                        </p>
                    </div>

                    {/* Technology Categories */}
                    <div className="mb-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {technologyCategories.map((category, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative group"
                                >
                                    <div className={`absolute -inset-1 bg-gradient-to-r ${category.color} rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300`}></div>
                                    <div className="relative bg-white/5 backdrop-blur-lg p-6 rounded-lg border border-white/10 h-full">
                                        <div className="flex items-center mb-4">
                                            <category.icon className="h-6 w-6 text-white mr-3" />
                                            <h3 className="text-lg font-semibold text-white">{category.category}</h3>
                                        </div>
                                        <div className="space-y-3">
                                            {category.technologies.map((tech, techIndex) => (
                                                <div key={techIndex} className="flex items-center">
                                                    {tech.icon && (
                                                        <tech.icon className="h-5 w-5 text-gray-300 mr-3" />
                                                    )}
                                                    {!tech.icon && (
                                                        <div className="w-5 h-5 bg-gray-600 rounded mr-3"></div>
                                                    )}
                                                    <div>
                                                        <p className="text-white font-medium text-sm">{tech.name}</p>
                                                        <p className="text-gray-400 text-xs">{tech.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>


                </motion.div>
            </div>
        </section>
    );
} 