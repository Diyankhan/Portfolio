function ProjectLoading() {
  return (
    <div
      className="card"
      aria-hidden="true"
      style={{ backgroundColor: "transparent" }}>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 placeholder-glow">
        {/* Image on side */}
        <div
          className="placeholder me-3 mb-2"
          style={{ width: "300px", height: "180px" }}></div>

        {/* Content */}
        <div className="card-body p-0 w-100">
          <h5 className="card-title">
            <span className="placeholder col-6"></span>
          </h5>

          <p className="card-text">
            <span className="placeholder col-12"></span>
            <span className="placeholder col-9"></span>
            <span className="placeholder col-7"></span>
            <span className="placeholder col-11"></span>
            <span className="placeholder col-10"></span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectLoading;
