import { list } from "@vercel/blob";
import Image from "next/image";
import styles from "@/app/page.module.css";

export default async function PocTheBlues2026() {
  let images = null;

  try {
    const blobDetails = await list({ prefix: "Images_POCtheBlues2026" });
    console.log(blobDetails);

    images = blobDetails.blobs.filter((blob) => blob.size > 0);

    // console.log(blobDetails);
  } catch (e) {
    console.error(e);
  }
  return (
    <>
      <h1>POC the Blues 2026</h1>

      <article className="container">
        {images.map((image) => (
          <div key={image.etag} className={styles.Rxr}>
            <Image src={image.url} fill={true} alt={image.etag} />
          </div>
        ))}
      </article>
    </>
  );
}
