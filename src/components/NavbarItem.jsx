import React from "react";
import { Link } from "react-router-dom";
import "./NavbarItem.css";
import { motion } from "framer-motion";
export default function NavbarItem(props) {
  const { link, number, text } = props;
  return (
    <motion.li>
      <Link to={link}>
        <p className="navbar-item-number">{number}</p>
        <p>{text}</p>
      </Link>
    </motion.li>
  );
}
