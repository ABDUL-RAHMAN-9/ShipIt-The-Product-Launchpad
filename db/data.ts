export const allProducts = [
    {
        name: "EchoMind AI",
        slug: "echomind-ai",
        tagline: "A secondary brain for your technical documentation",
        description:
            "EchoMind uses advanced RAG to index your local docs and code snippets, providing a searchable, AI-powered knowledge base for your team.",
        websiteUrl: "https://echomind.co.uk/",
        tags: ["Productivity", "AI", "DevTools"],
        createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        approvedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        status: "approved" as const,
        submittedBy: "hello@abdulrahman.dev",
        voteCount: 780,
    },
    {
        name: "PulseCheck",
        slug: "pulsecheck-monitor",
        tagline: "Infrastructure monitoring that sleeps when you do",
        description:
            "Zero-config uptime monitoring for microservices. Get notified via Slack or Discord before your users notice a downtime.",
        websiteUrl:
            "https://www.site24x7.com/ads/cloud-monitoring.html?ad_src=google_cloud_monitoring_in&ad_grp=cloud_monitoring&network=g&device=c&keyword=cloud%20infrastructure%20monitoring&campaignid=11483605405&creative=708279040698&matchtype=p&adposition=&placement=&adgroup=112532945455&targetid=kwd-57623829834&location=9181796&gad_source=1&gad_campaignid=11483605405&gclid=Cj0KCQiA2bTNBhDjARIsAK89wlH1g--yZ90oLhcS-iO63v28Y41wDfcokenf24Rw6HN_oi7z1AEEMjEaAm0yEALw_wcB",
        tags: ["Infrastructure", "SaaS", "DevOps"],
        createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        approvedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        status: "approved" as const,
        submittedBy: "admin@shipit.com",
        voteCount: 540,
    },
    {
        name: "LeafyAnalytics",
        slug: "leafy-analytics",
        tagline: "Privacy-first analytics for the modern web",
        description:
            "A lightweight, cookie-less analytics platform that respects user privacy while giving you the insights you need to grow.",
        websiteUrl: "https://www.lexalytics.com/",
        tags: ["Marketing", "Privacy", "Analytics"],
        createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        approvedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        status: "approved" as const,
        submittedBy: "creator@leafy.com",
        voteCount: 320,
    },
    {
        name: "PixelCraft UI",
        slug: "pixelcraft-ui",
        tagline: "Hand-painted components for creative interfaces",
        description:
            "A curated library of React components inspired by classical art and tactile aesthetics. Designed to bring warmth and texture to the modern web.",
        websiteUrl: "https://oncy.framer.media/project/pixelcraft-mobile-ui",
        tags: ["Frontend", "Design", "React"],
        createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        approvedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        status: "approved" as const,
        submittedBy: "design@pixel.com",
        voteCount: 420, // NEW ITEM
    },
    {
        name: "DeepWork",
        slug: "deepwork-focus",
        tagline: "Find your flow state in a noisy world",
        description:
            "A minimalist productivity suite that combines ambient forest soundscapes with Pomodoro tracking and distraction-free note-taking.",
        websiteUrl:
            "https://medium.com/@gillesvanermen/deep-work-the-ultimate-book-summary-f6bd6a9b3dbb",
        tags: ["Productivity", "Audio", "SaaS"],
        createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
        approvedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
        status: "approved" as const,
        submittedBy: "maker@deepwork.sh",
        voteCount: 380, // NEW ITEM
    },
    {
        name: "QueryFlow",
        slug: "queryflow-api",
        tagline: "The visual architect for your data layer",
        description:
            "Build, test, and document your API endpoints with a drag-and-drop interface. QueryFlow simplifies complex database relations into visual nodes.",
        websiteUrl:
            "https://developers.klaviyo.com/en/reference/flows_api_overview",
        tags: ["API", "DevTools", "Data"],
        createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
        approvedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
        status: "approved" as const,
        submittedBy: "dev@queryflow.dev",
        voteCount: 290, // NEW ITEM
    },
    {
        name: "LoomSecurity",
        slug: "loom-security",
        tagline: "Thread-safe encryption for Next.js applications",
        description:
            "An easy-to-use security library for Next.js applications. Automate your encryption workflows and protect user data with industry-leading protocols.",
        websiteUrl: "https://www.loomsecurity.io/",
        tags: ["Security", "Next.js", "OSS"],
        createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
        approvedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
        status: "approved" as const,
        submittedBy: "security@loomsec.io",
        voteCount: 155, // NEW ITEM
    },
    {
        name: "SwiftShip",
        slug: "swift-ship-api",
        tagline: "Automate your e-commerce logistics in minutes",
        description:
            "A unified API for global shipping carriers. Generate labels, track packages, and manage returns with a single integration.",
        websiteUrl: "https://shipswift.app/",
        tags: ["Logistics", "API", "E-commerce"],
        createdAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000),
        approvedAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000),
        status: "approved" as const,
        submittedBy: "dev@swiftship.dev",
        voteCount: 210,
    },
    {
        name: "AtlasVault",
        slug: "atlas-vault-security",
        tagline: "End-to-end encrypted storage for sensitive assets",
        description:
            "Securely store and share legal and financial documents with zero-knowledge encryption and military-grade security protocols.",
        websiteUrl: "https://www.atlasvaults.com/",
        tags: ["Security", "FinTech", "Storage"],
        createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        approvedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        status: "approved" as const,
        submittedBy: "security@atlas.com",
        voteCount: 195,
    },
    {
        name: "FluxEditor",
        slug: "flux-visual-editor",
        tagline: "The fastest way to build React interfaces visually",
        description:
            "An open-source, collaborative design tool that exports production-ready Tailwind CSS and React components.",
        websiteUrl: "https://bfl.ai/",
        tags: ["Design", "OSS", "React"],
        createdAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000),
        approvedAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000),
        status: "approved" as const,
        submittedBy: "builder@flux.app",
        voteCount: 145,
    },
    // PENDING ITEMS (To test Admin Review later)
    {
        name: "TimberAPI",
        slug: "timber-impact-api",
        tagline: "Track the carbon footprint of your cloud code",
        description:
            "TimberAPI calculates the environmental impact of your API requests in real-time, allowing you to build greener software.",
        websiteUrl: "https://timberapi.com/",
        tags: ["GreenTech", "API", "Sustainability"],
        createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000),
        approvedAt: null,
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
        websiteUrl: "https://www.fourinc.com/zenithflow/",
        tags: ["Productivity", "SaaS", "Management"],
        createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
        approvedAt: null,
        status: "pending" as const,
        submittedBy: "lead@zenith.com",
        voteCount: 8,
    },
];
