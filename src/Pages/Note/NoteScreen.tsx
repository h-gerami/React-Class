import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NoteInput from "../../Common/SearchBar/NoteInput";
import { addNote, deleteNote } from "../../Redux/Actions/NoteAction";
import { RootReducerType } from "../../Redux/Reducers";
const NoteScreen = () => {
  const noteData = useSelector(
    (state: RootReducerType) => state.note.noteArray
  );
  const note = useSelector((state: RootReducerType) => state.note.note);
  const dispatch = useDispatch();
  const onSubmitNote = () => {
    // dispatch({ type: "ADD_NOTE", payload: note });
    dispatch(addNote(note));
  };
  const onDeleteNoteClick = (t: string) => {
    dispatch(deleteNote(t));
  };
  const onChangeText = (t: string) => {
    dispatch({ type: "SET_NOTE", payload: t });
  };
  return (
    <div className="container">
      <NoteInput
        label="Write Your Note ..."
        onFormSubmit={() => onSubmitNote()}
        buttonText="Submit"
        onChangeText={onChangeText}
        value={note}
      />
      {noteData.map((item) => {
        return (
          <p
            className="note-p"
            onClick={() => onDeleteNoteClick(item)}
            key={item}
          >
            {item}
          </p>
        );
      })}
    </div>
  );
};
export default NoteScreen;
