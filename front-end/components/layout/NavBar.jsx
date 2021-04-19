/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import { useRouter } from "next/router";

function NavBar(props) {
  const router = useRouter();
  return (
    <nav className="nav-bar">
      <div className="logo__container">
        <Link href="/">
          <a href="#">
            <img src="/images/logo.svg" className="logo" />
          </a>
        </Link>
      </div>
      <ul className="links__container">
        <li className="nav-bar__item">
          <Link href="/prepare">
            <a className={router.asPath.startsWith("/prepare") ? "active" : ""}>
              Prepare
            </a>
          </Link>
          <hr />
        </li>
        <li className="nav-bar__item">
          <Link href="/assess">
            <a className={router.asPath.startsWith("/assess") ? "active" : ""}>
              Assess
            </a>
          </Link>
          <hr />
        </li>
        <li className="nav-bar__item">
          <Link href="/resources">
            <a
              className={router.asPath.startsWith("/resources") ? "active" : ""}
            >
              Resources
            </a>
          </Link>
          <hr />
        </li>
        <li className="nav-bar__item">
          <Link href="/statute">
            <a className={router.asPath.startsWith("/statute") ? "active" : ""}>
              Massachusetts Law
            </a>
          </Link>
          <hr />
        </li>
        <li className="nav-bar__item">
          <Link href="/about">
            <a className={router.asPath.startsWith("/about") ? "active" : ""}>
              About
            </a>
          </Link>
          <hr />
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
