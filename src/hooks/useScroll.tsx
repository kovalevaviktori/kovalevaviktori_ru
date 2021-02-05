import { useState, useEffect } from "react"

export const useScroll = () => {
  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY < 2;

      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    }

    document.addEventListener("scroll", onScroll)

    return () => {
      document.removeEventListener("scroll", onScroll)
    }
  }, [scroll, setScroll])

  return scroll;
}
