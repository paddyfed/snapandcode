import Image from "next/image";

export function BootstrapGallery({ id, children }) {
  return (
    <>
      <div id={id} className={`row g-3 row-cols-1 row-cols-sm-2 row-cols-md-4`}>
        {children}
      </div>
    </>
  );
}

export function GalleryItem({ id, src, alt, modalId, carouselTarget }) {
  const linkAttributes = { href: "#" };
  if (modalId) {
    linkAttributes["data-bs-toggle"] = "modal";
    linkAttributes["data-bs-target"] = `#${modalId}`;
  }

  const imageAttributes = {
    className: "d-block w-100 img-fluid",
  };

  if (carouselTarget) {
    imageAttributes["data-bs-target"] = `#${carouselTarget}`;
    imageAttributes["data-bs-slide-to"] = `${id}`;
  }
  return (
    <div className="col position-relative">
      <a {...linkAttributes}>
        <Image
          src={src}
          width={1200}
          height={630}
          alt={alt}
          {...imageAttributes}
        />
      </a>
    </div>
  );
}
