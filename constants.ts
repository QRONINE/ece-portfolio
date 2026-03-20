// FIX: Import Experience type to use for EXPERIENCE_DATA.
import { Project, Publication, Certification, Experience } from './types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 5,
    title: 'IGOR: 3-DOF Robotic Arm (ROS Enabled)',
    category: 'Robotics & AI',
    description: "A 3-DOF robotic arm inspired by Iron Man's 'Dummy', designed for high-precision tasks and future integration with Reinforcement Learning for playing chess.",
    problemSolved: 'Creates an affordable and precise robotic arm platform for hobbyists and researchers, exploring low-cost closed-loop control and advanced AI integration.',
    images: [
      '/assets/igor/CAD MODEL.jpeg',
      '/assets/igor/IMG_20260317_001808.jpg.jpeg',
    ],
    videoUrl: 'https://www.youtube.com/embed/-7L73LwjPOc', // Placeholder: Rick Astley - Never Gonna Give You Up
    status: 'Under Progress',
    role: 'Project Lead',
    keyPoints: [
        "Orchestrated the development of a 3-DOF manipulator using Inverse Kinematics (IK) solvers in Python and ROS 2 nodes for trajectory planning.",
        "Accomplished 1.5mm precision by integrating NEMA 17 steppers with AS5600 magnetic encoders via I2C communication while branching out with a TCA9548A MUX, enabling closed-loop control for RL-based chess gameplay."
    ],
    githubUrl: 'https://github.com/QRONINE/-IGOR-3-DOF-Robotic-Arm-ROS-Enabled-',
  },
  {
    id: 7,
    title: 'BMO - BigBoy Advance: Embedded Console',
    category: 'Hobbyist Electronics & Retro Gaming',
    description: "A custom-built retro gaming console based on a Raspberry Pi 3B+, featuring a unique 3D-printed shell inspired by the character BMO from Adventure Time.",
    problemSolved: 'A passion project combining skills in electronics, 3D printing, and software integration to create a unique, portable retro gaming console with a personalized design.',
    images: [
      '/assets/bmo/overall pic.jpg',
      '/assets/bmo/BMS.jpg',
      // 'https://picsum.photos/seed/bmo3/800/600',
    ],
    videos: [
      { url: 'https://www.youtube.com/embed/KBpWX5r12vQ', title: 'Gameplay and Display test' },
      { url: 'https://www.youtube.com/embed/BQ8MTwoU4qk', title: 'Button Test' },
      { url: 'https://www.youtube.com/embed/HGtSXSqES8M', title: 'Shrek Test' },
    ],
    status: 'Completed',
    keyPoints: [
        "Configured Linux Device Tree Overlays on Raspberry Pi 3B+ to map custom GPIO inputs and set up RetroPie to emulate retro games efficiently on limited hardware.",
        "Utilized a low-voltage mono Class-AB audio power amplifier circuit and created a custom power management system, housing components in an ergonomic 3D-printed shell."
    ],
    githubUrl: 'https://github.com/QRONINE/BIGBOY-ADV',
  },
  {
    id: 4,
    title: 'RUDRA VTOL: Fire Surveillance UAV (RGEMS Funded)',
    category: 'Robotics & Surveillance',
    description: 'A hybrid Fixed-Wing VTOL surveillance drone, funded by RGEMS, designed for real-time fire detection using onboard AI.',
    problemSolved: 'Provides firefighters with real-time aerial intelligence, enabling them to assess situations, identify critical areas, and strategize more effectively and safely.',
    images: [
      // 'https://picsum.photos/seed/rudra1/800/600',
      // 'https://picsum.photos/seed/rudra2/800/600',
    ],
    status: 'Under Progress',
    role: 'Project Lead',
    keyPoints: [
        "Spearheaded the avionics design of a hybrid Fixed-Wing VTOL, integrating YOLOv5 on an onboard Jetson Nano for real-time fire detection at 30 FPS.",
        "Optimized lift-to-drag ratio by 15% through XFLR5 aerodynamic analysis and configured ArduPilot firmware for seamless transition between hover and cruise modes."
    ],
    githubUrl: 'https://github.com/QRONINE/-RUDRA-VTOL-Fire-Surveillance-UAV',
  },
  {
    id: 8,
    title: 'VitalNest-v1 (MSME 3.0 Govt. Funded)',
    category: 'Healthcare Tech & IoT',
    description: 'An IoT-enabled medical device for precise, automated IV medication delivery and remote patient monitoring, funded by the Government of India under the MSME 3.0 scheme.',
    problemSolved: 'Automates and accurately tracks IV medication administration, reducing the risk of human error in clinical settings and providing a clear digital record for patient care.',
    images: [
      // 'https://picsum.photos/seed/vitalnest1/800/600',
      // 'https://picsum.photos/seed/vitalnest2/800/600',
    ],
    status: 'Completed',
    role: 'Hardware Lead',
    teamNote: 'This was a fantastic group project, and I was thrilled to collaborate with a talented team to bring this concept to life.',
    keyPoints: [
        "Developed an IoT medical node using MQTT protocols to transmit vital data (SpO2, Pulse, BP) and drug delivery timelines to a Supabase cloud dashboard in real-time.",
        "Interfaced 3D-printed peristaltic pumps with TMC2209 silent stepper drivers, attaining precise dosage control within 0.1ml accuracy."
    ],
  },
  {
    id: 6,
    title: 'PID Self-Balancing Robot',
    category: 'Control Systems & Embedded',
    description: 'A two-wheeled self-balancing robot developed to learn PID control loops and interface STM32 architecture with a homemade RC controller.',
    problemSolved: 'Serves as a hands-on educational project to master fundamental concepts in control theory (PID), microcontroller programming (STM32), and sensor fusion, which are critical in robotics.',
    images: [
      // 'https://picsum.photos/seed/pid1/800/600',
      // 'https://picsum.photos/seed/pid2/800/600',
      // 'https://picsum.photos/seed/pid3/800/600',
    ],
    status: 'Under Progress',
    role: 'Project Lead',
    githubUrl: 'https://github.com/QRONINE/PID-Self-Balancing-Robot',
  },
  {
    id: 2,
    title: 'MEDBOT',
    category: 'Healthcare Tech & AI',
    description: 'A chatbot-based QnA for basic medications, pill reminders that send emails, and a buzzer/notification system for aiding the elderly. Equipped with a physical system that can dispense two different types of pills simultaneously.',
    problemSolved: 'Assists the elderly and patients with medication management, improving adherence to prescriptions and providing a simple interface for basic medical queries, thereby reducing the burden on caregivers.',
    images: [
      '/assets/medbot/grppic.jpeg',
      '/assets/medbot/box.jpeg',
      '/assets/medbot/cert pics.jpeg',
       '/assets/medbot/cert.jpeg',
    ],
    status: 'Completed',
    role: 'Project Lead',
    achievement: 'Won 3rd place out of 566 teams in Engineering Clinics II.',
    githubUrl: 'https://github.com/QRONINE/MEDBOT',
  },
  {
    id: 1,
    title: 'V-DROP Emergency Aid Hexacopter',
    category: 'Robotics & Automation',
    description: 'Used during emergency situations to deliver food parcels and medicines. Capable of autonomous flight with an ultrasonic collision avoidance system and app-based OTP encryption for unlocking the parcel box.',
    problemSolved: 'Provides a rapid and secure method for delivering critical aid to inaccessible areas during emergencies, reducing response time and ensuring supplies reach the intended recipients.',
    images: [
      '/assets/vdrop/group table.jpg',
      '/assets/vdrop/flight.jpeg',
      '/assets/vdrop/certt.jpeg',
    ],
    status: 'Completed',
    role: 'Project Lead',
    achievement: 'Won 2nd place out of 530 teams in Engineering Clinics I.',
  },
  {
    id: 3,
    title: 'Ride-shield',
    category: 'Safety & Embedded Systems',
    description: 'A women\'s safety device for taxis. When pressed, it pings the location to an emergency number, and a siren engages every 30 seconds until an "I am safe" button is pressed.',
    problemSolved: 'Enhances passenger safety in taxis, particularly for women, by providing a quick and effective way to alert emergency contacts and deter potential threats during transit.',
    images: [
      // 'https://picsum.photos/seed/ride1/800/600',
      // 'https://picsum.photos/seed/ride2/800/600',
    ],
    status: 'Completed',
    githubUrl: '#',
  }
];


export const SKILLS_DATA = {
  "Programming Languages": ["Python", "Java", "C", "C++"],
  "Embedded Platforms": ["STM32 (ARM Cortex-M)", "ESP32", "Raspberry Pi", "Arduino"],
  "Tools & Software": ["ROS 2", "MATLAB/Simulink", "Keil uVision", "LabVIEW", "SolidWorks", "XFLR5", "ABB RobotStudio", "BambuStudio", "ORCA", "Mission Planner", "URDF", "MoveIt 2"],
  "Hardware Design": ["PCB Design (KiCAD)", "3D CAD (SolidWorks/Fusion)", "Circuit Simulation", "Oscilloscopes", "Logic Analyzers", "Spectrum Analyzers", "3D Printing", "Prototyping"],
  "Concepts & Protocols": ["PID Control", "Robot Kinematics", "MPMC", "RTOS", "PWM", "ADC/DAC & GPIO", "Sensor Fusion", "Ethernet", "Wi-Fi", "BLE", "I2C", "SPI", "UART", "MQTT"],
  "Soft Skills": ["Team Leadership", "Project Management", "Technical Documentation", "Critical Thinking", "Rapport Building"]
};

export const PUBLICATIONS_DATA: Publication[] = [
    {
        title: "Dual-Stream CNN-LSTM Framework with ELA Preprocessing for Deepfake Detection",
        conference: "Published on IEEE SENNET 2025 Conference",
        teamNote: "A collaborative research effort by a dedicated 6-member team.",
        url: "https://ieeexplore.ieee.org/document/11135952"
    }
];


export const CERTIFICATIONS_DATA: Certification[] = [
  {
    title: "My Equation - Robo AI - 45 days Industrial Training",
    issuer: "My Equation",
    date: "July 2025 - Sept 2025",
    url: 'https://drive.google.com/file/d/1Sy8KWwX04zmG482R6fHZ1lDqhvHs-HQh/view?usp=sharing',
  },
  {
    title: "FEYNMAN AEROSPACE - UAV DESIGN TRAINING + INTERSHIP",
    issuer: "Feynman Aerospace",
    date: "Feb 2025 - April 2025",
    url: 'https://drive.google.com/file/d/1LsW4hT8qrxyA6YfkQD6ioamMgeljfr54/view?usp=sharing',
  },
  {
    title: "MAVEN SILICON EMBEDDED INTERNSHIP",
    issuer: "Maven Silicon",
    date: "June 2024 - August 2024",
    url: 'https://drive.google.com/file/d/1-aR7W9gwy3QbEgHrxqU370nyWjbarJXD/view?usp=sharing',
  },
  {
    title: "Engineering Clinics II - 3rd Place",
    issuer: "University Competition (out of 566 teams)",
    date: "May 2024",
    url: 'https://drive.google.com/file/d/1MDP3ly0Q0f6IwXMyH39nR7sY0WL_rdKs/view?usp=sharing',
  },
  {
    title: "Engineering Clinics I - 2nd Place",
    issuer: "University Competition (out of 530 teams)",
    date: "Dec 2023",
    url: 'https://drive.google.com/file/d/100Gi_AMBZV80uuiSaxWJIVm46EXS02xx/view?usp=sharing',
  },
];

// FIX: Add EXPERIENCE_DATA constant which was missing.
export const EXPERIENCE_DATA: Experience[] = [
  // {
  //   duration: "2023 - Present",
  //   title: "Technical Lead",
  //   organization: "University Robotics Club",
  //   description: "Led a team of 10 students in developing autonomous robotic projects for national competitions. Responsible for project planning, hardware selection, and mentoring junior members on ROS and embedded systems.",
  // },
  // {
  //   duration: "2022 - 2023",
  //   title: "Core Member",
  //   organization: "AI & Machine Learning Student Community",
  //   description: "Organized workshops and coding sessions on topics like computer vision and neural networks. Contributed to open-source projects and participated in hackathons, focusing on practical AI applications.",
  // },
];

export const HOBBIES_DATA = [
    {
        name: "3D Printing & Design",
        description: "Designing and printing custom parts for projects and personal use."
    },
    {
        name: "Retro Gaming",
        description: "Building custom emulators and enjoying classic video games."
    },
    {
        name: "RC Aircraft",
        description: "Building, flying, and experimenting with remote-controlled planes and drones."
    },
    {
        name: "Open Source",
        description: "Contributing to open-source projects related to robotics and embedded systems."
    }
];