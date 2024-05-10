import { legacy_createStore as createStore} from 'redux'
import { combineReducers } from "redux";
import { jobReducer } from "./redux/jobs/reducer";

const rootReducer = combineReducers({
    jobReducer,
})

const store = createStore(rootReducer);

export default store;
