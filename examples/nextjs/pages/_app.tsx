import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Navigation from "../components/organisms/navigation";
import Footer from "../components/organisms/footer";
import Newsletter from "../components/organisms/newsletter";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const initTracking = async () => {
      const setupAnalytics = (await import("../data/index")).default;
      setupAnalytics();
    };
    initTracking();
  }, []);
  

  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <Newsletter />
      <Footer />
    </>
  );
}
