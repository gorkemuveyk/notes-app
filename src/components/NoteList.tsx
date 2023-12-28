import NoteItem from "./NoteItem";
import { useAppSelector } from "../app/hooks";
import { useNotes } from "../redux/notesSlice";

const NoteList: React.FC = () => {
  const items = useAppSelector(useNotes);
  const filteredItem = useAppSelector((state) => state.notes.filteredItem);

  const filteredItems = items.filter((item) =>
    item.text
      .toLocaleLowerCase("tr-TR")
      .includes(filteredItem.toLocaleLowerCase("tr-TR"))
  );

  return (
    <div className="mt-5 w-full sm:w-[650px] mx-auto rounded flex justify-center items-center flex-wrap">
      {filteredItem.length > 0 ? (
        filteredItems.length > 0 ? (
          filteredItems.map((item) => <NoteItem key={item.id} item={item} />)
        ) : (
          <p className="text-3xl">Not Found</p>
        )
      ) : (
        items.map((item) => <NoteItem key={item.id} item={item} />)
      )}
    </div>
  );
};

export default NoteList;
