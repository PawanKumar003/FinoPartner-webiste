// src/components/StatCounter.js
import { useEffect } from "react";

const StatCounter = () => {
  useEffect(() => {
    const pathname = window.location.pathname;

    let sc_project = null;
    let sc_security = null;

    // Add your custom logic per URL
    if (pathname === "/rt/email") {
      sc_project = 13132769;
      sc_security = "f3f0a8d3";
    } else if (pathname === "/rt/fb") {
      sc_project = 13134411;
      sc_security = "798fba41";
    } else if (pathname === "/rt/g") {
      sc_project = 12345678;
      sc_security = "abcdefg1";
    } else {
      return; // No tracking
    }

    // Add the script
    const script = document.createElement("script");
    script.src = "https://www.statcounter.com/counter/counter.js";
    script.async = true;

    window.sc_project = sc_project;
    window.sc_invisible = 1;
    window.sc_security = sc_security;

    document.body.appendChild(script);

    return () => {
      // Clean up the script if needed on route change
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default StatCounter;
