import { useEffect, useRef } from "react";

/**
 * Custom hook for drag-to-scroll functionality
 * Enables smooth mouse dragging on horizontal scroll containers
 */
const useScrollDrag = (ref: React.RefObject<HTMLElement>) => {
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      el.style.cursor = "grabbing";
      el.style.userSelect = "none";
      startX.current = e.pageX - el.offsetLeft;
      scrollLeft.current = el.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDragging.current = false;
      el.style.cursor = "grab";
      el.style.userSelect = "auto";
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      el.style.cursor = "grab";
      el.style.userSelect = "auto";
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX.current) * 2; // Scroll speed multiplier
      el.scrollLeft = scrollLeft.current - walk;
    };

    // Set initial cursor
    el.style.cursor = "grab";

    // Add event listeners
    el.addEventListener("mousedown", handleMouseDown);
    el.addEventListener("mouseleave", handleMouseLeave);
    el.addEventListener("mouseup", handleMouseUp);
    el.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      el.removeEventListener("mousedown", handleMouseDown);
      el.removeEventListener("mouseleave", handleMouseLeave);
      el.removeEventListener("mouseup", handleMouseUp);
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [ref]);
};

export default useScrollDrag;

