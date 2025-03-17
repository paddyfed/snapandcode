import styles from "@/app/page.module.css";
import Image from "next/image";
import MainLogo from "@/public/snap-and-code_main-logo.svg";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <h1>
          <Image
            priority
            src={MainLogo}
            alt="Snap and Code"
            width={160}
            height={160}
            className={styles.mainlogo}
          />
        </h1>
      </main>
    </>
  );
}
