import React from "react";
import { Link } from "react-router-dom";
import CoreBusiness from "../components/CoreBusiness";
import QuoteForm from "../components/forms/QuoteForm";
import './HomePage.css'
import { motion } from "framer-motion";
export default function HomePage() {
    const textFadeIn = {
        initial: {

        },
        animate: {

        }
    }

    return (
    <>
      <motion.article 
            // initial={{opacity:0 ,y: 50}}
            //     animate={{opacity:1, y:0}}
            //     transition={{duration:1}}
                className="hero">
        <p>WE WILL ROCK YOU</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          voluptatem autem quasi?
        </p>
        <p>Lorem ipsum dolor!</p>
        <button>
          <Link to="/about">Read More</Link>
        </button>
        <button>Play Button</button>
      </motion.article>


      <article className="">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          repellendus obcaecati temporibus architecto aperiam.
        </p>
        <p>Lorem ipsum dolor</p>
        <p>Animation Image</p>
        <p>img 1</p>
        <p>img 1</p>
        <p>img 1</p>
        <p>img 1</p>
        <p>img 1</p>
        <p>img 1</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
          voluptas eaque nostrum magni deserunt eveniet ad laudantium nulla et
          consectetur atque error quod aliquam aspernatur, vero nobis aliquid
          neque ullam? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Officiis, soluta ab sequi voluptatem nobis recusandae sunt ducimus.
          Nulla magni molestias commodi sunt, ratione sint harum impedit
          voluptate recusandae aperiam laboriosam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ad
          vitae, sunt impedit itaque perspiciatis at dolore quasi eos ex
          voluptate rem
        </p>
      </article>
      <article>
        <p>Lorem Ipsum</p>
        <p>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.Lorem ipsum dolor sit amet, qui
          minim labore adipisicing minim sint cillum sint consectetur cupidatat.
        </p>
        <button>
          <Link to="/our-work">Check out more projects</Link>
        </button>
        <div>
          <p>Project 1</p>
          <p>Project 1</p>
          <p>Project 1</p>
        </div>
      </article>
      <article>
        <p>Our Core Business</p>
        <CoreBusiness title="1" body="1" />
        <CoreBusiness title="2" body="2" />
        <CoreBusiness title="3" body="3" />

        <CoreBusiness title="4" body="4" />
      </article>
      <article>
        <p>We have bling</p>
        <p>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>
        <p>Our Clients</p>
        <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim</p>
        <p>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.Lorem ipsum dolor sit amet, qui
          minim labore adipisicing minim sint cillum sint consectetur cupidatat.
        </p>
      </article>
      <article>
        <p>Comments 1</p>
        <p>Comments 2</p>
        <p>COmments 3</p>
        <p>Back Button</p>
        <p>Next Button</p>
      </article>
      <article>
        <div>
          <p>Capabiltites</p>
          <p>Experience</p>
        </div>
        <div>
          <p>Planning &</p>
          <p>Startegy</p>
        </div>
        <div>
          <p>Superb </p>
          <p>Creativity & Originality</p>
        </div>
        <div>
          <p>Updated On</p>
          <p>Art & Technologies</p>
        </div>
      </article>
      <article>
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
