export const allProducts = [
    {
        name: "EchoMind AI",
        slug: "echomind-ai",
        tagline:
            "Enterprise RAG-based intelligence for technical documentation.",
        description:
            "EchoMind utilizes advanced Retrieval-Augmented Generation (RAG) to index internal documentation and codebases, reducing research overhead by 70% for engineering teams.",
        websiteUrl: "https://echomind.co.uk/",
        tags: ["AI", "Enterprise", "Knowledge-Base"],
        createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        approvedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        status: "approved" as const,
        submittedBy: "architect@echomind.io",
        voteCount: 782,
    },
    {
        name: "PulseCheck",
        slug: "pulsecheck-monitor",
        tagline:
            "Infrastructure health monitoring with automated incident orchestration.",
        description:
            "Zero-config uptime monitoring for microservices. PulseCheck automates alerting via encrypted channels to maintain 100% architectural uptime across distributed nodes.",
        websiteUrl: "https://www.site24x7.com/ads/cloud-monitoring.html",
        tags: ["Infrastructure", "SaaS", "DevOps"],
        createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        approvedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        status: "approved" as const,
        submittedBy: "ops@atlash.hub",
        voteCount: 542,
    },
    {
        name: "LeafyAnalytics",
        slug: "leafy-analytics",
        tagline: "Privacy-compliant telemetry for high-traffic infrastructure.",
        description:
            "A lightweight, cookie-less telemetry platform that provides deep-dive infrastructure insights while maintaining 100% compliance with global data privacy standards.",
        websiteUrl: "https://www.lexalytics.com/",
        tags: ["Data", "Privacy", "Analytics"],
        createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        approvedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        status: "approved" as const,
        submittedBy: "lead-dev@leafy.com",
        voteCount: 320,
    },
    {
        name: "PixelCraft UI",
        slug: "pixelcraft-ui",
        tagline:
            "High-fidelity React component library for industrial dashboards.",
        description:
            "An engineered library of React components designed for high-concurrency data visualization and mission-critical dashboard aesthetics in the Atlash ecosystem.",
        websiteUrl: "https://oncy.framer.media/project/pixelcraft-mobile-ui",
        tags: ["Frontend", "Design-System", "React"],
        createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        approvedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        status: "approved" as const,
        submittedBy: "engineer@pixel.com",
        voteCount: 420,
    },
    {
        name: "DeepWork",
        slug: "deepwork-focus",
        tagline: "Cognitive load management for distributed engineering teams.",
        description:
            "A high-performance productivity suite designed to optimize flow-states in remote environments, reducing project documentation time by 30%.",
        websiteUrl: "https://medium.com/@deepwork-summary",
        tags: ["Productivity", "Optimization", "SaaS"],
        createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
        approvedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
        status: "approved" as const,
        submittedBy: "architect@deepwork.sh",
        voteCount: 381,
    },
    {
        name: "QueryFlow",
        slug: "queryflow-api",
        tagline:
            "Visual architectural layer for complex relational data mapping.",
        description:
            "Build, audit, and document high-concurrency API endpoints. QueryFlow simplifies complex database schemas into actionable visual nodes for faster deployment.",
        websiteUrl: "https://developers.klaviyo.com/reference/flows",
        tags: ["API", "DevTools", "Architecture"],
        createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
        approvedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
        status: "approved" as const,
        submittedBy: "dev-ops@queryflow.dev",
        voteCount: 290,
    },
    {
        name: "LoomSecurity",
        slug: "loom-security",
        tagline:
            "Zero-trust encryption layer for Next.js enterprise applications.",
        description:
            "Automated thread-safe encryption protocols for modern web deployments. Protect corporate assets with automated compliance workflows and military-grade security.",
        websiteUrl: "https://www.loomsecurity.io/",
        tags: ["Security", "Compliance", "Next.js"],
        createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
        approvedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
        status: "approved" as const,
        submittedBy: "ciso@loomsec.io",
        voteCount: 155,
    },
    {
        name: "SwiftShip",
        slug: "swift-ship-api",
        tagline:
            "Unified logistics API for high-velocity supply chain management.",
        description:
            "Automate global shipping carrier integrations. Atlash SwiftShip reduces e-commerce logistical overhead by 70% through optimized label generation and tracking.",
        websiteUrl: "https://shipswift.app/",
        tags: ["Logistics", "API", "Supply-Chain"],
        createdAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000),
        approvedAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000),
        status: "approved" as const,
        submittedBy: "sys-eng@swiftship.dev",
        voteCount: 210,
    },
    {
        name: "AtlasVault",
        slug: "atlas-vault-security",
        tagline:
            "Encrypted asset vault for sensitive corporate financial data.",
        description:
            "Secure storage for high-value financial assets. AtlasVault implements zero-knowledge encryption to protect organizational data from external vulnerabilities.",
        websiteUrl: "https://www.atlasvaults.com/",
        tags: ["Security", "FinTech", "Storage"],
        createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        approvedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        status: "approved" as const,
        submittedBy: "security-audit@atlas.com",
        voteCount: 196,
    },
    {
        name: "FluxEditor",
        slug: "flux-visual-editor",
        tagline: "Collaborative design-to-code engine for rapid prototyping.",
        description:
            "An industrial-grade visual editor that exports production-ready Tailwind CSS and React code, accelerating front-end deployment speed by 40%.",
        websiteUrl: "https://bfl.ai/",
        tags: ["Design", "OSS", "Deployment"],
        createdAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000),
        approvedAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000),
        status: "approved" as const,
        submittedBy: "lead-architect@flux.app",
        voteCount: 145,
    },
    {
        name: "TimberAPI",
        slug: "timber-impact-api",
        tagline:
            "Environmental impact audit for cloud infrastructure clusters.",
        description:
            "Real-time tracking of carbon footprints across API requests. TimberAPI provides automated ESG compliance reporting for sustainable engineering teams.",
        websiteUrl: "https://timberapi.com/",
        tags: ["GreenTech", "API", "Sustainability"],
        createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000),
        approvedAt: null,
        status: "pending" as const,
        submittedBy: "eco-audit@builder.org",
        voteCount: 15,
    },
    {
        name: "ZenithFlow",
        slug: "zenith-team-flow",
        tagline:
            "Resource allocation and workload monitoring for remote units.",
        description:
            "ZenithFlow uses predictive heatmaps to prevent burnout and synchronize distributed engineering units for maximum architectural output.",
        websiteUrl: "https://www.fourinc.com/zenithflow/",
        tags: ["Productivity", "Management", "Operations"],
        createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
        approvedAt: null,
        status: "pending" as const,
        submittedBy: "ops-manager@zenith.com",
        voteCount: 8,
    },
];
