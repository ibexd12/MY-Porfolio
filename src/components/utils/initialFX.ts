import gsap from "gsap";

export function initialFX() {
  document.body.style.overflowY = "auto";
  const mainElement = document.getElementsByTagName("main")[0];
  if (mainElement) {
    mainElement.classList.add("main-active");
  }
  
  gsap.to("body", {
    backgroundColor: "#0a0e17",
    duration: 0.5,
    delay: 1,
  });

  const landingTextElements = document.querySelectorAll(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"].join(",")
  );

  gsap.fromTo(
    landingTextElements,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power3.inOut",
      y: 0,
      stagger: 0.1,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

  tl.fromTo(
    ".landing-h2-2, .landing-h2-info-1",
    { opacity: 0, y: 80 },
    { opacity: 1, y: 0, duration: 1.2, ease: "power3.inOut", stagger: 0.1, delay: 3 },
    0
  )
  .fromTo(
    ".landing-h2-1, .landing-h2-info",
    { y: 0 },
    { y: -80, duration: 1.2, ease: "power3.inOut", stagger: 0.1, delay: 3 },
    1
  )
  .fromTo(
    ".landing-h2-1, .landing-h2-info",
    { y: -80, opacity: 0 },
    { y: 0, opacity: 1, duration: 1.2, ease: "power3.inOut", stagger: 0.1, delay: 3 },
    2
  )
  .fromTo(
    ".landing-h2-2, .landing-h2-info-1",
    { y: 0 },
    { y: -80, opacity: 0, duration: 1.2, ease: "power3.inOut", stagger: 0.1, delay: 3 },
    3
  );
}