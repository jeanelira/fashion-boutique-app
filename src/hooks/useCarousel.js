import { useCallback, useMemo, useState } from "react";

const SWIPE_THRESHOLD = 42;

export function useCarousel(items) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

  const activeItem = items[activeIndex];

  const goTo = useCallback((index) => {
    setActiveIndex((index + items.length) % items.length);
  }, [items.length]);

  const go = useCallback((delta) => {
    setActiveIndex((current) => (current + delta + items.length) % items.length);
  }, [items.length]);

  const swipeHandlers = useMemo(() => ({
    onTouchStart(event) {
      setTouchStartX(event.touches[0].clientX);
    },
    onTouchEnd(event) {
      if (touchStartX === null) return;
      const distance = event.changedTouches[0].clientX - touchStartX;
      if (Math.abs(distance) > SWIPE_THRESHOLD) go(distance > 0 ? -1 : 1);
      setTouchStartX(null);
    }
  }), [go, touchStartX]);

  return {
    activeIndex,
    activeItem,
    go,
    goTo,
    swipeHandlers
  };
}
