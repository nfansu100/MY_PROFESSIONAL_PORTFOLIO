import handTrackingGesture from '../assets/videos/demos/handTrackingGesture.mp4'
import ledControl from '../assets/videos/demos/ledControl.mp4'
import obstacleDetection from '../assets/videos/demos/obstacleDetection.mp4'
import vehicleManagement from '../assets/videos/demos/vehicleManagement.mp4'
import vehicleTracking from '../assets/videos/demos/vehicleTracking.mp4'
import volumeGesture from '../assets/videos/demos/volumeGesture.mp4'
import wifiWebServer from '../assets/videos/demos/wifiWebServer.mp4'

import chuImage from '../assets/images/projects/chuImage.png'
import chuProject from '../assets/images/projects/chu.png'
import embeddedOne from '../assets/images/projects/embedded1.jpg'
import embeddedTwo from '../assets/images/projects/embedded2.jpg'
import projectV2 from '../assets/images/projects/v2.jpg'
import vehicleProjectImg from '../assets/images/projects/vehicle_project_img.jpg'

export const projects = [
  {
    title: 'Vehicle Tracking Project',
    category: 'Computer Vision',
    description:
      'A computer vision project focused on tracking moving vehicles using image-processing workflows and real-time detection techniques.',
    technologies: ['Python', 'OpenCV', 'Computer Vision', 'Tracking'],
    featured: true,
    image: vehicleProjectImg,
    demo: vehicleTracking,
    github: '#',
  },
  {
    title: 'Hand Tracking Gesture',
    category: 'Gesture Interaction',
    description:
      'Explores hand tracking and gesture recognition as an interaction model for human-computer interaction and real-time control.',
    technologies: ['Python', 'OpenCV', 'Gesture Recognition', 'Vision'],
    featured: true,
    image: projectV2,
    demo: handTrackingGesture,
    github: '#',
  },
  {
    title: 'Volume Gesture Control',
    category: 'Embedded + AI',
    description:
      'A practical project combining visual gesture detection with device control to demonstrate interaction between AI and accessible human interfaces.',
    technologies: ['Python', 'OpenCV', 'Computer Vision', 'Automation'],
    featured: true,
    image: projectV2,
    demo: volumeGesture,
    github: '#',
  },
  {
    title: 'Wi-Fi Web Server with ESP32',
    category: 'Embedded Systems',
    description:
      'An ESP32-based web server project showcasing connected-device control and embedded web interfaces.',
    technologies: ['ESP32', 'Wi-Fi', 'Embedded Systems', 'Web Server'],
    featured: false,
    image: embeddedOne,
    demo: wifiWebServer,
    github: '#',
  },
  {
    title: 'Obstacle Detection with ESP32',
    category: 'Embedded Systems',
    description:
      'A hardware-focused embedded project centered on sensing and detecting obstacles in a compact, practical system design.',
    technologies: ['ESP32', 'Sensors', 'Embedded Systems', 'IoT'],
    featured: false,
    image: embeddedTwo,
    demo: obstacleDetection,
    github: '#',
  },
  {
    title: 'LED Control with ESP32',
    category: 'IoT',
    description:
      'A simple embedded control project demonstrating microcontroller-driven device interaction and remote control concepts.',
    technologies: ['ESP32', 'Embedded C', 'IoT', 'Control'],
    featured: false,
    image: embeddedOne,
    demo: ledControl,
    github: '#',
  },
  {
    title: 'Vehicle Management System at CHU Hospital',
    category: 'Applied Vision',
    description:
      'A hospital parking management system designed to improve vehicle entry and parking operations using computer vision and workflow automation.',
    technologies: ['Computer Vision', 'Python', 'Web App', 'Operations'],
    featured: true,
    image: chuProject,
    demo: vehicleManagement,
    github: '#',
  },
  {
    title: 'Embedded Linux (Buildroot) for Raspberry Pi 4',
    category: 'Embedded Linux',
    description:
      'A Linux system customization project for Raspberry Pi 4, focused on embedded operating system engineering and platform-specific builds.',
    technologies: ['Raspberry Pi', 'Buildroot', 'Embedded Linux', 'Linux'],
    featured: false,
    image: chuImage,
    demo: '#',
    github: '#',
  },
]
