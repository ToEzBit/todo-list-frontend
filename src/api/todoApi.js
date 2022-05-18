import axios from "axios";

export const getAllTodoAPI = async () => {
  const res = await axios.get("/todos");
  return res.data;
};

export const createTodoAPI = async (title) => {
  const res = await axios.post("/todos/create", { title, completed: false });
  return res.data;
};

export const removeTodoAPI = async (id) => {
  await axios.delete(`/todos/${id}`);
};

export const updateTodoApi = async (id, newValue) => {
  await axios.put(`/todos/${id}`, newValue);
};
