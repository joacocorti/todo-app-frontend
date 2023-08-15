import axios, { AxiosResponse } from "axios";

const baseUrl = "http://localhost:5000";

interface Todo {
  _id?: string;
  text: string;
  description: string;
  status: string;
}

type SetStateFunction<T> = React.Dispatch<React.SetStateAction<T>>;

const getAllToDo = (setToDo: SetStateFunction<Todo[]>): void => {
  axios.get<Todo[]>(baseUrl).then(({ data }) => {
    console.log("data -->", data);
    setToDo(data);
  });
};

const addToDo = (
  text: string,
  description: string,
  status: string,
  setStatus: SetStateFunction<string>,
  setDescription: SetStateFunction<string>,
  setText: SetStateFunction<string>,
  setToDo: SetStateFunction<Todo[]>
): void => {
  axios
    .post<AxiosResponse>(`${baseUrl}/save`, { text, description, status })
    .then((data) => {
      setText("");
      setDescription("");
      setStatus("Por Hacer");
      getAllToDo(setToDo);
    });
};

const updateToDo = (
  toDoId: string,
  text: string,
  description: string,
  status: string,
  setStatus: SetStateFunction<string>,
  setDescription: SetStateFunction<string>,
  setToDo: SetStateFunction<Todo[]>,
  setText: SetStateFunction<string>,
  setIsUpdating: SetStateFunction<boolean>
): void => {
  axios
    .post(`${baseUrl}/update`, {
      _id: toDoId,
      text,
      description,
      status: status,
    })
    .then((data) => {
      console.log(data);
      setText("");
      setDescription("");
      setStatus("Por Hacer");
      setIsUpdating(false);
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const deleteToDo = (_id: string, setToDo: SetStateFunction<Todo[]>): void => {
  axios
    .post(`${baseUrl}/delete`, { _id })
    .then((data) => {
      console.log(data);
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
