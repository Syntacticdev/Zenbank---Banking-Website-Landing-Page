import styles from "../../styles/Home/Section_six.module.css";

const Section = () => {
  return (
    <div className={styles.section_six}>
      <h1>Get In Touch With Us</h1>
      <p>
        Contact us with easy means, and feel the special power of our customer
        service.
      </p>
      <div className={styles.form_box}>
        <form>
          <input type="text" placeholder="Your Email Address" />
          <button type="submit">Proceed</button>
        </form>
      </div>
    </div>
  );
};

export default Section;
