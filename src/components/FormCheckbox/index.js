import React from 'react';
import ReactHtmlParser from 'react-html-parser';

import './index.scss';

const FormCheckbox = ({name, label}) => {

  return (
    <div className="form-checkbox">

      <label
        className="form-checkbox__label"
        htmlFor={name}
      >
        <input
          className="form-checkbox__input"
          id={name}
          type="checkbox"
        />
        <span className="form-checkbox__box"/>
        {ReactHtmlParser(label)}
      </label>
    </div>
  )
};

export default FormCheckbox
