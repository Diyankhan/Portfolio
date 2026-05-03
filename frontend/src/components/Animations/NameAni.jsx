import { TypeAnimation } from "react-type-animation";

const NameAni = () => {
  return (
    <TypeAnimation
      sequence={[
        `Hi, I am Diyan khan,\n Web Developer`,
        1000,
        `Hi, I am Diyan khan,\n React Developer`,
        1000,
        `Hi, I am Diyan khan,\n Node.js Developer`,
        1000,
        `Hi, I am Diyan khan,\n Web Developer`,
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ whiteSpace: "pre-line" }}
      repeat={0}
    />
  );
};

export default NameAni;
