import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducers/cartReducer";

const store = configureStore({
	reducer: cartReducer,
	// additional options
});

// const store = createStore(cartReducer);
export default store;
