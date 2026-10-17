// ============================================================
//  ALL WEBSITE CONTENT LIVES IN THIS ONE FILE.
//  When the resume changes, update it here and the whole site follows.
//  Empty links ("") are hidden automatically on the page.
// ============================================================

export const profile = {
  name: 'Sri Lekhya Pulluru',
  title: 'Java Full Stack Engineer',
  summary:
    'I build backend services in Java and Spring Boot and the React and Angular interfaces that sit on top of them. ' +
    'At Infosys I spent two and a half years on Boeing aviation systems, moving legacy Java apps to Azure Kubernetes Service. ' +
    'Today I build enterprise apps and AI-powered document search at Tiruven.',
  location: 'Edmond, OK',
  availability: 'Remote, hybrid or onsite · Willing to relocate',
  email: 'pullurusrilekhyauco@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sri-lekhya-p-254923112/',
  github: 'https://github.com/srilekhya-p',
  // Put the PDF in the /public folder with exactly this name
  resume: '/Sri_Lekhya_Pulluru_Resume.pdf',
  // Optional: put a headshot in /public (e.g. /headshot.jpg) and set it here
  photo: '',
}

export const highlights = [
  { value: '3+ yrs', label: 'Production Java experience' },
  { value: '40%', label: 'Faster API response time' },
  { value: '3.9', label: 'MS Computer Science GPA' },
]

export const experience = [
  {
    role: 'Software Engineer Intern',
    company: 'Tiruven Inc.',
    location: 'Irving, TX',
    dates: 'Apr 2026 – Present',
    points: [
      'Build full-stack enterprise features with Java, Spring Boot and Angular, including REST APIs integrated with ERP systems.',
      'Develop React and TypeScript form workflows with validation, reusable components and API integration.',
      'Cut debugging time by about 30% by using the ELK Stack (Elasticsearch, Logstash, Kibana) for log analysis and root-cause analysis.',
      'Contributed to an AI document search feature using Azure OpenAI, Azure Content Understanding, Elasticsearch and RAG, connected to Azure AI Foundry agents.',
    ],
    tech: ['Java', 'Spring Boot', 'Angular', 'React', 'TypeScript', 'ELK', 'Azure OpenAI', 'RAG'],
  },
  {
    role: 'Teaching Assistant & CS Tutor',
    company: 'University of Central Oklahoma',
    location: 'Edmond, OK',
    dates: 'Aug 2024 – Dec 2025',
    points: [
      'Mentored 100+ students in data structures and algorithms, focusing on debugging and problem solving.',
      'Reviewed Java and C++ code and coached students on performance, readability and efficiency.',
    ],
    tech: ['Java', 'C++', 'Data Structures', 'Algorithms'],
  },
  {
    role: 'Senior Systems Engineer',
    company: 'Infosys · Client: Boeing',
    location: 'Bangalore, India',
    dates: 'Mar 2021 – Aug 2023',
    points: [
      'Built and modernized Java and Spring Boot microservices for Boeing aviation systems, containerized with Docker and deployed to Azure Kubernetes Service with Helm.',
      'Improved API response time by 40% and reduced infrastructure costs by 15% by moving legacy Java applications to Azure.',
      'Resolved 10+ critical performance bottlenecks through profiling, root-cause analysis and SQL query tuning.',
      'Delivered features end to end: Spring MVC REST APIs, batch processing, PDF generation and reusable Angular UI components.',
      'Recognized with the Rise Award (Eureka) and the Insta Award for project delivery.',
    ],
    tech: ['Java', 'Spring Boot', 'Microservices', 'Angular', 'Docker', 'Kubernetes', 'Azure AKS', 'Azure DevOps'],
  },
]

// Add a GitHub repo link and/or live demo link to each project when available.
// image: put a screenshot in /public/projects/ and write e.g. '/projects/mental-health.png'
export const projects = [
  {
    name: 'Mental Health Support App',
    tag: 'Graduate project',
    description:
      'A mobile-first support app with a React Native client and a Node.js and Express API. Files are stored securely on AWS S3, and posts pass through LLM-based content moderation. I also ran sprint planning and tracked progress for the team.',
    result: 'Secure REST APIs with authentication, encryption and unit test coverage',
    tech: ['React Native', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'AWS S3', 'LLM APIs'],
    github: '',
    demo: '',
    image: '',
  },
  {
    name: 'Serverless Attendance System',
    tag: 'Cloud',
    description:
      'An event-driven web app that takes classroom attendance with facial recognition. Infrastructure is defined in code with AWS CDK and deployed through GitHub Actions.',
    result: 'Deployment time cut by 40% with Infrastructure as Code and CI/CD',
    tech: ['AWS Lambda', 'Rekognition', 'API Gateway', 'DynamoDB', 'AWS CDK', 'GitHub Actions'],
    github: '',
    demo: '',
    image: '',
  },
  {
    name: 'OCR Nutrition Recognition App',
    tag: 'Mobile + ML',
    description:
      'An Android app that reads nutrition facts from packaging in real time with Google ML Kit, plus an alternate AWS Textract pipeline with OpenCV preprocessing.',
    result: '94% accuracy recognizing expiry dates',
    tech: ['Kotlin', 'Google ML Kit', 'AWS Textract', 'Python', 'OpenCV'],
    github: '',
    demo: '',
    image: '',
  },
  {
    name: 'Reminder Web App',
    tag: 'Full stack',
    description:
      'A task and reminder app that sends scheduled, recurring email notifications using Google Cloud Functions and Cloud Scheduler.',
    result: 'Custom timing and frequency for every reminder',
    tech: ['Firebase', 'Cloud Functions', 'Cloud Scheduler', 'JavaScript', 'Bootstrap'],
    github: '',
    demo: '',
    image: '',
  },
]

export const skills = [
  { group: 'Backend', items: ['Java', 'Spring Boot', 'Spring MVC', 'Microservices', 'REST APIs', 'Node.js', 'Express'] },
  { group: 'Frontend', items: ['React', 'Angular', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'React Native'] },
  { group: 'Cloud & DevOps', items: ['Azure (AKS, DevOps, Monitor)', 'AWS (Lambda, S3, EC2, CDK)', 'Docker', 'Kubernetes', 'Helm', 'GitHub Actions', 'Jenkins', 'Maven'] },
  { group: 'Databases', items: ['PostgreSQL', 'MySQL', 'Oracle SQL', 'MongoDB', 'DynamoDB', 'Elasticsearch'] },
  { group: 'AI', items: ['Azure OpenAI', 'Azure AI Foundry', 'RAG', 'AI Agents', 'Semantic Search', 'Prompt Engineering'] },
  { group: 'Testing & Practices', items: ['JUnit', 'Mockito', 'Jest', 'Postman', 'ELK Stack', 'Agile / Scrum', 'System Design'] },
]

export const education = [
  {
    degree: 'M.S. in Computer Science',
    school: 'University of Central Oklahoma',
    dates: 'Jan 2024 – Dec 2025',
    detail: "GPA 3.9 / 4.0 · President's Honor Roll (two semesters)",
  },
  {
    degree: 'B.Tech in Computer Science and Engineering',
    school: 'Sri Venkateswara University, India',
    dates: 'Aug 2016 – Sep 2020',
    detail: 'CGPA 7.88 / 10',
  },
]

// url: paste the Microsoft Learn / Credly verification link
export const certifications = [
  { name: 'Azure AI Apps and Agents Developer Associate (AI-103)', issuer: 'Microsoft', date: 'Oct 2026', url: '' },
  { name: 'Azure Fundamentals (AZ-900)', issuer: 'Microsoft', date: 'May 2022', url: '' },
]
