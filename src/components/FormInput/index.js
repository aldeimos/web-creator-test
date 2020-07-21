import React from 'react';

import './index.scss';

const FormInput = ({ name, label, type, required, group }) => {

  return (
    <div className={group === 'main' ? 'form-group col-md-6' : 'form-group col-md-12'}>
      <label htmlFor={name}>{label}</label>
      <input type={type} className="form-control" id={name} aria-describedby={name}/>
    </div>
  )
};

export default FormInput;
