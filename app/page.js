import styles from "@/app/page.module.css";
import Image from "next/image";
import MainLogo from "@/public/snap-and-code_main-logo.svg";
import CircleLogo from "@/public/snap-and-code_circle-logo.svg";

export default function Home() {
  return (
    <>
      <main className={styles.mainPage}>
        <h1>
          <Image
            priority
            src={CircleLogo}
            alt="Snap and Code"
            width={160}
            height={160}
            className={styles.mainlogo}
          />
        </h1>
        <ul className={`${styles.mainServicesList}  px-1 px-lg-5`}>
          <li>Website Design</li>
          <li>Videography</li>
          <li>Photography</li>
          <li>Print Design</li>
        </ul>
      </main>
    </>
  );
}
