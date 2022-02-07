import { combineReducers } from "redux";
import { NoteReducer } from "./NoteReducer";

export const rootReducer = combineReducers({
  note: NoteReducer,
});
export type RootReducerType = ReturnType<typeof rootReducer>;
