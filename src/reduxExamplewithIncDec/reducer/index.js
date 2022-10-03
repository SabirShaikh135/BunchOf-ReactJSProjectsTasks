import IncDecReducer from "./IncDecReducer";
import editTextFieldWithRedux from "./editTextFieldWithRedux"
import { combineReducers } from "redux";
const rootReducer=combineReducers({
    IncDecReducer,editTextFieldWithRedux
})

export default rootReducer;