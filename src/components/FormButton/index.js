import React from 'react';

import './index.scss';

const FormButton = ({ text }) => {
  return (
    <button className="form-button">
      {text}
    </button>
  )
};

export default FormButton;
