"use client"

import { useEffect } from "react"
import Lenis from 'lenis'
import { TLayoutProps } from "@/lib/types/root.types"


export function SmoothScrollProvider({ children }: TLayoutProps) {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <>
      {children}
    </>
  )
}
