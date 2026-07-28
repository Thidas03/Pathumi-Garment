import React from 'react';
import { motion } from 'framer-motion';
import './Collage.css';

const Collage: React.FC = () => {
  // Subtle floating animations for the 3 collage elements
  const floatingAnim1 = {
    animate: {
      y: [0, -12, 0],
      rotate: [0, 0.5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      },
    },
  };

  const floatingAnim2 = {
    animate: {
      y: [0, 10, 0],
      rotate: [0, -1, 0],
      transition: {
        duration: 7,
        repeat: Infinity,
        ease: 'easeInOut' as const,
        delay: 0.5,
      },
    },
  };

  const floatingAnim3 = {
    animate: {
      y: [0, -8, 0],
      rotate: [0, 1.5, 0],
      transition: {
        duration: 5.5,
        repeat: Infinity,
        ease: 'easeInOut' as const,
        delay: 1,
      },
    },
  };

  // Subtle floating shapes animation
  const shapeAnim = {
    animate: {
      x: [0, 6, -6, 0],
      y: [0, -6, 6, 0],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      },
    },
  };

  const shapeAnimReverse = {
    animate: {
      x: [0, -8, 8, 0],
      y: [0, 8, -8, 0],
      transition: {
        duration: 12,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      },
    },
  };

  return (
    <div className="collage">
      {/* Fabric Thread SVG Shapes */}
      <motion.div
        className="collage__shape collage__shape--thread"
        variants={shapeAnim}
        animate="animate"
      >
        <svg width="140" height="140" viewBox="0 0 100 100" fill="none">
          <path
            d="M5,35 Q30,10 50,55 T95,45"
            stroke="rgba(200, 155, 60, 0.25)"
            strokeWidth="2"
            strokeDasharray="4,4"
          />
          <path
            d="M5,45 Q30,20 50,65 T95,55"
            stroke="rgba(30, 58, 95, 0.12)"
            strokeWidth="1.5"
          />
        </svg>
      </motion.div>

      <motion.div
        className="collage__shape collage__shape--dots"
        variants={shapeAnimReverse}
        animate="animate"
      >
        <svg width="70" height="70" viewBox="0 0 70 70">
          <pattern
            id="dotPattern"
            x="0"
            y="0"
            width="14"
            height="14"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="4" cy="4" r="2.5" fill="rgba(200, 155, 60, 0.25)" />
          </pattern>
          <rect width="70" height="70" fill="url(#dotPattern)" />
        </svg>
      </motion.div>

      {/* Collage Grid */}
      <div className="collage__grid">
        {/* Main Work Image (Center/Large) */}
        <motion.div
          className="collage__item collage__item--main"
          variants={floatingAnim1}
          animate="animate"
          whileHover={{ scale: 1.02, zIndex: 5, transition: { duration: 0.3 } }}
        >
          <div className="collage__image-container">
            <img
              src="/assets/worker_sewing.jpg"
              alt="Skilled garment artisan crafting clothing"
              className="collage__image"
            />
            {/* Glassmorphic Badge */}
            <div className="collage__glass-badge">
              <span className="glass-badge__label">Skill & Heritage</span>
              <span className="glass-badge__value">50+ Expert Tailors</span>
            </div>
          </div>
        </motion.div>

        {/* Factory Production Image (Bottom Left) */}
        <motion.div
          className="collage__item collage__item--left"
          variants={floatingAnim2}
          animate="animate"
          whileHover={{ scale: 1.04, zIndex: 5, transition: { duration: 0.3 } }}
        >
          <div className="collage__image-container">
            <img
              src="/assets/factory_production.jpg"
              alt="Modern garment manufacturing line"
              className="collage__image"
            />
          </div>
        </motion.div>

        {/* Finished Garments Image (Top Right) */}
        <motion.div
          className="collage__item collage__item--right"
          variants={floatingAnim3}
          animate="animate"
          whileHover={{ scale: 1.04, zIndex: 5, transition: { duration: 0.3 } }}
        >
          <div className="collage__image-container">
            <img
              src="/assets/finished_garments.jpg"
              alt="Premium raw textiles and folded garments"
              className="collage__image"
            />
            {/* Stat Stamp Badge */}
            <div className="collage__stat-stamp">
              <span className="stat-stamp__heading">Est.</span>
              <span className="stat-stamp__year">1996</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Collage;
