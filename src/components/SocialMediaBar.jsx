import React from "react";
import "./SocialMediaBar.css";
import { motion } from "framer-motion";
import SocialMediaBarItem from "./SocialMediaBarItem";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from "react-icons/ai";
export default function SocialMediaBar() {
  return (
    <motion.section id="social-media-bar">
      <SocialMediaBarItem icon={<AiFillYoutube />} />
      <SocialMediaBarItem icon={<AiOutlineWhatsApp />} />
      <SocialMediaBarItem icon={<AiFillLinkedin />} />
      <SocialMediaBarItem icon={<AiOutlineInstagram />} />
      <SocialMediaBarItem icon={<AiOutlineTwitter />} />
      <SocialMediaBarItem icon={<AiFillFacebook />} />
            <p id="" className="vertical-text">Follow Us Text - </p>
    </motion.section>
  );
}
