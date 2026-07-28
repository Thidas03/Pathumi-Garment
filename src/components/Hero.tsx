import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import Collage from './Collage';
import './Hero.css';

const Hero: React.FC = () => {
  // Motion container variants for staggered children load
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] as const },
    },
  };

  return (
    <section className="hero" id="home">
      {/* Abstract Background Shapes */}
      <div className="hero__bg-shapes">
        <div className="shape shape--circle-gold" />
        <div className="shape shape--circle-navy" />
        <div className="shape shape--fabric-wave">
          {/* Subtle SVG fabric pattern */}
          <svg viewBox="0 0 100 100" preserveAspectRatio="none">
            <path
              d="M0,50 Q25,70 50,50 T100,50 L100,100 L0,100 Z"
              fill="rgba(30, 58, 95, 0.02)"
            />
          </svg>
        </div>
      </div>

      <div className="container hero__container">
        <motion.div
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Small Badge */}
          <motion.div className="hero__badge" variants={itemVariants}>
            <span className="badge__pulse" />
            <span className="badge__text">Established in 1996</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 className="hero__headline" variants={itemVariants}>
            Crafting Quality{' '}
            <span className="text--gradient-gold">Garments</span> <br />
            with Pride Since 1996
          </motion.h1>

          {/* Supporting Text */}
          <motion.p className="hero__description" variants={itemVariants}>
            For nearly three decades, Pathumi Garment has been delivering high-quality 
            garment manufacturing in Sri Lanka. Through skilled craftsmanship, modern production, 
            and deep-seated family values, we turn designs into legacy.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div className="hero__actions" variants={itemVariants}>
            <a href="#about" className="btn btn--gold btn--large">
              Explore Our Story
              <ArrowRight size={18} className="btn__icon" />
            </a>
            <a href="#contact" className="btn btn--outline-navy btn--large">
              Contact Us
              <Phone size={18} />
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div className="hero__trust" variants={itemVariants}>
            <div className="trust__stat">
              <span className="stat__number">50+</span>
              <span className="stat__label">Skilled Workers</span>
            </div>
            <div className="trust__divider" />
            <div className="trust__stat">
              <span className="stat__number">28+</span>
              <span className="stat__label">Years Experience</span>
            </div>
            <div className="trust__divider" />
            <div className="trust__stat">
              <span className="stat__number">100%</span>
              <span className="stat__label">Reliability</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Collage */}
        <div className="hero__collage-wrapper">
          <Collage />
        </div>
      </div>
    </section>
  );
};

export default Hero;
