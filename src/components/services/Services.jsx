import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import { FaCode, FaDatabase, FaTools, FaCloud, FaCogs } from "react-icons/fa"; // FontAwesome Icons

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const services = [
    {
      title: "Frontend",
      description:
        "Building intuitive and responsive user interfaces with modern frameworks.",
      icon: <FaCode size={40} color="orange" />,
    },
    {
      title: "Backend",
      description:
        "Developing robust and scalable server-side applications and APIs.",
      icon: <FaCogs size={40} color="orange" />,
    },
    {
      title: "Database",
      description:
        "Designing and managing efficient database systems for data storage.",
      icon: <FaDatabase size={40} color="orange" />,
    },
    {
      title: "DevOps & Cloud",
      description:
        "Implementing CI/CD pipelines and deploying applications on the cloud.",
      icon: <FaCloud size={40} color="orange" />,
    },
  ];

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on growing new skills
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Problem</motion.b>{" "}
            Solving.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        {services.map((service, index) => (
          <motion.div
            className="box"
            key={index}
            whileHover={{
              scale: 1.05, // Slight zoom effect
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)", // Adds a soft shadow
            }}
          >
            <div className="icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <button>Go</button>
           
            
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
