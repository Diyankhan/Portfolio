function ContactInfo({ loading }) {
  return (
    <div
      className={`col-12 col-md-5 d-flex justify-content-center mx-auto ${loading ? "check-disabled" : ""}`}>
      <div className="row">
        <div className="mb-auto mt-5 p-4  contact-info border col-12">
          <ul>
            <li>
              <p>
                <i className="fa-solid fa-envelope"></i>E-mail :{" "}
                <a
                  href="mailto:diyankhan33@gmail.com?subject=Portfolio Contact"
                  className="text-decoration-none link-opacity-50-hover"
                  rel="noopener noreferrer">
                  diyankhan33@gmail.com
                </a>
              </p>
            </li>
            <li>
              <p>
                <i className="fa-solid fa-phone"></i>Phone no. :{" "}
                <a
                  className="link-opacity-50-hover"
                  href="tel:+91 9889126891"
                  target="_blank"
                  rel="noopener noreferrer">
                  {" "}
                  9889126891
                </a>
              </p>
            </li>
            <li>
              {" "}
              <p>
                <i className="fa-solid fa-location-dot "></i>Location : Lucknow,
                India{" "}
              </p>
            </li>
            <li>
              <p>
                <i className="fa-brands fa-linkedin"></i>LinkedIn:{" "}
                <a
                  className="link-opacity-50-hover"
                  href="https://www.linkedin.com/in/diyan-khan-08153b346/"
                  target="_blank"
                  rel="noopener norefferer">
                  linkedin.com/in/diyan-khan{" "}
                </a>
              </p>
            </li>
            <li>
              <p>
                <i className="fa-brands fa-github"></i>GitHub:{" "}
                <a
                  className="link-opacity-50-hover"
                  href="https://github.com/Diyankhan"
                  target="_blank"
                  rel="noopener noreferrer">
                  github.com/Diyankhan
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
