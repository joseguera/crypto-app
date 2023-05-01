import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { ButtonContainer } from "./PortfolioEditBar.styles";

export default function PortfolioEditBar({ openModal, openDeleteModal, getCurrentCoin, profile }) {

    function handleEdit() {
        openModal();
    }

    function handleDelete() {
        getCurrentCoin(profile);
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
