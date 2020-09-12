export const initialState = {
  basket: [],
};

// export const getBasketTotal = (basket) => {
//   return(
//     basket?.reduce((amount, item) => item.price + amount, 0)
//   )
// }

export const getBasketTotal = (basket) => {
  let value = 0
  basket.forEach(function (item) {
    value += item.price
  });
  return value
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item]
      };
    
    default:
      return state;
  }
}

export default reducer