import { motion } from "motion/react";
function Education() {
  return (
    <motion.div
      className="container mb-5"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}>
      <div className="row">
        <div className="col-10 col-md-8 mx-auto text-center border rounded p-4">
          <h4>B. TECH CSE IN DATA SCIENCE AND ARTIFICAL INTELLIGENCE</h4>
          <h4>FROM</h4>
          <h3>INTEGRAL UNIVERSITY</h3>
          <h4>(2023-2027)</h4>
          <h4 className="text-warning">CGPI - 8.3 | PERCENTAGE - 81.55% </h4>
          <h4 className="mt-5">INTERMEDIATE & HIGH SCHOOL</h4>
          <h4>FROM</h4>
          <h3>NALANDA SHIKSHAN SANSTHAN</h3>

          <h4 className="text-warning">XII - 67.8% | X - 79.2%</h4>
        </div>
      </div>
    </motion.div>
  );
}

export default Education;
