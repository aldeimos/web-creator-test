import React from 'react';
import ReactHtmlParser from 'react-html-parser';

import './index.scss';
import { observer } from 'mobx-react';

const FormCheckbox = observer(({ value, changeHandler, name, label}) => {

  return (
    <div className="form-checkbox">
      <label
        className="form-checkbox__label"
        htmlFor={name}
      >
        <input
          checked={value[name]}
          className="form-checkbox__input"
          id={name}
          name={name}
          type="checkbox"
          onChange={(e) => changeHandler(e.target.name, e.target.checked)}
        />
        <span className="form-checkbox__box"/>
        {ReactHtmlParser(label)}
      </label>
    </div>
  )
});

export default FormCheckbox
