import { useState } from "react";
import {
  addNote,
  changeColor,
  useActiveColor,
  useColors,
} from "../redux/notesSlice";
import { nanoid } from "nanoid";
import { useAppSelector, useAppDispatch } from "../app/hooks";

const NoteForm = () => {
  const [noteText, setNoteText] = useState("");
  const dispatch = useAppDispatch();
  const colors = useAppSelector(useColors);
  const activeColor = useAppSelector(useActiveColor);

  const handleChange = () => {
    if (!noteText) return;

    dispatch(addNote({ id: nanoid(), text: noteText, color: activeColor }));
    setNoteText("");
  };

  return (
    <div className=" bg-opacity-50 border-[#161A30] flex flex-col justify-center shadow-md border rounded">
      <textarea
        cols={30}
        rows={10}
        className="resize-none outline-none w-full p-2 h-[170px] text-white bg-[#161A30] bg-opacity-50 border-[#161A30]"
        placeholder="Enter a new note"
        onChange={(e) => setNoteText(e.target.value)}
        value={noteText}
      ></textarea>
      <div className="flex justify-between p-1">
        <div className="flex gap-1 justify-center items-center ">
          {colors.map((color, index) => (
            <div
              key={index}
              style={{ backgroundColor: color }}
              onClick={() => dispatch(changeColor(index))}
              className={`cursor-pointer w-[25px] h-[25px] rounded-full ${
                activeColor === index ? "selected" : ""
              }`}
            ></div>
          ))}
        </div>
        <button
          className="bg-[#EA1179] text-[#fff] px-2 py-1 rounded-3xl text-sm cursor-pointer"
          onClick={() => handleChange()}
        >
          Add Note
        </button>
      </div>
    </div>
  );
};

export default NoteForm;
