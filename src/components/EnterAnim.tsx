import { motion } from "motion/react";
import React from "react";

export default function EnterAnim({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
