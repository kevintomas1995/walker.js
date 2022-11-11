import { useEffect, useState } from 'react';

export const trackScroll = async (entity: string) => {
  const { elb } = await import("@elbwalker/walker.js");
  elb(`${entity} scrolledToBottom`, { domain: "localhost" }, "scrolling", {
    test: "scrolling behavior",
  });
};


export const useSrcollPosition = (page: string) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [trackedScrollToBottom, setTrackedScrollToBottom] = useState(false); 
  
  if (typeof window !== 'undefined') {
    useEffect(() => {
      window.addEventListener('scroll', () => {
        let scrollTop = window.scrollY;
        let docHeight = document.body.offsetHeight;
        let winHeight = window.innerHeight;
        let scrollPercent = scrollTop / (docHeight - winHeight);
        let scrollPercentRounded = Math.round(scrollPercent * 100);
        setScrollPosition(scrollPercentRounded);
      });
    }, [window.scrollY, document.body.offsetHeight, window.innerHeight]);
  }
  
  useEffect(() => {
    if (scrollPosition > 96 && !trackedScrollToBottom) {
      trackScroll(page);
      setTrackedScrollToBottom(true);
    }
  }, [scrollPosition]);
}

export const trackInput = async (
  e: React.ChangeEvent<HTMLInputElement>,
  entityAction: string
) => {
  const { elb } = await import("@elbwalker/walker.js");
  elb(entityAction, { domain: "localhost", inputField: e.target.id }, "focus", {
    test: "input field engagement",
  });
};

