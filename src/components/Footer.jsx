import "../assets/styles/footer.css";

function Footer({ children }) {
  return (
    <footer className="footer">
      <span className="todo-count">1 items left</span>
      {children}
    </footer>
  );
}

export default Footer;
