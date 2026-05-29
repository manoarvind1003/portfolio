export type ProjectCategory =
    | 'Machine Learning'
    | 'Deep Learning'
    | 'NLP / AI'
    | 'Power BI'
    | 'SQL'
    | 'Python'
    | 'Full Stack';

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
        title: 'Stock Price Prediction',
        description: 'LSTM model to predict stock prices using historical data with high accuracy.',
        longDescription:
            'Built a Long Short-Term Memory (LSTM) neural network to forecast stock prices using historical OHLCV data. Implemented feature engineering, data normalisation, and a sliding-window approach for time-series modelling.',
        tags: ['Python', 'LSTM', 'TensorFlow', 'Finance'],
        categories: ['Machine Learning', 'Deep Learning', 'Python'],
        gradient: 'from-accent-blue/20 to-accent-purple/20',
        glow: 'hover:shadow-[0_0_30px_var(--app-accent-blue)] hover:border-accent-blue/50',
        featured: true,
    },
    {
        id: 2,
        title: 'Customer Churn Analysis',
        description: 'Analyzed customer behavior and built churn prediction model with actionable insights.',
        longDescription:
            'Performed EDA on a telecom dataset, engineered features, and trained classification models (Logistic Regression, XGBoost, Random Forest) to predict customer churn with F1-score optimisation.',
        tags: ['Python', 'XGBoost', 'Scikit-learn', 'Analytics'],
        categories: ['Machine Learning', 'Python'],
        gradient: 'from-accent-purple/20 to-accent-gold/20',
        glow: 'hover:shadow-[0_0_30px_var(--app-accent-purple)] hover:border-accent-purple/50',
        featured: true,
    },
    {
        id: 3,
        title: 'Fake News Detection',
        description: 'NLP-based model to detect fake news from real news with deep learning.',
        longDescription:
            'Developed a binary text classifier using TF-IDF + Logistic Regression baseline and a BERT-based fine-tuned model, achieving >95 % accuracy on the LIAR benchmark dataset.',
        tags: ['Python', 'NLP', 'BERT', 'Deep Learning'],
        categories: ['NLP / AI', 'Deep Learning', 'Python'],
        gradient: 'from-accent-blue/20 to-accent-gold/20',
        glow: 'hover:shadow-[0_0_30px_var(--app-accent-gold)] hover:border-accent-gold/50',
        featured: true,
    },
    {
        id: 4,
        title: 'Sales Dashboard',
        description: 'Interactive dashboard for sales insights using Power BI with real-time data.',
        longDescription:
            'Designed an end-to-end Power BI dashboard connecting to live SQL data sources. Created DAX measures for YoY growth, region-wise performance, and product category breakdowns with drill-through functionality.',
        tags: ['Power BI', 'DAX', 'SQL', 'Analytics'],
        categories: ['Power BI', 'SQL'],
        gradient: 'from-accent-gold/20 to-accent-blue/20',
        glow: 'hover:shadow-[0_0_30px_var(--app-accent-blue)] hover:border-accent-blue/50',
        featured: true,
    },
    {
        id: 5,
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
};
