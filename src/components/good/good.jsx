import React from 'react';
import AnaloguesList from '../analogues-list/analogues-list.jsx';
import {connect} from 'react-redux';

const Good = ({brand, name, analogues}) => {
  return (
    <>
      <p>Название: {name}</p>
      <p>Производитель: {brand}</p>

      {analogues && <AnaloguesList analogues={analogues}/>}
    </>
  );
};

const mapStateToProps = (state) => ({
  name: state.detailsAndAnalogs.goods[0].name,
  brand: state.detailsAndAnalogs.goods[0].brand,
  analogues: state.detailsAndAnalogs.goods[0].analogues,
});

export default connect(mapStateToProps)(Good);