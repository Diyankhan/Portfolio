import { Blogs } from "../../data/BlogData.jsx";
import { useState } from "react";
import "./Blog.css";
function Blog() {
  let [activeBlog, setActiveBlog] = useState(null);
  console.log(activeBlog);
  return (
    <div className="container">
      <div className="row text-center text-md-start">
        <div className="col-12">
          <h1 className="py-3 fw-bold">Blog</h1>
        </div>

        {Blogs.map((blog, id) => (
          <div className="col-12 my-2" key={id}>
            <h3 className="text-info">{blog.title}</h3>
            <div className="d-flex justify-content-center justify-content-md-start">
              <p>{blog.date}</p>
              <p className="px-3">|</p>
              <p className="text-secondary">{blog.tools}</p>
            </div>
            <p
              className={`col-10 col-md-6 pb-3 mx-auto mx-md-0 ${activeBlog !== id ? "about-blog" : ""}`}
              style={{ whiteSpace: "pre-line" }}>
              {blog.about}
            </p>
            <button
              className="btn btn-link text-decoration-none"
              onClick={() => setActiveBlog(activeBlog === id ? null : id)}>
                {activeBlog === id ? "Read less" : "Read more"}
            </button>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
