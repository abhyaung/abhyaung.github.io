from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import HRFlowable, KeepTogether, Paragraph, SimpleDocTemplate, Spacer


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "Abhyaung_Havale_Resume.pdf"


styles = getSampleStyleSheet()
styles.add(ParagraphStyle(
    name="Name", parent=styles["Normal"], fontName="Helvetica-Bold",
    fontSize=16, leading=17, alignment=TA_CENTER, spaceAfter=2,
))
styles.add(ParagraphStyle(
    name="Tagline", parent=styles["Normal"], fontName="Helvetica",
    fontSize=10, leading=11.5, alignment=TA_CENTER, spaceAfter=2,
))
styles.add(ParagraphStyle(
    name="Contact", parent=styles["Normal"], fontName="Helvetica",
    fontSize=8.4, leading=10, alignment=TA_CENTER, textColor=colors.HexColor("#222222"),
))
styles.add(ParagraphStyle(
    name="Section", parent=styles["Normal"], fontName="Helvetica-Bold",
    fontSize=9.2, leading=10.5, spaceBefore=5, spaceAfter=1.2,
))
styles.add(ParagraphStyle(
    name="Body", parent=styles["Normal"], fontName="Helvetica",
    fontSize=7.85, leading=9.35, spaceAfter=1.2,
))
styles.add(ParagraphStyle(
    name="Skill", parent=styles["Body"], leftIndent=0, firstLineIndent=0,
))
styles.add(ParagraphStyle(
    name="Role", parent=styles["Body"], fontName="Helvetica-Bold",
    fontSize=8.25, leading=9.5, spaceBefore=2.2, spaceAfter=0.5,
))
styles.add(ParagraphStyle(
    name="ResumeBullet", parent=styles["Body"], leftIndent=10, firstLineIndent=-6,
    bulletIndent=0, spaceAfter=0.7,
))
styles.add(ParagraphStyle(
    name="Small", parent=styles["Body"], fontSize=7.45, leading=8.7,
))


def section(title):
    return [
        Paragraph(title, styles["Section"]),
        HRFlowable(width="100%", thickness=0.7, color=colors.black, spaceBefore=0, spaceAfter=2),
    ]


def bullet(text):
    return Paragraph(f"• {text}", styles["ResumeBullet"])


story = [
    Paragraph("ABHYAUNG DEEPAK HAVALE", styles["Name"]),
    Paragraph("Software Engineer | Distributed Systems | AI Applications and Agents", styles["Tagline"]),
    Paragraph(
        "+1 (551) 229-8899 &nbsp;|&nbsp; abhyaung@gmail.com &nbsp;|&nbsp; Jersey City, NJ, USA &nbsp;|&nbsp; Open to relocation across the USA",
        styles["Contact"],
    ),
    Paragraph("linkedin.com/in/abhyaunghavale &nbsp;|&nbsp; abhyaung.github.io &nbsp;|&nbsp; github.com/abhyaung", styles["Contact"]),
    Spacer(1, 2),
]

story += section("PROFESSIONAL SUMMARY")
story.append(Paragraph(
    "Software engineer with 4 years building distributed backend systems and production AI-enabled SaaS. "
    "Deep experience with Java and Spring Boot microservices, Kafka event processing, Kubernetes/EKS and transactional systems, "
    "plus current ownership of an AI call-intelligence product using LLM scoring, speech pipelines, real-time services and native mobile capture. "
    "M.S. in Computer Science.",
    styles["Body"],
))

story += section("TECHNICAL SKILLS")
skills = [
    ("Languages & Backend", "Java 11/17/21, Python, TypeScript, JavaScript, SQL, Spring Boot, Spring Cloud, Node.js, FastAPI, REST, GraphQL, gRPC"),
    ("Distributed Systems & Data", "Kafka, RabbitMQ, AWS SQS, Redis, BullMQ, Socket.IO, PostgreSQL, MySQL, Oracle, Supabase, DynamoDB, idempotency, retries, concurrency"),
    ("AI Applications", "LLM application integration, agent workflows, RAG, prompt/model configuration, Deepgram STT, ElevenLabs TTS, Ollama, PyTorch, Hugging Face"),
    ("Cloud & Platform", "AWS EKS/ECS/Lambda/S3/SQS/API Gateway/CloudWatch, Kubernetes, Docker, Terraform, Jenkins, GitHub Actions, CI/CD"),
    ("Security & Quality", "RBAC, multi-tenant isolation, Spring Security, OAuth2, JWT, Playwright, JUnit, Mockito, Sentry, Prometheus, Grafana"),
]
for label, value in skills:
    story.append(Paragraph(f"<b>{label}:</b> {value}", styles["Skill"]))

story += section("PROFESSIONAL EXPERIENCE")
story.append(Paragraph("Software Developer, Built By The Trades - Remote, USA <font size='7.7'>| Jun 2026 - Present</font>", styles["Role"]))
for text in [
    "Own engineering delivery for Goose, a production multi-tenant AI sales-coaching and call-intelligence platform; ship across Next.js, TypeScript, PostgreSQL/Drizzle, Socket.IO, Redis/BullMQ and Capacitor mobile shells.",
    "Integrated LLM-based call scoring, prompt and model configuration, Deepgram speech-to-text and ElevenLabs voice into asynchronous transcription and analysis workflows, including supporting migrations and failure handling.",
    "Built the iOS background call-recorder integration in Swift (permissions, upload and plugin registration), validated locked-screen transcription, and shipped voice capture and GPS-triggered stop events into the production pipeline.",
    "Delivered authentication/session hardening, RBAC and tenant isolation plus CRM OAuth, payments and mapping integrations; drove automated QA gates and production release readiness across three SaaS products.",
]:
    story.append(bullet(text))

story.append(Paragraph("Software Engineer, Insight Nova Solutions (Client: Northern Trust) - USA <font size='7.7'>| Jul 2025 - Jun 2026</font>", styles["Role"]))
for text in [
    "Built and operated portfolio and trade-processing microservices in Java 21 and Spring Boot, deployed as containerized services on AWS EKS.",
    "Designed Kafka and AWS SQS workflows with idempotent consumers, retry policies and dead-letter handling to prevent duplicate downstream effects.",
    "Reduced read latency about 40% with Redis caching and targeted PostgreSQL indexes; increased batch reconciliation throughput about 35% using thread pools and CompletableFuture.",
    "Owned Docker/Kubernetes delivery and Jenkins/GitHub Actions pipelines with rollout and rollback strategies; secured services with Spring Security, OAuth2 and JWT.",
]:
    story.append(bullet(text))

story.append(Paragraph("Java Developer, Persistent Systems - Pune, India <font size='7.7'>| Feb 2021 - Aug 2023</font>", styles["Role"]))
for text in [
    "Built Java 11, Spring Boot and Hibernate services for digital lending and payments, including loan origination, customer verification and transaction processing.",
    "Implemented Kafka and RabbitMQ processing for loan approvals and payment status updates while keeping high-volume request paths non-blocking.",
    "Protected payment correctness under concurrency with Spring transactions and ACID isolation; tuned MySQL and Oracle schemas and indexes for high-volume records.",
]:
    story.append(bullet(text))

story += section("SELECTED AI PROJECTS")
story.append(Paragraph(
    "<b>Local RAG Inference Engine:</b> Llama 3, FastAPI and local embeddings for secure offline document retrieval. &nbsp; "
    "<b>Threat Identifier:</b> fine-tuned BERT classifier with 89.5% accuracy and 89.2% F1. &nbsp; "
    "<b>Field-to-Invoice:</b> typed FastAPI service converting field dictation into deterministic invoice JSON.",
    styles["Small"],
))

story += section("EDUCATION & CERTIFICATIONS")
story.append(Paragraph(
    "<b>M.S. Computer Science</b>, Pace University, New York, USA (2025) &nbsp;|&nbsp; "
    "<b>B.Sc. Computer Science</b>, Savitribai Phule Pune University, India (2022)",
    styles["Small"],
))
story.append(Paragraph(
    "AWS Certified Solutions Architect - Associate &nbsp;|&nbsp; AWS Certified Cloud Practitioner",
    styles["Small"],
))


doc = SimpleDocTemplate(
    str(OUTPUT), pagesize=letter,
    leftMargin=0.42 * inch, rightMargin=0.42 * inch,
    topMargin=0.32 * inch, bottomMargin=0.30 * inch,
    title="Abhyaung Havale - Software Engineer Resume",
    author="Abhyaung Havale",
)
doc.build(story)
print(OUTPUT)
