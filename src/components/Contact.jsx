import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="glass">
      <h2>Contact</h2>

      <p style={{ opacity: 0.8 }}>
        I'm open to DevOps, Cloud, and SRE opportunities. Feel free to reach out 👇
      </p>

      <div style={{ marginTop: "20px", lineHeight: "2" }}>
        <p>
          <FaEnvelope style={iconStyle} />
          bkuslapur@gmail.com
        </p>

        <p>
          <FaPhone style={iconStyle} />
          +91-9035429670
        </p>

        <p>
          <FaGithub style={iconStyle} />
          <a
            href="https://github.com/kuslapur"
            target="_blank"
            rel="noreferrer"
          >
            github.com/kuslapur
          </a>
        </p>

        <p>
          <FaLinkedin style={iconStyle} />
          <a
            href="https://www.linkedin.com/in/basavaraj-kuslapur-1b860040/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/basavaraj-kuslapur
          </a>
        </p>
      </div>

      {/* Social Icons Row */}
      <div style={{ marginTop: "25px", display: "flex", gap: "20px" }}>
        <a href="https://github.com/kuslapur" target="_blank">
          <FaGithub size={28} />
        </a>

        <a href="https://www.linkedin.com/in/basavaraj-kuslapur-1b860040/" target="_blank">
          <FaLinkedin size={28} />
        </a>

        <a href="mailto:bkuslapur@gmail.com">
          <FaEnvelope size={28} />
        </a>
      </div>
    </section>
  );
}

const iconStyle = {
  marginRight: "10px",
  color: "cyan"
};