import { combineReducers } from "redux";
import { completedReducer } from "./completedReducer";
import { kybReducer } from "./kybReducer";
import { ciReducer } from "./ciReducer";
import { ctiReducer } from "./ctiReducer";
import { clReducer } from "./clReducer";
import { SpareReducer } from "./spareReducer";
import { kycReducer } from "./kycReducer";
import { sdReducer } from "./sdReducer";
import { appReducer } from "./appReducer";
import { contactReducer } from "./contactReducer";
import { solReducer } from "./solutionNavReducer";
import { solParamsReducer } from "./solutionNavparamsReducer";
export default combineReducers({
  completedReducer,
  kybReducer,
  ciReducer,
  ctiReducer,
  clReducer,
  kycReducer,
  sdReducer,
  appReducer,
  contactReducer,
  solReducer,
  solParamsReducer,
  SpareReducer
});
