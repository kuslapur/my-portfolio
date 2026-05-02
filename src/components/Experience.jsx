export default function Experience() {
  const experiences = [
    {
      company: "Wells Fargo",
      role: "Senior DevOps Engineer",
      period: "Mar 2022 – Present",
      logo: "https://logo.clearbit.com/wellsfargo.com",
      points: [
        "Automated CI/CD pipelines improving deployment reliability and efficiency",
        "Managed production environments ensuring high availability and SLA compliance",
        "Implemented monitoring using Grafana, Splunk, and AppDynamics",
        "Handled incident management (P1/P2) and on-call support",
      ],
    },
    {
      company: "FIS",
      role: "DevOps / Support Engineer",
      period: "May 2016 – Mar 2022",
      logo: "https://logo.clearbit.com/fisglobal.com",
      points: [
        "Built CI/CD pipelines using Jenkins and UrbanCode Deploy (UCD)",
        "Performed system monitoring, log analysis, and performance tuning",
        "Supported 24x7 production systems with high uptime",
        "Handled tool upgrades and patching activities",
      ],
    },
    {
      company: "CGI",
      role: "Associate Software Engineer",
      period: "Jul 2011 – May 2016",
      logo: "https://logo.clearbit.com/cgi.com",
      points: [
        "Supported Linux-based production environments",
        "Automated deployment using shell scripting",
        "Performed release validation and post-deployment checks",
      ],
    },
  ];

  return (
    <section id="experience" className="glass">
      <h2 style={{ marginBottom: "20px" }}>Experience</h2>

      <div>
        {experiences.map((exp, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "15px",
              marginBottom: "30px",
              borderLeft: "2px solid cyan",
              paddingLeft: "15px",
              position: "relative"
            }}
          >
            {/* Timeline Dot */}
            <div
              style={{
                width: "10px",
                height: "10px",
                background: "cyan",
                borderRadius: "50%",
                position: "absolute",
                left: "-6px",
                top: "8px"
              }}
            />

            {/* Logo */}
            <img
              src={exp.logo}
              alt={exp.company}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "8px",
                background: "white",
                padding: "5px"
              }}
            />

            {/* Content */}
            <div>
              <h3 style={{ marginBottom: "5px" }}>
                {exp.role} @ {exp.company}
              </h3>

              <p style={{ fontSize: "13px", opacity: 0.7 }}>
                {exp.period}
              </p>

              <ul style={{ marginTop: "10px", paddingLeft: "18px" }}>
                {exp.points.map((point, i) => (
                  <li key={i} style={{ fontSize: "14px", marginBottom: "5px" }}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}