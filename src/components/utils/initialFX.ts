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
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
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

  gsap.set(".landing-h2-info-1, .landing-h2-2", { opacity: 0, y: 80 });

  LoopText(".landing-h2-info", ".landing-h2-info-1");
  LoopText(".landing-h2-1", ".landing-h2-2");
}

function LoopText(Text1: string, Text2: string) {
  var tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4;
  const delay2 = delay * 2 + 1;

  tl.to(
    Text1,
    {
      opacity: 0,
      y: -80,
      duration: 1.2,
      ease: "power3.inOut",
      delay: delay,
    },
    0
  )
    .fromTo(
      Text2,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.inOut",
        delay: delay2,
      },
      1
    )
    .to(
      Text2,
      {
        opacity: 0,
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        delay: delay,
      },
      2
    )
    .fromTo(
      Text1,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.inOut",
        delay: delay2,
      },
      3
    );
}