import React, { useState } from "react"
import Modal from "./modal"
import "./modal.css"

const ModalTest = () => {
  const [showModalPopup, setShowModalPopup] = useState(false)

  const handleToggleModal = () => {
    setShowModalPopup(!showModalPopup)
  }

  const onClose = () => {
    setShowModalPopup(false)
  }
  return (
    <div>
      <button onClick={handleToggleModal}>Open Modal Pop</button>
      {showModalPopup && (
        <Modal onClose={onClose} body={<div>Customized Body</div>} />
      )}
    </div>
  )
}

export default ModalTest
