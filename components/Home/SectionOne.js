import styles from "../../styles/Home/Section_one.module.css";
import Image from "next/image";
import { useEffect } from "react";
const Section = () => {
  return (
    <div className={styles.section_one}>
      <div>
        <h3>Fast & Secure</h3>
        <h3>Money Transfer</h3>

        <p>
          With this app in your hand, you'll have more money in your pocket.
          Because every time you spend, or receive money internationally, you'll
          pay the lowest possible price.
        </p>
        <div className={styles.downloads_btn}>
          <button className="download_appleStore">
            <Image src="/badge/appstore.png" width={150} height={40} />
          </button>
          <button className="download_googleplay">
            <Image src="/badge/googleplay.png" width={150} height={40} />
          </button>
        </div>
      </div>
      <div>
        <Image src="/pay_online.svg" width={500} height={500} />
      </div>
    </div>
  );
};

export default Section;
