export type ProjectCategory =
    | 'Machine Learning'
    | 'Deep Learning'
    | 'NLP / AI'
    | 'Power BI'
    | 'SQL'
    | 'Python'
    | 'Full Stack'
    | 'Data Engineering'
    | 'Big Data'
    | 'Real-Time Analytics';

export interface Project {
    id: number;
    title: string;
    description: string;
    longDescription?: string;
    tags: string[];
    categories: ProjectCategory[];
    gradient: string;
    glow: string;
    githubLink?: string;
    liveLink?: string;
    featured?: boolean;
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'Zwiggy — Swiggy Data & Analytics Clone',
        description: 'Dynamic food delivery platform with robust MySQL backend and live SQL analytics BI dashboard.',
        longDescription:
            `Full-stack food delivery web app built with Flask, Python, and MySQL. Features a live SQL analytics dashboard for order tracking, revenue trends, and delivery-time heatmaps — mirroring Swiggy's internal BI layer.`,
        tags: ['Python', 'MySQL', 'Flask', 'SQL', 'Full Stack'],
        categories: ['Full Stack', 'SQL', 'Python'],
        gradient: 'from-accent-blue/20 to-accent-purple/20',
        glow: 'hover:shadow-[0_0_30px_var(--app-accent-blue)] hover:border-accent-blue/50',
        githubLink: 'https://github.com/manoarvind1003/SQL-PROJECT',
        liveLink: 'https://sql-project-u3on.onrender.com/',
        featured: true,
    }, {
        id: 2,
        title: 'End-to-End Real-Time Food Delivery Data Pipeline',
        description: 'Real-time food delivery analytics pipeline built with Kafka, PySpark, Airflow, PostgreSQL, Docker, and Power BI.',
        longDescription:
            `Built a complete real-time data pipeline for a food delivery platform using Kafka, PySpark, Airflow, PostgreSQL, Docker, and Power BI. The system ingests streaming order data, processes it in real-time, stores it in a PostgreSQL data warehouse, and visualizes key metrics through an interactive Power BI dashboard.`,
        tags: ['Kafka', 'PySpark', 'Airflow', 'PostgreSQL', 'Docker', 'Power BI'],
        categories: ['Data Engineering', 'Big Data', 'Real-Time Analytics'],
        gradient: 'from-accent-blue/20 to-accent-purple/20',
        glow: 'hover:shadow-[0_0_30px_var(--app-accent-blue)] hover:border-accent-blue/50',
        githubLink: 'https://github.com/manoarvind1003/BIGDATA-ETL-PIPELINE-PROJECT',
        featured: true,
    }, {
        id: 3,
        title: 'NodeShare | Secure File Sharing Platform with React, Express & Supabase',
        description: 'Real-time food delivery analytics pipeline built with Kafka, PySpark, Airflow, PostgreSQL, Docker, and Power BI.',
        longDescription:
            `Built a complete real-time data pipeline for a food delivery platform using Kafka, PySpark, Airflow, PostgreSQL, Docker, and Power BI. The system ingests streaming order data, processes it in real-time, stores it in a PostgreSQL data warehouse, and visualizes key metrics through an interactive Power BI dashboard.`,
        tags: ['React', 'Express', 'Supabase', 'Node.js', 'PostgreSQL', 'Docker', 'Power BI'],
        categories: ['Full Stack', 'SQL', 'Python'],
        gradient: 'from-accent-blue/20 to-accent-purple/20',
        glow: 'hover:shadow-[0_0_30px_var(--app-accent-blue)] hover:border-accent-blue/50',
        githubLink: 'https://github.com/manoarvind1003/NODESHARE',
        liveLink: 'https://nodeshare.vercel.app/',
        featured: true,
    },

];

// All unique categories derived from project data
export const ALL_CATEGORIES: ProjectCategory[] = [
    'Machine Learning',
    'Deep Learning',
    'NLP / AI',
    'Power BI',
    'SQL',
    'Python',
    'Full Stack',
];

// Map category → accent colour token (for badge / filter chip styling)
export const CATEGORY_COLOR: Record<ProjectCategory, string> = {
    'Machine Learning': 'accent-blue',
    'Deep Learning': 'accent-purple',
    'NLP / AI': 'accent-gold',
    'Power BI': 'accent-blue',
    'SQL': 'accent-purple',
    'Python': 'accent-gold',
    'Full Stack': 'accent-blue',
    'Data Engineering': 'accent-blue',
    'Big Data': 'accent-purple',
    'Real-Time Analytics': 'accent-gold',
};
