import styles from "@/app/page.module.css";
import LightBoxGalleryForImages from "../components/LightBoxGalleryForImages";
import fs from "fs";
import path from "path";
import ExifReader from "exifreader";
import { DOMParser, onErrorStopParsing } from "@xmldom/xmldom";

const directory = path.join(process.cwd(), "public/images/poc-the-blues-2026");

const pocTheBlues2026Pictures = [];

export default async function PocTheBlues2026() {
  // find all files in the directory
  const fileNames = fs.readdirSync(directory);

  // for each file
  for (let x = 0; x < fileNames.length; x++) {
    // open the image file
    const fileContent = fs.readFileSync(path.join(directory, fileNames[x]));

    // load image into ExifReader (exclude tags that are not needed)
    const tags = await ExifReader.load(fileContent, {
      excludeTags: {
        exif: true,
        xmp: true,
        photoshop: true,
        icc: true,
      },
      domParser: new DOMParser({ onError: onErrorStopParsing }),
    });

    // add the images to the list, inlcude the image height width and caption if available, otherwise the caption will be the filename
    pocTheBlues2026Pictures.push({
      id: x,
      src: `/images/poc-the-blues-2026/${fileNames[x]}`,
      alt: tags["Caption/Abstract"]?.description || fileNames[x],
      label: tags["Caption/Abstract"]?.description || fileNames[x],
      width: tags["Image Width"]?.value,
      height: tags["Image Height"]?.value,
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
