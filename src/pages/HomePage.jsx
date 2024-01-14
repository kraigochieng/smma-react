import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	AiFillCaretRight,
	AiOutlineArrowLeft,
	AiOutlineArrowRight,
} from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
import CoreBusiness from "../components/CoreBusiness";
import QuoteForm from "../components/forms/QuoteForm";
import "./HomePage.css";
import { motion } from "framer-motion";

export default function HomePage() {
	const [isHalfPastHero, setIsHalfPastHero] = useState(false);
	function handleMouseMove(event) {
		/*         event.preventDefault(); */
		console.log("hello");
		const element = event.target;
		// const domRect = element.getBoundingClientRect();
		// console.log(domRect);
		const halfHeight = element.offsetHeight / 2;
		const isPast =
			event.clientY > element.getBoundingClientRect().top + halfHeight;
		setIsHalfPastHero(isPast);
	}

	return (
		<>
			<motion.article
				id="home-hero"
				data-watermark="Strategy &#xa; Design &#xa; Progress"
				onMouseMove={handleMouseMove}
				className={isHalfPastHero ? "half-past-hero" : "not-half-past-hero"}
			>
				<motion.div id="home-hero-text">
					<p>WE WILL ROCK YOU</p>
					<p>
						We are an elite squad of alpha eccentrics, creative story tellers
						and business minds.
					</p>
					<TypeAnimation
						sequence={["Join the lions!", 10000, "", 3000]}
						speed={50}
						deletionSpeed={50}
						wrapper="span"
						cursor={true}
						repeat={Infinity}
						style={{
							fontStyle: "italic",
							fontSize: "2em",
							display: "inline-block",
						}}
					/>
					<button id="home-hero-read-more" className="button">
						<Link to="/about">Read More</Link>
						<AiOutlineArrowRight />
					</button>
				</motion.div>
				<motion.button
					id="home-hero-play-button"
					className="button"
					initial={{ scale: 1, opacity: 1 }}
					animate={{ scale: 1.5, opacity: 0.8 }}
					transition={{
						ease: "easeInOut",
						repeat: Infinity,
						repeatType: "reverse",
						duration: 2,
					}}
				>
					<AiFillCaretRight id="home-hero-play-button-icon" />
				</motion.button>
			</motion.article>

			<motion.article id="home-bio">
				<p>
					We are a digital, marketing, advertising & PR agency, crafting
					targeted and functional strategies for our clients.
				</p>
				<p>Lorem ipsum dolor</p>
				<p>We are a verified agency</p>
				<motion.section id="home-bio-verifications">
					<p>img 1</p>
					<p>img 1</p>
					<p>img 1</p>
					<p>img 1</p>
					<p>img 1</p>
					<p>img 1</p>
				</motion.section>
				<p>
					We are an integrated full scope multi-disciplinary digital, marketing,
					PR and advertising agency. We are an elite squad of alpha eccentrics,
					creative storytellers and business minds. Together, we mix art and
					science to turn brands into favorites. We’ve remained true to our
					mission: to build enduring bonds between brands and humans. We believe
					that great talent will do great work, so we invest in people and give
					them the opportunity to shine. It’s our guiding philosophy, our
					promise, and our business model.
				</p>
				<p>We're committed to creating enduring human-to-brand connections. </p>
			</motion.article>

			<motion.article id="home-recent-projects">
				<p>Recent Projects</p>
				<p>We believe that when you do things with passion magic happens! </p>
				<p>
					Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
					cillum sint consectetur cupidatat.Lorem ipsum dolor sit amet, qui
					minim labore adipisicing minim sint cillum sint consectetur cupidatat.
				</p>
				<button>
					<Link to="/our-work">Check out more projects</Link>
				</button>
				<motion.section id="home-recent-projects-list">
					<p>Project 1</p>
					<p>Project 1</p>
					<p>Project 1</p>
				</motion.section>
			</motion.article>

			<motion.article>
				<p>Our Core Business</p>
				<CoreBusiness title="1" body="1" />
				<CoreBusiness title="2" body="2" />
				<CoreBusiness title="3" body="3" />
				<CoreBusiness title="4" body="4" />
			</motion.article>

			<motion.article id="home-awards-and-clients">
				<motion.section id="home-awards">
					<p>We have bling</p>
					<p>Trophy Image</p>
				</motion.section>
				<motion.section>
					<p>Our Clients</p>
					<p>Some friends we have made while working together.</p>
					<p>
						Our clients describe us as a goals team which creates amazing
						experiences, by crafting top-notch strategies and concepts. Here is
						a list of brands that aren’t just our clients.
					</p>
					<motion.section id="home-clients-list"></motion.section>
				</motion.section>
			</motion.article>

			<motion.article>
				<motion.section id="home-comments-slideshow-section">
					<p>Comments 1</p>
					<p>Comments 2</p>
					<p>COmments 3</p>
					<button>
						<AiOutlineArrowLeft />
					</button>
					<button>
						<AiOutlineArrowRight />
					</button>
				</motion.section>
			</motion.article>

			<motion.article home="home-side-notes">
				<motion.section>
					<p>Capabiltites</p>
					<p>Experience</p>
				</motion.section>
				<motion.section>
					<p>Planning &</p>
					<p>Startegy</p>
				</motion.section>
				<motion.section>
					<p>Superb </p>
					<p>Creativity & Originality</p>
				</motion.section>
				<motion.section>
					<p>Updated On</p>
					<p>Art & Technologies</p>
				</motion.section>
			</motion.article>

			<article>
				<p>Say Hello</p>
				<p>Request Quote</p>
				<QuoteForm />
			</article>
			<article>
				<p>Get In Touch</p>
				<p>Email Us</p>
				<p>For proj enqs:</p>
				<p>biz@smithcorp.co.ke</p>
				<p>For proj enqs:</p>
				<p>biz@smithcorp.co.ke</p>
			</article>

			<article>
				<section>
					<p>Title</p>
					<p>Description</p>
				</section>
				<section>
					<p>Title</p>
					<p>Description</p>
				</section>
				<section>
					<p>Title</p>
					<p>Description</p>
				</section>
				<section>
					<p>Title</p>
					<p>Description</p>
				</section>
				<section>
					<p>Title</p>
					<p>Description</p>
				</section>
				<section>
					<p>Title</p>
					<p>Description</p>
				</section>
			</article>
			<article>
				<p>IG POST</p>
				<p>IG POST</p>
				<p>IG POST</p>
				<p>IG POST</p>
				<p>IG POST</p>
				<p>IG POST</p>
				<p>IG POST</p>
				<p>IG POST</p>
				<p>IG POST</p>
				<p>IG POST</p>
			</article>
			<footer>
				<p>2023 | Company Name</p>
				<p>All rihts reserves</p>
			</footer>
		</>
	);
}
