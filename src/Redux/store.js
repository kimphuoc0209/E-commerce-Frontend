import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productDetailsReducer, productListReducer } from "./Reducer/ProductReducers";
import { userDetailsReducer, userLoginReducer, userRegisterReducer } from "./Reducer/userReducers";

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails:userDetailsReducer
}) 

//login
const userInfoFromLocalStorage = localStorage.getItem("userInfo") 
? JSON.parse(localStorage.getItem("userInfo"))
: null;

const initialState = {
    userLogin: { userInfo: userInfoFromLocalStorage },
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);



export default store;