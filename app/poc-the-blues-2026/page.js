import styles from "@/app/page.module.css";
import LightBoxCarouselForImages from "../components/LightBoxCarouselForImages";

const pocTheBlues2026Pictures = [
  {
    id: 0,
    src: "/2025-01-01_Work-Board@0.25x.png",
    alt: "1",
    label: "1",
  },
  {
    id: 1,
    src: "/2024-12-01_Work-Board@0.25x.png",
    alt: "2",
    label: "2",
  },
];

export default async function PocTheBlues2026() {
  return (
    <>
      <main className={styles.main}>
        <h1>POC the Blues 2026</h1>
        <LightBoxCarouselForImages
          carouselId={"one"}
          modalId={"two"}
          images={pocTheBlues2026Pictures}
          modalTitle={"Poc the Blues 2026"}
        />
      </main>
    </>
  );
}
