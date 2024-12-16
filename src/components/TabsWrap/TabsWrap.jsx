import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import s from "./Tabs.module.scss";
import ReviewsWrap from "../ReviewsWrap/ReviewsWrap";
import About from "../About/About";
import Footer from "../Footer/Footer";

const TabsWrap = () => {
  return (
    <section className={s.tabswrap}>
      <div className="container">
        <Tabs>
          <TabList>
            <Tab>Product Details</Tab>
            <Tab>Rating & Reviews</Tab>
            <Tab>FAQs</Tab>
          </TabList>

          <TabPanel>
            <div className={s.list}>
              <ul>
                <li>Свободная модель оверсайз</li>
                <li>Футболка унисекс</li>
                <li>XL размер 54-58 : На рост 180-195, вес до 130 кг</li>
                <li>M размер 48-50: На рост 155-165, вес до 75 кг</li>
                <li>L размер 50-54: На рост 165-180, вес до 100 кг</li>
              </ul>

              <ul>
                <li>Свободная модель оверсайз</li>
                <li>Футболка унисекс</li>
                <li>XL размер 54-58 : На рост 180-195, вес до 130 кг</li>
                <li>M размер 48-50: На рост 155-165, вес до 75 кг</li>
                <li>L размер 50-54: На рост 165-180, вес до 100 кг</li>
              </ul>
            </div>
          </TabPanel>

          <TabPanel>
            <ReviewsWrap />
          </TabPanel>

          <TabPanel>
            <h1 className={s.soon}>SOON...</h1>
          </TabPanel>
        </Tabs>
      </div>

      <About/>
      <Footer/>
    </section>
  );
};

export default TabsWrap;
