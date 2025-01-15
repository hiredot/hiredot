import { Candidate } from "@/@types/candidates";

export const mockCandidates: Candidate[] = [
  {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@email.com",
    phoneNumber: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    currentRole: "Senior Frontend Developer",
    status: "screening",
    skills: [
      {
        name: "React",
        yearsOfExperience: 5,
        level: "expert",
      },
      {
        name: "TypeScript",
        yearsOfExperience: 3,
        level: "intermediate",
      },
    ],
    education: [
      {
        institution: "Stanford University",
        degree: "BS",
        field: "Computer Science",
        startDate: "2015-09-01T00:00:00Z",
        endDate: "2019-06-01T00:00:00Z",
        gpa: 3.8,
      },
    ],
    experience: [
      {
        company: "Tech Corp",
        title: "Senior Frontend Developer",
        location: "San Francisco, CA",
        startDate: "2019-07-01T00:00:00Z",
        description: "Led frontend development team",
        highlights: [
          "Rebuilt main product UI",
          "Improved performance by 50%",
          "Mentored junior developers",
        ],
      },
    ],
    resumeUrl: "john-doe-resume.pdf",
    linkedInUrl: "https://linkedin.com/in/johndoe",
    githubUrl: "https://github.com/johndoe",
    tags: ["React", "TypeScript", "Senior", "Available Immediately"],
    notes: "Strong technical background, good culture fit potential",
    isActive: true,
    isDeleted: false,
    createdAt: "2024-03-01T00:00:00Z",
    updatedAt: "2024-03-15T00:00:00Z",
  },
  {
    id: "2",
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@email.com",
    phoneNumber: "+1 (555) 765-4321",
    location: "New York, NY",
    currentRole: "Machine Learning Engineer",
    status: "interviewing",
    skills: [
      {
        name: "Python",
        yearsOfExperience: 4,
        level: "expert",
      },
      {
        name: "Machine Learning",
        yearsOfExperience: 2,
        level: "intermediate",
      },
    ],
    education: [
      {
        institution: "MIT",
        degree: "MS",
        field: "Artificial Intelligence",
        startDate: "2018-09-01T00:00:00Z",
        endDate: "2020-06-01T00:00:00Z",
        gpa: 3.9,
      },
    ],
    experience: [
      {
        company: "AI Solutions Inc",
        title: "Machine Learning Engineer",
        location: "New York, NY",
        startDate: "2020-07-01T00:00:00Z",
        description: "Developed ML models for production",
        highlights: [
          "Implemented recommendation system",
          "Improved model accuracy by 30%",
          "Led team of 3 engineers",
        ],
      },
    ],
    resumeUrl: "jane-smith-resume.pdf",
    linkedInUrl: "https://linkedin.com/in/janesmith",
    tags: ["Python", "Machine Learning", "Mid-level", "Available Immediately"],
    notes: "Strong technical background, good fit for the role",
    isActive: true,
    isDeleted: false,
    createdAt: "2024-02-28T00:00:00Z",
    updatedAt: "2024-03-14T00:00:00Z",
  },
  {
    id: "3",
    firstName: "Michael",
    lastName: "Johnson",
    email: "michael.johnson@email.com",
    phoneNumber: "+1 (555) 901-2345",
    location: "Seattle, WA",
    currentRole: "Full Stack Developer",
    status: "interviewing",
    skills: [
      {
        name: "Node.js",
        yearsOfExperience: 5,
        level: "expert",
      },
      {
        name: "React",
        yearsOfExperience: 4,
        level: "expert",
      },
    ],
    education: [
      {
        institution: "University of Washington",
        degree: "BS",
        field: "Software Engineering",
        startDate: "2014-09-01T00:00:00Z",
        endDate: "2018-06-01T00:00:00Z",
      },
    ],
    experience: [
      {
        company: "Tech Startup",
        title: "Full Stack Developer",
        location: "Seattle, WA",
        startDate: "2018-07-01T00:00:00Z",
        description: "Full stack development with Node.js and React",
        highlights: [
          "Built microservices architecture",
          "Implemented CI/CD pipeline",
          "Reduced deployment time by 70%",
        ],
      },
    ],
    resumeUrl: "michael-johnson-resume.pdf",
    tags: ["Full-stack", "Node.js", "Senior", "Available Immediately"],
    notes: "Strong technical background, good fit for the role",
    isActive: true,
    isDeleted: false,
    createdAt: "2024-03-10T00:00:00Z",
    updatedAt: "2024-03-16T00:00:00Z",
  },
  {
    id: "4",
    firstName: "Sarah",
    lastName: "Williams",
    email: "sarah.williams@email.com",
    phoneNumber: "+1 (555) 567-8901",
    location: "Austin, TX",
    currentRole: "Frontend Developer",
    status: "new",
    skills: [
      {
        name: "Vue.js",
        yearsOfExperience: 2,
        level: "intermediate",
      },
      {
        name: "JavaScript",
        yearsOfExperience: 2,
        level: "intermediate",
      },
    ],
    education: [
      {
        institution: "University of Texas",
        degree: "BS",
        field: "Computer Science",
        startDate: "2018-09-01T00:00:00Z",
        endDate: "2022-06-01T00:00:00Z",
      },
    ],
    experience: [
      {
        company: "Web Solutions",
        title: "Frontend Developer",
        location: "Austin, TX",
        startDate: "2022-07-01T00:00:00Z",
        description: "Frontend development with Vue.js",
        highlights: [
          "Built responsive web applications",
          "Implemented component library",
          "Improved page load times",
        ],
      },
    ],
    resumeUrl: "sarah-williams-resume.pdf",
    tags: ["Frontend", "Vue.js", "Junior", "Available Immediately"],
    notes: "Strong technical background, good fit for the role",
    isActive: true,
    isDeleted: false,
    createdAt: "2024-03-16T00:00:00Z",
    updatedAt: "2024-03-16T00:00:00Z",
  },
  {
    id: "5",
    firstName: "David",
    lastName: "Brown",
    email: "david.brown@email.com",
    phoneNumber: "+1 (555) 345-6789",
    location: "Boston, MA",
    currentRole: "Senior Backend Developer",
    status: "offered",
    skills: [
      {
        name: "Java",
        yearsOfExperience: 8,
        level: "expert",
      },
      {
        name: "Spring Boot",
        yearsOfExperience: 5,
        level: "expert",
      },
    ],
    education: [
      {
        institution: "Harvard University",
        degree: "MS",
        field: "Computer Science",
        startDate: "2012-09-01T00:00:00Z",
        endDate: "2014-06-01T00:00:00Z",
      },
    ],
    experience: [
      {
        company: "Enterprise Solutions",
        title: "Senior Backend Developer",
        location: "Boston, MA",
        startDate: "2014-07-01T00:00:00Z",
        description: "Backend development with Java and Spring Boot",
        highlights: [
          "Designed scalable architecture",
          "Improved system performance",
          "Led team of 5 developers",
        ],
      },
    ],
    resumeUrl: "david-brown-resume.pdf",
    tags: ["Backend", "Java", "Senior", "Available Immediately"],
    notes: "Strong technical background, good fit for the role",
    isActive: true,
    isDeleted: false,
    createdAt: "2024-02-15T00:00:00Z",
    updatedAt: "2024-03-14T00:00:00Z",
  },
];
