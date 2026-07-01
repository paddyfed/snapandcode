import styles from "@/app/page.module.css";
import Image from "next/image";
import Link from "next/link";
import { Video } from "../components/Video";

export default function Videography() {
  return (
    <>
      <main className={styles.main}>
        <h1>Videography</h1>
        <article className="container">
          <h2>Curious Cubs Promotional Video</h2>
          <Video src="2025-10-01_Curious-Cubs_1080_Horiz_MP4.mp4" />
        </article>
        <article className="container">
          <h2>Monaghan Institute Learning Hub</h2>
          <Video src="MI_LearningHub.mp4" />
        </article>
        <article className="container">
          <h2>Irish: The Forgotten Language Documentary</h2>
          <Video src="TheForgottenLanguage_SD_subtitles.mp4" />
        </article>
        <article className="container">
          <h2>Monaghan Walking Club Promotional Video (College Assignment)</h2>
          <Video src="CW3-MP4-MonaghanWayWalkingClub-BrandVideo_Web-MP4.mp4" />
        </article>
      </main>
    </>
  );
}
