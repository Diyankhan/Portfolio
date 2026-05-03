import "./index.css";
function Footer() {
  return (
    <div>
      <hr />
      <div className="container">
        <div className="row text-center my-5">
          <div className="col-12 fs-1 mb-2 footer-link">
            <a
              href="https://www.facebook.com/share/18AuMqpdr6/"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa-brands fa-facebook mx-2"></i>
            </a>
            <a
              href="https://www.instagram.com/diyan_khan_9?igsh=MXc4aDZybXJrODVqYg=="
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa-brands fa-instagram mx-2"></i>
            </a>
            <a
              href="https://github.com/diyankhan"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa-brands fa-github mx-2"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/diyan-khan-08153b346/"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin mx-2"></i>
            </a>
          </div>
          <div className="col-12">
            <p style={{ fontSize: "14px" }}>
              Copyright ©2026 All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
