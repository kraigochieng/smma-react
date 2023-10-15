import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import HamburgerItem from "./HamburgerItem";
import "./Hamburger.css";

export default function Hamburger(props) {
  const { isHamburgerOpen, handleHamburgerClose } = props;

  const transition = {
    type: "tween",
    duration: {
      open: 0.05,
      closed: 0.025,
    },
    staggerChildren: {
      open: 0.05,
      closed: 0.025,
    },
  };

  const hamburgerCloseButtonVariants = {
    open: {
      opacity: 1,
            y: 0,
        transition: {
                duration: 0.5
            }
        },
    closed: {
      opacity: 0,
            y: "-100vh",
            transition: {
                duration: 0.5
            }
    },
  };

  const hamburgerVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: transition.type,
        duration: transition.duration.open,
        when: "beforeChildren",
        staggerChildren: transition.staggerChildren.open,
      },
    },
    closed: {
      opacity: 0,
      y: "-100vw",
      transition: {
        type: transition.type,
        duration: transition.duration.closed,
        when: "afterChildren",
        staggerChildren: transition.staggerChildren.closed,
        staggerDirection: -1,
      },
    },
  };

  return (
    <>
      <AnimatePresence>
        {isHamburgerOpen && (
          <motion.section
            key="hamburger"
            id="hamburger"
            initial="closed"
            animate={isHamburgerOpen ? "open" : "closed"}
            exit="closed"
            variants={hamburgerVariants}
          >
            <motion.div
              id="hamburger-close-button-div"
              initial="closed"
              animate={isHamburgerOpen ? "open" : "closed"}
              exit="closed"
              variants={hamburgerCloseButtonVariants}
            >
              <motion.button
                id="hamburger-close-button"
                className="hamburger-button"
                onClick={() => handleHamburgerClose()}
              >
                <AiOutlineClose className="hamburger-button-icon" />
              </motion.button>
            </motion.div>
            <HamburgerItem
              link="/"
              text="Home"
              number="01"
              children={[]}
              handleClick={() => handleHamburgerClose()}
            />
            <HamburgerItem
              link="/about-us"
              text="About Us"
              number="02"
              children={[]}
              handleClick={() => handleHamburgerClose()}
            />
            <HamburgerItem
              link="/services"
              text="Services"
              number="03"
              children={[]}
              handleClick={() => handleHamburgerClose()}
            />
            <HamburgerItem
              link="/our-work"
              text="Our Work"
              number="04"
              children={[]}
              handleClick={() => handleHamburgerClose()}
            />
            <HamburgerItem
              link="/resources"
              text="Resources"
              number="05"
              children={[]}
              handleClick={() => handleHamburgerClose()}
            />
            <HamburgerItem
              link="/careers"
              text="Careers"
              number="06"
              children={[]}
              handleClick={() => handleHamburgerClose()}
            />
            <HamburgerItem
              link="/insights"
              text="Insights"
              number="07"
              children={[]}
              handleClick={() => handleHamburgerClose()}
            />
            <HamburgerItem
              link="/contact-us"
              text="Contact Us"
              number="08"
              children={[]}
              handleClick={() => handleHamburgerClose()}
            />
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}
