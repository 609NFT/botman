import Link from "next/link";
import GameModal from "./capedCrusader";

const Navigation = () => (
  <nav>
    <ul className="navList">
      <li className="navItem">
        <Link href="/">
          <span className="navLink">Home</span>
        </Link>
      </li>
      <li className="navItem">
        <Link href="/about">
          <span className="navLink">About</span>
        </Link>
      </li>
      <li className="navItem">
        <Link href="/characters">
          <span className="navLink">Characters</span>
        </Link>
      </li>
      <li className="navItem">
        <Link href="/play">
          <span className="navLink">Play</span>
        </Link>
      </li>
      {/* Additional navigation items */}
    </ul>
  </nav>
);

export default Navigation;
