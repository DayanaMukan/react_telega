import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react'

export const ModalAdd = ({visible, setVisible }) => {
  const [helicopterName, setHelicopterName] = useState('')


  
  return (
    <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
      {helicopterName}
      <InputText value={helicopterName} onChange={(e) => setHelicopterName(e.target.value)} />
    </Dialog>
  )
}