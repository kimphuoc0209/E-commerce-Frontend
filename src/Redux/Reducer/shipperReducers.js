import {
  ORDER_LIST_SHIPPER_FAIL,
  ORDER_LIST_SHIPPER_REQUEST,
  ORDER_LIST_SHIPPER_RESET,
  ORDER_LIST_SHIPPER_SUCCESS,
  SHIPPER_CONFIRM_ORDER_FAIL,
  SHIPPER_CONFIRM_ORDER_REQUEST,
  SHIPPER_CONFIRM_ORDER_RESET,
  SHIPPER_CONFIRM_ORDER_SUCCESS,
  SHIPPER_DELIVERED_ORDER_FAIL,
  SHIPPER_DELIVERED_ORDER_REQUEST,
  SHIPPER_DELIVERED_ORDER_RESET,
  SHIPPER_DELIVERED_ORDER_SUCCESS,
  SHIPPER_GET_ORDERS_FAIL,
  SHIPPER_GET_ORDERS_REQUEST,
  SHIPPER_GET_ORDERS_SUCCESS,
  SHIPPER_PICK_ORDER_FAIL,
  SHIPPER_PICK_ORDER_REQUEST,
  SHIPPER_PICK_ORDER_RESET,
  SHIPPER_PICK_ORDER_SUCCESS,
  SHIPPER_REGISTER_FAIL,
  SHIPPER_REGISTER_REQUEST,
  SHIPPER_REGISTER_SUCCESS,
  SHIPPER_REGISTER_VERIFY,
  SHIPPER_SHIPPING_ORDER_FAIL,
  SHIPPER_SHIPPING_ORDER_REQUEST,
  SHIPPER_SHIPPING_ORDER_RESET,
  SHIPPER_SHIPPING_ORDER_SUCCESS,
} from "../Constants/ShipperConstants";
import { USER_LOGOUT } from "../Constants/UserConstants";

// Register
export const shipperRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case SHIPPER_REGISTER_REQUEST:
      return { loading: true };
    case SHIPPER_REGISTER_VERIFY:
      return { loading: false };
    case SHIPPER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case SHIPPER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

//ALL ORDERS
export const shipperListOrdersReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case SHIPPER_GET_ORDERS_REQUEST:
      return { loading: true };
    case SHIPPER_GET_ORDERS_SUCCESS:
      return { loading: false, orders: action.payload };
    case SHIPPER_GET_ORDERS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//  SHIPPER CONFIRMED
export const shipperConfirmedReducer = (state = {}, action) => {
  switch (action.type) {
    case SHIPPER_CONFIRM_ORDER_REQUEST:
      return { loading: true };
    case SHIPPER_CONFIRM_ORDER_SUCCESS:
      return { loading: false, success: true };
    case SHIPPER_CONFIRM_ORDER_FAIL:
      return { loading: false, error: action.payload };
    case SHIPPER_CONFIRM_ORDER_RESET:
      return {};
    default:
      return state;
  }
};

//  SHIPPER PICKED
export const shipperPickedReducer = (state = {}, action) => {
  switch (action.type) {
    case SHIPPER_PICK_ORDER_REQUEST:
      return { loading: true };
    case SHIPPER_PICK_ORDER_SUCCESS:
      return { loading: false, success: true };
    case SHIPPER_PICK_ORDER_FAIL:
      return { loading: false, error: action.payload };
    case SHIPPER_PICK_ORDER_RESET:
      return {};
    default:
      return state;
  }
};

//  SHIPPER SHIPPING
export const shipperShippingReducer = (state = {}, action) => {
  switch (action.type) {
    case SHIPPER_SHIPPING_ORDER_REQUEST:
      return { loading: true };
    case SHIPPER_SHIPPING_ORDER_SUCCESS:
      return { loading: false, success: true };
    case SHIPPER_SHIPPING_ORDER_FAIL:
      return { loading: false, error: action.payload };
    case SHIPPER_SHIPPING_ORDER_RESET:
      return {};
    default:
      return state;
  }
};

//  SHIPPER DELIVERED
export const shipperDeliveredReducer = (state = {}, action) => {
  switch (action.type) {
    case SHIPPER_DELIVERED_ORDER_REQUEST:
      return { loading: true };
    case SHIPPER_DELIVERED_ORDER_SUCCESS:
      return { loading: false, success: true };
    case SHIPPER_DELIVERED_ORDER_FAIL:
      return { loading: false, error: action.payload };
    case SHIPPER_DELIVERED_ORDER_RESET:
      return {};
    default:
      return state;
  }
};

//SHIPPER ORDERS
export const orderListShipperReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ORDER_LIST_SHIPPER_REQUEST:
      return { loading: true };
    case ORDER_LIST_SHIPPER_SUCCESS:
      return { loading: false, orders: action.payload };
    case ORDER_LIST_SHIPPER_FAIL:
      return { loading: false, error: action.payload };
    case ORDER_LIST_SHIPPER_RESET:
      return { orders: [] };
    default:
      return state;
  }
};
