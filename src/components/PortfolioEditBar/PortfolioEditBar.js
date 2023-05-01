import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { ButtonContainer } from "./PortfolioEditBar.styles";

export default function PortfolioEditBar({
  openModal,
  openDeleteModal,
  getCurrentCoin,
  profile,
}) {
  const [showEdit, setShowEdit] = useState(false);

  function editAsset() {
    setShowEdit(true);
  }

  function leaveAsset() {
    setShowEdit(false);
  }

  function handleEdit() {
    openModal();
  }

  function handleDelete() {
    getCurrentCoin(profile);
    openDeleteModal();
  }

  return (
    <ButtonContainer onMouseOver={() => editAsset()} onMouseOut={() => leaveAsset()}>
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
