import styles from "../../styles/Home/Section_three.module.css";
import Image from "next/image";

const Section = () => {
  return (
    <div className={styles.section_three}>
      <div className={styles.benefit}>
        <div className={styles.illustration}>
          <Image src="/Credit-card.png" height={600} width={520} />
        </div>
        <div>
          <div className="wrap">
            <h4 className="section_label">REWARD</h4>
            <h2>Use Zen Points In Over 500 Shops And Mall</h2>
          </div>
          <p>
            Zen points made shopping and paying bills easy, you can make
            payments with your zen points both in and outside the country.
          </p>
          <button className={styles.explore_btn}>Explore</button>
        </div>
      </div>
    </div>
  );
};

export default Section;
