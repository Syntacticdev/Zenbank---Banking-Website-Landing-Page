import styles from "../styles/Home.module.css";
import Head from "next/head";
import SectionOne from "../components/Home/SectionOne";
import SectionTwo from "../components/Home/SectionTwo";
import SectionThree from "../components/Home/SectionThree";
import SectionFour from "../components/Home/SectionFour";
import SectionSix from "../components/Home/SectionSix";
import SectionFive from "../components/Home/SectionFive";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ZenBank</title>
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
        <meta name="keywords" content="Zenbank Mobile Application" />
      </Head>
      <main>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
      </main>
    </div>
  );
}
