import styles from "@/app/page.module.css";
import Image from "next/image";
import MainLogo from "@/public/snap-and-code_main-logo.svg";

export default function Projects() {
  return (
    <>
      <main className={styles.main}>
        <h1>Projects</h1>
        <p className="ratio ratio-16x9 w-75">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/CDX1FhTLYlg?si=St3OsQrPD_rs9GU2"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </p>
      </main>
      <footer></footer>
    </>
  );
}
