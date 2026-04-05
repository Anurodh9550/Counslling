"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

/** Fade + slide up on scroll (or instant entrance when `hero`) */
export function FadeUp({
  children,
  className,
  delay = 0,
  hero = false,
  ...rest
}: HTMLMotionProps<"div"> & { delay?: number; hero?: boolean }) {
  if (hero) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay, ease }}
        className={className}
        {...rest}
      >
        {children}
      </motion.div>
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.48, delay, ease }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Card lift on hover — pair with `shadow-lg` / `hover:shadow-2xl` classes */
export function LiftCard({
  children,
  className,
  ...rest
}: HTMLMotionProps<"div">) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Staggered list item */
export function FadeItem({
  children,
  className,
  index = 0,
  ...rest
}: HTMLMotionProps<"div"> & { index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-32px" }}
      transition={{
        duration: 0.42,
        delay: index * 0.06,
        ease,
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
