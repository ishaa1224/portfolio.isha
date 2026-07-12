"use client";

import { useMotionValueEvent, MotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface ScrollyCanvasProps {
  scrollYProgress: MotionValue<number>;
}

export default function ScrollyCanvas({ scrollYProgress }: ScrollyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const frameCount = 70; // 70 frames in the sequence

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    const promises = [];

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      const frameString = i.toString().padStart(2, "0");
      img.src = `/sequence/frame_${frameString}_delay-0.071s.png`;

      const p = new Promise((resolve) => {
        img.onload = () => {
          loadedImages[i] = img;
          resolve(true);
        };
        img.onerror = () => {
          console.error(`Failed to load ${img.src}`);
          resolve(false);
        };
      });
      promises.push(p);
    }

    Promise.all(promises).then(() => {
      const validImages = loadedImages.filter(Boolean);
      setImages(validImages);
      if (validImages.length > 0) {
        drawFrame(validImages[0]);
      }
    });
  }, []);

  const drawFrame = (img: HTMLImageElement) => {
    if (!canvasRef.current || !img) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Use devicePixelRatio for crispness
    const dpr = window.devicePixelRatio || 1;
    const cw = canvas.clientWidth;
    const ch = canvas.clientHeight;
    
    if (canvas.width !== cw * dpr || canvas.height !== ch * dpr) {
      canvas.width = cw * dpr;
      canvas.height = ch * dpr;
      ctx.scale(dpr, dpr);
    }

    // Object fit cover logic
    const imgRatio = img.width / img.height;
    const canvasRatio = cw / ch;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      drawWidth = cw;
      drawHeight = cw / imgRatio;
      offsetX = 0;
      offsetY = (ch - drawHeight) / 2;
    } else {
      drawHeight = ch;
      drawWidth = ch * imgRatio;
      offsetY = 0;
      offsetX = (cw - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (images.length === 0) return;
    const frameIndex = Math.min(
      images.length - 1,
      Math.floor(latest * images.length)
    );
    requestAnimationFrame(() => drawFrame(images[frameIndex]));
  });

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 object-cover"
    />
  );
}
