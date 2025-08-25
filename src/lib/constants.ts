import type {NavSection} from "@/lib/Types.ts";

export const navigationSections: NavSection[] = [
    {
        title: "Getting Started",
        id: "getting-started",
        items: [
            { title: "Introduction", id: "introduction" },
            { title: "Prerequisites", id: "prerequisites" },
            { title: "Installation", id: "installation" },
            { title: "Quick Start", id: "quick-start" }
        ]
    },
    {
        title: "Usage",
        id: "core-components",
        items: [
            { title: "CodeExecutionManager", id: "code-execution-manager" },
            { title: "Input Dto", id: "input-dto" },
            { title: "Output Dto", id: "output-dto" },
            {title : "Language Example", id: "language-examples"},
            {title : "Error Handling", id: "error-handling"}
        ]
    },
    {
        title: "Language Support",
        id: "language-support",
        items: [
            { title: "Java", id: "java" },
            { title: "Python", id: "python" },

        ]
    },
    {
        title: "Advanced Features",
        id: "advanced-features",
        items: [
            { title: "Custom Data Structures", id: "custom-data-structures" },

        ]
    },

    {
        title: "Future Scope",
        id: "future-scope",
        items: [
            { title: "Future Scope", id: "future-scope" },
            { title: "Contributing", id: "contributing" }
        ]
    }
];