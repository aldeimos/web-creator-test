import React from 'react';

import './index.scss';

const FormTextarea = () => {
  return (
    <div className="form-textarea">
      <label htmlFor="exampleFormControlTextarea1">Комментарий (необязательно)</label>
      <textarea className="form-control" id="exampleFormControlTextarea1"/>
    </div>
  )
};

export default FormTextarea;
