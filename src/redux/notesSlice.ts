import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface Note {
  id: string;
  text: string;
  color: number;
}

interface NotesState {
  notes: Note[];
  activeColor: number;
  colors: string[];
  color: number;
  filteredItem: string;
}

const allItems = Object.entries(localStorage) || [];
const storedActiveColor = localStorage.getItem("activeColor");

const initialActiveColor = storedActiveColor
  ? parseInt(storedActiveColor, 10)
  : 0;

const initialState: NotesState = {
  notes: allItems
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .filter(([key, value]) => key.includes("note"))
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .map(([key, value]) => JSON.parse(value)),
  activeColor: initialActiveColor,
  colors: ["#11009E", "#BF3131", "#200E3A", "#FB8B24", "#65B741"],
  color: 0,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  filteredItem: "",
};

localStorage.setItem("activeColor", JSON.stringify(initialState.activeColor));

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
      localStorage.setItem(
        `note-${action.payload.id}`,
        JSON.stringify(action.payload)
      );
    },

    deleteNote: (state, action) => {
      const itemID = state.notes.findIndex(
        (note) => note.id === action.payload
      );
      state.notes.splice(itemID, 1);
      localStorage.removeItem(`note-${action.payload}`);
    },

    changeColor: (state, action) => {
      state.activeColor = action.payload;
      localStorage.setItem("activeColor", JSON.stringify(state.activeColor));
    },

    searchItem: (state, action) => {
      state.filteredItem = action.payload.toLocaleLowerCase("tr-TR");
    },
  },
});

export const useColors = (state: RootState) => state.notes.colors;
export const useActiveColor = (state: RootState) => state.notes.activeColor;
export const useNotes = (state: RootState) => state.notes.notes;
export const { addNote, deleteNote, changeColor, searchItem } =
  notesSlice.actions;
export default notesSlice.reducer;
