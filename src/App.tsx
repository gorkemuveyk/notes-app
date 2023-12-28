import "./App.css";
import Header from "./components/Header";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import Search from "./components/Search";

function App() {
  return (
    <div>
      <div className="p-2 max-w-[500px] mx-auto">
        <Header />
        <NoteForm />
        <Search />
      </div>
      <NoteList />
    </div>
  );
}

export default App;
