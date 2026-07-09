import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import NotFound from "./components/NotFound";
import Services from "./components/Services";

function App() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const startTime = Date.now();
    const minDisplayTime = 2500; // 2.5 seconds minimum

    const hideLoader = () => {
      const loadTime = Date.now() - startTime;
      // If loaded too fast, wait remaining time
      if (loadTime < minDisplayTime) {
        setTimeout(() => setLoading(false), minDisplayTime - loadTime);
      } else {
        setLoading(false);
      }
    };

    // If the page already finished loading before this effect ran,
    // the "load" event will never fire, so handle it directly.
    if (document.readyState === "complete") {
      hideLoader();
    } else {
      window.addEventListener("load", hideLoader, { once: true });
    }

    // Fallback: hide loader after 3 seconds max
    const timeout = setTimeout(() => setLoading(false), 3000);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("load", hideLoader);
    };
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="grow ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
