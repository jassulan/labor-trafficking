/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";

const NavBar = () => (
  <nav className="nav-bar">
    <li className="nav-bar__item">
      <Link href="/">
        <a>Home</a>
      </Link>
    </li>
    <li className="nav-bar__item">
      <Link href="/prepare">
        <a>Prepare</a>
      </Link>
    </li>
    <li className="nav-bar__item">
      <Link href="/assess">
        <a>Assess</a>
      </Link>
    </li>
    <li className="nav-bar__item">
      <Link href="/resources">
        <a>Resources</a>
      </Link>
    </li>
    <li className="nav-bar__item">
      <Link href="/about">
        <a>About</a>
      </Link>
    </li>
  </nav>
);

export default NavBar;
