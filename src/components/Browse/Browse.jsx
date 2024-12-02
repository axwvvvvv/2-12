import React from "react";
import s from "./Browse.module.scss";

const Browse = () => {
  return (
    <>
      <section className={s.browse}>
        <div className="container">
          <div className={s.wrap}>
            <h2 className={s.title}>BROWSE BY dress STYLE</h2>

            <div className={s.box}>
              <div className={s.card_1}>
                <h2>Casual</h2>
              </div>
              <div className={s.card_2}>
                <h2>Formal</h2>
              </div>
              <div className={s.card_3}>
                <h2>Party</h2>
              </div>
              <div className={s.card_4}>
                <h2>Gym</h2>
              </div>
            
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Browse;
