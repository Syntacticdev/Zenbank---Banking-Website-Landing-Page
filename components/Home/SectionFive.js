import styles from "../../styles/Home/Section_five.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const Section = () => {
  const [windowSize, setWindowSize] = useState();
  useEffect(() => {
    const body = document.querySelector("body");
    const win_size = body.getBoundingClientRect().width <= 600;
    setWindowSize(win_size);
  }, []);
  // slidesPerView={`${windowSize ? 1 : 5}}`
  return (
    <div className={styles.section_five}>
      <h3>TESTIMONIAL</h3>
      <h1>What People Say About Us</h1>
      <div className={styles.customer_testimony}>
        <Swiper
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          style={{ overflowX: "hidden" }}
        >
          <SwiperSlide>
            <div>
              <Image
                src="/testimonials/daniel-xavier.jpg"
                className={styles.customer_image}
                width={100}
                height={100}
              />
              <div className="customer_words">
                <p>I can send money whenever i want.</p>
                <p>I earn points everytime i made a transaction</p>
                <h3 style={{ color: "deepskyblue" }}>Daniel Xavier</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                src="/testimonials/justin-shaifer.jpg"
                className={styles.customer_image}
                width={100}
                height={100}
              />
              <div className="customer_words">
                <p>I can send money whenever i want.</p>
                <p>I earn points everytime i made a transaction</p>
                <h3 style={{ color: "deepskyblue" }}>Justin Shaifer</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                src="/testimonials/katie.jpg"
                className={styles.customer_image}
                width={100}
                height={100}
              />
              <div className="customer_words">
                <p>I can send money whenever i want.</p>
                <p>I earn points everytime i made a transaction</p>
                <h3 style={{ color: "deepskyblue" }}>Katie</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                src="/testimonials/alex.jpg"
                className={styles.customer_image}
                width={100}
                height={100}
              />
              <div className="customer_words">
                <p>I can send money whenever i want.</p>
                <p>I earn points everytime i made a transaction</p>
                <h3 style={{ color: "deepskyblue" }}>Alex</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                src="/testimonials/italo-melo.jpg"
                className={styles.customer_image}
                width={100}
                height={100}
              />
              <div className="customer_words">
                <p>I can send money whenever i want.</p>
                <p>I earn points everytime i made a transaction</p>
                <h3 style={{ color: "deepskyblue" }}>Italo</h3>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Section;
