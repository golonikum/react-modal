import React, { useCallback, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import ReactDOM from "react-dom";

const Modal = ({ show, onClose, title, children }) => {
  const closeOnEsc = useCallback(
    (e) => {
      if ((e.charCode || e.keyCode) === 27) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEsc);
    return () => document.body.removeEventListener("keydown", closeOnEsc);
  }, [closeOnEsc]);

  return ReactDOM.createPortal(
    <CSSTransition in={show} unmountOnExit timeout={{ enter: 0, exit: 300 }}>
      <div className="modal" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">{title}</h4>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button className="button" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

export default Modal;
