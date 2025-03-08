"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MainLogo from "@/public/snap-and-code_main-logo.svg";
import styles from "./navbar.module.css";

export function NavBarItem({ href, linkText }) {
  const currentRoute = usePathname();
  return (
    <li className="nav-item">
      <Link
        href={href}
        className={`${
          currentRoute === href
            ? `${styles.active} ${styles.nav_link} nav-link`
            : `${styles.nav_link} nav-link`
        }`}
      >
        {linkText}
      </Link>
    </li>
  );
}

export function NavBarDropDownMenuItem({ href, linkText }) {
  const currentRoute = usePathname();
  return (
    <li>
      <Link
        className={
          currentRoute === href ? "dropdown-item active" : "dropdown-item"
        }
        href={href}
      >
        {linkText}
      </Link>
    </li>
  );
}

export function NavBarDropDown({ topLevelHref, topLevelLinkText, children }) {
  const currentRoute = usePathname();
  return (
    <li className="nav-item dropdown">
      <Link
        className={`${
          currentRoute.startsWith(topLevelHref)
            ? "active nav-link dropdown-toggle"
            : "nav-link dropdown-toggle"
        }`}
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {topLevelLinkText}
      </Link>
      <ul className="dropdown-menu">{children}</ul>
    </li>
  );
}

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand">
          <Image src={MainLogo} width={160} height={160} alt="Snap & Code;" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavBarItem href="/" linkText="Home" />
            <NavBarItem href="/about-us" linkText="About Us" />
            <NavBarItem href="/projects" linkText="Projects" />
          </ul>
        </div>
      </div>
    </nav>
  );
}
