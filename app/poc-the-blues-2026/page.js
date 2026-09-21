import styles from "@/app/page.module.css";
import LightBoxGalleryForImages from "../components/LightBoxGalleryForImages";
import fs from "fs";
import path from "path";

const directory = path.join(process.cwd(), "public/images/poc-the-blues-2026");

const pocTheBlues2026Pictures = [];

export default async function PocTheBlues2026() {
  const fileNames = fs.readdirSync(directory);

  for (let x = 0; x < fileNames.length; x++) {
    pocTheBlues2026Pictures.push({
      id: x,
      src: `/images/poc-the-blues-2026/${fileNames[x]}`,
      alt: fileNames[x],
      label: fileNames[x],
    });
  }

  return (
    <>
      <main className={styles.main}>
        <h1>POC the Blues 2026</h1>
        <LightBoxGalleryForImages
          carouselId={"galleryPOC"}
          modalId={"POCModalGallery"}
          images={pocTheBlues2026Pictures}
          modalTitle={"Poc the Blues 2026 Gallery"}
        />
      </main>
    </>
  );
}
