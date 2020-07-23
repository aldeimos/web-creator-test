import React from 'react';
import { observer } from 'mobx-react';

import './index.scss';

const FormTextarea = observer(({value, changeHandler, name}) => {

  return (
    <div className="form-textarea">
      <label
        htmlFor={name}>
        Комментарий (необязательно)
      </label>
      <textarea
        value={value[name]}
        name={name}
        className="form-control"
        id={name}
        onChange={(e) => changeHandler(e.target.name, e.target.value)}
      />
    </div>
  )
});

export default FormTextarea;
