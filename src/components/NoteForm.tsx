const NoteForm = () => {
  return (
    <div className=" bg-opacity-50 border-[#161A30] flex flex-col justify-center shadow-md border rounded">
      <textarea
        cols={30}
        rows={10}
        className="resize-none outline-none w-full p-2 h-[170px] text-white bg-[#161A30] bg-opacity-50 border-[#161A30]"
        placeholder="Enter a new note"
      ></textarea>
      <div className="flex justify-between p-1">
        <div className="flex gap-1 justify-center items-center ">
          <div className="cursor-pointer w-[25px] h-[25px] bg-[#176B87] rounded-full selected"></div>
          <div className="cursor-pointer w-[25px] h-[25px] bg-[#FFB534]  rounded-full"></div>
          <div className="cursor-pointer w-[25px] h-[25px] bg-[#BF3131]  rounded-full"></div>
          <div className="cursor-pointer w-[25px] h-[25px] bg-[#DED0B6]  rounded-full"></div>
          <div className="cursor-pointer w-[25px] h-[25px] bg-[#65B741]  rounded-full"></div>
          <div className="cursor-pointer w-[25px] h-[25px] bg-gradient-to-tr from-[#B80000] via-[#597E52] to-[#38419D]  rounded-full"></div>
        </div>
        <button className="bg-[#EA1179] text-[#fff] px-2 py-1 rounded-3xl text-sm cursor-pointer">
          Add Note
        </button>
      </div>
    </div>
  );
};

export default NoteForm;
