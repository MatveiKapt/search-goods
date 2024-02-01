import React from 'react';
import {connect} from 'react-redux';
import {fetchGoodByBrand} from '../../store/api-action.js';

const FormResultItem = ({brand, code, fetchGoodByBrand, onClick}) => {

  const buttonClickHandler = () => {
    fetchGoodByBrand(code, brand);
    onClick();
  };

  return (
    <li className="form__result-item">
      <button type="button" onClick={buttonClickHandler}>
        {brand === '' ? 'Товары не найдены' : brand}
      </button>
    </li>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchGoodByBrand: (code, brand) => {
    dispatch(fetchGoodByBrand(code, brand));
  },
});

export default connect(null, mapDispatchToProps)(FormResultItem);