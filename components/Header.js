import Image from 'next/image'
import Link from "next/link";
const Header = () => {
  return (
    <header>
      <Link href="/">
       <a><Image src="/logo.png" width={100} height={100} alt=""/></a>
      </Link>

      <button className='downloadBtn'>Download</button>
    </header>
  );
};

export default Header;
