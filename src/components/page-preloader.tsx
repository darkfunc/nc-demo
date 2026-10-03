"use client";

import { useEffect, useState } from "react";

export function PagePreloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timeout = window.setTimeout(() => setVisible(false), reduceMotion ? 100 : 2600);

    return () => window.clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="home-preloader"
      role="status"
      aria-label="Loading Nalanda College"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "grid",
        placeItems: "center",
        minHeight: "100dvh",
        backgroundColor: "var(--maroon)",
      }}
    >
      <div className="home-preloader__grid" aria-hidden="true" />
      <div className="home-preloader__topline">
        <span>NC / 001</span>
        <span>COLOMBO · SRI LANKA</span>
      </div>
      <div className="home-preloader__content">
        <span className="home-preloader__eyebrow">Character illumines wisdom</span>
        <div className="home-preloader__crest-frame">
          <span className="home-preloader__corner home-preloader__corner--tl" />
          <span className="home-preloader__corner home-preloader__corner--tr" />
          <span className="home-preloader__corner home-preloader__corner--bl" />
          <span className="home-preloader__corner home-preloader__corner--br" />
          <img src="/nc-crest.png" alt="Nalanda College crest" className="home-preloader__crest" />
        </div>
        <div className="home-preloader__wordmark">
          <span>Nalanda</span>
          <span>College</span>
        </div>
        <p className="home-preloader__motto">අපදාන සෝභිනී පඤ්ඤා</p>
      </div>
      <div className="home-preloader__footer">
        <span>Opening the college archive</span>
        <span className="home-preloader__progress"><i /></span>
        <span>1925 — present</span>
      </div>
    </div>
  );
}