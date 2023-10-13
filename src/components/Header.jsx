import React from "react"
import NavbarItem from "./NavbarItem";"react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <motion.section id="navbar-menu">
        <ul>
          <NavbarItem link="/" number="01" text="Home" />
          <NavbarItem link="/about-us" number="02" text="About Us" />
          <NavbarItem link="/services" number="03" text="Services" />
          <NavbarItem link="/our-work" number="04" text="Our Work" />
          <NavbarItem link="/resources" number="05" text="Resources" />
          <NavbarItem link="/careers" number="06" text="Careers" />
          <NavbarItem link="/insights" number="07" text="Insights" />
          <NavbarItem link="/contact-us" number="08" text="Contact Us" />
        </ul>
      </motion.section>
      <motion.nav id="navbar">
        <motion.ul>
          <NavbarItem link="/" number="01" text="Home" />
          <NavbarItem link="/about-us" number="02" text="About Us" />
          <NavbarItem link="/services" number="03" text="Services" />
          <NavbarItem link="/our-work" number="04" text="Our Work" />
          <li>
            <img id="icon" src="/src/assets/icon.png" />
          </li>
          <NavbarItem link="/resources" number="05" text="Resources" />
          <NavbarItem link="/careers" number="06" text="Careers" />
          <NavbarItem link="/insights" number="07" text="Insights" />
          <NavbarItem link="/contact-us" number="08" text="Contact Us" />
        </motion.ul>
        <button>
          <Link to="/contact-us">Talk To Us</Link>
        </button>
      </motion.nav>
    </header>
  );
}
