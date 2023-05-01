import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { ButtonContainer } from "./PortfolioEditBar.styles";

export default function PortfolioEditBar({
  openModal,
  openDeleteModal,
  getCurrentCoin,
  profile,
  showEdit
}) {




  function handleEdit() {
    openModal();
  }

  function handleDelete() {
    getCurrentCoin(profile);
    openDeleteModal();
  }

  return (
    <ButtonContainer>
      {showEdit ? (
        <>
          {/* Re-directs user to PortfolioModal component */}
          <button onClick={() => handleEdit()}>
            <FontAwesomeIcon icon={faPencil} />
          </button>

          {/* Re-directs user to DeletePortfolioAssetModal component */}
          <button onClick={() => handleDelete()}>
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </>
      ) : (
        <div>
          Updated: <span>{profile.purchase_date}</span>
        </div>
      )}
    </ButtonContainer>
  );
}
