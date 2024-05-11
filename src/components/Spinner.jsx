import React from 'react';

const Spinner = ({ center }) => (
  <div className={`spinner ${center ? 'center' : ''}`}>
    <div className="double-bounce1" />
    <div className="double-bounce2" />
  </div>
);

export default Spinner;