import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  User,
  Rocket,
  Code2,
  GraduationCap,
  Mail,
  GitBranch,
  Cloud,
  Layers,
  Database,
} from "lucide-react";

/* ============================================================
   CENTRAL CONTENT FILE — edit text, links and numbers here.
   Nothing else in the project needs to change.
   ============================================================ */

export const profile = {
  initials: "TD",
  name: "TEJASVI DARAK",
  role: "Aspiring Data Engineer",
  location: "Hyderabad, India",
  availability: "OPEN TO OPPORTUNITIES",
  linkedin: "https://www.linkedin.com/in/tejasvidarak",
  github: "https://github.com/tejudarak09",
  email: "tejudarak002@gmail.com",
  resumePath: "/resume.pdf",
};

export interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

export const navItems: NavItem[] = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "about", label: "About", icon: User },
  { id: "projects", label: "Projects", icon: Rocket },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "contact", label: "Contact", icon: Mail },
];

export const hero = {
  label: "DATA ENGINEERING PORTFOLIO",
  heading: "Building Reliable Data Pipelines",
  description:
    "Computer Science graduate focused on data engineering, ETL pipelines, cloud data platforms, data transformation, and analytics-ready data solutions.",
  statusBadge: "OPEN TO DATA ENGINEERING OPPORTUNITIES",
};

export interface MetricCard {
  title: string;
  value: string;
  description: string;
  badge: string;
  badgeTone: "gold" | "green" | "orange";
  icon: LucideIcon;
  seed: number;
}

/* Portfolio highlights — NOT employment or business-impact claims. */
export const metricCards: MetricCard[] = [
  {
    title: "FEATURED PIPELINE",
    value: "01",
    description: "End-to-end data engineering project",
    badge: "Flagship",
    badgeTone: "gold",
    icon: GitBranch,
    seed: 7,
  },
  {
    title: "CORE TECHNOLOGIES",
    value: "Python + SQL",
    description: "Data processing and transformation",
    badge: "Stack",
    badgeTone: "green",
    icon: Code2,
    seed: 21,
  },
  {
    title: "CLOUD PLATFORMS",
    value: "AWS + Azure",
    description: "Cloud data solutions",
    badge: "Cloud",
    badgeTone: "orange",
    icon: Cloud,
    seed: 42,
  },
  {
    title: "FEATURED PROJECTS",
    value: "04",
    description: "Data engineering and analytics",
    badge: "Built",
    badgeTone: "green",
    icon: Layers,
    seed: 99,
  },
];

export const secondaryStats = [
  { label: "DATA PIPELINES", value: "02" },
  { label: "CLOUD PROJECTS", value: "02" },
  { label: "ANALYTICS PROJECTS", value: "02" },
  { label: "GITHUB REPOSITORIES", value: "04" },
];

export const education = {
  degree: "Bachelor of Technology",
  field: "Computer Science and Engineering",
  school: "KL University",
  years: "2022 – 2026",
};

export interface JourneyEntry {
  title: string;
  description: string;
  tags: string[];
  year: string;
}

export const journeyEntries: JourneyEntry[] = [
  {
    title: "E-Commerce End-to-End Data Engineering Pipeline",
    description:
      "Ingested 50,000 retail orders into PostgreSQL, orchestrated ELT with Airflow into star-schema fact and dimension tables, with 38 automated data-quality checks.",
    tags: ["Python", "SQL", "Airflow", "PostgreSQL"],
    year: "2023",
  },
  {
    title: "Real-Time Financial Transactions Pipeline",
    description:
      "Streamed financial events through Kafka and PySpark Structured Streaming with rule-based fraud detection, reconciled exactly once into a partitioned S3 lake.",
    tags: ["Python", "Kafka", "PySpark", "AWS S3"],
    year: "2023",
  },
  {
    title: "Retail Business Intelligence & Profitability Analysis",
    description:
      "In development — retail sales analysis with SQL and interactive Power BI dashboards for revenue and profitability patterns.",
    tags: ["SQL", "Power BI", "DAX", "Excel"],
    year: "2024",
  },
  {
    title: "Customer Retention & Marketing Campaign Analytics",
    description:
      "In development — customer EDA with Python and Pandas, RFM segmentation and cohort analysis in Power BI.",
    tags: ["Python", "SQL", "Power BI", "Pandas"],
    year: "2025",
  },
];

export interface SkillCategory {
  title: string;
  skills: string[];
}

/* Skill groupings synced to Teju's CV. */
export const skillCategories: SkillCategory[] = [
  { title: "PROGRAMMING LANGUAGES", skills: ["Python", "SQL", "Java"] },
  {
    title: "PYTHON LIBRARIES",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    title: "DATA ENGINEERING",
    skills: [
      "ETL/ELT",
      "Data Pipelines",
      "Data Cleaning",
      "Data Validation",
    ],
  },
  {
    title: "BIG DATA & CLOUD",
    skills: [
      "Apache Spark (PySpark)",
      "Azure Databricks",
      "Microsoft Fabric",
      "AWS (S3)",
    ],
  },
  { title: "DATABASES", skills: ["MySQL", "PostgreSQL"] },
  {
    title: "BI & VISUALIZATION",
    skills: [
      "Power BI",
      "DAX",
      "Power Query",
      "Tableau",
      "Amazon QuickSight",
      "Excel",
    ],
  },
  {
    title: "DATA CONCEPTS",
    skills: [
      "Data Modeling",
      "Data Warehousing",
      "SQL Joins",
      "Aggregations",
      "Data Quality",
    ],
  },
];

export interface CaseStudy {
  overview: string;
  problem: string;
  architecture: string[];
  architectureNote?: string;
  dataSource: string;
  ingestion: string;
  transformation: string;
  storage: string;
  dqChecks: string[];
  techUsed: string[];
  outputs: string[];
  challenges: string[];
  future: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  results: { value: string; label: string }[];
  /** Real URL, or undefined when there is nothing public to link. */
  link?: string;
  /** Label for the link button. Defaults to "GitHub". */
  linkLabel?: string;
  /** Full case study for completed builds. Omitted for in-development work. */
  caseStudy?: CaseStudy;
  /** When true: amber IN DEVELOPMENT badge, scope bullets instead of results, no detail view or links. */
  inDevelopment?: boolean;
  scopeBullets?: string[];
}

export const projects: Project[] = [
  {
    id: "ecommerce-etl",
    title: "E-Commerce End-to-End Data Engineering Pipeline",
    category: "Batch ETL",
    description:
      "A data engineering workflow that ingests e-commerce data, validates records, transforms raw datasets, stores structured data, and prepares analytics-ready outputs.",
    tags: ["Python", "SQL", "Apache Airflow", "PostgreSQL"],
    results: [
      { value: "50,000", label: "orders processed" },
      { value: "₹37.95 Cr", label: "total revenue" },
      { value: "₹8,916", label: "average order value" },
      { value: "38/38", label: "data-quality checks green" },
    ],
    link: "https://github.com/tejudarak09/ecommerce-etl-pipeline",
    caseStudy: {
      overview:
        "An end-to-end batch ETL pipeline that takes raw e-commerce order data from a Python generator, lands it in PostgreSQL staging, and orchestrates ELT into analytics-ready star-schema tables with Airflow.",
      problem:
        "Raw retail order data arrives messy — duplicates, nulls, inconsistent keys — and analysts need a clean, queryable model they can trust without re-cleaning every time.",
      architecture: [
        "DATA SOURCE — Python order-data generator",
        "PYTHON INGESTION — extract and load raw orders",
        "POSTGRESQL STAGING — raw landing tables",
        "DATA VALIDATION — 38 automated quality checks",
        "SQL TRANSFORMATIONS — cleanse, dedupe, conform",
        "ANALYTICS TABLES — fact_orders + dimensions",
        "DASHBOARD — query-ready for BI tools",
      ],
      architectureNote: "This is the actual implemented architecture.",
      dataSource:
        "Python-generated retail dataset modeled on real e-commerce order patterns: 50,000 orders from Indian customers, denominated in INR.",
      ingestion:
        "Python scripts extract order, customer and product records and load them into PostgreSQL staging tables.",
      transformation:
        "SQL transformations cleanse, deduplicate and conform records into a star schema with fact and dimension tables. Loads are idempotent and incremental, orchestrated by Apache Airflow.",
      storage:
        "PostgreSQL — staging schema for raw data, plus cleansed analytics marts with fact_orders and supporting dimensions.",
      dqChecks: [
        "38 automated data-quality checks — all green",
        "Duplicate detection on order keys",
        "Null and range validation on amounts and dates",
        "Referential integrity between facts and dimensions",
        "Deterministic results verified across two full runs",
      ],
      techUsed: ["Python", "SQL", "Apache Airflow", "PostgreSQL"],
      outputs: [
        "₹37.95 Cr total revenue across 50,000 orders",
        "₹8,916 average order value",
        "Electronics top category at ₹21.46 Cr",
        "Mumbai top city at ₹5.03 Cr",
      ],
      challenges: [
        "Designing idempotent incremental loads so re-runs never double-count revenue",
        "Duplicate detection across messy source keys without losing valid rows",
      ],
      future: [
        "Add Airflow SLA alerts and retry policies",
        "Partition large fact tables by month for faster scans",
      ],
    },
  },
  {
    id: "realtime-fintxn",
    title: "Real-Time Financial Transactions Pipeline",
    category: "Streaming",
    description:
      "A real-time streaming pipeline for financial transaction events with rule-based fraud detection, event-time processing, and a partitioned cloud data lake.",
    tags: ["Python", "Apache Kafka", "PySpark", "AWS S3"],
    results: [
      { value: "26,540", label: "transactions reconciled" },
      { value: "100%", label: "reconciled, zero loss" },
      { value: "₹25.13 Cr", label: "transaction volume" },
      { value: "68", label: "fraud alerts fired" },
    ],
    link: "https://github.com/tejudarak09/realtime-financial-transactions",
    caseStudy: {
      overview:
        "A real-time pipeline that streams financial transaction events through Kafka, processes them with PySpark Structured Streaming, applies rule-based fraud detection, and lands reconciled data in a partitioned S3 lake.",
      problem:
        "Transaction events arrive continuously and must be validated, screened for fraud patterns, and stored exactly once — restarts or duplicates must never corrupt the books.",
      architecture: [
        "EVENT SOURCE — synthetic transaction generator",
        "APACHE KAFKA — transaction event topics",
        "PYSPARK STRUCTURED STREAMING — event-time windows",
        "FRAUD DETECTION — HIGH_VALUE / NEW_DEVICE / VELOCITY rules",
        "PARTITIONED PARQUET — S3 data lake",
        "RECONCILIATION — exactly-once accounting",
      ],
      architectureNote: "This is the actual implemented architecture.",
      dataSource:
        "Python-generated financial transaction events: 26,540 transactions with amounts, devices, merchants and timestamps, denominated in INR.",
      ingestion:
        "A Python producer publishes transaction events to Kafka topics; the stream is consumed with checkpointing enabled.",
      transformation:
        "PySpark Structured Streaming applies event-time windowing and three rule-based fraud checks — HIGH_VALUE, NEW_DEVICE and VELOCITY — flagging suspicious events in-stream.",
      storage:
        "Partitioned Parquet files in an AWS S3 data lake (with a local-filesystem fallback), organized for time-range scans.",
      dqChecks: [
        "Exactly-once reconciliation: 100% of 26,540 transactions accounted for",
        "Zero message loss across producer restarts",
        "Event-time watermarking handles late-arriving data",
        "Fraud rules fired 68 times: HIGH_VALUE 30, NEW_DEVICE 25, VELOCITY 13",
      ],
      techUsed: ["Python", "Apache Kafka", "PySpark", "AWS S3"],
      outputs: [
        "₹25.13 Cr total transaction volume",
        "68 fraud alerts: HIGH_VALUE 30, NEW_DEVICE 25, VELOCITY 13",
        "Clean restart recovery verified",
      ],
      challenges: [
        "Guaranteeing exactly-once reconciliation across restarts",
        "Tuning event-time windows so late data is handled without stalling the stream",
      ],
      future: [
        "Add a streaming dashboard for live fraud-alert monitoring",
        "Move rule thresholds to a config store for tuning without redeploys",
      ],
    },
  },
  {
    id: "retail-bi",
    title: "Retail Business Intelligence & Profitability Analysis",
    category: "Analytics",
    description:
      "Analyzed retail sales with SQL (joins, aggregations, CTEs) to find revenue and profitability patterns. Built interactive Power BI dashboards tracking sales, margins, regions and product KPIs.",
    tags: ["SQL", "Power BI", "DAX", "Excel"],
    results: [],
    inDevelopment: true,
    scopeBullets: [
      "Analyzed retail sales data using SQL queries, joins, aggregations, and CTEs to identify revenue trends and profitability patterns.",
      "Developed interactive Power BI dashboards to monitor sales performance, profit margins, regional trends, and product-level KPIs.",
      "Created DAX measures for total revenue, total profit, profit margin, and average order value.",
      "Performed profitability analysis to identify underperforming products and evaluate discount patterns.",
    ],
  },
  {
    id: "customer-retention",
    title: "Customer Retention & Marketing Campaign Analytics",
    category: "Analytics",
    description:
      "Performed EDA with Python and Pandas on customer data; wrote SQL for lifetime value, frequency and retention metrics. Built RFM segmentation and cohort analysis, visualized in Power BI dashboards.",
    tags: ["Python", "SQL", "Power BI", "Pandas"],
    results: [],
    inDevelopment: true,
    scopeBullets: [
      "Performed exploratory data analysis (EDA) using Python and Pandas to identify customer purchasing patterns and data-quality issues.",
      "Developed SQL queries to analyze customer lifetime spending, purchase frequency, repeat purchases, and retention metrics.",
      "Implemented RFM customer segmentation and cohort analysis to evaluate customer behavior and identify retention trends.",
      "Built interactive Power BI dashboards to visualize customer segments, retention rates, and campaign performance.",
    ],
  },
];

export interface MoreProject {
  id: string;
  title: string;
  description: string;
  tags: string[];
  results: { value: string; label: string }[];
  /** Real URL, or undefined when there is nothing public to link. */
  link?: string;
  /** Label for the link button. Defaults to "GitHub". */
  linkLabel?: string;
}

export const moreProjects: MoreProject[] = [
  {
    id: "dasheats",
    title: "Food Delivery Analytics Engineering Platform",
    description:
      "A dbt-powered analytics engineering platform over PostgreSQL with a medallion model structure and a Streamlit executive dashboard for food-delivery KPIs.",
    tags: ["dbt", "PostgreSQL", "Streamlit"],
    results: [
      { value: "50,000", label: "orders modeled" },
      { value: "₹3.67 Cr", label: "total revenue" },
      { value: "₹766", label: "average order value" },
      { value: "88.3%", label: "on-time delivery" },
      { value: "38", label: "dbt tests green" },
    ],
    link: "https://food-delivery-analytics-sknto3urot5hms9fkfbdbk.streamlit.app/",
    linkLabel: "Live Demo",
  },
  {
    id: "urbankart-lakehouse",
    title: "UrbanKart Serverless Data Lakehouse",
    description:
      "A serverless data lakehouse on AWS: raw files land in S3, Lambda transforms with a data-quality quarantine, curated Parquet is cataloged by Glue and queried with Athena.",
    tags: ["AWS S3", "Lambda", "Glue", "Athena", "Streamlit"],
    results: [
      { value: "50,000", label: "Indian e-commerce orders" },
      { value: "INR", label: "native currency data" },
      { value: "DQ", label: "quarantine pattern" },
    ],
    linkLabel: "Code on request",
  },
];

export const about =
  "I am a Computer Science and Engineering graduate with a specialization in Data Science and an interest in building reliable data pipelines, cloud-based data workflows, and analytics-ready datasets. My technical interests include Python, SQL, data transformation, cloud storage, data quality, and modern data platforms. I enjoy solving data preparation challenges and designing workflows that turn raw data into useful information. I am looking to grow as a Data Engineer by building practical data solutions and continuously improving my engineering skills.";

export const certifications = [
  "Google Data Analytics Professional",
  "AWS Certified Cloud Practitioner",
  "Microsoft Azure Fundamentals",
  "GitHub Foundations",
];

export const contact = {
  heading: "Let's Build Something With Data.",
  text: "Interested in discussing data engineering opportunities, cloud data platforms, or collaborative projects? Feel free to get in touch.",
};

/* Interactive pipeline demo — simulated messages, no real execution. */
export const demoStages = ["INGEST", "VALIDATE", "TRANSFORM", "LOAD", "ANALYZE"];

export const demoLogs: Record<string, string[]> = {
  INGEST: [
    "[ingest] connecting to source…",
    "[ingest] fetched 1,240 records from staging API",
    "[ingest] wrote raw batch to landing zone",
  ],
  VALIDATE: [
    "[validate] running 38 data-quality checks…",
    "[validate] 0 duplicates, 0 null keys detected",
    "[validate] all checks passed",
  ],
  TRANSFORM: [
    "[transform] cleansing + conforming records…",
    "[transform] built fact_orders (1,240 rows)",
    "[transform] built dim_customer, dim_product",
  ],
  LOAD: [
    "[load] loading analytics tables…",
    "[load] 1,240 rows committed, 0 conflicts",
    "[load] load complete",
  ],
  ANALYZE: [
    "[analyze] refreshing KPI aggregates…",
    "[analyze] revenue ₹4.2L · AOV ₹8,900 · 98.1% clean",
    "[analyze] dashboard ready",
  ],
};

export const demoErrorLogs = [
  "[transform] cleansing + conforming records…",
  "[transform] ERROR: schema drift on column 'order_total' (expected NUMERIC, got TEXT)",
  "[transform] batch quarantined — 212 rows held for review",
  "[demo] pipeline halted. Fix the schema mapping, then press Reset and run again.",
];

export const footerNote = "Built by Tejasvi Darak · Hyderabad, India";

export const cardIcon = Database;
