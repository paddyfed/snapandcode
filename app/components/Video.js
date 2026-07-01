export function Video({ src }) {
  const videoLocation = "videos/" + src;
  return (
    <div className="ratio ratio-16x9">
      <video controls width="854" height="480" loading="lazy">
        <source src={videoLocation} type="video/mp4" />
        <a href={videoLocation}>Download the file instead.</a>
      </video>
    </div>
  );
}
