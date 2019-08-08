export const initialState = {
  selectedMenu: 0,
  shippingInfo: {
    required: 'true',
    country: '',
    city: '',
    zip: '',
    address: '',
    deliveryDate: '2020-01-01',
    comment: '',
  },
  generalInfo: {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  },
  popup: null,
}

export const mainReducer = (state, action) => {
  switch (action.type) {
    case 'OpenGeneralInfo':
      return {...state, shippingInfo: initialState.shippingInfo, selectedMenu: 0};
    case 'SetGeneralInfo':
      return {...state, generalInfo: action.payload, selectedMenu: 1};
    case 'SetShippingInfo':
      return {...state, shippingInfo: action.payload};
    case 'Submitted':
      return {...state, popup: {type: 'success'}};
    case 'Error':
      return {...state, popup: {type: 'error'}};
    case 'ErrorExpired':
      return {...state, popup: null};
    default: return state;
  }
}
