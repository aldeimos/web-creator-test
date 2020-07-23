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

            if (field.group === field_group[0] && field.type !== 'textarea') {
              return (
                <FormInput
                  value={store.formData}
                  changeHandler={store.setFormData}
                  key={field.id}
                  {...field}
                />
              );
            }

            if (field.type === 'textarea' && field_group[0] === 'additional') {
              return (
                <FormTextarea
                  value={store.formData}
                  changeHandler={store.setFormData}
                  key={field.id}
                  {...field}
                />
              );
            }
          })}
        </div>
      );
    });
  };

  const renderSubmitButton = () => {
    return <FormButton {...submit_button}/>;
  };

  const renderCheckBox = () => {
    const checkbox = fields[fields.length - 1];

    return (
      <div className="col-md-12">
        <FormCheckbox
          value={store.formData}
          changeHandler={store.setFormData}
          key={checkbox.id}
          {...checkbox}
        />
      </div>
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();
    store.resetFormData();
    store.setFormPopup(true);
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
          {renderCheckBox()}
          {renderSubmitButton()}
        </div>
      </form>
    </section>
  );
};

