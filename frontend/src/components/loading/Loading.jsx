function Loading() {
  return (
    <div
      className="card m-3 border border-2 mx-auto"
      aria-hidden="true"
      style={{ width: "18rem", backgroundColor: "transparent" }}>
      <div className="placeholder-glow">
        <div
          className="placeholder card-img-top mt-3"
          style={{ height: "180px" }}></div>
      </div>
      <div className="card-body">
        <h5 className="card-title placeholder-glow">
          <span className="placeholder col-6"></span>
        </h5>
      </div>
    </div>
  );
}

export default Loading;
