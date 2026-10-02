export const experience = [
  {
    id: 'moroccan-alpr',
    title: 'EMSYDEV Intern',
    organization: 'EMSYDEV (TANGIER)',
    period: 'Two months internship',
    location: 'Remote Intern',
    summary: 'Completed an internship which focuses on developement of Vehicle Detection model & ALPR model for EdgeVision plateform.',

    description:
      'During my summer internship, I worked on an end-to-end ALPR pipeline designed to detect vehicles, localize license plates, and recognize Moroccan license plate characters. The project combined deep learning, computer vision, OCR, and embedded AI deployment. I trained and evaluated object detection and recognition models, converted trained models to ONNX, and investigated FP32, FP16, and INT8 optimization strategies. I subsequently deployed and evaluated the complete inference pipeline on a Raspberry Pi 4, analyzing performance and computational efficiency to better understand the challenges of running AI models on edge hardware.',

    responsibilities: [
      'Developed a YOLOv8n-based detection system to identify vehicles, including cars, buses, motorcycles, and trucks, alongside their license plates.',
      'Implemented and evaluated a YOLO11-based OCR pipeline for recognizing Moroccan license plate characters, supported by dataset preparation and validation.',
      'Optimized deep learning models for edge inference through ONNX conversion and FP32, FP16, and INT8 precision experiments, evaluating recognition accuracy using plate accuracy, character accuracy, and character error rate.',
      'Deployed the complete two-stage ALPR pipeline on a Raspberry Pi 4 using ONNX Runtime and conducted comparative experiments to assess inference speed, recognition performance, and computational efficiency.'
    ],

    impact:
      'Delivered an end-to-end Moroccan ALPR prototype running on a Raspberry Pi 4. The project provided practical experience in deploying computer vision models on resource-constrained hardware, evaluating recognition accuracy, and investigating the trade-offs between inference performance and model precision.',

    technologies: [
      'Python',
      'PyTorch',
      'ONNX Runtime',
      'YOLO11',
      'ONNX',
      'YOLOv8',
      'Computer Vision',
      'OCR',
      'Edge AI',
      'Raspberry Pi 4',
    ],

    highlights: [
      'End-to-end vehicle and license plate recognition',
      'Moroccan license plate character recognition',
      'FP32, FP16, and INT8 model optimization',
      'ONNX-based edge deployment',
      'Raspberry Pi 4 CPU inference',
      'Performance and accuracy evaluation',
    ],
  },


  {
    id: 'chu-intern',
    title: 'CHU Intern',
    organization: 'Centre Hospitalier Universitaire',
    period: 'One month internship',
    location: 'Hospital environment',
    summary:
      'Completed a practical internship focused on improving hospital parking operations through a vehicle management system.',
    description:
      'This experience gave me the opportunity to apply embedded systems, AI, and software problem-solving in a realistic operational setting. I worked on a project that aimed to improve workflow efficiency and strengthen the system behind daily vehicle management tasks.',
    responsibilities: [
      'Developed a vehicle management workflow tailored to hospital operational needs.',
      'Applied embedded and AI concepts to a practical problem-solving scenario.',
      'Explored ways to improve organization, tracking, and service reliability in a hospital context.',
    ],
    impact:
      'The project helped me connect technical implementation with real-world process improvement and operational clarity.',
    technologies: ['Python', 'Computer Vision', 'Web App', 'Parking Management'],
    highlights: ['Embedded systems application', 'AI-based problem solving', 'Operational workflow design'],
  },
  {
    id: 'gasam-treasurer',
    title: 'GASAM Treasurer',
    organization: 'GASAM Association',
    period: 'June 2024 to September 2025',
    location: 'Association leadership',
    summary:
      'Served in a financial and leadership role, supporting accountability, coordination, and community-oriented service.',
    description:
      'As treasurer, I took responsibility for financial oversight and participated in the day-to-day organization of tasks that support association activities. This role strengthened my leadership, trust, and accountability skills in a collaborative environment.',
    responsibilities: [
      'Oversaw treasury responsibilities and supported financial accountability.',
      'Helped coordinate association-related needs in a service-focused environment.',
      'Contributed to a structured and reliable leadership culture within the group.',
    ],
    impact:
      'This role deepened my ability to combine responsibility, organization, and teamwork in a community setting.',
    technologies: ['Leadership', 'Organization', 'Community Service'],
    highlights: ['Treasury oversight', 'Association support', 'Leadership responsibility'],
  },
  {
    id: 'maths-science-club',
    title: 'Maths & Science Club Member',
    organization: 'Senior School',
    period: '3 years of membership',
    location: 'Academic environment',
    summary:
      'Participated in club activities that encouraged scientific curiosity, collaborative learning, and academic confidence.',
    description:
      'Through the Maths & Science Club, I gained exposure to both academic and practical learning experiences. The environment supported collaboration, curiosity, and confidence-building while reinforcing my interest in scientific problem solving.',
    responsibilities: [
      'Participated in club-based academic and scientific activities.',
      'Contributed to a collaborative environment for learning and discussion.',
      'Developed confidence through exposure to competition and shared problem solving.',
    ],
    impact:
      'The experience strengthened my enthusiasm for technical learning and my confidence in tackling analytical challenges.',
    technologies: ['Problem Solving', 'Science', 'Learning'],
    highlights: ['Academic competitions', 'Confidence building', 'Scientific engagement'],
  },
  {
    id: 'health-awareness',
    title: 'Health Awareness Training',
    organization: 'Health Professionals',
    period: 'Completed during senior school',
    location: 'Community health awareness',
    summary:
      'Completed health awareness training focused on prevention, education, and community understanding.',
    description:
      'This training provided practical knowledge around long-term health awareness and prevention, along with ways to help share that knowledge within the community. It reinforced the importance of education as a tool for positive, practical impact.',
    responsibilities: [
      'Attended structured training on long-term health awareness and prevention.',
      'Learned practical ways to share health information usefully with others.',
      'Engaged with the importance of community-based health education.',
    ],
    impact:
      'The experience reinforced the value of practical education, preventative thinking, and community engagement.',
    technologies: ['Health Awareness', 'Education', 'Safety'],
    highlights: ['Awareness training', 'Health education', 'Community engagement'],
  },
]
