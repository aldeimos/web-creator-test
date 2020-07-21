import React from 'react';

import FormInput from '../FormInput';
import FormCheckbox from '../FormCheckbox';
import FormButton from '../FormButton';

import './index.scss';

export const FormComponent = (props) => {
  const { title, fields, field_groups, submit_button } = props;

  const renderFields = () => {

    const fieldGroupsToArray = Object.entries(field_groups);

    return fieldGroupsToArray.map((field_group) => {
      return (
        <div
          key={field_group[1]}
          className={`${field_group[1]} d-flex flex-wrap justify-content-between`}
        >
          {fields.map((field) => {

            if (field.type === 'checkbox' &&  field_group[0] === 'main') {
              return <FormCheckbox key={field.id} {...field}/>
            }

            if (field.group === field_group[0]) {
              return <FormInput key={field.id} {...field}/>
            }
          })}
        </div>
      );
    });
  };

  const renderSumbitButton = () => {
    return <FormButton {...submit_button}/>
  };

  return (
    <section className="contacts-us">
      <h3 className="contacts-us__title">
        {title}
      </h3>
      <form
        action=""
        className="contacts-us__form"
      >
        <div className="form-row">
          {renderFields()}
          {renderSumbitButton()}
        </div>
      </form>
    </section>
  );
};

