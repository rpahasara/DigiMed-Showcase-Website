import { motion } from 'framer-motion';
import { CalendarIcon, CheckCircleIcon, ClockIcon } from '@heroicons/react/24/outline';

const milestones = [
    {
        title: 'Project Proposal',
        date: 'August 23, 2024',
        description: 'Initial project proposal submission outlining the IEMS concept, objectives, and implementation plan.',
        status: 'completed',
        deliverables: ['Project Charter', 'Research Objectives', 'Methodology Overview']
    },
    {
        title: 'Progress Presentation I',
        date: 'December 8, 2024',
        description: 'First progress presentation showcasing initial development, literature review, and preliminary results.',
        status: 'completed',
        deliverables: ['Literature Survey', 'System Architecture', 'Initial Prototypes']
    },
    {
        title: 'Research Paper',
        date: 'February 2025',
        description: 'Academic research paper documenting the IEMS methodology, implementation, and findings.',
        status: 'completed',
        deliverables: ['Research Paper Draft', 'Experimental Results', 'Performance Analysis']
    },
    {
        title: 'Progress Presentation II',
        date: 'March 2025',
        description: 'Second progress presentation demonstrating advanced features, testing results, and system integration.',
        status: 'completed',
        deliverables: ['System Demo', 'Testing Results', 'User Feedback Analysis']
    },
    {
        title: 'Website Assessment',
        date: 'April 2025',
        description: 'Comprehensive assessment of the IEMS web platform, user interface, and functionality.',
        status: 'completed',
        deliverables: ['Website Documentation', 'User Manual', 'Feature Demonstration']
    },
    {
        title: 'Logbook',
        date: 'April 2025',
        description: 'Complete project logbook documenting the development process, challenges, and solutions.',
        status: 'completed',
        deliverables: ['Development Log', 'Technical Decisions', 'Problem-Solution Records']
    },
    {
        title: 'Final Report',
        date: 'May 2025',
        description: 'Comprehensive final report covering all aspects of the IEMS project from conception to completion.',
        status: 'completed',
        deliverables: ['Final Report', 'Technical Documentation', 'Future Recommendations']
    },
    {
        title: 'Final Presentation & Viva',
        date: 'May 26, 2025',
        description: 'Final project presentation and viva voce examination demonstrating the complete IEMS solution.',
        status: 'pending',
        deliverables: ['Final Presentation', 'System Demonstration', 'Viva Defense']
    }
];

const getStatusColor = (status: string) => {
    switch (status) {
        case 'completed':
            return 'text-green-400 bg-green-500/20 border-green-500/30';
        case 'in-progress':
            return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
        case 'pending':
            return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
        default:
            return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
};

const getStatusIcon = (status: string) => {
    switch (status) {
        case 'completed':
            return CheckCircleIcon;
        case 'in-progress':
            return ClockIcon;
        case 'pending':
            return CalendarIcon;
        default:
            return CalendarIcon;
    }
};

export default function Milestones() {
    return (
        <section id="milestones" className="py-12 sm:py-16 md:py-20 bg-zinc-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Milestones
                        </h2>
                        <div className="w-20 h-0.5 bg-blue-500/50 mx-auto rounded-full"></div>
                    </div>

                    {/* Timeline Overview */}
                    <div className="mb-12">
                        <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-8 text-center">
                            Timeline in Brief
                        </h3>
                        <div className="bg-white/5 p-6 sm:p-8 rounded-lg border border-white/10">
                            <p className="text-gray-300 text-lg leading-relaxed text-center mb-6">
                                IEMS project follows a structured academic timeline spanning from August 2024 to May 2025,
                                with key milestones aligned to university assessment requirements and research deliverables.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                                <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                                    <h4 className="text-green-400 font-semibold mb-2">Completed</h4>
                                    <p className="text-2xl font-bold text-white">7</p>
                                    <p className="text-gray-300 text-sm">Milestones</p>
                                </div>
                                <div className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/20">
                                    <h4 className="text-yellow-400 font-semibold mb-2">In Progress</h4>
                                    <p className="text-2xl font-bold text-white">0</p>
                                    <p className="text-gray-300 text-sm">Milestones</p>
                                </div>
                                <div className="bg-gray-500/10 p-4 rounded-lg border border-gray-500/20">
                                    <h4 className="text-gray-400 font-semibold mb-2">Upcoming</h4>
                                    <p className="text-2xl font-bold text-white">1</p>
                                    <p className="text-gray-300 text-sm">Milestone</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Timeline Tree */}
                    <div className="relative">
                        {/* Vertical Timeline Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-green-500 to-gray-500"></div>

                        <div className="space-y-8">
                            {milestones.map((milestone, index) => {
                                const StatusIcon = getStatusIcon(milestone.status);
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="relative flex items-start"
                                    >
                                        {/* Timeline Node */}
                                        <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 ${milestone.status === 'completed' ? 'bg-green-500 border-green-400' :
                                            milestone.status === 'in-progress' ? 'bg-yellow-500 border-yellow-400' :
                                                'bg-gray-600 border-gray-500'
                                            }`}>
                                            <StatusIcon className="h-6 w-6 text-white" />
                                        </div>

                                        {/* Timeline Content */}
                                        <div className="ml-8 flex-1">
                                            <div className="bg-white/5 p-6 rounded-lg border border-white/10 relative">
                                                {/* Arrow pointing to timeline node */}
                                                <div className={`absolute left-0 top-6 w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent ${milestone.status === 'completed' ? 'border-r-green-500/20' :
                                                    milestone.status === 'in-progress' ? 'border-r-yellow-500/20' :
                                                        'border-r-gray-500/20'
                                                    } -translate-x-2`}></div>

                                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                                                    <div className="mb-4 lg:mb-0">
                                                        <h4 className="text-xl font-semibold text-white mb-1">{milestone.title}</h4>
                                                        <p className="text-blue-400 font-medium">{milestone.date}</p>
                                                    </div>
                                                    <span className={`px-3 py-1 text-xs rounded-full border font-medium ${getStatusColor(milestone.status)} self-start`}>
                                                        {milestone.status === 'completed' ? 'Completed' :
                                                            milestone.status === 'in-progress' ? 'In Progress' : 'Upcoming'}
                                                    </span>
                                                </div>

                                                <p className="text-gray-300 mb-4 leading-relaxed">{milestone.description}</p>

                                                <div>
                                                    <h5 className="text-white font-medium mb-2">Key Deliverables:</h5>
                                                    <div className="flex flex-wrap gap-2">
                                                        {milestone.deliverables.map((deliverable, deliverableIndex) => (
                                                            <span
                                                                key={deliverableIndex}
                                                                className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/10"
                                                            >
                                                                {deliverable}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 