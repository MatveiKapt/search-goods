import {USER_KEY} from '../const.js';

export const fetchGoodsByCode = (code, userKey = USER_KEY) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://api.favorit-parts.ru/hs/hsprice/?key=${userKey}&number=${code}`);
      const data = await response.json();
      dispatch({ type: 'goods/fetchGoods', payload: data });
    } catch (error) {
      dispatch({ type: 'ERROR', payload: error.message });
    }
  }
}

export const fetchGoodByBrand = (code, brand, userKey = USER_KEY) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://api.favorit-parts.ru/hs/hsprice/?key=${userKey}&number=${code}&brand=${brand}&analogues=on`);
      const data = await response.json();
      dispatch({type: 'goods/fetchGoodByBrand', payload: data});
    } catch (error) {
      dispatch({type: 'ERROR', payload: error.message});
    }
  }
};