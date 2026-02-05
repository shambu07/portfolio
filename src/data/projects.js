// src/data/projects.js
// Images live in: /public/projects/*.png
// Use paths like: "/projects/your-image.png"

export const projects = [
    {
        id: "genai-platform",
        title: "Applied Generative AI Platform",
        role: "Applied AI / ML Engineer",
        timeline: "Mar 2025 – Dec 2025",
        category: "professional",
        featured: true,

        desc: "Production-grade GenAI platform with RAG pipelines, agentic workflows, and cloud-native deployment.",
        image: "/projects/genai-cover.png",

        tags: ["LLMs", "RAG", "LangGraph", "FastAPI", "AWS", "Azure"],

        impact: [
            "Built scalable GenAI services and APIs for enterprise workflow automation",
            "Improved reliability via observability, error handling, and cloud monitoring",
        ],

        whatIBuilt: [
            "Python-based AI/ML services for scalable GenAI workflows",
            "FastAPI REST APIs for secure AI integration into apps and backend systems",
            "RAG pipeline: ingest → chunk → embed → index → retrieve",
            "Agentic workflows using LangGraph for multi-step reasoning and tool invocation",
            "Observability: structured logging, monitoring, and error handling in cloud environments",
        ],

        howItWorks: [
            { step: "1) Ingest", detail: "Ingest documents, clean text, normalize content." },
            { step: "2) Index", detail: "Chunk content and generate embeddings into a vector store." },
            { step: "3) Retrieve", detail: "Query retrieves top-k chunks using semantic search." },
            { step: "4) Generate", detail: "LLM generates responses using retrieved context." },
            { step: "5) Observe", detail: "Track latency, failures, and quality signals via logs/metrics." },
        ],

        techStack: [
            "Python",
            "FastAPI",
            "LangGraph",
            "LangChain",
            "LLMs",
            "RAG",
            "Embeddings",
            "Vector DB (FAISS/Pinecone/Chroma)",
            "Docker",
            "Kubernetes",
            "AWS",
            "Azure",
            "CI/CD",
            "CloudWatch / Azure Monitor",
            "Prometheus / Grafana",
            "Git",
        ],

        screenshots: ["/projects/genai-1.png", "/projects/genai-2.png", "/projects/genai.png"],

        links: { github: "", demo: "" },
    },

    {
        id: "nexbridge-one",
        title: "NexBridge One",
        role: "Self-Directed • Sole Developer • End-to-End Build",
        timeline: "Apr 2024 – Mar 2025",
        category: "professional",
        featured: true,

        desc: "Backend integration + monitoring system with Camel, Kafka, self-healing workflows, secure APIs, and AI failure explanations.",
        image: "/projects/nexbridge-cover.png",

        // ✅ NEW: Highlighted Overview (for Nexbridge One page)
        overview: {
            title: "Overview",
            paragraphs: [
                {
                    parts: [
                        { text: "Nexbridge One is an " },
                        { text: "end-to-end integration and reliability platform", highlight: true },
                        { text: " that automates data movement between distributed systems using " },
                        { text: "event-driven workflows", highlight: true },
                        { text: "." },
                    ],
                },
                {
                    parts: [
                        { text: "It listens for triggers such as " },
                        { text: "files, APIs, and messages", highlight: true },
                        { text: ", processes data through " },
                        { text: "transformation pipelines", highlight: true },
                        { text: ", publishes events to Kafka for " },
                        { text: "scalable asynchronous communication", highlight: true },
                        { text: ", and " },
                        { text: "persists execution state", highlight: true },
                        { text: " for full visibility." },
                    ],
                },
                {
                    parts: [
                        { text: "The platform detects failures and automatically recovers using a " },
                        { text: "self-healing retry lifecycle", highlight: true },
                        { text: "." },
                    ],
                },
                {
                    parts: [
                        { text: "A unified dashboard provides " },
                        { text: "real-time monitoring", highlight: true },
                        { text: ", " },
                        { text: "outage tracking", highlight: true },
                        { text: ", and " },
                        { text: "AI-generated failure explanations", highlight: true },
                        { text: " to enable fast diagnostics." },
                    ],
                },
            ],
        },

        tags: ["Spring Boot", "Kafka", "Apache Camel", "JWT", "Monitoring"],

        impact: [
            "Implemented self-healing retry lifecycle to reduce manual recovery work",
            "Added secure APIs + dashboards for system visibility and outage tracking",
        ],

        whatIBuilt: [
            "Spring Boot backend with layered architecture (controller/service/repository)",
            "Integration workflows using Apache Camel routes (file polling + direct routes)",
            "Kafka producers/consumers for async processing",
            "JWT authentication + role-based access control",
            "Self-healing retry lifecycle using scheduler + state tracking",
            "AI endpoint to generate human-readable outage/failure explanations",
            "React dashboard to visualize health, outages, and status",
        ],

        howItWorks: [
            { step: "1) Trigger", detail: "Routes triggered by file polling, API calls, or internal events." },
            { step: "2) Process", detail: "Camel routes transform/route data and publish to Kafka when needed." },
            { step: "3) Persist", detail: "Failures + state stored in DB for visibility & recovery." },
            { step: "4) Recover", detail: "Schedulers retry based on state to prevent infinite failure loops." },
            { step: "5) Explain", detail: "AI endpoint produces readable explanations for outages/failures." },
        ],

        techStack: [
            "Java",
            "Spring Boot",
            "Spring Security",
            "JPA/Hibernate",
            "Apache Camel",
            "Kafka",
            "JWT",
            "RBAC",
            "MySQL",
            "H2",
            "Docker",
            "Kubernetes (basic)",
            "AWS EC2 (basic)",
            "React",
            "TypeScript (supporting)",
            "Postman",
            "Git/GitHub",
        ],

        screenshots: [
            "/projects/nexbridge-one-1.png",
            "/projects/nexbridge-one-2.png",
            "/projects/nexbridge-one-3.png",
            "/projects/nexbridge-one-4.png",
            "/projects/nexbridge-one-5.png",
            "/projects/nexbridge-one-6.png",
            "/projects/nexbridge-one-7.png",
            "/projects/nexbridge-one-8.png",
            "/projects/nexbridge-one-9.png",
        ],

        links: { github: "", demo: "" },
    },

    {
        id: "cloud-microservices",
        title: "Cloud-Native Microservices Platform",
        role: "Full Stack Developer (Backend-heavy)",
        timeline: "2021 – 2023",
        category: "professional",
        featured: true,

        desc: "High-performance Go microservices with event-driven messaging, caching, and AWS deployments.",
        image: "/projects/microservices-cover.png",

        tags: ["Golang", "Microservices", "Kafka", "RabbitMQ", "Redis", "AWS"],

        impact: [
            "Built low-latency Go microservices with concurrency (goroutines/channels)",
            "Improved throughput and reduced bottlenecks using caching and async messaging",
        ],

        whatIBuilt: [
            "Go microservices for low-latency processing",
            "Migration of services from Python/Java to Go for performance improvements",
            "Event-driven messaging using Kafka/RabbitMQ",
            "Redis caching to reduce bottlenecks",
            "AWS EC2 deployments and production support",
            "API security patterns (OAuth exposure) and service reliability improvements",
        ],

        howItWorks: [
            { step: "1) Request", detail: "Clients hit APIs; requests routed to relevant microservice." },
            { step: "2) Compute", detail: "Go services process workloads using goroutines/channels." },
            { step: "3) Async", detail: "Events sent via Kafka/RabbitMQ for downstream processing." },
            { step: "4) Cache", detail: "Redis caches frequent reads to speed up responses." },
            { step: "5) Deploy", detail: "Services deployed on AWS with monitoring + alerts." },
        ],

        techStack: [
            "Golang",
            "Kafka",
            "RabbitMQ",
            "Redis",
            "PostgreSQL",
            "MySQL",
            "AWS EC2",
            "Docker (basic)",
            "OAuth (exposure)",
            "Git",
            "Testing (Ginkgo/Testify exposure)",
        ],

        screenshots: [

    "/projects/cn3.png",
    "/projects/cnm6.png",
        ],
        links: { github: "", demo: "" },
    },

    {
        id: "physio-clinic",
        title: "Physio Clinic Management System",
        role: "Full Stack Developer",
        timeline: "Jan 2021 – Dec 2023",
        category: "professional",
        featured: false,

        desc: "Full-stack clinic operations system with appointments, patients, roles, and dashboards.",
        image: "/projects/login.jpeg",

        tags: ["Spring Boot", "React", "RBAC", "MySQL", "REST APIs"],

        whatIBuilt: [
            "Spring Boot backend APIs for clinic operations",
            "RBAC + secured endpoints using Spring Security",
            "MySQL schema design for appointments/patients",
            "React UI integration for dashboards and workflows",
            "Postman testing for API validation",
            "Agile delivery + bug fixing and integration support",
        ],

        howItWorks: [
            { step: "1) Login", detail: "User authenticates and gets role-based access." },
            { step: "2) Workflow", detail: "Doctors/admins manage appointments and patients via dashboards." },
            { step: "3) Persist", detail: "Data stored in MySQL with validations." },
        ],

        techStack: [
            "Java",
            "Spring Boot",
            "Spring Security",
            "MySQL",
            "React",
            "HTML",
            "CSS",
            "JavaScript",
            "Postman",
            "Git",
        ],

        screenshots: [
            "/projects/login 1.jpeg",
            "/projects/login 2.jpeg",
            "/projects/login 3.jpeg",
            "/projects/login 4.jpeg",
            "/projects/login 5.jpeg",



        ],
        links: { github: "", demo: "" },
    },

    {
        id: "workflow-engine",
        title: "Task Management & Workflow Engine",
        role: "Backend Developer",
        timeline: "2021 – 2023",
        category: "professional",
        featured: false,

        desc: "Workflow orchestration platform with Python APIs and Golang services for async/background processing.",
        image: "/projects/q1.png",

        tags: ["Python", "Golang", "FastAPI", "Flask", "Workflow", "REST APIs"],

        whatIBuilt: [
            "Python backend APIs (Flask/FastAPI) for workflow operations",
            "Go utilities/services for async/background processing",
            "Validation rules + orchestration logic",
            "Logging + error handling improvements",
            "Technical documentation for workflows and deployment",
        ],

        howItWorks: [
            { step: "1) Create", detail: "Users create tasks/workflows via REST API." },
            { step: "2) Execute", detail: "Background processors run workflows asynchronously." },
            { step: "3) Track", detail: "Logs and state stored for debugging and monitoring." },
        ],

        techStack: ["Python", "Flask", "FastAPI", "Golang", "REST APIs", "SQL", "Git"],

        screenshots: [
            "/projects/q3.png",
            "/projects/q5.jpeg",

        ],
        links: { github: "", demo: "" },
    },

    {
        id: "ai-chatbot",
        title: "AI-Powered Chatbot (RAG)",
        role: "Academic Project",
        timeline: "Oct 2025 – Dec 2025",
        category: "academic",
        featured: false,

        desc: "Chatbot using LLMs + RAG for context-aware responses, deployed on Azure.",
        image: "/projects/q2.jpeg",

        tags: ["LLMs", "RAG", "Azure", "REST APIs"],

        whatIBuilt: [
            "LLM integration through APIs",
            "RAG pipeline to enrich prompts with relevant context",
            "Multi-turn conversation support via context tracking",
            "Azure deployment and end-to-end validation",
            "Prompt iteration to reduce hallucinations and improve clarity",
        ],

        howItWorks: [
            { step: "1) Ask", detail: "User sends query to API." },
            { step: "2) Retrieve", detail: "System fetches relevant context snippets." },
            { step: "3) Generate", detail: "LLM generates answer using retrieved context." },
            { step: "4) Return", detail: "UI displays response to user." },
        ],

        techStack: ["Python", "LLMs", "RAG", "Azure", "REST APIs"],

        screenshots: [
            "/projects/chat1.png",
            "/projects/chat2.png",
            "/projects/chat3.png",
            "/projects/chat4.png",
        ],
        links: { github: "", demo: "" },
    },
];
