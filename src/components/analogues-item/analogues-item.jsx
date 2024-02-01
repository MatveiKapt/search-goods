import React from 'react';

const AnaloguesItem = ({name, brand}) => {
  return (
    <li>
      <p>Название: {name}</p>
      <p>Производитель: {brand}</p>
    </li>
  );
};

export default AnaloguesItem;