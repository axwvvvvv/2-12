import React from "react";
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer className={s.footer}>
        
        
        
        <div className="container">
          <div className={s.wrap}>
            <div className={s.information}>
              <div className={s.card_1}>
                <h3>SHOP.CO</h3>
                <p>
                  We have clothes that suits your style and which you’re proud
                  to wear. From women to men.
                </p>
                <img src="/Social.png" alt="" />
              </div>

              <div className={s.card_2}>
                <h4>Company</h4>
                <p>About</p>
                <p>Features</p>
                <p>Works</p>
                <p>Career</p>
              </div>

              <div className={s.card_3}>
                <h4>Help</h4>
                <p>CustomerSupport</p>
                <p>Delivery Details</p>
                <p>Terms&Conditions</p>
                <p>Privacy Policy</p>
              </div>

              <div className={s.card_4}>
                <h4>FAQ</h4>
                <p>Account</p>
                <p>ManageDeliveries</p>
                <p>Orders</p>
                <p>Payments</p>
              </div>

              <div className={s.card_5}>
                <h4>Resources</h4>
                <p>Free eBooks</p>
                <p>DevelopmentTutorial</p>
                <p>How to-Blog</p>
                <p>YoutubePlaylist</p>
              </div>
            </div>

            <div className={s.payment}>
              <p>Shop.co © 2000-2023, All Rights Reserved</p>

              <img src="/cards.png" alt="" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
