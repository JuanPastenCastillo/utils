import { useState } from "react"
import { INDEX_DoubleModalWrapper } from "./styles/INDEX_DoubleModalWrapper"

type Props_CloseAll = {
  functionToClose: () => void
}

const CloseAll = ({ functionToClose }: Props_CloseAll) => {
  return (
    <>
      <button onClick={functionToClose}>Close everything</button>
    </>
  )
}

export const INDEX_DoubleModal = () => {
  const [firstModal, setFirstModal] = useState(false)
  const [secondModal, setsecondModal] = useState(false)

  const openModal_1 = () => {
    setFirstModal(true)
  }

  const closeModal_1 = () => {
    setFirstModal(false)
  }

  const openModal_2 = () => {
    setsecondModal(true)
  }

  const closeModal_2 = () => {
    setsecondModal(false)
  }

  const openBothModals = () => {
    setFirstModal(true)
    setsecondModal(true)
  }

  const closeBothModals = () => {
    setFirstModal(false)
    setsecondModal(false)
  }

  return (
    <INDEX_DoubleModalWrapper
      firstOpen={firstModal}
      secondOpen={secondModal}>
      <h1>Double modal</h1>

      <button onClick={openModal_1}>Show modal 1</button>

      <button onClick={openModal_2}>Show modal 2</button>

      <button onClick={openBothModals}>Open both modals</button>

      <div>
        <p>
          Data here for the <span>first</span> modal
        </p>
        <button onClick={closeModal_1}>Close only this modal</button>

        {firstModal && secondModal && (
          <>
            <CloseAll functionToClose={closeBothModals} />
          </>
        )}
      </div>

      <div>
        <p>
          Data here for the <span>second</span> modal
        </p>
        <button onClick={closeModal_2}>Close only this modal</button>

        {firstModal && secondModal && (
          <>
            <CloseAll functionToClose={closeBothModals} />
          </>
        )}
      </div>
    </INDEX_DoubleModalWrapper>
  )
}
