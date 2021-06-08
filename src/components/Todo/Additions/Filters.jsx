import React from 'react';
import propTypes from 'prop-types';

import './Filters.scss';

const Filters = ({ setFilter }) => (
  <div className="filters">
    <h3 className="filters__title">Filters:</h3>

    <button
      className="filters__bth"
      type="button"
      onClick={() => {
        setFilter('all');
      }}>
      All
    </button>

    <button
      className="filters__bth"
      type="button"
      onClick={() => {
        setFilter('current');
      }}>
      Current
    </button>

    <button
      className="filters__bth"
      type="button"
      onClick={() => {
        setFilter('completed');
      }}>
      Completed
    </button>
  </div>
);

const memoFilter = React.memo(Filters);
export { memoFilter as Filters };

Filters.propTypes = {
  setFilter: propTypes.func.isRequired,
};
