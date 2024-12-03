import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Banking-System",
    img: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "This project is a robust Banking System built with Spring Boot, Spring MVC, and PostgreSQL. It focuses on creating a secure, user-friendly web application that allows users to manage their banking activities. Features include account management, fund transfers, transaction history, and secure login with role-based access for both customers and administrators.",
    demoLink: "https://github.com/Rohitbiradar12/Banking-System",
  },
  {
    id: 2,
    title: "Pro-Collab",
    img: "https://images.pexels.com/photos/3184309/pexels-photo-3184309.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Pro-Collab is a project management tool inspired by Jira, built with Spring Boot, Spring MVC, and MySQL. This tool allows teams to collaborate and manage their projects efficiently. It includes task management, project tracking, role-based access, and real-time team collaboration. With Pro-Collab, users can create tasks, assign them, and track progress seamlessly while staying organized and productive.",
    demoLink: "https://github.com/Rohitbiradar12/PRO-COLLAB",
  },
  {
    id: 3,
    title: "Auction-System",
    img: "https://cdn.corporatefinanceinstitute.com/assets/auction.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Auction-System is a secure online auction platform built with Spring Boot, Spring MVC, and MySQL. It enables real-time bidding, item management, and user authentication. Features include countdown timers, bid tracking, and notifications for winning bids. Admins can manage auctions, while users can browse, bid, and track their status. The system offers role-based access for enhanced security.",
    demoLink: "https://github.com/Rohitbiradar12/Auction-System",
  },
  {
    id: 4,
    title: "Waste Management",
    img: "https://as1.ftcdn.net/v2/jpg/05/73/57/76/1000_F_573577614_3xNASp9y2eCUSXstGdXf9sKlW3ZYVyUr.jpg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "The Waste Management System is an efficient solution for monitoring and managing waste disposal processes. It helps track waste generation, collection, and recycling, ensuring timely pickups and promoting environmental sustainability. By automating reporting and optimizing resource usage, the system enhances waste management operations, supporting both residential and commercial sectors in reducing their ecological impact.",
    demoLink: "https://github.com/Rohitbiradar12/Waste-Management",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const handleDemoClick = () => {
    window.location.href = item.demoLink; 
  };

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={handleDemoClick}>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
