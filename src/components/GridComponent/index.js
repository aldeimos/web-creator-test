import React, { useState } from 'react';

import './index.scss';

export const GridComponent = ({ id, components }) => {

  return (
    <section
      className="about-us"
      key={id}
    >
      <div className="row">
        {components && components.map((article) => {
          const setText = () => {
            return {__html: article.metadata.text};
          };

          return (
            <div
              key={article.id}
              className={`col-${article.col}`}
            >
              <h3 className="about-us__title">
                {article.metadata.title}
              </h3>
              <div
                className="about-us__text"
                dangerouslySetInnerHTML={setText()}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
};

