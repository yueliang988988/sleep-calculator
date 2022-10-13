import React from 'react'
import { motion, SVGMotionProps } from "framer-motion";

const Path = (props: JSX.IntrinsicAttributes & SVGMotionProps<SVGPathElement> & React.RefAttributes<SVGPathElement>) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

type ClostButtonProp = {
  close: () => void,
  color: "no set time" | "enter new time",
}

export const CloseButton: React.FC<ClostButtonProp> = ({ close, color }) => (
  <button 
    onClick={close} 
    className={`outline-none appearance-none cursor-pointer
              absolute top-3 right-3 border-none bg-slate-100`}
  >
    <svg width="18" height="18" viewBox="0 0 23 23">
      <Path d="M 3 16.5 L 17 2.5" />
      <Path d="M 3 2.5 L 17 16.346" />
    </svg>
  </button>
);