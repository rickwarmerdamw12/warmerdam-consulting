'use client';

import { motion } from 'framer-motion';

export default function HeroVisual() {
  const colors = {
    orange: '#FF6B00',
    lightOrange: '#FF9A3C',
    dark: '#262626',
  };

  const nodes = [
    { x: 150, y: 120, r: 8 },
    { x: 280, y: 80, r: 6 },
    { x: 350, y: 180, r: 10 },
    { x: 220, y: 220, r: 7 },
    { x: 100, y: 250, r: 5 },
    { x: 400, y: 100, r: 6 },
    { x: 320, y: 280, r: 8 },
    { x: 180, y: 320, r: 5 },
  ];

  const connections = [
    [0, 1],
    [0, 3],
    [1, 2],
    [1, 5],
    [2, 3],
    [2, 5],
    [2, 6],
    [3, 4],
    [3, 6],
    [6, 7],
    [4, 7],
  ];

  return (
    <div className="relative w-full h-full min-h-[400px]">
      <svg
        viewBox="0 0 500 400"
        className="w-full h-full"
        style={{ maxWidth: '500px' }}
      >
        <motion.circle
          cx="250"
          cy="200"
          r="150"
          fill="none"
          stroke={colors.orange}
          strokeWidth="0.5"
          opacity="0.2"
          animate={{
            r: [150, 160, 150],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.circle
          cx="250"
          cy="200"
          r="100"
          fill="none"
          stroke={colors.lightOrange}
          strokeWidth="0.5"
          opacity="0.3"
          animate={{
            r: [100, 110, 100],
            opacity: [0.3, 0.15, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        />

        {connections.map(([from, to], index) => (
          <motion.line
            key={`line-${index}`}
            x1={nodes[from].x}
            y1={nodes[from].y}
            x2={nodes[to].x}
            y2={nodes[to].y}
            stroke={index % 2 === 0 ? colors.orange : colors.lightOrange}
            strokeWidth="1"
            opacity="0.3"
            initial={{ pathLength: 0 }}
            animate={{
              pathLength: 1,
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              pathLength: { duration: 1.5, delay: index * 0.1 },
              opacity: {
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.2,
              },
            }}
          />
        ))}

        {connections.slice(0, 5).map(([from, to], index) => (
          <motion.circle
            key={`flow-${index}`}
            r="2"
            fill={index % 2 === 0 ? colors.orange : colors.lightOrange}
            initial={{ opacity: 0 }}
            animate={{
              cx: [nodes[from].x, nodes[to].x],
              cy: [nodes[from].y, nodes[to].y],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.8,
              ease: 'linear',
            }}
          />
        ))}

        {nodes.map((node, index) => (
          <g key={`node-${index}`}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.r * 2}
              fill={index % 2 === 0 ? colors.orange : colors.lightOrange}
              opacity="0.1"
              animate={{
                r: [node.r * 2, node.r * 2.5, node.r * 2],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 2 + index * 0.3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill={index % 2 === 0 ? colors.orange : colors.lightOrange}
              animate={{
                y: [0, -5, 0, 5, 0],
              }}
              transition={{
                duration: 3 + index * 0.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </g>
        ))}

        <motion.g
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ transformOrigin: '250px 200px' }}
        >
          {[0, 60, 120, 180, 240, 300].map((angle, index) => (
            <motion.circle
              key={`orbit-${index}`}
              cx={250 + Math.cos((angle * Math.PI) / 180) * 40}
              cy={200 + Math.sin((angle * Math.PI) / 180) * 40}
              r="3"
              fill={index % 2 === 0 ? colors.orange : colors.lightOrange}
              opacity="0.6"
            />
          ))}
        </motion.g>

        <motion.circle
          cx="250"
          cy="200"
          r="12"
          fill={colors.dark}
          stroke={colors.orange}
          strokeWidth="2"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.circle
          cx="250"
          cy="200"
          r="6"
          fill={colors.orange}
          animate={{
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.rect
          x="50"
          y="150"
          width="20"
          height="20"
          fill="none"
          stroke={colors.lightOrange}
          strokeWidth="1"
          opacity="0.4"
          animate={{
            rotate: [0, 90, 180, 270, 360],
            y: [150, 140, 150],
          }}
          transition={{
            rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
            y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
          }}
          style={{ transformOrigin: '60px 160px' }}
        />
        <motion.polygon
          points="450,250 460,270 440,270"
          fill="none"
          stroke={colors.orange}
          strokeWidth="1"
          opacity="0.4"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            y: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 6, repeat: Infinity, ease: 'linear' },
          }}
          style={{ transformOrigin: '450px 260px' }}
        />
      </svg>
    </div>
  );
}
