import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const FormCheckbox = ({name, label}) => {

  return (
    <div className="form-checkbox">
      <input
        id={name}
        type="checkbox"
      />
      <label htmlFor={name}>
        {ReactHtmlParser(label)}
      </label>
    </div>
  )
};

export default FormCheckbox
