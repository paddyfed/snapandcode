import styles from "@/app/page.module.css";
import Image from "next/image";
import MoviesMoviesMovies from "@/public/2026-05-25_Movies-Movies-Movies_Website-example.png";
import AdamandMichelle from "@/public/2026-06-29_Michelle-and-adam_website-example.png";

export default function Websites() {
  return (
    <main className={styles.main}>
      <h1>Website Design</h1>
      <article className="container">
        <h2>Movies Movies Movies</h2>
        <Image
          src={MoviesMoviesMovies}
          className="img-fluid rounded-4"
          alt="Movies Movies Movies website presented on multiple devices including desktop, laptop, tablet, and phone"
        />
      </article>
      <article className="container">
        <h2>Adam and Michelle Wedding Information</h2>
        <Image
          src={AdamandMichelle}
          className="img-fluid rounded-4"
          alt="Adam and Michelle Wedding Invite website presented on multiple devices including desktop, laptop, tablet, and phone"
        />
      </article>
    </main>
  );
}
