import { useWindowScroll } from "react-use";
import * as Sentry from "@sentry/react";
import { Navbar } from "@components/Navbar/Navbar";
import { About } from "@components/About/About";
import { Team } from "@components/Team/Team";
import { Footer } from "@components/Footer/Footer";
import { Hero } from "@components/Hero/Hero";
import { Clouds } from "@components/Clouds/Clouds";
import { Connect } from "@components/Connect/Connect";
import { Web3ModalProvider } from "@lib/web3Modal/Web3Modal";
import { Swing } from "@components/Swing/Swing";
import { Faq } from "@components/Faq/Faq";

const App = () => {
  const { y } = useWindowScroll();

  return (
    <div
      id="home"
      style={{ backgroundPosition: `calc(100vw / 2.5) ${-y * 0.25 + 160}px` }}
    >
      <Web3ModalProvider>
        <Navbar />
        <Hero />
        <Clouds position="top" />
        <Sentry.ErrorBoundary fallback={<p>An error has occurred</p>}>
          <Connect />
        </Sentry.ErrorBoundary>
        <About />
        <Clouds />
        <Swing />
        <Clouds position="top" />
        <Team />
        <Clouds />
        <Faq />
        <Footer />
      </Web3ModalProvider>
    </div>
  );
};

export default App;
