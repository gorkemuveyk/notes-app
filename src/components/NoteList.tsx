import NoteItem from "./NoteItem";
import { useAppSelector } from "../app/hooks";

const NoteList: React.FC = () => {
  const items = useAppSelector((state) => state.notes.notes);
  return (
    <div className="mt-5 w-full sm:w-[650px] mx-auto rounded flex justify-center items-center flex-wrap">
      {items.map((item) => (
        <NoteItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default NoteList;
