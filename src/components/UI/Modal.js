import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return (
    <div
      className={
        props.close ? `${classes.close} ${classes.backdrop}` : classes.backdrop
      }
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div
      className={
        props.close ? `${classes.close} ${classes.modal}` : classes.modal
      }
    >
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const portalElement = document.getElementById("overlays");
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop close={props.close} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay close={props.close}>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
