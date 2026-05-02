import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      className="glass"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1>Hi, I'm Basavaraj Kuslapur 🚀</h1>
      <p>Senior DevOps Engineer | AWS | Kubernetes | CI/CD</p>

      <a
        href="https://raw.githubusercontent.com/kuslapur/basavarajkuslapur.github.io/main/Basavaraj_Kuslapur_DevOpsEngineer.docx"
        download
        style={{
          display: "inline-block",
          marginTop: "15px",
          padding: "10px 20px",
          background: "cyan",
          color: "black",
          borderRadius: "8px",
          textDecoration: "none"
        }}
      >
        📄 Download Resume
      </a>
    </motion.section>
  );
}