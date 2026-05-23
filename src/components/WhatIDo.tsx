import { useEffect, useState } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const [isTouch, setIsTouch] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    setIsTouch(ScrollTrigger.isTouch !== 0);
  }, []);

  const handleCardClick = (index: number) => {
    if (!isTouch) return;
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className={`what-content ${!isTouch ? "what-noTouch" : ""} ${
              activeIndex === 0 ? "what-content-active" : ""
            } ${activeIndex !== null && activeIndex !== 0 ? "what-sibling" : ""}`}
            onClick={() => handleCardClick(0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>WEB & DESKTOP</h3>
              <h4>Building Functional Applications</h4>
              <p>
                Developing responsive web applications and desktop software
                with clean interfaces and reliable functionality. From
                management systems to data-driven apps, I build complete
                solutions end to end.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">HTML5</div>
                <div className="what-tags">CSS3</div>
                <div className="what-tags">Python</div>
                <div className="what-tags">C#</div>
                <div className="what-tags">C++</div>
                <div className="what-tags">SQL</div>
                <div className="what-tags">Database Design</div>
                <div className="what-tags">OOP</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className={`what-content ${!isTouch ? "what-noTouch" : ""} ${
              activeIndex === 1 ? "what-content-active" : ""
            } ${activeIndex !== null && activeIndex !== 1 ? "what-sibling" : ""}`}
            onClick={() => handleCardClick(1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>MOBILE</h3>
              <h4>Cross-Platform App Development</h4>
              <p>
                Building cross-platform mobile applications using Flutter.
                From real-time streaming to social features, I develop
                complete mobile experiences focused on performance and
                usability.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Flutter</div>
                <div className="what-tags">Dart</div>
                <div className="what-tags">P2P Streaming</div>
                <div className="what-tags">Firebase</div>
                <div className="what-tags">REST APIs</div>
                <div className="what-tags">UI/UX Design</div>
                <div className="what-tags">Authentication</div>
                <div className="what-tags">Real-time Chat</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;