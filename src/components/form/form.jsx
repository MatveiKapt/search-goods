import React, {useState} from 'react';
import {connect} from 'react-redux';
import {fetchGoodsByCode} from '../../store/api-action.js';
import FormResultItem from '../form-result-item/form-result-item.jsx';

const Form = (props) => {
  const {postGoodsCode, goods} = props;
  const [inputValue, setInputValue] = useState('');
  const [isFormFocus, setIsFormFocus] = useState(false);

  const goodsArray = goods.goods;

  const inputChangeHandler = (evt) => {
    setInputValue(evt.target.value);
    postGoodsCode(evt.target.value);
  };
  const formSubmitHandler = (evt) => {
    evt.preventDefault();
    postGoodsCode(inputValue);
    setIsFormFocus(true);
  };

  const formFocusHandler = () => {
    setIsFormFocus(true);
  };



  const itemClickHandler = () => {
    setIsFormFocus(false);
  };

  const isGoodsEmpty = !!goods;

  return (
    <>
      <form
        className="form"
        action="#"
        method="POST"
        onSubmit={formSubmitHandler}
        onFocus={formFocusHandler}
      >
        <input
          className="form__input"
          type="text"
          placeholder="Введите артикул"
          onInput={inputChangeHandler}
        />
        <button className="form__button" type="submit">Найти</button>

        {isFormFocus && (
          <ul className="form__result-list">
            {Array.isArray(goodsArray) ? goodsArray.map((item) =>
              <FormResultItem key={item.goodsID} brand={item.brand} code={item.number} onClick={itemClickHandler}/>) : null
            }
          </ul>
        )}
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  goods: state.goods,
});
const mapDispatchToProps = (dispatch) => ({
  postGoodsCode(code) {
    dispatch(fetchGoodsByCode(code));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);