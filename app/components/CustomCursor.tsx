"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isClickable, setIsClickable] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Position of the mouse cursor
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Physics settings for the outer ring (adds smooth lag/inertia)
  const springConfig = { damping: 30, stiffness: 300, mass: 0.6 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect touch-only devices
    const touchQuery = window.matchMedia("(pointer: coarse)");
    setIsTouchDevice(touchQuery.matches);
    
    const handleTouchChange = (e: MediaQueryListEvent) => {
      setIsTouchDevice(e.matches);
    };
    
    touchQuery.addEventListener("change", handleTouchChange);
    return () => {
      touchQuery.removeEventListener("change", handleTouchChange);
    };
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const checkClickable = (el: HTMLElement | null): boolean => {
      if (!el) return false;
      
      const tag = el.tagName;
      if (["A", "BUTTON", "INPUT", "SELECT", "TEXTAREA"].includes(tag)) {
        return true;
      }
      
      if (el.classList.contains("cursor-pointer") || el.getAttribute("role") === "button") {
        return true;
      }

      // Check computed CSS cursor property
      try {
        const style = window.getComputedStyle(el);
        if (style.cursor === "pointer") {
          return true;
        }
      } catch (e) {}

      // Check parents up to 4 levels
      if (el.parentElement && el.parentElement !== document.body) {
        return checkClickable(el.parentElement);
      }
      return false;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (checkClickable(target)) {
        setIsClickable(true);
      } else {
        setIsClickable(false);
      }
    };

    const handleMouseDown = () => {
      setIsPressed(true);
    };

    const handleMouseUp = () => {
      setIsPressed(false);
    };

    // Global event listeners
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isTouchDevice, isVisible, mouseX, mouseY]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Custom Outer Circle */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 -ml-5 -mt-5 rounded-full border border-white pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isPressed ? 0.8 : isClickable ? 1.5 : 1,
          backgroundColor: isClickable ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)",
          borderWidth: isClickable ? "0px" : "1px",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      />
      {/* Custom Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 bg-white rounded-full pointer-events-none z-[10000] mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
        }}
        animate={{
          scale: isPressed ? 0.5 : isClickable ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 450, damping: 25 }}
      />
    </>
  );
}
