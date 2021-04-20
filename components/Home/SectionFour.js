import styles from "../../styles/Home/Section_four.module.css";
import Image from "next/image";
const Section = () => {
  return (
    <div className={styles.section_four}>
      <div className={styles.ex_box}>
        <div className={styles.payment}>
          <div>
            <div className="wrap">
              <h4 className="section_label">PAYMENT</h4>
              <h2>Payment Made Easy - Get The Real Exchange Rate</h2>
            </div>
            <p>
              Spend in over 150 countries at Real (Interbank) exchange rate -
              with No hidden fee. All payments will be instantly transferred to
              the beneficiary/receiver account.
            </p>
            <button className={styles.exchange_btn}>Make Exchange</button>
          </div>
        </div>

        <div className={styles.exchange}>
          <div className={styles.exchange_card}>
            <div className={styles.head}>
              <Image
                src="/pay_online.svg"
                width={100}
                height={100}
                className="receiver"
              />
              <span className="action">Send Money to Johnny</span>
            </div>

            <div className={styles.content}>
              <div className={styles.from}>
                <div>
                  <span>You send </span>
                  <span>$150</span>
                </div>
                <h3 className={styles.currency}>USD</h3>
              </div>
              <div className="divider"></div>

              <div className={styles.to}>
                <div>
                  <span>Tera gets </span>
                  <span>$3.937.38</span>
                </div>
                <h3 className={styles.currency}>EGP</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
