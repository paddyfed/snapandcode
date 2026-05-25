import styles from "@/app/page.module.css";
import Image from "next/image";
import MainLogo from "@/public/snap-and-code_main-logo.svg";
import PaddyPhoto from "@/public/paddy-picture-graduation_v02.png";
import PaddyName from "@/public/2026-05-21_PaddyNameplate.svg";
import Link from "next/link";

export default function AboutUs() {
  return (
    <>
      <main className={styles.main}>
        <h1>About Us</h1>
        <article className={styles.aboutMeArticle}>
          <h2>
            <figure className={styles.figure}>
              <Image src={PaddyPhoto} alt="Paddy" className={`img-fluid`} />
              <figcaption className={styles.figCaption}>
                <Image src={PaddyName} alt="Paddy" className={`img-fluid`} />
              </figcaption>
            </figure>
          </h2>

          <div className={styles.aboutMeProfile}>
            <h3>Profile</h3>

            <p>
              I started creating websites when I was 15 or 16 as it was an
              interesting way to do something creative with our family computer.
              This introduced me to computer graphics, creating code and how to
              bring that creation to a wider audience by publishing online. This
              led me to the Applied Computing course in Letterkenny IT (now ATU)
              in the early 2000’s. A few years after gaining my degree, I landed
              a job as a Business Analyst. However, after many years trying, it
              was clear that this was not the role I was best suited for.
            </p>
            <p>
              I started again. I went to Monaghan Institute and was introduced
              to the Creative Media course, specifically the Digital Marketing
              Traineeship. This had a Web Authoring module so I thought, at the
              very least I would have something that interested me in the
              course.
            </p>
            <p>
              Little did I know that this course brought out a creative side in
              me that had laid dormant for nearly 20 years. I was excited about
              designing; about photography; about videography, and I realised
              that I could use these skills to help other business realise their
              goals for their online presence.
            </p>
            <p>
              If your business needs to create or maintain a website, I can
              help.
            </p>
            <p>
              If your business needs to create promotional photos or videos, I
              can help.
            </p>
            <p>
              If your business needs to create flyers, posters, or business
              cards, I can help.
            </p>
          </div>
          <div>
            <h3>Qualifications</h3>
            <ul>
              <li>
                Advanced Creative Media, QQI Level 6, Monaghan Institute 2024 -
                2026
              </li>
              <li>
                Adobe Certified Professional in Visual Design, Adobe, 2025
              </li>
              <li>Adobe Certified Professional in Video Design, Adobe, 2025</li>
              <li>
                Applied Computing, Bsc (Hons), Letterkenny Institute of
                Technology 2000 - 2004
              </li>
            </ul>
          </div>
          <div>
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
          </div>
        </article>
      </main>
    </>
  );
}
