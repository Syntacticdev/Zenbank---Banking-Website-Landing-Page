import styles from "../../styles/Home/Section_two.module.css";
const Section = () => {
  return (
    <div className={styles.section_two}>
      <h2>The key stuff you'd want to know about our app</h2>
      <div className={styles.app_features}>
        <div>
          <h1>0%</h1>
          <h5>No Charges</h5>
          <p>
            Save when you made transactions using our app. There's no charges,
            smooth transaction without interruption.
          </p>
        </div>

        <div>
          <h1>5%</h1>
          <h5>Zen Points</h5>
          <p>
            Earn a lot of zen points every time you made a transaction. You can
            redeem this point to pay for bill's e.g Airtime.
          </p>
        </div>

        <div>
          <h1>300K</h1>
          <h5>Trusted By</h5>
          <p>
            So far, we have worked with more than (300k) three hundred thousand
            customers and they all enjoy the service we provide through our app.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section;
