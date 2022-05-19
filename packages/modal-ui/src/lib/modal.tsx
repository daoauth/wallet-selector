import React from "react";
import ReactDOM from "react-dom";
import { WalletSelector } from "@near-wallet-selector/core";

import { WalletSelectorModal, ModalOptions } from "./modal.types";
import { Modal } from "./components/Modal";

const MODAL_ELEMENT_ID = "near-wallet-selector-modal";

export const setupModal = (
  selector: WalletSelector,
  options?: ModalOptions
): WalletSelectorModal => {
  const el = document.createElement("div");
  el.id = MODAL_ELEMENT_ID;
  document.body.appendChild(el);

  const render = (visible = false) => {
    ReactDOM.render(
      <Modal
        selector={selector}
        options={options}
        visible={visible}
        hide={() => render(false)}
      />,
      document.getElementById(MODAL_ELEMENT_ID)
    );
  };

  render();

  return {
    show: () => {
      render(true);
    },
    hide: () => {
      render(false);
    },
  };
};