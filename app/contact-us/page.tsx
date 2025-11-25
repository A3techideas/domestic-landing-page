'use client';

import { useEffect } from "react";
import LandingPage from "../page";

export default function ContactUsPage() {
  useEffect(() => {
    const timeout = window.setTimeout(() => {
      document
        .getElementById("request-callback")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 200);

    return () => window.clearTimeout(timeout);
  }, []);

  return <LandingPage />;
}


