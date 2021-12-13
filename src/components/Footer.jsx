function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="page-footer green lighten-4">
      <div className="container"></div>
      <div className="footer-copyright">
        <div className="container">
          © {date} Copyright Text
          <a className="grey-text text-lighten-4 right" href="#!">
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
