import React from 'react';
import { observer } from 'mobx-react';

import './index.scss';

const FormPopup = observer(({ closeHandler }) => {

  return (
    <div className="form-popup">
      <div
        className="form-popup__mask"
        onClick={() => closeHandler(false)}
      />
      <div className="form-popup__content">
        <span className="form-popup__header">
          Данные успешно отправлены
        </span>
        <div
          className="form-popup__close"
          onClick={() => closeHandler(false)}
        >
          Закрыть
        </div>
      </div>
    </div>
  )
});

export default FormPopup;
