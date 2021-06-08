/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import propTypes from 'prop-types';

export const CounterTask = ({ tasks }) => {
  const all = tasks.length;

  const completed = tasks.reduce(
    (prevValue, currentValue) => (currentValue.completed ? prevValue + 1 : prevValue),
    0,
  );

  return (
    <div className="counter">
      <h3>Counters tasks:</h3>
      <p className="counter__text">
        All:<strong> {all}</strong>
      </p>
      <p className="counter__text">
        Current:<strong> {all - completed}</strong>
      </p>
      <p className="counter__text">
        Completed:<strong> {completed}</strong>
      </p>
    </div>
  );
};

CounterTask.propTypes = {
  tasks: propTypes.arrayOf(
    propTypes.exact({
      title: propTypes.string.isRequired,
      completed: propTypes.bool.isRequired,
      id: propTypes.string.isRequired,
    }),
  ).isRequired,
};
