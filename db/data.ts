// All products data - matches ShipIt schema structure
export const allProducts = [
    {
        name: "EchoMind AI",
        slug: "echomind-ai",
        tagline: "A secondary brain for your technical documentation",
        description:
            "EchoMind uses advanced RAG to index your local docs and code snippets, providing a searchable, AI-powered knowledge base for your team.",
        websiteUrl: "https://echomind.ai",
        tags: ["Productivity", "AI", "DevTools"],
        createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        approvedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        status: "approved" as const,
        submittedBy: "hello@abdulrahman.dev",
        voteCount: 1240,
    },
    {
        name: "PulseCheck",
        slug: "pulsecheck-monitor",
        tagline: "Infrastructure monitoring that sleeps when you do",
        description:
            "Zero-config uptime monitoring for microservices. Get notified via Slack or Discord before your users notice a downtime.",
        websiteUrl: "https://pulsecheck.io",
        tags: ["Infrastructure", "SaaS", "DevOps"],
        createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        approvedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        status: "approved" as const,
        submittedBy: "admin@shipit.com",
        voteCount: 890,
    },
    {
        name: "LeafyAnalytics",
        slug: "leafy-analytics",
        tagline: "Privacy-first analytics for the modern web",
        description:
            "A lightweight, cookie-less analytics platform that respects user privacy while giving you the insights you need to grow.",
        websiteUrl: "https://leafyanalytics.com",
        tags: ["Marketing", "Privacy", "Analytics"],
        createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        approvedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        status: "approved" as const,
        submittedBy: "creator@leafy.com",
        voteCount: 520,
    },
    {
        name: "SwiftShip",
        slug: "swift-ship-api",
        tagline: "Automate your e-commerce logistics in minutes",
        description:
            "A unified API for global shipping carriers. Generate labels, track packages, and manage returns with a single integration.",
        websiteUrl: "https://swiftship.dev",
        tags: ["Logistics", "API", "E-commerce"],
        createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
        approvedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
        status: "approved" as const,
        submittedBy: "dev@swiftship.dev",
        voteCount: 430,
    },
    {
        name: "AtlasVault",
        slug: "atlas-vault-security",
        tagline: "End-to-end encrypted storage for sensitive assets",
        description:
            "Securely store and share legal and financial documents with zero-knowledge encryption and military-grade security protocols.",
        websiteUrl: "https://atlasvault.com",
        tags: ["Security", "FinTech", "Storage"],
        createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
        approvedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
        status: "approved" as const,
        submittedBy: "security@atlas.com",
        voteCount: 310,
    },
    {
        name: "FluxEditor",
        slug: "flux-visual-editor",
        tagline: "The fastest way to build React interfaces visually",
        description:
            "An open-source, collaborative design tool that exports production-ready Tailwind CSS and React components.",
        websiteUrl: "https://fluxeditor.app",
        tags: ["Design", "OSS", "React"],
        createdAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000),
        approvedAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000),
        status: "approved" as const,
        submittedBy: "builder@flux.app",
        voteCount: 215,
    },
    {
        name: "TimberAPI",
        slug: "timber-impact-api",
        tagline: "Track the carbon footprint of your cloud code",
        description:
            "TimberAPI calculates the environmental impact of your API requests in real-time, allowing you to build greener software.",
        websiteUrl: "https://timberapi.org",
        tags: ["GreenTech", "API", "Sustainability"],
        createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
        approvedAt: null, // Still pending
        status: "pending" as const,
        submittedBy: "eco@builder.org",
        voteCount: 15,
    },
    {
        name: "ZenithFlow",
        slug: "zenith-team-flow",
        tagline: "Intelligent team management for remote companies",
        description:
            "ZenithFlow uses heatmaps and async check-ins to prevent burnout and keep remote teams perfectly synchronized.",
        websiteUrl: "https://zenithflow.com",
        tags: ["Productivity", "SaaS", "Management"],
        createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
        approvedAt: null,
        status: "pending" as const,
        submittedBy: "lead@zenith.com",
        voteCount: 8,
    },
    {
        name: "ForgeUI",
        slug: "forge-ui-library",
        tagline: "High-performance components for financial dashboards",
        description:
            "A specialized component library for building complex, data-heavy trading platforms and fintech applications.",
        websiteUrl: "https://forgeui.design",
        tags: ["Design", "FinTech", "Frontend"],
        createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
        approvedAt: null,
        status: "pending" as const,
        submittedBy: "abdul@rahman.dev",
        voteCount: 3,
    },
];