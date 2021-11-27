import React from 'react';
import PropTypes from 'prop-types';

import './style';

const Card = (props) => {
  const { children, cssClass } = props;

  return (
    <>
      <div className={`card ${cssClass}`}>{children}</div>
    </>
  );
};

Card.defaultProps = {
  cssClass: '',
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  cssClass: PropTypes.string,
};

export default Card;
