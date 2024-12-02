import React from "react";
import s from "./About.module.scss";

const About = () => {
  return (
    <>
      <section className={s.about}>
        <div className="container">
          <div className={s.input}>
            <h1>
              STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
            </h1>

            <div className={s.box}>
              <input
                type="text"
                placeholder="Enter your email address"
                className={s.gmail}
              />

              <button>Subscribe to Newsletter</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
