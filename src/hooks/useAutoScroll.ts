import { useEffect, useRef, useState } from "react";

/**
 * Custom hook for smooth automatic scrolling with infinite loop
 * Provides seamless infinite carousel effect with pause on hover
 */
const useAutoScroll = (
  ref: React.RefObject<HTMLElement>,
  options: {
    speed?: number;
    pauseOnHover?: boolean;
    direction?: "left" | "right";
  } = {}
) => {
  const { speed = 1, pauseOnHover = true, direction = "right" } = options;
  const animationFrameRef = useRef<number | null>(null);
  const isPausedRef = useRef(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Wait a bit for React to render children
    const initTimeout = setTimeout(() => {
      const children = Array.from(el.children);
      
      if (children.length === 0) {
        console.warn("useAutoScroll: No children found to scroll");
        return;
      }

      // Clone children for seamless infinite scroll
      if (!el.dataset.cloned) {
        children.forEach((child) => {
          const clone = child.cloneNode(true) as HTMLElement;
          el.appendChild(clone);
        });
        el.dataset.cloned = "true";
        setIsReady(true);
      }
    }, 100);

    return () => clearTimeout(initTimeout);
  }, [ref]);

  useEffect(() => {
    const el = ref.current;
    if (!el || !isReady) return;

    const animate = () => {
      if (!el || isPausedRef.current) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      if (direction === "right") {
        el.scrollLeft += speed;
        // Reset when scrolled past halfway point (seamless loop)
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      } else {
        el.scrollLeft -= speed;
        // Reset when scrolled back to start
        if (el.scrollLeft <= 0) {
          el.scrollLeft = el.scrollWidth / 2;
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Pause on hover handlers
    const handleMouseEnter = () => {
      if (pauseOnHover) {
        isPausedRef.current = true;
      }
    };

    const handleMouseLeave = () => {
      if (pauseOnHover) {
        isPausedRef.current = false;
      }
    };

    if (pauseOnHover) {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    }

    // Start animation
    animationFrameRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (pauseOnHover && el) {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [ref, speed, pauseOnHover, direction, isReady]);
};

export default useAutoScroll;
