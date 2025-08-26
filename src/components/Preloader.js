"use client";
import { useEffect, useRef } from "react";
import "../styles/preloader.css";

export default function Preloader({ onFinish }) {
  const counterRef = useRef(null);

  useEffect(() => {
    const loader = document.getElementById("pre-loader");
    const mainContent = document.getElementById("main");
    const counterElem = counterRef.current;

    let currentValue = 0;

    function updateCounter() {
      if (currentValue >= 100) return;
      currentValue += Math.floor(Math.random() * 5) + 1;
      if (currentValue > 100) currentValue = 100;
      if (counterElem) counterElem.textContent = currentValue;

      const delay = Math.floor(Math.random() * 100) + 50;
      setTimeout(updateCounter, delay);
    }

    updateCounter();

    // Hide preloader after 4s
    const timer = setTimeout(() => {
      loader.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      loader.style.opacity = "0";
      loader.style.transform = "translateY(-1000px)";
      setTimeout(() => {
        loader.style.display = "none";
        if (mainContent) mainContent.style.opacity = 1;
        if (onFinish) onFinish();
      }, 700);
    }, 4000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div id="pre-loader">
      <h1 className="counter" ref={counterRef}>0</h1>
      <div className="overlay">
        {Array.from({ length: 10 }).map((_, i) => (
          <div className="bar" key={i}></div>
        ))}
      </div>
    </div>
  );
}
