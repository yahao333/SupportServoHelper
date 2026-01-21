/**
 * English Language Package
 * For English interface of the website
 */

/**
 * Navigation text
 */
export const nav = {
  home: 'Home',
  documentation: 'Docs',
  download: 'Download',
  contact: 'Contact',
};

/**
 * Home page text
 */
export const home = {
  // Hero section
  hero: {
    title: 'Servo Tools',
    subtitle: 'Professional Servo Control Software',
    description: 'Complete servo control solution with support for multiple servo protocols. Simple, powerful, and easy to use.',
    cta: 'Get Started',
    viewDocs: 'View Documentation',
  },

  // Features section
  features: {
    title: 'Key Features',
    items: [
      {
        title: 'Multi-Protocol Support',
        description: 'Supports PPM, PWM, Serial Bus and other servo communication protocols. Compatible with major servo brands.',
      },
      {
        title: 'Graphical Interface',
        description: 'Intuitive graphical user interface. Configure and debug servos with simple drag-and-drop.',
      },
      {
        title: 'Batch Operations',
        description: 'Configure multiple servos simultaneously to improve efficiency and save debugging time.',
      },
      {
        title: 'Real-time Monitoring',
        description: 'Real-time display of servo status and parameter changes for easy troubleshooting and optimization.',
      },
    ],
  },

  // Download section
  download: {
    title: 'Download Now',
    subtitle: 'For Windows 10/11 systems',
    windows: 'Windows',
    macOS: 'macOS',
    linux: 'Linux',
    version: 'Version',
    size: 'Size',
    releaseDate: 'Release Date',
    notes: 'Release Notes',
  },

  // CTA section
  cta: {
    title: 'Ready to Get Started?',
    description: 'Download the latest version and experience powerful servo control features.',
    button: 'Download Now',
  },
};

/**
 * Documentation page text
 */
export const docs = {
  title: 'Documentation',
  subtitle: 'Complete guides and API reference',

  // Sidebar
  sidebar: {
    gettingStarted: 'Getting Started',
    installation: 'Installation',
    quickStart: 'Quick Start',
    configuration: 'Configuration',
    advanced: 'Advanced',
    api: 'API Reference',
    examples: 'Examples',
    troubleshooting: 'Troubleshooting',
  },

  // Installation guide
  installation: {
    title: 'Installation Guide',
    windows: {
      title: 'Windows',
      steps: [
        'Download the Windows installer (.exe file)',
        'Double-click the installer to start the setup wizard',
        'Choose installation directory (default recommended)',
        'Wait for installation to complete, click Finish',
        'Launch from desktop shortcut or Start menu',
      ],
    },
  },

  // Quick start guide
  quickStart: {
    title: 'Quick Start',
    intro: 'This guide will help you get started with Servo Tools quickly.',
    step1: {
      title: 'Connect Your Servo',
      description: 'Connect the servo to your computer using a USB cable. The software will automatically detect connected devices.',
    },
    step2: {
      title: 'Select Servo Type',
      description: 'Choose your servo type in the software interface, or let it auto-detect.',
    },
    step3: {
      title: 'Configure Parameters',
      description: 'Set the target angle, speed, and other parameters for your servo.',
    },
    step4: {
      title: 'Test Run',
      description: 'Click the run button to test if your servo is working properly.',
    },
  },

  // FAQ section
  faq: {
    title: 'FAQ',
    items: [
      {
        question: 'What should I do if the software cannot detect my servo?',
        answer: 'Please check if the USB connection is stable. Try a different USB port or cable. Make sure the correct driver is installed.',
      },
      {
        question: 'How do I update to the latest version?',
        answer: 'Visit the GitHub Releases page to get the latest version: https://github.com/yahao333/SupportServoHelper/releases . We recommend uninstalling the old version before installing the new one.',
      },
      {
        question: 'Which servo models are supported?',
        answer: 'The software supports major servo brands and models including Futaba, HiTEC, Robbe, and more. Please refer to the documentation for detailed compatibility.',
      },
      {
        question: 'Does the software support batch control?',
        answer: 'Yes, the software supports connecting and controlling multiple servos simultaneously. You can add multiple servos in the device list for batch operations.',
      },
    ],
  },
};

/**
 * Contact page text
 */
export const contact = {
  title: 'Contact Us',
  subtitle: 'Have questions or suggestions? Get in touch with us',

  info: {
    email: 'Email',
    emailValue: 'apprank@outlook.com',
    responseTime: 'Response Time',
    responseTimeValue: 'Within 48 hours on business days',
  },

  form: {
    name: 'Your Name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message',
    submit: 'Send Message',
    sending: 'Sending...',
    success: 'Message sent! We will reply as soon as possible.',
    error: 'Send failed. Please try again later or send an email directly.',
    placeholder: {
      name: 'Enter your name',
      email: 'Enter your email',
      subject: 'Enter subject',
      message: 'Enter your message...',
    },
  },

  // Footer text
  footer: {
    copyright: 'All rights reserved.',
  },
};

/**
 * Common text
 */
export const common = {
  language: 'Language',
  darkMode: 'Dark Mode',
  lightMode: 'Light Mode',
  loading: 'Loading...',
  error: 'An error occurred',
  retry: 'Retry',
  learnMore: 'Learn More',
  back: 'Back',
  next: 'Next',
  previous: 'Previous',
};
