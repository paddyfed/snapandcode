import {
  BootstrapCarousel,
  CarouselIndicators,
  CarouselInner,
  CarouselButton,
  CarouselItem,
} from "./BootstrapCarousel";
import { BootstrapGallery, GalleryItem } from "./BootstrapGallery";
import { ModalHeader, ModalBody, BootstrapModal } from "./BootstrapModal";

export default function LightBoxGalleryForImages({
  carouselId,
  modalId,
  modalTitle,
  images,
}) {
  return (
    <>
      <div className="w-75 m-auto">
        <h2 className="mt-2">{modalTitle}</h2>
        <BootstrapGallery id={carouselId}>
          {images.map((image) => {
            return (
              <GalleryItem
                key={image.id}
                id={image.id}
                src={image.src}
                alt={image.alt}
                modalId={modalId}
                carouselTarget={`${carouselId}Modal`}
              ></GalleryItem>
            );
          })}
        </BootstrapGallery>
      </div>
      <BootstrapModal modalId={modalId}>
        <ModalHeader modalTitle={modalTitle} />
        <ModalBody>
          <BootstrapCarousel id={`${carouselId}Modal`}>
            <CarouselIndicators>
              {images.map((image) => {
                return (
                  <CarouselButton
                    key={image.id}
                    id={image.id}
                    target={`${carouselId}Modal`}
                    label={image.label}
                  />
                );
              })}
            </CarouselIndicators>
            <CarouselInner>
              {images.map((image) => {
                return (
                  <CarouselItem
                    key={image.id}
                    id={image.id}
                    src={image.src}
                    alt={image.alt}
                  />
                );
              })}
            </CarouselInner>
          </BootstrapCarousel>
        </ModalBody>
      </BootstrapModal>
    </>
  );
}
