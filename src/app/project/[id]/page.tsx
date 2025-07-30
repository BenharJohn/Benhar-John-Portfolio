import React from 'react';
import { ArrowLeft, Github, Linkedin, Youtube, ExternalLink } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { RobotScene } from '@/components/RobotScene';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// Consolidated project data with full entries
const projectData = {


  
  'assistive-robot-control': {
    title: 'Real-Time Gesture-Controlled Robotic Hand',
    description: 'A vision-based system for controlling a physical robotic hand using real-time gesture analysis.',
    fullDescription: `An intuitive human-robot interface designed to control a 3D-printed robotic hand using hand gestures captured through a standard webcam. The system translates finger counts into commands, enabling fluid and direct manipulation of the hardware.

Key Features:
• Real-time gesture capture via standard webcam
• Contour-based finger counting for multi-gesture recognition (fist, open palm, pointing, etc.)
• Articulated 5-finger robotic hand with servo-driven actuation
• Low-latency serial communication protocol for immediate hardware response
• Intuitive user interface with a defined Region of Interest (ROI) for interaction

Technical Implementation:
• Developed using Python with OpenCV for core image processing tasks.
• Utilized HSV color-space thresholding and morphological transformations to isolate the user's hand.
• Implemented a gesture recognition algorithm based on contour analysis and convexity defects to count extended fingers.
• Arduino UNO programmed in C++ to translate serial commands into precise PWM signals for MG90s servo motors.
• Established a robust communication link between the Python application and the Arduino using the PySerial library.`,
    tech: ['Python', 'OpenCV', 'Arduino', 'PySerial', 'NumPy'],
    // Best image would be a photo of your actual project in action. This is a placeholder.
    image: '/images/hand2.jpg',
    github: 'https://github.com/BenharJohn/Project-ARC', // Replace with your GitHub repository link
    demo: 'https://youtube.com/shorts/V_11GS3dcyU?feature=share',     // Replace with a link to a video demo if you have one
    results: [
      'Achieved real-time control with minimal perceptible lag between gesture and action',
      'Successfully distinguished between multiple distinct hand gestures (e.g., open palm, fist)',
      'Created a reliable and replicable system using accessible hardware and open-source software'
    ],
  },

  'autonomous-chess-robot': {
    title: 'Autonomous Chess-Playing Robot',
    description: 'An autonomous robot designed to play chess using computer vision and deep learning techniques.',
    fullDescription: `This project features an autonomous robot capable of playing a full game of chess against a human opponent by perceiving the board and physically moving pieces.

Key Features:
• Autonomous gameplay driven by a computer vision pipeline
• Real-time detection and identification of all chess pieces
• High-precision robotic arm manipulation for seamless interaction
• Responsive game-play through an optimized vision and control system

Technical Implementation:
• Used Python and OpenCV for high-speed image processing and game state management.
• Implemented YOLO and custom CNNs for piece detection, achieving 95% accuracy.
• Designed and simulated robot kinematics for precise and safe arm movements.
• Integrated the complete system for robust, end-to-end gameplay.`,
    tech: ['Python', 'OpenCV', 'YOLO', 'CNNs', 'Robotics'],
    image: 'https://images.unsplash.com/photo-1590240473870-a1c22a2f60e0?q=80&w=2940&auto=format&fit=crop',
    //linkedin: 'https://linkedin.com/in/benhar-john',
    demo: 'https://youtu.be/mXT7cy6JQiU',
    results: [
      '95% accuracy in move identification',
      'Real-time gameplay responsiveness',
      'Seamless physical piece interaction'
    ]
},

  'multi-robot-solar': {
    title: 'Multi-Robot Solar-Powered System',
    description: 'Cooperative multi-robot system with solar-powered UGVs and UAVs for efficient exploration and coverage.',
    fullDescription: `This project focuses on developing an innovative multi-robot system that combines solar-powered UGVs and UAVs for efficient area exploration and coverage.

Key Features:
• Advanced trajectory planning algorithms
• Energy-aware path planning
• Dynamic coordination between UGVs and UAVs
• Solar power management system
• Real-time task allocation

Technical Implementation:
• Used Python and ROS for robot control
• Implemented MARL
• Developed custom Voronoi partitioning
• Built energy consumption models
• Simulated in Gazebo`,
    tech: ['Python', 'MARL', 'ROS', 'Voronoi'],
    image: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg',
    linkedin: 'https://www.linkedin.com/posts/benhar-john_robotics-multirobotsystems-innovation-activity-7286310065634975744-tMNg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECEhXkBjb3ykTaYApYUxRtTJFvbWwMcGVs',
    //demo: 'https://youtube.com/demo',
    results: [
      '95% coverage efficiency',
      '30% reduced energy consumption',
      '85% task allocation accuracy'
    ],
  },
  'ur5-trajectory': {
    title: 'UR5 Trajectory Planning',
    description: 'Advanced trajectory planning system for UR5 robotic arm.',
    fullDescription: `Planning and executing smooth continuous trajectories for the UR5 arm using cubic splines and IK solvers.

Key Features:
• Circular motion generation
• Quintic polynomial segments
• TRAC-IK integration
• Collision avoidance

Technical Implementation:
• Python + ROS
• SciPy-based computations
• Custom trajectory algorithms`,
    tech: ['Python', 'ROS', 'TRAC-IK', 'SciPy'],
    image: 'https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg',
    github: 'https://linkedin.com/in/benhar-john',
   // demo: 'https://youtube.com/demo',
    results: [
      'Smooth continuous motion',
      '25% faster execution',
      'Integrated collision avoidance'
    ],
  },
  'weather-forecasting': {
    title: 'Weather Forecasting System',
    description: 'Advanced weather forecasting system using ML.',
    fullDescription: `A robust forecasting platform leveraging SARIMA and LSTM models on historical weather data.

Key Features:
• Data pipeline
• Ensemble learning
• Real-time predictions

Technical Implementation:
• TensorFlow + scikit-learn
• Time series analysis`,
    tech: ['Python', 'TensorFlow', 'SARIMA', 'Pandas', 'scikit-learn'],
    image: 'https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg',
    github: 'https://github.com/BenharJohn/weather-forecasting',
    //demo: 'https://youtube.com/demo',
    results: [
      '90% accuracy',
      'Anomaly detection',
      'Real-time forecasting'
    ],
  },
  'smart-home': {
    title: 'Smart Home Automation',
    description: 'IoT-based home automation with real-time monitoring.',
    fullDescription: `An integrated system controlling lighting, climate, and security via MQTT and a mobile app.

Key Features:
• Sensor network
• Automated lighting
• Security integration

Technical Implementation:
• React frontend
• Node.js + MongoDB
• MQTT communications`,
    tech: ['React', 'Node.js', 'MQTT', 'MongoDB'],
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
    //github: 'https://github.com/yourusername/smart-home',
    //demo: 'https://demo.smart-home.com',
    results: [
      '25% energy savings',
      'Improved security',
      '80% routine automation'
    ],
  },


    'ai-chatbot': {

      title: 'AEVA',
      description: 'An AI-powered web app that merges a proactive productivity assistant with an empathetic wellness journal.',
      fullDescription: `A modern web application designed to be a holistic companion for productivity and mental well-being. It moves beyond a standard to-do list by integrating a sophisticated, context-aware AI that serves as both a proactive personal assistant and an empathetic journal.
  
  Key Features
  • Unified AI Agent: A powerful AI "brain" (Google Gemini) that switches between an efficient assistant and an empathetic listener.
  • AI-Powered Task Decomposition: The AI uses Function Calling to intelligently break down complex goals into scheduled, actionable subtasks.
  • Persistent & Context-Aware Journal: A safe space for reflective conversation where the AI remembers previous topics for stateful, meaningful dialogue.
  • Real-Time Task Management: A Supabase backend with Realtime Subscriptions ensures the task list updates instantly for all users.
  • Interactive Focus Mode: A Pomodoro timer with integrated ambient sounds and a unique "Pattern Recall" brain-training game for mindful breaks.
  • Intelligent Learning Tools: Includes an AI-powered concept explainer, text summarizer, and a Flashcard Generator.
  • Mobile-First Responsive Design: Ensuring a seamless experience on all devices.

  
  Upcoming Features:
  • Third-Party Integrations: Connecting with Google Calendar and other services.
  • Deeper Analytics: Providing users with insights into their productivity and wellness patterns.`,
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Gemini API', 'Supabase', 'Netlify Functions'],
      image: 'path/to/your/screenshot.png', // A screenshot of the current UI would be perfect
     // github: '#', // Your GitHub repo link
      // 3. For the demo link, it's best to link to a short video of the current state
      demo: 'https://aeva.space/', // Link to a Loom or YouTube video showing the features in action
      // 4. Reframe "results" as "Key Milestones" or "Project Goals"
      results: [
        'Successfully integrated Gemini API for complex, multi-step agentic tasks',
        'Established a real-time, bi-directional data flow with Supabase subscriptions',
        'Designed and implemented a secure, scalable serverless architecture on Netlify',
      ],
    },

 
  'data-analytics': {
    title: 'Real-time Data Analytics Platform',
    description: 'Scalable stream processing and dashboards.',
    fullDescription: `An end-to-end analytics suite built with Kafka, Elasticsearch, and React.

Key Features:
• High throughput
• Dashboards
• Reports

Technical Implementation:
• Kafka streams
• Elasticsearch dB
• React frontend`,
    tech: ['Python', 'Apache Kafka', 'Elasticsearch', 'React'],
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
    github: 'https://github.com/yourusername/data-analytics',
    demo: 'https://demo.data-analytics.com',
    results: [
      '1M events/sec',
      '75% faster analysis',
      '99.9% uptime'
    ],
  }
};

interface Params {
  id?: string;
}

export default function ProjectDetail({ params }: { params: Params }) {
  const id = params.id;
  const project = id ? projectData[id as keyof typeof projectData] : null;

  if (!project) notFound();

  // --- MODIFIED: Logic to check for each link's existence ---
  const hasGitHub = project.github && project.github !== '#';
  const hasLinkedIn = project.linkedin && project.linkedin !== '#';
  const hasDemo = project.demo && project.demo !== '#';

  return (
    <div className="min-h-screen bg-zinc-950 text-white pt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-zinc-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-zinc-400 text-lg mb-8">{project.description}</p>

          {/* --- MODIFIED: Container for all external link buttons --- */}
          <div className="flex flex-wrap items-center gap-4">
            {hasGitHub && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 text-white rounded-lg font-medium hover:bg-zinc-700 transition-colors">
                <Github className="w-4 h-4" /> View Source
              </a>
            )}
            {hasLinkedIn && (
              <a href={project.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-500 transition-colors">
                <Linkedin className="w-4 h-4" /> View Post
              </a>
            )}
            {hasDemo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-500 transition-colors">
                <Youtube className="w-4 h-4" /> Watch Demo
              </a>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-zinc-900/50 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Project Overview</h2>
              {/* Using a div with whitespace-pre-line for better control over paragraphs */}
              <div className="prose prose-invert max-w-none text-zinc-400 space-y-4 whitespace-pre-line">
                {project.fullDescription}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-zinc-900/50 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => <span key={idx} className="px-3 py-1 bg-zinc-800 rounded-full text-sm">{tech}</span>)}
              </div>
            </div>
            <div className="bg-zinc-900/50 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Key Results</h2>
              <ul className="space-y-2">
                {project.results.map((res, idx) => <li key={idx} className="flex items-start gap-3 text-zinc-400"><span className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-2 flex-shrink-0" />{res}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
