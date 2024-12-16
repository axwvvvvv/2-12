import React from "react";
import s from "./ReviewsWrap.module.scss";
import Card from "../Card/Card";
import Products from "/public/products.json";
import { Link } from "react-router-dom";

const ReviewsWrap = () => {
  return (
    <>
      <section className={s.reviewswrap}>
        <div className="container">
          <div className={s.filter}>
            <div className={s.text}>
              <b>All Reviews </b>
              <p>(451)</p>
            </div>

            <div className={s.buttons}>
              <button></button>
              <button>Latest </button>
              <button>Write a Review</button>
            </div>
          </div>

          <div className={s.wrap}>
            <div className={s.card}>
              <div>
                <p>⭐⭐⭐⭐</p>
                <img src="/dot.svg" alt="" />
              </div>

              <h3>Samantha D. ✅</h3>
              <p>
                "I absolutely love this t-shirt! The design is unique and the
                fabric feels so comfortable. As a fellow designer, I appreciate
                the attention to detail. It's become my favorite go-to shirt."
              </p>
              <b>Posted on August 14, 2023</b>
            </div>

            <div className={s.card}>
              <div>
                <p>⭐⭐⭐⭐</p>
                <img src="/dot.svg" alt="" />
              </div>

              <h3>Ethan R. ✅</h3>
              <p>
                "I absolutely love this t-shirt! The design is unique and the
                fabric feels so comfortable. As a fellow designer, I appreciate
                the attention to detail. It's become my favorite go-to shirt."
              </p>
              <b>Posted on August 15, 2023</b>
            </div>

            <div className={s.card}>
              <div>
                <p>⭐⭐⭐⭐</p>
                <img src="/dot.svg" alt="" />
              </div>

              <h3>Liam K. ✅</h3>
              <p>
                "I absolutely love this t-shirt! The design is unique and the
                fabric feels so comfortable. As a fellow designer, I appreciate
                the attention to detail. It's become my favorite go-to shirt."
              </p>
              <b>Posted on April 1, 2023</b>
            </div>

            <div className={s.card}>
              <div>
                <p>⭐⭐⭐⭐</p>
                <img src="/dot.svg" alt="" />
              </div>

              <h3>Alex M. ✅</h3>
              <p>
                "I absolutely love this t-shirt! The design is unique and the
                fabric feels so comfortable. As a fellow designer, I appreciate
                the attention to detail. It's become my favorite go-to shirt."
              </p>
              <b>Posted on June 23, 2023</b>
            </div>

            <div className={s.card}>
              <div>
                <p>⭐⭐⭐⭐</p>
                <img src="/dot.svg" alt="" />
              </div>

              <h3>Olivia P. ✅</h3>
              <p>
                "I absolutely love this t-shirt! The design is unique and the
                fabric feels so comfortable. As a fellow designer, I appreciate
                the attention to detail. It's become my favorite go-to shirt."
              </p>
              <b>Posted on December 26, 2023</b>
            </div>

            <div className={s.card}>
              <div>
                <p>⭐⭐⭐⭐</p>
                <img src="/dot.svg" alt="" />
              </div>

              <h3>Ava H. ✅</h3>
              <p>
                "I absolutely love this t-shirt! The design is unique and the
                fabric feels so comfortable. As a fellow designer, I appreciate
                the attention to detail. It's become my favorite go-to shirt."
              </p>
              <b>Posted on August 23, 2023</b>
            </div>
          </div>
          <div className={s.mainBtn}>
            <button>Load More Reviews</button>
          </div>

          <section className={s.also}>
            <h1>You might also like</h1>

            <div className={s.cards}>
              <section className={s.category}>
                <div className={s.wrapper__products}>
                  {Products.slice(4, 8).map((card) => (
                    <Link
                      key={card.id}
                      to={`/product/${card.id}`}
                      className={s.link}
                    >
                      <Card
                        image={card.image}
                        name={card.name}
                        price={card.price}
                      />
                    </Link>
                  ))}
                </div>
              </section>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default ReviewsWrap;
