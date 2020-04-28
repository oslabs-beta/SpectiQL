import React from "react";
import { Link } from "react-router-dom";
import Particles from "react-particles-js";
import ScrollAnimation from "react-animate-on-scroll";

import "../public/styling/index.css";
import "animate.css/animate.min.css";

function LandingPage({ handleNextClick }) {
  const openDocs = () => {
    window.open(
      "https://github.com/oslabs-beta/SpectiQL/blob/master/REAMDE.md"
    );
  };

  return (
    <div className="introscreen">
      <div className="introContainer">
        <div className="introHeader">
          <ScrollAnimation animateIn="fadeIn" delay="3000">
            <h1>SpectiQL</h1>
          </ScrollAnimation>
        </div>

        <div className="introInstruction">
          <Particles
            className="introAnimate"
            params={{
              particles: {
                number: {
                  value: 175,
                },
                size: {
                  value: 1,
                },
              },
              color: {
                value: "#7a3e3e",
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse",
                  },
                },
              },
            }}
          />
        </div>

        <div className="introNext">
          <button className="next-button" onClick={handleNextClick}>
            Next
          </button>
        </div>
        <div className="introDoc">
          <Link to="/documentation" exact>
            <button className="doc-button" onClick={openDocs}>
              Docs
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
