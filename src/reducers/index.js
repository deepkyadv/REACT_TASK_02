import changeTheNumber from "./UpDown";

import { combineReducers } from "redux";

const rootReducers = combineReducers({
    changeTheNumber: changeTheNumber
});

export default rootReducers;