export function searchKnowledge(query) {
  const q = query.toLowerCase().trim();

  // Greetings
  if (
    q.includes("hi") ||
    q.includes("hello") ||
    q.includes("hey") ||
    q === "hii"
  ) {
    return `
Hello 👋

I'm Mano Arvind's Portfolio Assistant.

You can ask me about:
• Skills
• Projects
• Education
• Experience
• Kafka
• PySpark
• Career Goals
`;
  }

  // About Mano
  if (
    q.includes("who is mano") ||
    q.includes("who are you") ||
    q.includes("about you")
  ) {
    return `
Mano Arvind is a Data Science graduate passionate about Data Engineering, Analytics and Machine Learning.

He enjoys building real-time data pipelines, analytics dashboards and scalable applications using modern data technologies.
`;
  }

  // Skills
  if (
    q.includes("skill") ||
    q.includes("technology") ||
    q.includes("tech stack")
  ) {
    return `
🛠️ Skills

Programming:
• Python
• SQL
• JavaScript

Data Engineering:
• Apache Kafka
• PySpark
• Apache Airflow
• PostgreSQL
• Docker

Analytics:
• Power BI
• Excel

Machine Learning:
• Regression
• Classification
• Random Forest
• Feature Engineering
`;
  }

  // Projects
  if (
    q.includes("project") ||
    q.includes("projects") ||
    q.includes("portfolio") ||
    q.includes("work")
  ) {
    return `
🚀 Real-Time Food Delivery Analytics Pipeline

Tech Stack:
Kafka, PySpark, Airflow, PostgreSQL, Docker, Power BI

Features:
• Real-time order ingestion
• Streaming analytics
• Automated workflows
• Live dashboards

🚀 NodeShare File Sharing Platform

Features:
• Secure authentication
• File upload & download
• Cloud storage integration

These projects demonstrate strong Data Engineering and Full-Stack Development skills.
`;
  }

  // Kafka
  if (q.includes("kafka")) {
    return `
Apache Kafka is one of Mano's core Data Engineering skills.

He used Kafka in the Real-Time Food Delivery Analytics Pipeline to stream food delivery order events in real time.

Kafka acts as the messaging layer between producers and PySpark consumers.
`;
  }

  // PySpark
  if (q.includes("pyspark") || q.includes("spark")) {
    return `
Mano has hands-on experience with PySpark Structured Streaming.

In the Food Delivery Analytics Pipeline:

• Kafka streams order events
• PySpark processes the stream
• Data is transformed and aggregated
• Results are stored in PostgreSQL
• Power BI visualizes the analytics
`;
  }

  // Airflow
  if (q.includes("airflow")) {
    return `
Apache Airflow is used to automate data workflows.

Mano has used Airflow for:
• Pipeline orchestration
• Task scheduling
• Workflow automation
• Data processing jobs
`;
  }

  // Education
  if (
    q.includes("education") ||
    q.includes("degree") ||
    q.includes("study")
  ) {
    return `
🎓 Education

Bachelor's Degree in Data Science

Focus Areas:
• Data Engineering
• Data Analytics
• Machine Learning
• Big Data Technologies
`;
  }

  // Career Goals
  if (
    q.includes("goal") ||
    q.includes("career") ||
    q.includes("future")
  ) {
    return `
🎯 Career Goals

Mano aims to build a career as:

• Data Engineer
• Data Analyst
• Machine Learning Engineer

He is passionate about designing scalable data platforms and analytics solutions.
`;
  }

  // Contact
  if (
    q.includes("contact") ||
    q.includes("email") ||
    q.includes("linkedin") ||
    q.includes("github")
  ) {
    return `
You can find Mano's contact information, GitHub and LinkedIn links in the Contact section of this portfolio.
`;
  }

  // Default
  return `
I couldn't find information about that.

Try asking:

• Who is Mano Arvind?
• Tell me about your projects
• What are your skills?
• Do you know Kafka?
• Tell me about PySpark
• What is your education?
• What are your career goals?
`;
}