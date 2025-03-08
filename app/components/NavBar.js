"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MainLogo from "@/public/snap-and-code_main-logo.svg";

export function NavBarItem({ href, linkText }) {
  const currentRoute = usePathname();
  return (
    <li className="nav-item">
      <Link
        href={href}
        className={`${currentRoute === href ? "active nav-link" : "nav-link"}`}
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
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
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
            <NavBarItem href="/all-about-us" linkText="All About Us" />
            <NavBarItem
              href="/policies-enrolment"
              linkText="Policies and Enrolment"
            />
            <NavBarItem href="/school-calendar" linkText="School Calendar" />

            <NavBarDropDown topLevelHref="/classes" topLevelLinkText="Classes">
              <NavBarDropDownMenuItem
                href="/classes/junior-infants"
                linkText="Junior Infants"
              />
              <NavBarDropDownMenuItem
                href="/classes/senior-infants"
                linkText="Senior Infants"
              />
              <NavBarDropDownMenuItem
                href="/classes/first-class"
                linkText="First"
              />
            </NavBarDropDown>
            <NavBarItem href="/active-school" linkText="Active School" />
            <NavBarDropDown topLevelHref="/archive" topLevelLinkText="Archive">
              <NavBarDropDownMenuItem
                href="/archive/2021-2022"
                linkText="2021-2022"
              />
            </NavBarDropDown>
          </ul>
        </div>
      </div>
    </nav>
  );
}
