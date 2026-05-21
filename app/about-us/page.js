import styles from "@/app/page.module.css";
import Image from "next/image";
import MainLogo from "@/public/snap-and-code_main-logo.svg";
import PaddyPhoto from "@/public/paddy-picture-graduation.png";
import PaddyName from "@/public/2026-05-15_PaddyNameplate.svg";
import Link from "next/link";

export default function AboutUs() {
  return (
    <>
      <main className={styles.main}>
        <h1>About Us</h1>
        <article>
          <h2>Paddy</h2>
          <figure className={styles.figure}>
            <Image src={PaddyPhoto} alt="Paddy" className={`img-fluid`} />
            <figcaption className={styles.figCaption}>
              <Image src={PaddyName} alt="Paddy" className={`img-fluid`} />
            </figcaption>
          </figure>

          <h3>Profile</h3>
          <p>Blurb</p>
          <h3>Qualifications</h3>
          <ul>
            <li>
              Advanced Creative Media, QQI Level 6, Monaghan Institute 2024 -
              2026
            </li>
            <li>Adobe Certified Professional in Visual Design, Adobe, 2025</li>
            <li>Adobe Certified Professional in Video Design, Adobe, 2025</li>
            <li>
              Applied Computing, Bsc (Hons), Letterkenny Institute of Technology
              2000 - 2004
            </li>
          </ul>
          <h3>Contact Details</h3>
          <dl>
            <dt>email</dt>
            <dd>
              <a href="mailto:paddy@snapandcode.ie">paddy@snapandcode.ie</a>
            </dd>
            <dt>github</dt>
            <dd>
              <Link href="https://github.com/paddyfed" target="_blank">
                github.com/paddyfed
              </Link>
            </dd>
            <dt>Credly</dt>
            <dd>
              <Link
                href="https://www.credly.com/users/paddy-o-hara"
                target="_blank"
              >
                credly.com/users/paddy-o-hara
              </Link>
            </dd>
          </dl>
        </article>
      </main>
    </>
  );
}
