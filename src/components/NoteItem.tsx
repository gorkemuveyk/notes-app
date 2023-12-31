import { useAppDispatch, useAppSelector } from "../app/hooks";
import { deleteNote, useColors } from "../redux/notesSlice";
import { MdDelete } from "react-icons/md";

interface Note {
  item: { id: string; text: string; color: number };
}

const NoteItem = ({ item }: Note) => {
  const colors = useAppSelector(useColors);
  const dispatch = useAppDispatch();

  return (
    <div
      style={{ backgroundColor: colors[item.color] }}
      className="w-fit m-0.5 px-10 py-6 rounded shadow relative"
    >
      <div className="flex items-center justify-center">
        <p>{item.text}</p>
      </div>
      <div className="absolute right-0.5 top-0.5 text-md cursor-pointer flex">
        <span onClick={() => dispatch(deleteNote(item.id))}>
          <MdDelete />
        </span>
      </div>
    </div>
  );
};

export default NoteItem;
