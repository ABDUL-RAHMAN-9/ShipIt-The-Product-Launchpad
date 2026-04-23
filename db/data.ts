export const allProducts = [
    {
        name: "EchoMind AI",
        slug: "echomind-ai",
        tagline:
            "A smarter way to search and understand your team's documentation.",
        description:
            "EchoMind helps teams find answers buried in their docs and codebases instantly. No more digging through folders—just ask and get the answer you need.",
        websiteUrl: "https://echomind.co.uk/",
        tags: ["ai", "knowledge", "productivity"],
        createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        approvedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        status: "approved" as const,
        submittedBy: "architect@echomind.io",
        voteCount: 782,
    },
    {
        name: "PulseCheck",
        slug: "pulsecheck",
        tagline:
            "Simple uptime monitoring that alerts you before your users notice.",
        description:
            "Get instant notifications when your site or services go down. PulseCheck keeps it simple so you can focus on building, not monitoring.",
        websiteUrl: "https://pulsecheck.io",
        tags: ["monitoring", "devops", "saas"],
        createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        approvedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        status: "approved" as const,
        submittedBy: "ops@atlash.hub",
        voteCount: 542,
    },
    {
        name: "LeafyAnalytics",
        slug: "leafy-analytics",
        tagline:
            "Privacy-first web analytics for people who value their users.",
        description:
            "Understand your visitors without tracking them. Leafy provides clean, simple, and cookie-free analytics that respect everyone's privacy.",
        websiteUrl: "https://leafy.io",
        tags: ["analytics", "privacy", "data"],
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
            "Beautiful React components for building clean dashboards faster.",
        description:
            "Stop rebuilding the same UI elements. PixelCraft provides a library of polished React components designed specifically for data-heavy apps.",
        websiteUrl: "https://pixelcraft.ui",
        tags: ["react", "ui-kit", "frontend"],
        createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        approvedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        status: "approved" as const,
        submittedBy: "engineer@pixel.com",
        voteCount: 420,
    },
    {
        name: "DeepWork",
        slug: "deepwork",
        tagline: "Focus tools to help remote teams find their flow state.",
        description:
            "DeepWork blocks distractions and helps you manage your cognitive load, ensuring you get your most important work done without the stress.",
        websiteUrl: "https://deepwork.sh",
        tags: ["focus", "productivity", "remote"],
        createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
        approvedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
        status: "approved" as const,
        submittedBy: "architect@deepwork.sh",
        voteCount: 381,
    },
    {
        name: "QueryFlow",
        slug: "queryflow",
        tagline: "A visual way to explore and map your database relationships.",
        description:
            "Build and document your database schemas without complex SQL queries. QueryFlow turns your data into visual nodes that anyone can understand.",
        websiteUrl: "https://queryflow.dev",
        tags: ["database", "devtools", "backend"],
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
            "Easy-to-use security and encryption for Next.js applications.",
        description:
            "Protect your user data without being a security expert. Loom provides simple, pre-built encryption tools designed specifically for the modern web.",
        websiteUrl: "https://loomsecurity.io",
        tags: ["security", "nextjs", "web"],
        createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
        approvedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
        status: "approved" as const,
        submittedBy: "ciso@loomsec.io",
        voteCount: 155,
    },
    {
        name: "SwiftShip",
        slug: "swiftship",
        tagline:
            "The all-in-one API to manage shipping and logistics with ease.",
        description:
            "Connect to any global carrier in minutes. SwiftShip handles the heavy lifting of logistics so you can focus on getting products to your customers.",
        websiteUrl: "https://shipswift.app",
        tags: ["api", "logistics", "shipping"],
        createdAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000),
        approvedAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000),
        status: "approved" as const,
        submittedBy: "sys-eng@swiftship.dev",
        voteCount: 210,
    },
    {
        name: "AtlasVault",
        slug: "atlas-vault",
        tagline:
            "A private, secure space to manage your sensitive digital assets.",
        description:
            "Keep your keys, passwords, and digital assets safe. AtlasVault uses zero-knowledge security so only you can ever access your information.",
        websiteUrl: "https://atlasvaults.com",
        tags: ["security", "privacy", "vault"],
        createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        approvedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        status: "approved" as const,
        submittedBy: "security-audit@atlas.com",
        voteCount: 196,
    },
    {
        name: "FluxEditor",
        slug: "flux-editor",
        tagline: "Drag-and-drop your way to production-ready React code.",
        description:
            "A visual builder that exports clean Tailwind CSS and React components. Speed up your prototyping and get from design to code in minutes.",
        websiteUrl: "https://flux.app",
        tags: ["design", "react", "nocode"],
        createdAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000),
        approvedAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000),
        status: "approved" as const,
        submittedBy: "lead-architect@flux.app",
        voteCount: 145,
    },
    {
        name: "TimberAPI",
        slug: "timber-api",
        tagline:
            "Track and reduce the carbon footprint of your web applications.",
        description:
            "Measure the environmental impact of every API request. Timber helps developers build a more sustainable internet, one cluster at a time.",
        websiteUrl: "https://timberapi.com",
        tags: ["green", "sustainability", "api"],
        createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000),
        approvedAt: null,
        status: "pending" as const,
        submittedBy: "eco-audit@builder.org",
        voteCount: 15,
    },
    {
        name: "ZenithFlow",
        slug: "zenithflow",
        tagline:
            "Mindful team management to keep everyone happy and productive.",
        description:
            "Balance workloads and prevent burnout with simple, visual resource planning designed for the modern remote engineering team.",
        websiteUrl: "https://zenithflow.io",
        tags: ["management", "teamwork", "wellness"],
        createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
        approvedAt: null,
        status: "pending" as const,
        submittedBy: "ops-manager@zenith.com",
        voteCount: 8,
    },
];
