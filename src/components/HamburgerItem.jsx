import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./HamburgerItem.css"
export default function HamburgerItem(props) {
  const { link, text, number, children, handleClick } = props;

  const hamburgerItemVariants = {
    open: {
      opacity: 1,
      y: 0,
    },
    closed: {
      opacity: 0,
      y: 10,
    },
  };

  return (
    <motion.div variants={hamburgerItemVariants}>
      <Link to={link} className="hamburger-item"onClick={() => handleClick()}>
        {number != "" && <p className="hamburger-item-number">{number}</p>}
        <p class="hamburger-item-text">{text}</p>
        {children.length > 0 && <div>{children.map((child) => child)}</div>}
      </Link>
    </motion.div>
  );
}
