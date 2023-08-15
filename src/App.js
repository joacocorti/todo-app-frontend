import { useEffect, useState } from "react";
import ToDo from "./component/ToDo.tsx";
import { addToDo, getAllToDo, updateToDo, deleteToDo } from "./utils/HandleApi.tsx";

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");
  const [status, setStatus] = useState("Por Hacer");
  const [filterText, setFilterText] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [sortBy, setSortBy] = useState("text");


  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id, text, description, status) => {
    setIsUpdating(true);
    setText(text);
    setDescription(description);
    setStatus(status);
    setToDoId(_id);
  };
  const sortedToDo = toDo.sort((a, b) => {
    if (sortBy === "text") {
      return a.text.localeCompare(b.text);
    } else if (sortBy === "createdAt") {
      return new Date(b.createdAt) - new Date(a.createdAt); // más recientes primero
    }
    return 0;
  });


  return (
    <div className="App">
      <div class="container">
        <h1>ToDo App</h1>
        <div className="filter-section">
          <input
            type="text"
            placeholder="Filter by name..."
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
          />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="">All Statuses</option>
            <option value="Por Hacer">Por Hacer</option>
            <option value="En Progreso">En Progreso</option>
            <option value="Completada">Completada</option>
          </select>
        </div>
        <div className="top">
          <input
            type="text"
            placeholder="Add ToDo Title..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type="text"
            placeholder="Add ToDo Description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Por Hacer">Por Hacer</option>
            <option value="En Progreso">En Progreso</option>
            <option value="Completada">Completada</option>
          </select>
          <div
            className="add"
            onClick={
              isUpdating
                ? () =>
                    updateToDo(
                      toDoId,
                      text,
                      description,
                      status,
                      setStatus,
                      setDescription,
                      setToDo,
                      setText,
                      setIsUpdating
                    )
                : () =>
                    addToDo(
                      text,
                      description,
                      status,
                      setStatus,
                      setDescription,
                      setText,
                      setToDo
                    )
            }
          >
            {isUpdating ? "Update" : "Add"}
          </div>
          <div className="sort-section">
            <label>Sort by: </label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="text">Name</option>
              <option value="createdAt">Date</option>
            </select>
          </div>
        </div>
        <div className="list">
          {sortedToDo
            .filter((item) =>
              item.text.toLowerCase().includes(filterText.toLowerCase())
            )
            .filter((item) => !filterStatus || item.status === filterStatus)
            .map((item) => (
              <ToDo
                key={item._id}
                text={item.text}
                description={item.description}
                status={item.status}
                createdAt={item.createdAt}
                updateMode={() =>
                  updateMode(item._id, item.text, item.description, item.status)
                }
                deleteToDo={() => deleteToDo(item._id, setToDo)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
