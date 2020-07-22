import React from 'react';

import FormInput from '../FormInput';
import FormCheckbox from '../FormCheckbox';
import FormButton from '../FormButton';

import './index.scss';
import FormTextarea from '../FormTextarea';

export const FormComponent = ({ store, title, fields, field_groups, submit_button }) => {

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
              return <FormCheckbox changeHandler={store.setFormData} key={field.id} {...field}/>
            }

            if (field.group === field_group[0] && field.type !== 'textarea') {
              return (
                <FormInput
                  value={store.formData}
                  changeHandler={store.setFormData}
                  key={field.id}
                  {...field}
                />
              )
            }

            if (field.type === 'textarea' && field_group[0] === 'additional') {
              return <FormTextarea/>
            }
          })}
        </div>
      );
    });
  };

  const renderSubmitButton = () => {
    return <FormButton formData={store.formData} {...submit_button}/>
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(store.formData.name, store.formData.email);
  };

  return (
    <section className="contacts-us">
      <h3 className="contacts-us__title">
        {title}
      </h3>
      <form
        action=""
        className="contacts-us__form"
        onSubmit={submitHandler}
      >
        <div className="form-row">
          {renderFields()}
          {renderSubmitButton()}
        </div>
      </form>
    </section>
  );
};

