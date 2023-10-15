import React from "react";
import NavbarItem from "./NavbarItem";
import './Navbar.css'
import { motion } from "framer-motion";
export default function Navbar() {
  return (
    <motion.nav id="navbar">
      <NavbarItem link="/" number="01" text="Home" />
      <NavbarItem link="/about-us" number="02" text="About Us" />
      <NavbarItem link="/services" number="03" text="Services" />
      <NavbarItem link="/our-work" number="04" text="Our Work" />
      <img id="icon" src="/src/assets/icon.png" />
      <NavbarItem link="/resources" number="05" text="Resources" />
      <NavbarItem link="/careers" number="06" text="Careers" />
      <NavbarItem link="/insights" number="07" text="Insights" />
      <NavbarItem link="/contact-us" number="08" text="Contact Us" />
    </motion.nav>
  );
}
