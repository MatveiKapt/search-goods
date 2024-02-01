const initialState = {
  goods: [],
  detailsAndAnalogs: {},
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'goods/fetchGoods':
      return {
        ...state,
        goods: action.payload,
      };
    case 'goods/fetchGoodByBrand':
      return {
        ...state,
        detailsAndAnalogs: action.payload,
      };
    case 'ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;