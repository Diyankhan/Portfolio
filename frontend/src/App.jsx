import Navbar from "./Header.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/Aboutme/About.jsx";
import Project from "./components/Projects/ProjectHero.jsx";
import Certificates from "./components/Certifications/Certificates.jsx";
import Blog from "./components/Blog/Blog.jsx";
import Contact from "./components/Contact/Contact.jsx";
import AddProjects from "./components/Projects/Project.jsx";
import DetailedProject from "./components/Projects/DetailedProject.jsx";
import Protection from "./components/Protection/Protection.jsx";

import Footer from "./Footer.jsx";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import PageNotFound from "./components/PageNotFound/PageNotFound.jsx";
function App() {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const protectRoutes = async () => {
      const res = await axios.get("https://portfolio-73tn.onrender.com/auth", {
        withCredentials: true,
      });
      setIsAuth(res.data.login);
    };
    protectRoutes();
  }, []);
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />

          <Route
            path="/project/addProject"
            element={
              <Protection isAuth={isAuth}>
                <AddProjects />
              </Protection>
            }
          />

          <Route path="/project/:id" element={<DetailedProject />} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
