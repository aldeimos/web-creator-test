import React from 'react';

const FormInput = (props) => {
  const { id, name, label, type, required, group } = props;

  return (
    <div className={group === 'main' ? 'form-group col-md-6' : 'form-group col-md-12'}>
      <label htmlFor={name}>{label}</label>
      <input type={type} className="form-control" id={name} aria-describedby={name}/>
    </div>
  )
};

export default FormInput;
