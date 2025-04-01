import styles from "@/app/page.module.css";
import Image from "next/image";
import MarchBoard2025 from "@/public/2025-04-01_Work-Board@0.25x.png";
import DecemberBoard2024 from "@/public/2024-12-01_Work-Board@0.25x.png";
import MainLogo from "@/public/snap-and-code_main-logo.svg";

export default function Projects() {
  return (
    <>
      <main className={styles.main}>
        <h1>Projects</h1>
        <article className="container">
          <h2>March 2025</h2>
          <div className="row">
            <div className="col-md-2 mt-2  order-md-last">
              <h3>Programs Used</h3>
              <ul>
                <li>Adobe Illustrator</li>
                <li>Canva</li>
              </ul>
            </div>
            <div className="col-md-8 mt-2 order-md-first">
              <Image
                src={MarchBoard2025}
                alt="Projects completed in March 2025"
                className="img-fluid"
              />
            </div>
          </div>
        </article>

        <article className="container">
          <h2>December 2024</h2>
          <div className="row">
            <div className="col-md-4 mt-2 order-md-last">
              <h3>Programs Used</h3>
              <ul>
                <li>Adobe Premiere Pro</li>
                <li>Adobe After Effects</li>
              </ul>
            </div>
            <div className="col-md-8 order-md-first">
              <p className="ratio ratio-16x9">
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
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mt-2  order-md-last">
              <h3>Programs Used</h3>
              <ul>
                <li>Canva</li>
              </ul>
            </div>
            <div className="col-md-8 order-md-first">
              <Image
                src={DecemberBoard2024}
                alt="Projects completed in December 2024"
                className="img-fluid"
              />
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
