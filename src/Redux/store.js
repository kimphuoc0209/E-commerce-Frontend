import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productCreateReviewReducer,
  productDetailsReducer,
  productListReducer,
} from "./Reducer/ProductReducers";
import {
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
} from "./Reducer/userReducers";
import { cartReducer } from "./Reducer/CartReducers";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderListMyReducer,
  orderPayReducer,
} from "./Reducer/OrderReducers";
import {
  orderListShipperReducer,
  shipperConfirmedReducer,
  shipperDeliveredReducer,
  shipperListOrdersReducer,
  shipperPickedReducer,
  shipperRegisterReducer,
  shipperShippingReducer,
} from "./Reducer/shipperReducers";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productReviewCreate: productCreateReviewReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderListMy: orderListMyReducer,
  shipperRegister: shipperRegisterReducer,
  orderListShipper: shipperListOrdersReducer,
  shipperConfirm: shipperConfirmedReducer,
  shipperPick: shipperPickedReducer,
  shipperShipping: shipperShippingReducer,
  shipperDeliver: shipperDeliveredReducer,
  shipperOrderList: orderListShipperReducer,
});

// cart
const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

//login
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

//shippingAddress
const shippingAddressFromLocalStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

// initial state
const initialState = {
  cart: {
    cartItems: cartItemsFromLocalStorage,
    shippingAddress: shippingAddressFromLocalStorage,
  },
  userLogin: {
    userInfo: userInfoFromLocalStorage,
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
