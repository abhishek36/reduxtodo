import axios from "axios";
import todoslice from "./todoslice";

export const getTodos = async () => {
  const response = await axios.get("/api/todo");
  return response.data;
};

export const removeTodos = async (id) => {
  const response = await axios.delete("/api/todo/" + id);
  return response.data;
};

export const saveTodos = async (formData) => {
  const response = await axios.post("/api/todo/", formData);
  return response.data;
};

export const upadteTodosDB = async (todos) => {
  const response = await axios.put("/api/todo/" + todos._id, todos);
  return response.data;
};
