import { combineReducers } from "redux";
import { IbanReducer } from "./ibanReducer";
import { kybReducer } from "./kybReducer";
import { ciReducer } from "./ciReducer";
import { ctiReducer } from "./ctiReducer";
import { clReducer } from "./clReducer";
import { SpareReducer } from "./spareReducer";
import { NotesReducer } from "./notesReducer";
import { kycReducer } from "./kycReducer";
import { sdReducer } from "./sdReducer";
import { appReducer } from "./appReducer";
import { contactReducer } from "./contactReducer";
import { solReducer } from "./solutionNavReducer";
import { solParamsReducer } from "./solutionNavparamsReducer";
import { APPWReducer } from "./PreAppWork";
import { clientReducer } from "./clientReducer";
export default combineReducers({
  IbanReducer,
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
  SpareReducer,
  NotesReducer,
  APPWReducer,
  clientReducer,
});
