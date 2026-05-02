export default function Projects() {
  const projects = [
    {
      title: "🚀 CI/CD Pipeline Automation",
      desc: "Designed and implemented enterprise-grade CI/CD pipelines integrating security and quality gates across the software lifecycle. Automated build, test, security scanning, and deployment workflows to ensure reliable and compliant releases.",
      tech: "Jenkins, GitHub Actions, UCD, Harness, SonarQube, Black Duck, Checkmarx, Prisma, Artifactory"
    },
    {
      title: "☁️ AWS Infrastructure & EKS Deployment",
      desc: "Provisioned and managed scalable AWS infrastructure using Terraform. Deployed containerized applications on Amazon EKS with Persistent Volume Claims (PVC) for stateful workloads, ensuring high availability and reliability.",
      tech: "AWS (EC2, RDS, IAM, EKS), Terraform, CloudWatch"
    },
    {
      title: "📦 Kubernetes Microservices Deployment",
      desc: "Deployed and managed microservices architecture on Kubernetes using Helm charts. Implemented auto-scaling, rolling updates, and zero-downtime deployment strategies.",
      tech: "Kubernetes, Docker, Helm"
    },
    {
      title: "📊 Monitoring & Incident Management",
      desc: "Implemented centralized monitoring, logging, and alerting solutions to proactively detect and resolve production issues. Improved system observability and operational efficiency.",
      tech: "Grafana, Splunk, AppDynamics, CloudWatch"
    }
  ];

  return (
    <section id="projects" className="glass">
      <h2>Projects</h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {projects.map((proj, index) => (
          <div
            key={index}
            className="glass"
            style={{ width: "260px" }}
          >
            <h3>{proj.title}</h3>

            <p style={{ fontSize: "14px", opacity: 0.8 }}>
              {proj.desc}
            </p>

            <p style={{ marginTop: "10px", color: "cyan", fontSize: "13px" }}>
              {proj.tech}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}