// Resume and Project Data - Updated based on Rome Rachlin's actual resume
const portfolioData = {
    resume: {
        experience: {
            title: "Professional Experience",
            content: `
                <h3>NOC and Tier 1 Support Student</h3>
                <p><strong>ThetaRay</strong> | 2025 – Present</p>
                <ul>
                    <li>Deliver first-line operational support for AI-powered AML systems, maintaining 99% uptime. Diagnose real-time incidents using Logz.io, Salesforce, Azure, and Linux CLI.</li>
                    <li>Manage product upgrades via Jenkins (98% success rate) and monitor Kubernetes pods to ensure system stability.</li>
                    <li>Debug Apache Airflow DAGs following data failures, achieving &gt;95% successful recovery of impacted pipelines.</li>
                </ul>
                
                <h3>Military Service</h3>
                <p><strong>Israel Defense Forces</strong> | 2018 – 2023</p>
                <ul>
                    <li><strong>Platoon Commander (Lieutenant):</strong> Led diverse teams in high-pressure environments, fostering teamwork and decision-making.</li>
                    <li><strong>Training &amp; Doctrine Officer:</strong> Directed strategic projects on unit development, applying data-driven analysis.</li>
                </ul>
            `
        },
        education: {
            title: "Education",
            content: `
                <h3>B.Sc. in Computer Science</h3>
                <p><strong>Reichman University (IDC Herzliya)</strong> | 2023 – Present</p>
                <ul>
                    <li>GPA: 85 | Merit-based scholarship recipient.</li>
                    <li>Key Coursework: Data Structures, Algorithms, OS, Machine Learning, Databases, Computational Geometry.</li>
                </ul>
            `
        },
        skills: {
            title: "Technical Skills",
            content: `
                <h3>Languages</h3>
                <ul>
                    <li>Python, C#, Java, C, SQL, HTML, JavaScript, CSS</li>
                </ul>
                
                <h3>Concepts</h3>
                <ul>
                    <li>Microservices, Event-Driven Architecture, GenAI &amp; LLMs, Vector Search, OOP, Data Structures</li>
                </ul>
                
                <h3>Tools</h3>
                <ul>
                    <li>Git/GitHub, Docker, Kubernetes, RabbitMQ, Redis, PostgreSQL, MinIO, Ollama, Jenkins, Azure, Linux CLI</li>
                </ul>
            `
        },
        summary: {
            title: "Summary",
            content: `
                <p>Rome wasn't built in a day, but every great creation starts with passion and perseverance. I am a Computer Science student (BSc, Reichman University, started 2023) combining strong foundations in algorithms and OOP with advanced practical experience in Generative AI and Microservices architecture. Skilled in Python, C#, C, and Java, with a proven track record of architecting event-driven systems and deploying privacy-focused LLM solutions. Background as an officer in the IDF and current NOC support engineer has honed my problem-solving, teamwork, and ability to perform under pressure.</p>
            `
        },
        volunteering: {
            title: "Volunteering",
            content: `
                <h3>Volunteer Tutor</h3>
                <p><strong>Yad Hatisha Neighborhood</strong> | 2025 – Present</p>
                <ul>
                    <li>Providing personalized academic guidance for children.</li>
                </ul>
                
                <h3>Head Counselor</h3>
                <p><strong>Hanoar Haoved veHalomed</strong> | 2017 – 2018</p>
                <ul>
                    <li>Mentored youth to foster leadership and social responsibility.</li>
                </ul>
            `
        }
    },
    projects: {
        textBasedRpg: {
            title: "Text-Based RPG - Chosen",
            description: "A text-based RPG game called 'Chosen' built with Java that runs entirely in the console. This project demonstrates object-oriented programming principles, file I/O operations, and interactive storytelling through a command-line interface.",
            technologies: ["Java", "Object-Oriented Programming", "Console I/O", "File Handling", "Text Processing"],
            features: [
                "Console-based user interface",
                "Interactive storytelling and narrative choices",
                "Character progression system",
                "File-based save/load functionality",
                "Modular game architecture",
                "Clean, readable code structure"
            ],
            about: "This was my first major programming project where I learned the fundamentals of Java programming, object-oriented design, and game development. The project showcases my ability to create engaging interactive experiences using simple console-based interfaces.",
            demo: "https://github.com/romerachlin1/Text-Based-RPG",
            github: "https://github.com/romerachlin1/Text-Based-RPG",
            status: "Completed"
        },
        textRpgGui: {
            title: "Text-RPG with GUI - Chosen",
            description: "A text-based RPG game with a graphical user interface built using Java Swing. While still fundamentally text-based, this version provides a more user-friendly interface with buttons, menus, and visual elements to enhance the gameplay experience.",
            technologies: ["Java", "Swing", "GUI Development", "Object-Oriented Programming", "Event Handling"],
            features: [
                "Graphical user interface using Java Swing",
                "Text-based gameplay with visual interface elements",
                "Interactive buttons and menus for navigation",
                "Visual inventory and character management",
                "Text display areas for story and dialogue",
                "Save/load functionality with GUI dialogs"
            ],
            about: "This project represents my evolution from pure console programming to GUI development. While maintaining the text-based nature of the RPG, I added a graphical interface to make the game more accessible and user-friendly. It demonstrates my self-taught Java Swing skills and ability to work with GUI components and event handling.",
            demo: "https://github.com/romerachlin1/Text-RPG-GUI",
            github: "https://github.com/romerachlin1/Text-RPG-GUI",
            screenshot: "ProjectScreenshots/Chosen_TextBasedRpg/Screenshot 2025-08-31 131309.png",
            screenshot2: "ProjectScreenshots/Chosen_TextBasedRpg/Screenshot 2025-08-31 131423.png",
            status: "Completed"
        },
        bitcoinTracker: {
            title: "Bitcoin Price Tracker",
            description: "A comprehensive Python application that monitors Bitcoin prices in real-time, fetches data from the Coinbase API, logs price history to JSON files, generates visual graphs, and sends email notifications with price analysis.",
            technologies: ["Python", "API Integration", "Data Visualization", "Email Automation", "JSON", "Matplotlib", "Requests Library"],
            features: [
                "Real-time Bitcoin price monitoring every minute",
                "Coinbase API integration for live price data",
                "Automatic price logging to JSON files",
                "Price graph generation and visualization using Matplotlib",
                "Email notifications with price analysis and graphs",
                "Hourly price tracking and reporting system"
            ],
            about: "This project demonstrates my ability to work with APIs, data processing, and automation. It showcases skills in Python programming, data visualization, and creating practical applications that solve real-world problems. The script fetches current Bitcoin Price Index (BPI) from a public API, collects data every minute, and after an hour creates a comprehensive graph of prices sent via email.",
            demo: "https://github.com/romerachlin1/Bitcoin_Tracker",
            github: "https://github.com/romerachlin1/Bitcoin_Tracker",
            screenshot: "ProjectScreenshots/Bitcoin_Tracker/bitcoin_price_graph.png",
            screenshot2: "ProjectScreenshots/Bitcoin_Tracker/email_screenshot.png",
            status: "Completed"
        },
        bullsAndCows: {
            title: "Bulls and Cows Game",
            description: "A basic Windows Forms application in C# implementing a simple 'Bulls and Cows' style game. Focused on practicing event-driven programming, control manipulation, and UI design.",
            technologies: ["C#", "Windows Forms", "Event-Driven Programming", "UI Design", "Control Manipulation"],
            features: [
                "Windows Forms graphical interface",
                "Event-driven programming implementation",
                "Control manipulation and UI design",
                "Bulls and cows game logic",
                "User interaction handling",
                "Form-based application structure"
            ],
            about: "Developed a basic Windows Forms application in C# implementing a simple 'Bulls and Cows' style game. Focused on practicing event-driven programming, control manipulation, and UI design. Demonstrates understanding of working with forms, controls, and handling free-form events within a graphical application environment.",
            demo: "https://github.com/romerachlin1/Bulls-and-Cows",
            github: "https://github.com/romerachlin1/Bulls-and-Cows",
            screenshot: "ProjectScreenshots/Bulls_And_Cows/Screenshot 2025-08-31 142250.png",
            screenshot2: "ProjectScreenshots/Bulls_And_Cows/Screenshot 2025-08-31 142300.png",
            screenshot3: "ProjectScreenshots/Bulls_And_Cows/Screenshot 2025-08-31 142405.png",
            status: "Completed"
        },
        garageManagement: {
            title: "Garage Management System",
            description: "A C# Garage Management System that demonstrates object-oriented programming with inheritance and polymorphism, use of Collections and enums, exception handling, and integration of external DLLs.",
            technologies: ["C#", "Object-Oriented Programming", "Inheritance", "Polymorphism", "Collections", "Enums", "Exception Handling", "DLL Integration"],
            features: [
                "Object-oriented programming with inheritance and polymorphism",
                "Use of Collections and enums for data management",
                "Comprehensive exception handling",
                "Integration of external DLLs",
                "Modular architecture with multiple projects",
                "Clean design and practical C# principles"
            ],
            about: "C# Garage Management System that demonstrates object-oriented programming with inheritance and polymorphism, use of Collections and enums, exception handling, and integration of external DLLs. The solution is organized into multiple projects, highlighting modular architecture, clean design, and practical application of C# principles.",
            demo: "https://github.com/romerachlin1/Garage-Management-System",
            github: "https://github.com/romerachlin1/Garage-Management-System",
            screenshot: "ProjectScreenshots/Garage_Managment_System/Screenshot 2025-08-31 142104.png",
            screenshot2: "ProjectScreenshots/Garage_Managment_System/Screenshot 2025-08-31 142117.png",
            screenshot3: "ProjectScreenshots/Garage_Managment_System/Screenshot 2025-08-31 142130.png",
            status: "Completed"
        },
        dndSessionAnalyzer: {
            title: "DnD Session Analyzer",
            description: "An event-driven microservices system that automates Dungeons & Dragons session analysis. It utilizes a Dockerized pipeline to convert raw video/audio into actionable Dungeon Master insights using AssemblyAI for diarization and OpenAI for sentiment analysis.",
            technologies: ["Python", "Docker", "FastAPI", "RabbitMQ", "PostgreSQL", "Redis", "MinIO", "AssemblyAI", "OpenAI GPT-4", "FFmpeg", "Microservices Architecture", "Event-Driven Architecture"],
            features: [
                "Event-driven microservices architecture with Docker orchestration",
                "Automatic video/audio conversion and transcription using AssemblyAI",
                "Speaker diarization to identify DM vs. Players",
                "AI-powered sentiment analysis per scene using OpenAI",
                "Session summary generation with actionable DM recommendations",
                "PostgreSQL database storage and Redis caching",
                "MinIO object storage for raw files",
                "RESTful API with FastAPI for reporting service",
                "CLI interface for file upload and session management"
            ],
            about: "This project demonstrates advanced system architecture skills, including microservices design, event-driven patterns, and containerization. The system processes D&D session recordings through a pipeline that converts media, transcribes speech, identifies speakers, analyzes sentiment, and generates insights for dungeon masters to improve future sessions.",
            demo: "https://github.com/romerachlin1/DnD_Session_Analyzer",
            github: "https://github.com/romerachlin1/DnD_Session_Analyzer",
            video: "ProjectScreenshots/DnD_Session_Analyzer/DnDSessionAnalyzerDemo.mp4",
            status: "Completed"
        },
        megaCoder: {
            title: "Mega Coder",
            description: "An AI-powered coding assistant that streamlines Python development, automates GitHub repository fixes, and provides real-time coding tips by analyzing your screen via OCR. It leverages Google Gemini and OpenAI APIs to generate, test, and optimize code.",
            technologies: ["Python", "OpenAI API", "Google Gemini API", "OCR", "GitHub API", "Code Analysis", "Automated Testing", "pylint"],
            features: [
                "AI-powered code generation and optimization using Gemini and OpenAI",
                "Real-time screen OCR for code analysis and improvement suggestions",
                "GitHub repository analysis and automated code fixes",
                "Automated test generation and execution",
                "Code performance optimization with efficiency measurements",
                "Automated code linting with pylint integration",
                "Repository ingestion and analysis using gitingest",
                "Code corruption testing and quality assurance"
            ],
            about: "Mega Coder is a comprehensive AI development tool that combines multiple AI models to assist with code generation, optimization, and quality assurance. It demonstrates advanced API integration, OCR capabilities, automated testing, and intelligent code analysis to help developers write better code faster.",
            demo: "https://github.com/romerachlin1/Mega_Coder",
            github: "https://github.com/romerachlin1/Mega_Coder",
            video: "ProjectScreenshots/Mega_Coder/MegaCoder_RomeRachlin.mp4",
            status: "Completed"
        },
        gmailAIHelper: {
            title: "Gmail AI Helper",
            description: "A Chrome extension that integrates with Gmail to offer real-time email composition suggestions using OpenAI's ChatGPT. This AI-powered assistant helps users write more effective emails with intelligent suggestions and completions.",
            technologies: ["JavaScript", "Chrome Extension API", "OpenAI API", "Gmail API", "HTML/CSS", "Browser Extension Development"],
            features: [
                "Seamless Gmail integration as a Chrome extension",
                "Real-time AI-powered email composition suggestions",
                "OpenAI ChatGPT integration for intelligent text generation",
                "Context-aware email writing assistance",
                "Easy-to-use browser extension interface",
                "Privacy-focused design with secure API handling"
            ],
            about: "This Chrome extension demonstrates browser extension development skills and API integration. It provides users with AI-powered writing assistance directly within Gmail, showcasing practical application of OpenAI's API in a user-friendly browser extension format.",
            demo: "https://github.com/romerachlin1/Gmail_AI_Helper",
            github: "https://github.com/romerachlin1/Gmail_AI_Helper",
            video: "ProjectScreenshots/Gmail_AI_Helper/GmailAIHelper_RomeRachlin.mp4",
            status: "Completed"
        },
        aiShowSuggestion: {
            title: "AI Show Suggestion",
            description: "An AI-driven application that recommends TV shows and movies based on user preferences and viewing history. The system uses machine learning and AI algorithms to provide personalized entertainment recommendations.",
            technologies: ["Python", "AI/ML", "Recommendation Systems", "Data Processing", "User Interface"],
            features: [
                "AI-powered TV show and movie recommendations",
                "Personalized suggestions based on user preferences",
                "Viewing history analysis",
                "Intelligent content matching algorithms",
                "User-friendly interface for browsing recommendations",
                "Comprehensive entertainment database integration"
            ],
            about: "This project demonstrates AI and machine learning application in recommendation systems. It showcases skills in data analysis, user preference modeling, and creating intelligent systems that provide personalized content suggestions to enhance user entertainment experiences.",
            demo: "https://github.com/romerachlin1/AI_ShowSuggestion",
            github: "https://github.com/romerachlin1/AI_ShowSuggestion",
            video: "ProjectScreenshots/AI_ShowSuggestion/showSuggestionAIDemo.mp4",
            status: "Completed"
        }
    }
};

// Function to add new resume section
function addResumeSection(sectionKey, sectionData) {
    portfolioData.resume[sectionKey] = sectionData;
}

// Function to add new project
function addProject(projectKey, projectData) {
    portfolioData.projects[projectKey] = projectData;
}

// Function to update resume section
function updateResumeSection(sectionKey, newData) {
    if (portfolioData.resume[sectionKey]) {
        portfolioData.resume[sectionKey] = { ...portfolioData.resume[sectionKey], ...newData };
    }
}

// Function to update project
function updateProject(projectKey, newData) {
    if (portfolioData.projects[projectKey]) {
        portfolioData.projects[projectKey] = { ...portfolioData.projects[projectKey], ...newData };
    }
}

// Function to remove resume section
function removeResumeSection(sectionKey) {
    delete portfolioData.resume[sectionKey];
}

// Function to remove project
function removeProject(projectKey) {
    delete portfolioData.projects[projectKey];
}