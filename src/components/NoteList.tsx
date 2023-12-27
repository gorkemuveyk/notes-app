import NoteItem from "./NoteItem";

const NoteList = () => {
  return (
    <div className="mt-5 w-full rounded flex justify-center items-center flex-wrap">
      <NoteItem />
      <NoteItem />
      <NoteItem />
      <NoteItem />
      <NoteItem />
    </div>
  );
};

export default NoteList;
