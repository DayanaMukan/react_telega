import React, { useState } from 'react';
import './MyButton.css'
import { Button } from 'primereact/button';

export const MyButton = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const MyButtonClick = () => {
    setButtonClicked(true);
  };

  return (
    <div className="card flex justify-content-center">

      {buttonClicked ? (
        <p>Вы нажали на кнопку</p>
      ) : (
        <Button label="Submit" onClick={MyButtonClick} />
      )}
    </div>
  );
}


        