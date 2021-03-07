import { combineReducers } from "redux";
import { completedReducer } from "./completedReducer";
import { kybReducer } from "./kybReducer";
import { ciReducer } from "./ciReducer";
import { ctiReducer } from "./ctiReducer";
import { clReducer } from "./clReducer";
import { kycReducer } from "./kycReducer";
import { sdReducer } from "./sdReducer";
import { appReducer } from "./appReducer";
export default combineReducers({
  completedReducer,
  kybReducer,
  ciReducer,
  ctiReducer,
  clReducer,
  kycReducer,
  sdReducer,
  appReducer,
});
