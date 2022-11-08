import { AccountSignUp } from '../components/organisms/account';
import Products from '../components/organisms/products';
import { useEffect, useState } from 'react';
import { trackScroll } from '../utils/customEvents';

export default function Home() {
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
      trackScroll('home');
      setTrackedScrollToBottom(true);
    }
  }, [scrollPosition]);

  return (
    <div
      className="relative bg-gray-800 overflow-hidden"
      data-elbcontext="test:home_engagement"
    >
      <div className="relative pt-6 pb-16 sm:pb-24">
        <main className="mt-16 sm:mt-24">
          <div className="mx-auto max-w-7xl" data-elb="home">
            <div
              className="lg:grid lg:grid-cols-12 lg:gap-8"
              data-elbaction="wait(10000):interested"
            >
              <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                <div>
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                    <span className="md:block">walker.js demo for</span>
                    <span className="text-elbwalker-400 md:block">next.js</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                    occaecat fugiat aliqua ad ad non deserunt sunt.
                  </p>
                </div>
              </div>
              <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                <AccountSignUp />
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="relative bg-gray-100">
        <Products />
      </div>
    </div>
  );
}
