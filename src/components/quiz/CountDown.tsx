"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Countdown = () => {
  const [count, setCount] = useState<number | string>(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          return "GO";
        }
        return prev as number - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={count}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          className="text-8xl font-bold text-purple-500"
        >
          {count}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Countdown;
