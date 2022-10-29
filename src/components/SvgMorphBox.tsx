import React from 'react';
import { useState } from "react";
import { motion, useMotionValue, useTransform, animate, filterProps } from "framer-motion";
import { getIndex, useFlubber } from '../utils/use-flubber';
import { sun, moon, steps, clock } from '../utils/paths'

const paths = [steps, moon, clock, steps];
const colors = [
  "#00cc88",
  "#8855ff",
  "#ff0055",
  "#00cc88",

];

// https://codesandbox.io/s/framer-motion-morphsvg-example-dp7to?from-embed=&file=/src/App.tsx:98-139
// ! with lots of help from this framer motion demo
const SvgMorphBox: React.FC = () => {
  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(pathIndex);
  const fill = useTransform(progress, paths.map(getIndex), colors);
  const path = useFlubber(progress, paths);

  React.useEffect(() => {
    const animation = animate(progress, pathIndex, {
      duration: 0.8,
      ease: "easeInOut",
      onComplete: () => {
        if (pathIndex === paths.length - 1) {
          progress.set(0);
          setPathIndex(1);
        } else {
          setPathIndex(pathIndex + 1);
        }
      }
    });

    return () => animation.stop();
  }, [pathIndex, progress]);

  return (
    <svg width="260" height="260">
      <g transform="translate(36 36) scale(12 12)">
        <motion.path fill={fill} d={path} />
      </g>
    </svg>
  );
}

export default SvgMorphBox