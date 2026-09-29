import {
  BootstrapCarousel,
  CarouselIndicators,
  CarouselInner,
  CarouselButton,
  CarouselItem,
} from "./BootstrapCarousel";
import { ModalHeader, ModalBody, BootstrapModal } from "./BootstrapModal";

export default function LightBoxCarouselForImages({
  carouselId,
  modalId,
  modalTitle,
  images,
}) {
  return (
    <>
      <div className="w-50 m-auto">
        <h2 className="mt-2">{modalTitle}</h2>
        <BootstrapCarousel id={carouselId}>
          <CarouselIndicators>
            {images.map((image) => {
              return (
                <CarouselButton
                  key={image.id}
                  id={image.id}
                  target={carouselId}
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
                  modalId={modalId}
                  carouselTarget={`${carouselId}Modal`}
                />
              );
            })}
          </CarouselInner>
        </BootstrapCarousel>
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
