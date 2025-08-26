"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HackerEffect() {
  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const line = document.querySelector("#line");
    const dataValue = line.dataset.value;
    let interval;

    // Hacker effect on hover
    line.addEventListener("mouseover", (event) => {
      interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map(() => letters[Math.floor(Math.random() * letters.length)])
          .join("");
      }, 60);
    });

    line.addEventListener("mouseleave", () => {
      clearInterval(interval);
      line.innerText = dataValue;
    });

    return () => clearInterval(interval);
  }, []);

  return null;
}
