import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import Navbar from "./Navbar";
import { AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";
import "./Header.css";

export default function Header() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: "-100vh" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "tween",
        duration: 0.5,
      }}
    >
      <motion.button
        className="hamburger-button"
        onClick={() => setIsHamburgerOpen(true)}
      >
        <AiOutlineMenu className="hamburger-button-icon" />
      </motion.button>
      <Hamburger
        isHamburgerOpen={isHamburgerOpen}
        handleHamburgerClose={() => setIsHamburgerOpen(false)}
      />
      <Navbar />
      <button id="contact-us-button">
        <Link to="/contact-us">Talk To Us</Link>
      </button>
    </motion.header>
  );
}
