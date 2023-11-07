const Footer = () => {
  return (
    <footer>
      <div
        style={{
          width: "100%",
          minHeight: "20vh",
          maxHeight: "30vh",
          marginTop: 60,
        }}
      >
        <p style={{ fontSize: "30px", textAlign: "center", padding: "20px" }}>
          ✌️
          <span className="nav-link">
              Build Chatbot with OpenAI, Socket.io, and MongoDB
          </span>
          ✌️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
