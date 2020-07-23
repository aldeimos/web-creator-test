import React from 'react';
import { observer } from 'mobx-react';

import './index.scss';

const FormInput = observer(({ value, changeHandler, required, name, label, type, group }) => {

  return (
    <div className={group === 'main' ? 'form-input form-group col-md-6' : 'form-input form-group col-md-12'}>
      <label htmlFor={name}>{label}</label>
      <input
        value={value[name]}
        type={type}
        className="form-control"
        id={name}
        name={name}
        aria-describedby={name}
        required={required}
        onChange={(e) => changeHandler(e.target.name, e.target.value)}
      />
    </div>
  )
});

export default FormInput;
