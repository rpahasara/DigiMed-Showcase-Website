# IEMS - Intelligent EcoUrban Monitoring System

**Pioneering a Greener, Smarter Urban Future**

![IEMS Banner](public/images/environmental-bg.webp)

## 🌍 Project Overview

The **Intelligent EcoUrban Monitoring System (IEMS)** is a revolutionary platform that integrates cutting-edge AI, IoT, and data analytics to provide comprehensive, real-time, and predictive insights into urban environmental challenges. IEMS addresses the complex interconnected issues of air quality, noise pollution, green space dynamics, and vehicle CO₂ emissions through four specialized AI-driven components.

### 🎯 Core Components

1. **🌱 EcoSensor AI** - Real-time air quality monitoring using IoT sensors with hybrid ML models and LLM-generated health advisories
2. **🌳 Green Vision AI** - Satellite-based urban vegetation analysis using U-Net CNNs for tree segmentation and LSTM forecasting
3. **🔊 Noise Guard AI** - Smart noise monitoring with multi-label classification and predictive analytics
4. **🚗 EcoGo** - Vehicle CO₂ prediction with TOPSIS-based ranking and personalized eco-driving recommendations

## ✨ Key Features

- **Real-time Environmental Monitoring** - Live data from IoT sensor networks
- **AI-Powered Predictions** - Advanced machine learning models for forecasting
- **Interactive Dashboards** - Modern, responsive web interface with data visualizations
- **Personalized Recommendations** - Context-aware guidance using LLaMA 3.3 with RAG
- **Multi-source Data Integration** - IoT sensors, satellite imagery, and vehicle datasets
- **Academic Research Foundation** - Built on comprehensive literature survey and research

## 🛠️ Technology Stack

### AI & Machine Learning

- **Python** - Primary language for AI/ML development
- **TensorFlow & Keras** - Deep learning frameworks
- **Scikit-learn** - ML models & algorithms
- **XGBoost** - Ensemble learning methods
- **LLaMA 3.3** - Large language model with RAG
- **U-Net CNN** - Tree segmentation architecture
- **LSTM Networks** - Time series forecasting
- **TOPSIS** - Multi-criteria decision making

### IoT & Sensor Technologies

- **Arduino & ESP32** - IoT microcontrollers
- **MQ-135** - CO₂/NOx detection sensor
- **SDS011** - Laser-based PM2.5 sensor
- **DHT22** - Digital temperature & humidity sensor
- **Calibrated Microphones** - Noise monitoring sensors

### Data Processing

- **OpenCV** - Image processing & computer vision
- **Librosa** - Audio analysis & Mel-spectrograms
- **Pandas & NumPy** - Data manipulation & analysis
- **NDVI Calculation** - Vegetation index from RGB

### Backend Development

- **Python Flask** - Lightweight ML serving framework
- **Node.js & Express** - Web application backend services
- **RESTful APIs** - API-driven communication
- **Axios** - Promise-based HTTP client

### Frontend Development

- **React.js** - Core frontend library
- **Next.js** - React framework with SSR
- **Tailwind CSS** - Utility-first styling
- **Chart.js & ApexCharts** - Data visualization libraries
- **React-Leaflet** - Interactive mapping
- **Mapbox API** - Interactive mapping & geolocation
- **Framer Motion** - Animation library

### Database & Cloud

- **MongoDB** - Primary NoSQL database
- **Firebase** - Real-time data synchronization
- **AWS/GCP/Azure** - Cloud platforms (designed for)
- **Docker & Kubernetes** - Containerization & orchestration
- **Git** - Version control system

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Git**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/IsuruX98/Intelligent-Eco-Urban-Monitoring-System.git
   cd Intelligent-Eco-Urban-Monitoring-System
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Configure the following variables in `.env.local`:

   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   ```

4. **Add required assets**

   - Place team member images in `public/images/`
   - Add document PDFs in `public/documents/`
   - Add presentation PDFs in `public/presentations/`

5. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
IEMS-Static/
├── components/           # React components
│   ├── About.tsx        # Team information
│   ├── Contact.tsx      # Contact form and information
│   ├── Downloads.tsx    # Documents and presentations
│   ├── Hero.tsx         # Landing section
│   ├── Methodology.tsx  # Project methodology
│   ├── Milestones.tsx   # Project timeline
│   ├── Navbar.tsx       # Navigation component
│   ├── ProjectScope.tsx # Literature survey and objectives
│   └── Technologies.tsx # Technology stack
├── pages/               # Next.js pages
│   ├── _app.tsx        # App configuration
│   ├── _document.tsx   # Document structure
│   └── index.tsx       # Main page
├── public/              # Static assets
│   ├── documents/      # PDF documents
│   ├── images/         # Images and photos
│   └── presentations/  # Presentation files
├── styles/             # CSS styles
└── README.md           # Project documentation
```

## 📊 Project Milestones

- ✅ **Project Proposal** - August 23, 2024
- ✅ **Progress Presentation I** - December 8, 2024
- 🔄 **Research Paper** - February 2025
- ⏳ **Progress Presentation II** - March 2025
- ⏳ **Website Assessment** - April 2025
- ⏳ **Logbook** - April 2025
- ⏳ **Final Report** - May 2025
- ⏳ **Final Presentation & Viva** - May 26, 2025

## 👥 Team

### Supervisors

- **Rajapaksha. S.K.** - Supervisor, Department of Information Technology, SLIIT
- **Kaushika Kahatapitiya** - Co-Supervisor, Department of Information Technology, SLIIT

### Students

- **Thuduwage I.M.H.G** - Group Leader (IT21169380)
- **Kodithuwakku C.K.** - Group Member (IT21156960)
- **Arandara S.D.** - Group Member (IT21164330)
- **Karunarathne R.Y.D** - Group Member (IT21169144)

_Department of Computer Science and Software Engineering, SLIIT_

## 📚 Research Foundation

IEMS is built on comprehensive academic research covering:

- **Urban Air Quality Monitoring** - IoT-based sensor networks and ML prediction models
- **Green Space Analysis** - Remote sensing and deep learning for vegetation monitoring
- **Noise Classification** - AI-powered urban soundscape analysis
- **Vehicle Emission Reduction** - Ensemble ML models and decision-making algorithms

### Key Research Gaps Addressed

- Integrated multi-pollutant monitoring
- Actionable intelligence from complex data
- Personalized and context-aware guidance
- Real-time dynamic adaptation
- Comprehensive green space forecasting
- Behavioral change enablement for CO₂ reduction

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors

### Code Quality

The project follows strict linting rules and TypeScript standards:

- ESLint configuration for React and TypeScript
- Proper entity escaping for accessibility
- Unused import detection and removal
- Consistent code formatting

## 📄 Documentation

### Available Downloads

- **Topic Assessment** - Research area and scope definition
- **Project Proposal** - Individual proposals (Google Drive)
- **Research Paper** - Academic publication (Coming Soon)
- **Final Report** - Individual project reports (Google Drive)

### Presentations

- **Project Proposal** - Initial concept presentation
- **Progress Presentation I** - Development progress showcase
- **Progress Presentation II** - Advanced functionality demo (Coming Soon)
- **Final Presentation** - Complete implementation overview (Coming Soon)

## 🤝 Contributing

We welcome collaboration opportunities, research partnerships, and inquiries about IEMS. Whether you're a researcher, environmental agency, or technology partner, we'd love to hear from you.

### Contact Information

- **Email**: isurusanju98@gmail.com
- **Phone**: +94 77 188 6641
- **Institution**: Sri Lanka Institute of Information Technology, Malabe, Sri Lanka

### Project Links

- **GitHub Repository**: [IEMS GitHub](https://github.com/IsuruX98/Intelligent-Eco-Urban-Monitoring-System)
- **Live Application**: Coming Soon

## 📜 License

This project is developed as part of academic research at Sri Lanka Institute of Information Technology (SLIIT). All documents and presentations are provided for educational and research purposes.

## 🙏 Acknowledgments

- Sri Lanka Institute of Information Technology (SLIIT)
- Department of Information Technology
- Department of Computer Science and Software Engineering
- Research supervisors and academic staff
- Environmental monitoring research community

---

**IEMS - Intelligent EcoUrban Monitoring System**  
_Pioneering a Greener, Smarter Urban Future_

For more information, visit our [project website](http://localhost:3000) or contact our team.
