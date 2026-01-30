"use client";

import { motion } from "framer-motion";

export default function AnimatedName() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="
        relative
        text-3xl font-bold
        bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600
        bg-[length:200%_200%]
        bg-clip-text text-transparent
        animate-gradient
        glow-text
        cursor-default
      "
    >
      Nath_Dev
    </motion.h1>
  );
}
