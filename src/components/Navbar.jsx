export default function Navbar() {
  return (
    <nav style={{
      position: "sticky",
      top: 0,
      padding: "15px 30px",
      backdropFilter: "blur(10px)",
      background: "rgba(0,0,0,0.3)",
      display: "flex",
      justifyContent: "space-between"
    }}>
      <h3>DevOps 🚀</h3>
      <div>
        <a href="#about" style={{ margin: "0 10px" }}>About</a>
        <a href="#projects" style={{ margin: "0 10px" }}>Projects</a>
        <a href="#contact" style={{ margin: "0 10px" }}>Contact</a>
      </div>
    </nav>
  );
}