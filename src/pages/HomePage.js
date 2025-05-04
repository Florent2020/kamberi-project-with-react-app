import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import OurValues from "./homePageSections/OurValues";
import Diversity from "./homePageSections/Diversity";
import Industries from "./homePageSections/Industries";
import YourCareerWithUs from "./homePageSections/YourCareerWithUs";
import ContactPage from "./contact/ContactPage";

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contact") {
      const el = document.getElementById("contact");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100); // small delay to ensure DOM is ready
      }
    }
  }, [location]);

  return (
    <>
      <Video>
        <div className="video">
          <iframe
            width="560"
            height="349"
            src="https://player.vimeo.com/video/1046369972?muted=1&autoplay=1&loop=1&background=1&app_id=122963"
          ></iframe>
        </div>

        <div className="container">
          <div className="info-title">
            <h1>Today’s actions determine tomorrow.</h1>
            <p>Welcome to the Kamberi Group.</p>
          </div>
        </div>
      </Video>

      <OurValues />
      <Diversity />
      <Industries />
      <YourCareerWithUs />
      <ContactPage id="contact" />
    </>
  );
}

export default HomePage;

const Video = styled.div`
  position: relative;
  /* top: -5rem; */

  .video {
    position: relative;
    padding-bottom: 56.25%;
    /* 16:9 */
    height: 0;
  }

  .video iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .container {
    position: absolute;
    top: 7%;
    /* text-align: left; */
    left: 50%;
    width: 800px;
    padding: 24px 50px;
    transform: translate(-73%, 50%);
    background: #ffffff8a;
    margin: 0 auto;
  }

  .info-title {
    /* position: absolute;
    top: 7%;
    text-align: left;
    left: 42%;
    width: 800px;
    padding: 24px 50px;
    transform: translate(-50%, 50%);
    background: #fff; */
  }

  .info-title h1 {
    font-size: 50px;
    font-weight: 400;
    margin-bottom: 50px;
  }

  .info-title p {
    font-size: 26px;
  }
`;
