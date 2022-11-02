import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productDetailsReducer, productListReducer } from "./Reducer/ProductReducers";
import { userLoginReducer, userRegisterReducer } from "./Reducer/userReducers";
import { cartReducer } from "./Reducer/CartReducers";

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    cart: cartReducer,
}) 

// cart
const cartItemsFromLocalStorage = localStorage.getItem("cartItem") 
? JSON.parse(localStorage.getItem("cartItems"))
: [];

//login
const userInfoFromLocalStorage = localStorage.getItem("userInfo") 
? JSON.parse(localStorage.getItem("userInfo"))
: null;

// initial state
const initialState = {
    userLogin: { 
        userInfo: userInfoFromLocalStorage 
    },
    cart: {
        cartItems: cartItemsFromLocalStorage,
    },
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);



export default store;