// State in the store is read only.
// Whenever you need to change/update the state of your Redux application, you need to dispatch an action.
// all the state of an application must be stored in a single store
// To specify how the state tree is transformed by actions, you write pure reducers.
import { configureStore } from "@reduxjs/toolkit";

const Store=configureStore({
         reducer:{

         }
})
export default Store;