export default function BootstrapModal({ modalId, children }) {
  return (
    <div
      className="modal fade"
      id={modalId}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-fullscreen-xl-down modal-xl modal-dialog-centered">
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
}

export function ModalBody({ children }) {
  return (
    <>
      <div className="modal-body">{children}</div>
    </>
  );
}

export function ModalFooter({ children }) {
  return (
    <>
      <div className="modal-footer">{children}</div>
    </>
  );
}

export function ModalHeader({ modalTitle }) {
  return (
    <>
      <div className="modal-header modal-header-color">
        <h1 className="modal-title fs-5">
          {modalTitle ? modalTitle : "Modal Title"}
        </h1>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
    </>
  );
}
