"use client"

import { motion } from 'framer-motion'

import type { TLayoutProps } from '@/lib/types/root.types'


export default function GlobalTemplate({ children }: TLayoutProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: "0.5%"
      }}
      animate={{
        opacity: 1,
        y: "0"
      }}
      exit={{
        opacity: 0,
        y: "-10%",
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  )
}
