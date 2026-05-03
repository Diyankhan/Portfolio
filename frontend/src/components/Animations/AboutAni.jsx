import { TypeAnimation } from 'react-type-animation';

const AboutAni = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        ' I am a passionate software engineer with a strong interest in full-stack web development, data science, and problem solving using Data Structures and Algorithms in Java. I have experience working with technologies such as HTML, CSS, Bootstrap, JavaScript, React, Node.js, Python, NumPy, and Pandas. I enjoy building web applications and continuously improving my technical skills. Currently, I am focused on strengthening my backend development skills and mastering machine learning and data science. I believe in discipline, consistency, and continuous learning to achieve long-term goals in the field of technology.',
      ]}
      wrapper="span"
      speed={80}    
    />
  );
};

export default AboutAni;