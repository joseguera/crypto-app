import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { ButtonContainer } from "./PortfolioEditBar.styles";

export default function PortfolioEditBar({ openModal, openDeleteModal }) {

    // create a mini nav bar with 'Edit' and 'Delete' button icons

    function handleEdit() {
        openModal();
    }

    function handleDelete() {
        openDeleteModal();
    }

  return (
    <ButtonContainer>
        {/* Re-directs user to PortfolioModal component */}
        <button onClick={() => handleEdit()}>
            <FontAwesomeIcon icon={faPencil} />
        </button>

        {/* Re-directs user to DeletePortfolioAssetModal component */}
        <button onClick={() => handleDelete()}>
            <FontAwesomeIcon icon={faTrashCan} />
        </button>
    </ButtonContainer>
  )
}
