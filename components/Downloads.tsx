import { motion } from 'framer-motion';
import { DocumentTextIcon, PresentationChartLineIcon, ArrowDownTrayIcon, EyeIcon } from '@heroicons/react/24/outline';
import { FiFileText, FiMonitor } from 'react-icons/fi';

const documents = [
    {
        title: 'Topic Assessment',
        description: 'Initial topic assessment document outlining the research area and preliminary scope.',
        type: 'document',
        date: 'August 2024',

        format: 'PDF',
        status: 'available',
        category: 'Group',
        downloadUrl: 'https://mysliit.sharepoint.com/:f:/s/CDAPSubmissionCloud/Ek0FYstlCzxBhtvol_tgCBgBCYWFJb-XZ-AXY16LYlnWdw?e=7dEptT'
        
    },

    {
        title: 'Project Proposal',
        description: 'Detailed project proposal outlining DigiMed objectives, methodology, and expected outcomes.',
        type: 'document',
        date: 'August 2024',

        format: 'PDF',
        status: 'available',
        category: 'Individual',
        downloadUrl: 'https://mysliit.sharepoint.com/:f:/s/CDAPSubmissionCloud/EhYZIGOdpfNGltvcGFntyTIBzO2mdSm9-VHREElIdIt3VA?e=AefDX3'
    },
    {
        title: 'Research Paper',
        description: 'Academic research paper on intelligent environmental monitoring systems and their applications.',
        type: 'document',
        date: 'February 2025',

        format: 'PDF',
        status: 'coming-soon',
        category: 'Group',
        downloadUrl: '#'
    },
    {
        title: 'Final Report',
        description: 'Complete individual project report documenting development process, results, and conclusions.',
        type: 'document',
        date: 'May 2025',

        format: 'PDF',
        status: 'available',
        category: 'Individual',
        downloadUrl: 'https://mysliit.sharepoint.com/:f:/s/CDAPSubmissionCloud/EsqOP8IOZQhOspHFUGeUNUcBng5QKT6T1Cr8aLz2vNp0bw?e=bFIBip'
    },

];

const presentations = [
    {
        title: 'Project Proposal',
        description: 'Initial project presentation outlining DigiMed concept and development plan.',
        type: 'presentation',
        date: 'August 2024',

        format: 'PDF',
        status: 'available',
        category: 'Group',
        downloadUrl: 'https://mysliit.sharepoint.com/:f:/s/CDAPSubmissionCloud/EhYZIGOdpfNGltvcGFntyTIBzO2mdSm9-VHREElIdIt3VA?e=AefDX3'

    },
    {
        title: 'Progress Presentation I',
        description: 'Mid-project presentation showcasing development progress and initial results.',
        type: 'presentation',
        date: 'December 2024',

        format: 'PDF',
        status: 'available',
        category: 'Group',
        downloadUrl: 'https://mysliit.sharepoint.com/:f:/s/CDAPSubmissionCloud/EnpvXd_tTIdGi9q6Qz8Hp8EBC4MNIiRTfABcZVqz2e9ekA?e=KexQun'
    },
    {
        title: 'Progress Presentation II',
        description: 'Advanced progress presentation demonstrating system functionality and testing results.',
        type: 'presentation',
        date: 'March 2025',

        format: 'PDF',
        status: 'available',
        category: 'Group',
        downloadUrl: 'https://mysliit.sharepoint.com/:f:/s/CDAPSubmissionCloud/EtRSa1akJ1RPnvn5cgDFWeUBHG5UgE4FlntY3fApiVMZkQ?e=w3OCC4'
    },
    {
        title: 'Final Presentation',
        description: 'Comprehensive final presentation covering complete DigiMed implementation and evaluation.',
        type: 'presentation',
        date: 'May 2025',

        format: 'PDF',
        status: 'coming-soon',
        category: 'Group',
        downloadUrl: '#'
    }
];

const getStatusBadge = (status: string) => {
    switch (status) {
        case 'available':
            return 'bg-green-500/20 text-green-400 border-green-500/30';
        case 'coming-soon':
            return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
        default:
            return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
};

const getCategoryBadge = (category: string) => {
    switch (category) {
        case 'Group':
            return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
        case 'Individual':
            return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
        default:
            return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
};

export default function Downloads() {
    return (
        <section id="downloads" className="py-12 sm:py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Downloads
                        </h2>
                        <div className="w-20 h-0.5 bg-blue-500/50 mx-auto rounded-full"></div>
                    </div>

                    {/* Documents Section */}
                    <div className="mb-16">
                        <div className="flex items-center mb-8">
                            <DocumentTextIcon className="h-8 w-8 text-blue-400 mr-4" />
                            <h3 className="text-2xl sm:text-3xl font-semibold text-white">Documents</h3>
                        </div>
                        <p className="text-gray-300 mb-8 text-center">
                            Access all project documents including assessments, proposals, research papers, and reports.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {documents.map((doc, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <FiFileText className="h-8 w-8 text-blue-400 flex-shrink-0" />
                                        <div className="flex flex-col gap-1">
                                            <span className={`px-2 py-1 text-xs rounded-full border ${getStatusBadge(doc.status)}`}>
                                                {doc.status === 'available' ? 'Available' : 'Coming Soon'}
                                            </span>
                                            <span className={`px-2 py-1 text-xs rounded-full border ${getCategoryBadge(doc.category)}`}>
                                                {doc.category}
                                            </span>
                                        </div>
                                    </div>
                                    <h4 className="text-lg font-semibold text-white mb-2">{doc.title}</h4>
                                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{doc.description}</p>
                                    <div className="flex justify-between items-center text-xs text-gray-400 mb-4">
                                        <span>{doc.date}</span>
                                        <span>{doc.format}</span>
                                    </div>
                                    <div className="flex gap-2">
                                        {doc.status === 'available' ? (
                                            <>
                                                <motion.button
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    onClick={() => {
                                                        if (doc.downloadUrl.includes('drive.google.com')) {
                                                            window.open(doc.downloadUrl, '_blank');
                                                        } else {
                                                            const link = document.createElement('a');
                                                            link.href = doc.downloadUrl;
                                                            link.download = doc.title + '.' + doc.format.toLowerCase();
                                                            document.body.appendChild(link);
                                                            link.click();
                                                            document.body.removeChild(link);
                                                        }
                                                    }}
                                                    className="flex-1 flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 bg-blue-500 hover:bg-blue-600 text-white"
                                                >
                                                    <ArrowDownTrayIcon className="h-4 w-4 mr-2" />
                                                    {doc.downloadUrl.includes('drive.google.com') ? 'Open Drive' : 'Open Drive'}
                                                </motion.button>
                                                <motion.button
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    onClick={() => {
                                                        if (doc.downloadUrl.includes('drive.google.com')) {
                                                            window.open(doc.downloadUrl, '_blank');
                                                        } else {
                                                            window.open(doc.downloadUrl, '_blank');
                                                        }
                                                    }}
                                                    className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10"
                                                >
                                                    <EyeIcon className="h-4 w-4" />
                                                </motion.button>
                                            </>
                                        ) : (
                                            <div className="flex-1 flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium bg-gray-500/50 text-gray-400 cursor-not-allowed">
                                                <span>Yet to be submitted, link will be updated soon.</span>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Presentations Section */}
                    <div>
                        <div className="flex items-center mb-8">
                            <PresentationChartLineIcon className="h-8 w-8 text-purple-400 mr-4" />
                            <h3 className="text-2xl sm:text-3xl font-semibold text-white">Presentations</h3>
                        </div>
                        <p className="text-gray-300 mb-8 text-center">
                            Please find all presentations related to this project below.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {presentations.map((presentation, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <FiMonitor className="h-8 w-8 text-purple-400 flex-shrink-0" />
                                        <div className="flex flex-col gap-1">
                                            <span className={`px-2 py-1 text-xs rounded-full border ${getStatusBadge(presentation.status)}`}>
                                                {presentation.status === 'available' ? 'Available' : 'Coming Soon'}
                                            </span>
                                            <span className={`px-2 py-1 text-xs rounded-full border ${getCategoryBadge(presentation.category)}`}>
                                                {presentation.category}
                                            </span>
                                        </div>
                                    </div>
                                    <h4 className="text-lg font-semibold text-white mb-2">{presentation.title}</h4>
                                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{presentation.description}</p>
                                    <div className="flex justify-between items-center text-xs text-gray-400 mb-4">
                                        <span>{presentation.date}</span>
                                        <span>{presentation.format}</span>
                                    </div>
                                    <div className="flex gap-2">
                                        {presentation.status === 'available' ? (
                                            <>
                                                <motion.button
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    onClick={() => {
                                                        const link = document.createElement('a');
                                                        link.href = presentation.downloadUrl;
                                                        link.download = presentation.title + '.' + presentation.format.toLowerCase();
                                                        document.body.appendChild(link);
                                                        link.click();
                                                        document.body.removeChild(link);
                                                    }}
                                                    className="flex-1 flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 bg-purple-500 hover:bg-purple-600 text-white"
                                                >
                                                    <ArrowDownTrayIcon className="h-4 w-4 mr-2" />
                                                    Open Drive
                                                </motion.button>
                                                <motion.button
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    onClick={() => {
                                                        window.open(presentation.downloadUrl, '_blank');
                                                    }}
                                                    className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10"
                                                >
                                                    <EyeIcon className="h-4 w-4" />
                                                </motion.button>
                                            </>
                                        ) : (
                                            <div className="flex-1 flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium bg-gray-500/50 text-gray-400 cursor-not-allowed">
                                                <span>Yet to be submitted, link will be updated soon.</span>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Download Notice */}
                    <div className="mt-12 bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                        <h4 className="text-blue-400 font-semibold mb-2">Download Notice</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            All documents and presentations are provided for educational and research purposes.
                            Please ensure you have the necessary permissions before downloading and using these materials.
                            For any questions or additional resources, please contact our team.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 