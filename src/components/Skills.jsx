import { motion } from "framer-motion";
import {
  FaAws,
  FaDocker,
  FaPython,
  FaJira,
  FaLinux
} from "react-icons/fa";
import {
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiGrafana,
  SiGithubactions
} from "react-icons/si";

const skillCategories = [
  {
    title: "Cloud Platforms",
    icon: <FaAws />,
    skills: [
      { name: "AWS (EC2, S3, RDS, IAM, Lambda, VPC, CloudWatch)", level: 90 }
    ]
  },
  {
    title: "CI/CD & DevOps Tools",
    icon: <SiJenkins />,
    skills: [
      { name: "Jenkins, GitHub Actions, Harness, UCD", level: 92 },
      { name: "SonarQube, Black Duck, Checkmarx, Prisma, Artifactory", level: 88 }
    ]
  },
  {
    title: "Containers & Orchestration",
    icon: <SiKubernetes />,
    skills: [
      { name: "Docker, Kubernetes, OCP, Helm", level: 88 }
    ]
  },
  {
    title: "Infrastructure as Code",
    icon: <SiTerraform />,
    skills: [
      { name: "Terraform", level: 85 }
    ]
  },
  {
    title: "Monitoring & Logging",
    icon: <SiGrafana />,
    skills: [
      { name: "CloudWatch, Grafana, Splunk, AppDynamics", level: 85 }
    ]
  },
  {
    title: "Scripting",
    icon: <FaPython />,
    skills: [
      { name: "Bash, Python", level: 87 }
    ]
  },
  {
    title: "Tools & Ticketing",
    icon: <FaJira />,
    skills: [
      { name: "Jira, ServiceNow, Confluence", level: 85 }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="glass">
      <h2>Skills</h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            className="glass"
            style={{ width: "300px" }}
          >
            <h3 style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              {category.icon} {category.title}
            </h3>

            {category.skills.map((skill, i) => (
              <div key={i} style={{ marginTop: "10px" }}>
                <p style={{ fontSize: "14px" }}>{skill.name}</p>

                <div
                  style={{
                    background: "#1e293b",
                    borderRadius: "10px",
                    overflow: "hidden"
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: skill.level + "%" }}
                    transition={{ duration: 1 }}
                    style={{
                      height: "8px",
                      background: "linear-gradient(90deg, cyan, blue)"
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}