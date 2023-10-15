import React from "react";
import { Link } from "react-router-dom";
import "./NavbarItem.css";
export default function NavbarItem(props) {
  const { link, number, text } = props;
  return (
      <Link to={link} className="navbar-item">
        <p className="navbar-item-number">{number}</p>
        <p>{text}</p>
      </Link>
  );
}
