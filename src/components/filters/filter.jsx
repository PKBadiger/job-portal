import React from 'react';
import PropTypes from 'prop-types';

import Card from '../shared-components/card';
import './filter.scss';

const Filters = (props) => {
  const { list, title } = props;

  return (
    <>
      <Card>
        <div className="filter-wrapper">
          <h5>{title}</h5>
          <ul className="filters">
            {list.map((data) => (
              <li key={data}>
                <span>
                  <input type="checkbox" name="location" />
                </span>
                <span>{data} </span>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </>
  );
};

Filters.defaultProps = {
  list: [],
};

Filters.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string),
};

export default React.memo(Filters);
