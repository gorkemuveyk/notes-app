import { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { searchItem } from "../redux/notesSlice";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useAppDispatch();

  const handleChange = (data: string) => {
    setSearchText(data);
    dispatch(searchItem(data.toLocaleLowerCase("tr-TR")));
  };

  return (
    <input
      className="w-full p-2 rounded text-sm mt-5 outline-none border text-white bg-[#161A30] bg-opacity-50 border-[#161A30]"
      type="search"
      placeholder="Search.."
      value={searchText}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};

export default Search;
