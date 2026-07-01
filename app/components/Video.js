export function Video({ src }) {
  const videoLocation = "videos/" + src;
  return (
    <video controls width="1280" height="720" loading="lazy">
      <source src={videoLocation} type="video/mp4" />
      <a href={videoLocation}>Download the file instead.</a>
    </video>
  );
}
