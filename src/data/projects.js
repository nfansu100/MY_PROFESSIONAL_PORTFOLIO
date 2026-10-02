import handTrackingGesture from '../assets/videos/demos/handTrackingGesture.mp4'
import ledControl from '../assets/videos/demos/ledControl.mp4'
import obstacleDetection from '../assets/videos/demos/obstacleDetection.mp4'
import vehicleManagement from '../assets/videos/demos/vehicleManagement.mp4'
import vehicleTracking from '../assets/videos/demos/vehicleTracking.mp4'
import volumeGesture from '../assets/videos/demos/volumeGesture.mp4'
import wifiWebServer from '../assets/videos/demos/wifiWebServer.mp4'

import buildroot_linux from '../assets/images/projects/buildroot_linux.png'
import esp32_web_server from '../assets/images/projects/esp32_web_server.png'
import hand_tracking from '../assets/images/projects/hand_tracking.png'
import vehicle_tracking_counter from '../assets/images/projects/vehicle_tracking_counter.png'
import volume_tracking from '../assets/images/projects/volume_tracking.png'
import vehicle_management from '../assets/images/projects/vehicle_management.png'



export const projects = [
  {
    title: 'Vehicle Tracking Project',
    category: 'Computer Vision',
    summary:
      'Real-time vehicle detection and tracking using computer vision for traffic monitoring and motion analysis workflows.',
    description:
      'A computer vision project focused on tracking moving vehicles using image-processing workflows and real-time detection techniques.',
    details: {
      overview:
        'This project applies computer vision techniques to detect and follow moving vehicles in image sequences, enabling continuous monitoring of motion within a scene.',
      objective:
        'The goal was to create a robust vehicle-tracking solution that could support practical monitoring and analysis use cases using efficient image-processing methods.',
      approach:
        'The workflow combines frame-by-frame image processing, object detection, and motion-tracking logic to estimate vehicle positions over time with a focus on practical performance.',
      features: [
        'Real-time vehicle detection and tracking',
        'Motion-focused computer vision pipeline',
        'Practical monitoring and analysis workflow',
      ],
      outcome:
        'The system demonstrates how visual tracking can be used for situational awareness, monitoring, and operational analysis in dynamic environments.',
    },
    technologies: ['Python', 'OpenCV', 'Computer Vision', 'Tracking'],
    featured: true,
    image: vehicle_tracking_counter,
    demo: vehicleTracking,
    github: '#',
  },
  {
    title: 'Hand Tracking Gesture',
    category: 'Gesture Interaction',
    summary:
      'Gesture-driven interaction model that interprets hand movement for intuitive human-computer control and real-time input.',
    description:
      'Explores hand tracking and gesture recognition as an interaction model for human-computer interaction and real-time control.',
    details: {
      overview:
        'This project investigates how computer vision can detect and interpret hand gestures as a natural interface for real-time interaction.',
      objective:
        'The aim was to explore a contactless input approach that could translate gesture movements into meaningful control actions.',
      approach:
        'Using image processing and gesture recognition techniques, the system interprets hand motion patterns and maps them to interactive control behavior.',
      features: [
        'Hand detection and tracking',
        'Real-time gesture recognition',
        'Contactless interaction model',
      ],
      outcome:
        'The project highlights the potential of gesture-based interfaces for interactive applications and human-centered control systems.',
    },
    technologies: ['Python', 'OpenCV', 'Gesture Recognition', 'Vision'],
    featured: true,
    image: hand_tracking,
    demo: handTrackingGesture,
    github: '#',
  },
  {
    title: 'Volume Gesture Control',
    category: 'Embedded + AI',
    summary:
      'Vision-based volume control concept that links gesture detection to accessible system interaction and device-level automation.',
    description:
      'A practical project combining visual gesture detection with device control to demonstrate interaction between AI and accessible human interfaces.',
    details: {
      overview:
        'This project connects hand gestures to system-level actions, demonstrating how computer vision can support practical interaction in a user-friendly way.',
      objective:
        'The project was designed to explore how gesture-based control can simplify device interaction while improving accessibility and physical ease of use.',
      approach:
        'The solution leverages computer vision to detect gestures and translate them into actions such as volume modulation or related system responses.',
      features: [
        'Gesture-triggered control logic',
        'Accessible human-system interaction',
        'Computer vision automation pipeline',
      ],
      outcome:
        'The resulting workflow demonstrates a usable bridge between vision-based AI and real-world interaction design.',
    },
    technologies: ['Python', 'OpenCV', 'Computer Vision', 'Automation'],
    featured: true,
    image: volume_tracking,
    demo: volumeGesture,
    github: '#',
  },
  {
    title: 'Wi-Fi Web Server with ESP32',
    category: 'Embedded Systems',
    summary:
      'ESP32-based web server for connected device control and embedded interface interaction over Wi-Fi.',
    description:
      'An ESP32-based web server project showcasing connected-device control and embedded web interfaces.',
    details: {
      overview:
        'This project creates a compact embedded web application that lets an ESP32 serve a control interface over a Wi-Fi connection.',
      objective:
        'The goal was to build a practical connected-device project for remote control and embedded web interaction.',
      approach:
        'The design combines ESP32 networking features with a lightweight server setup to expose control functionality through a browser-based interface.',
      features: [
        'ESP32 Wi-Fi networking',
        'Embedded web server interface',
        'Remote device control workflow',
      ],
      outcome:
        'The project illustrates how embedded hardware can expose real-time control over a network in a clean and accessible way.',
    },
    technologies: ['ESP32', 'Wi-Fi', 'Embedded Systems', 'Web Server'],
    featured: false,
    image: esp32_web_server,
    demo: wifiWebServer,
    github: '#',
  },

  // {
  //   title: 'Obstacle Detection with ESP32',
  //   category: 'Embedded Systems',
  //   summary:
  //     'Compact obstacle sensing solution built around ESP32 hardware and real-time detection logic for embedded applications.',
  //   description:
  //     'A hardware-focused embedded project centered on sensing and detecting obstacles in a compact, practical system design.',
  //   details: {
  //     overview:
  //       'This project focuses on detecting physical obstructions in a compact embedded system using sensor-driven logic and real-time responses.',
  //     objective:
  //       'The objective was to design a practical obstacle-detection system demonstrating how embedded sensing can support simple but useful autonomous behavior.',
  //     approach:
  //       'The implementation combines sensor integration with embedded decision logic to detect nearby obstacles and respond appropriately to the environment.',
  //     features: [
  //       'Sensor-based obstacle detection',
  //       'Embedded decision logic',
  //       'Compact real-time hardware workflow',
  //     ],
  //     outcome:
  //       'The solution demonstrates a foundational embedded sensing pattern that can be extended for robotics, automation, and safety-oriented systems.',
  //   },
  //   technologies: ['ESP32', 'Sensors', 'Embedded Systems', 'IoT'],
  //   featured: false,
  //   image: embeddedTwo,
  //   demo: obstacleDetection,
  //   github: '#',
  // },
  
  // {
  //   title: 'LED Control with ESP32',
  //   category: 'IoT',
  //   summary:
  //     'Embedded IoT control project showcasing microcontroller-based lighting interfaces and device interaction patterns.',
  //   description:
  //     'A simple embedded control project demonstrating microcontroller-driven device interaction and remote control concepts.',
  //   details: {
  //     overview:
  //       'This project demonstrates how an ESP32 can control an LED-based output while serving as a simple embedded control interface.',
  //     objective:
  //       'The goal was to build a clear example of microcontroller-based command and control using an embedded hardware platform.',
  //     approach:
  //       'The system uses embedded logic to handle output commands and device interaction patterns in a lightweight, practical architecture.',
  //     features: [
  //       'ESP32 output control',
  //       'Embedded device interaction',
  //       'Simple IoT control pattern',
  //     ],
  //     outcome:
  //       'The project provides a straightforward example of how embedded applications can evolve from simple control logic into broader connected systems.',
  //   },
  //   technologies: ['ESP32', 'Embedded C', 'IoT', 'Control'],
  //   featured: false,
  //   image: embeddedOne,
  //   demo: ledControl,
  //   github: '#',
  // },

  {
    title: 'Vehicle Management System at CHU Hospital',
    category: 'Applied Vision',
    summary:
      'Computer-vision-based vehicle handling solution designed to streamline hospital entry and parking operations with structured workflows.',
    description:
      'A hospital parking management system designed to improve vehicle entry and parking operations using computer vision and workflow automation.',
    details: {
      overview:
        'This project focuses on managing vehicle movement and access in a hospital setting by combining vision-based recognition with structured operational workflows.',
      objective:
        'The system was designed to improve vehicle handling procedures and operational clarity in a real-world facility environment.',
      approach:
        'A combination of computer vision, automation, and process-focused logic supports vehicle recognition and parking operations in a practical context.',
      features: [
        'Hospital vehicle management workflow',
        'Vision-based vehicle recognition',
        'Operational process automation',
      ],
      outcome:
        'The project demonstrates how applied computer vision can support efficient, structured operations in service-oriented environments.',
    },
    technologies: ['Computer Vision', 'Python', 'Web App', 'Operations'],
    featured: true,
    image: vehicle_management,
    demo: vehicleManagement,
    github: '#',
  },
  {
    title: 'Embedded Linux (Buildroot) for Raspberry Pi 4',
    category: 'Embedded Linux',
    summary:
      'Custom embedded Linux environment for Raspberry Pi 4 focused on buildroot-based configuration and platform-specific system design.',
    description:
      'A Linux system customization project for Raspberry Pi 4, focused on embedded operating system engineering and platform-specific builds.',
    details: {
      overview:
        'This project focuses on creating a tailored embedded Linux environment for Raspberry Pi 4 using a buildroot-based workflow.',
      objective:
        'The goal was to build a lightweight, configurable system for an embedded platform while maintaining engineering flexibility and practical deployment readiness.',
      approach:
        'The implementation centers on buildroot configuration, Linux system customization, and platform-aware adaptation for resource-constrained embedded deployment.',
      features: [
        'Buildroot-based embedded Linux build',
        'Raspberry Pi 4 platform adaptation',
        'System customization for embedded deployment',
      ],
      outcome:
        'The project highlights embedded Linux system design decisions and the value of tailored operating environments for hardware-specific use cases.',
    },
    technologies: ['Raspberry Pi', 'Buildroot', 'Embedded Linux', 'Linux'],
    featured: false,
    image: buildroot_linux,
    demo: '#',
    github: '#',
  },
]
