import React from 'react';
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
              <li>
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

export default Filters;
