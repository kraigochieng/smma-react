import React from "react";
import './SocialMediaBarItem.css'
export default function SocialMediaBarItem(props) {
  const { icon } = props;
  return <button className="social-media-bar-item-button">{icon}</button>;
}
