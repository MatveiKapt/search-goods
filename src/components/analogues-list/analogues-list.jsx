import React from 'react';
import AnaloguesItem from '../analogues-item/analogues-item.jsx';

const AnaloguesList = ({analogues}) => {
  return (
    <>
      <p>Аналоги:</p>
      <ul>
        {analogues.map((item) => <AnaloguesItem key={item.goodsID} brand={item.brand} name={item.name} />)}
      </ul>
    </>
  );
};

export default AnaloguesList;