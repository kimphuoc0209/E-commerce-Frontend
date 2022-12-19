import axios from "axios";
import {
  ORDER_LIST_SHIPPER_FAIL,
  ORDER_LIST_SHIPPER_REQUEST,
  ORDER_LIST_SHIPPER_SUCCESS,
  SHIPPER_CONFIRM_ORDER_FAIL,
  SHIPPER_CONFIRM_ORDER_REQUEST,
  SHIPPER_CONFIRM_ORDER_SUCCESS,
  SHIPPER_DELIVERED_ORDER_FAIL,
  SHIPPER_DELIVERED_ORDER_REQUEST,
  SHIPPER_DELIVERED_ORDER_SUCCESS,
  SHIPPER_GET_ORDERS_FAIL,
  SHIPPER_GET_ORDERS_REQUEST,
  SHIPPER_GET_ORDERS_SUCCESS,
  SHIPPER_PICK_ORDER_FAIL,
  SHIPPER_PICK_ORDER_REQUEST,
  SHIPPER_PICK_ORDER_SUCCESS,
  SHIPPER_REGISTER_FAIL,
  SHIPPER_REGISTER_REQUEST,
  SHIPPER_REGISTER_SUCCESS,
  SHIPPER_REGISTER_VERIFY,
  SHIPPER_SHIPPING_ORDER_FAIL,
  SHIPPER_SHIPPING_ORDER_REQUEST,
  SHIPPER_SHIPPING_ORDER_SUCCESS,
} from "../Constants/ShipperConstants";
import { logout } from "./userActions";

// Register
export const Register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: SHIPPER_REGISTER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `/api/users/shipper`,
      { name, email, password },
      config
    );
    dispatch({ type: SHIPPER_REGISTER_VERIFY });
    dispatch({ type: SHIPPER_REGISTER_SUCCESS, payload: data });

    // localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: SHIPPER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//ALL ORDERS
export const shipperListOrders = () => async (dispatch, getState) => {
  try {
    dispatch({ type: SHIPPER_GET_ORDERS_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`/api/shipper`, config);
    dispatch({ type: SHIPPER_GET_ORDERS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: SHIPPER_GET_ORDERS_FAIL,
      payload: message,
    });
  }
};

// SHIPPER CONFIRM
export const shipperConfirmOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({ type: SHIPPER_CONFIRM_ORDER_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.put(
      `/api/shipper/${order._id}/confirm`,
      {},
      config
    );
    dispatch({ type: SHIPPER_CONFIRM_ORDER_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: SHIPPER_CONFIRM_ORDER_FAIL,
      payload: message,
    });
  }
};

// SHIPPER PICKED
export const shipperPickOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({ type: SHIPPER_PICK_ORDER_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.put(
      `/api/shipper/${order._id}/isPicked`,
      {},
      config
    );
    dispatch({ type: SHIPPER_PICK_ORDER_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: SHIPPER_PICK_ORDER_FAIL,
      payload: message,
    });
  }
};

// SHIPPER SHIPPING
export const shipperShippingOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({ type: SHIPPER_SHIPPING_ORDER_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.put(
      `/api/shipper/${order._id}/shipping`,
      {},
      config
    );
    dispatch({ type: SHIPPER_SHIPPING_ORDER_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: SHIPPER_SHIPPING_ORDER_FAIL,
      payload: message,
    });
  }
};

// SHIPPER DELIVERED
export const shipperDeliveredOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({ type: SHIPPER_DELIVERED_ORDER_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.put(
      `/api/shipper/${order._id}/delivered`,
      {},
      config
    );
    dispatch({ type: SHIPPER_DELIVERED_ORDER_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: SHIPPER_DELIVERED_ORDER_FAIL,
      payload: message,
    });
  }
};

//SHIPPER ORDERs
export const listShipperOrders = () => async (dispatch, getState) => {
  try {
      dispatch({type: ORDER_LIST_SHIPPER_REQUEST })
  const {
      userLogin:{ userInfo },
  } = getState();
  
      const config = {
          headers: {
             Authorization: `Bearer ${userInfo.token}`
          },
      };
      const { data } = await axios.get( `/api/shipper/orders`, config);
      dispatch({ type: ORDER_LIST_SHIPPER_SUCCESS, payload: data });

  } catch (error) {
      const message = 
      error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if(message === "Not authorized, token failed"){
          dispatch(logout());
      }
      dispatch({
          type : ORDER_LIST_SHIPPER_FAIL,
          payload: message,
             
      });
  }
}
