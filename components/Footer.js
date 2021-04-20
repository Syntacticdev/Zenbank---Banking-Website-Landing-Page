import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Image src="/logo.png" width={70} height={70} />

        <div className="navigation">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About Us</a>
          </Link>
          <Link href="/services">
            <a>Services</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>
      </div>

      <div className="divider"></div>

      <div className="terms">
        <span className="copyright">
          &copy; 2021 Zenbank. All Right Reserveds
        </span>

        <div className="nav-2">
          <Link href="/privacypolicy">
            <a>Privacy Policy</a>
          </Link>
          <Link href="/terms">
            <a>Terms Of Service</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
