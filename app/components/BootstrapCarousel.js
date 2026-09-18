import Image from "next/image";

export function BootstrapCarousel({ id, children }) {
  return (
    <>
      <div id={id} className={`carousel slide mt-2`}>
        {children}

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={`#${id}`}
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={`#${id}`}
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export function CarouselIndicators({ children }) {
  return <div className="carousel-indicators">{children}</div>;
}

export function CarouselInner({ children }) {
  return <div className="carousel-inner">{children}</div>;
}

export function CarouselButton({ id, target, label }) {
  const attributes = {
    type: "button",
    "data-bs-target": `#${target}`,
    "data-bs-slide-to": id,
    "aria-label": label,
  };

  if (id === 0) {
    attributes.className = "active";
    attributes["aria-current"] = "true";
  }

  return <button {...attributes}></button>;
}

export function CarouselItem({ id, src, alt, modalId, carouselTarget }) {
  const articleAttributes = { className: "carousel-item" };
  if (id === 0) {
    articleAttributes.className = "carousel-item active";
  }

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
    <article {...articleAttributes}>
      <a {...linkAttributes}>
        <Image
          src={src}
          width={1200}
          height={630}
          alt={alt}
          {...imageAttributes}
        />
      </a>
    </article>
  );
}
