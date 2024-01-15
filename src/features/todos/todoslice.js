import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTodos, removeTodos, saveTodos, upadteTodosDB } from "./todoService";

const todoslice = createSlice({
  name: "todos",
  initialState: {
    isLoading: false,
    isError: false,
    isSuccess: false,
    alltodos: [],
    edit: { todos: {}, isEdit: false },
  },

  reducers: {
    removeFromState: (state, action) => {
      return {
        ...state,
        alltodos: state.alltodos.filter((todo) => todo._id !== action.payload),
      };
    },

    editFromState: (state, action) => {
      return {
        ...state,
        edit: { todos: action.payload, isEdit: true },
      };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.alltodos = action.payload;
        state.isSuccess = true;
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(deleteTodos.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(deleteTodos.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(deleteTodos.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
      })
      .addCase(addTodos.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(addTodos.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.alltodos = [action.payload, ...state.alltodos];
      })
      .addCase(addTodos.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
      })
      .addCase(updateTodos.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(updateTodos.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.alltodos = state.alltodos.map((item) =>
          item._id === action.payload._id ? action.payload : item

          );
        state.edit = { todos: {}, isEdit: false };
      })
      .addCase(updateTodos.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
      });
  },
});

export default todoslice.reducer;
export const { removeFromState, editFromState } = todoslice.actions;
export const fetchTodos = createAsyncThunk("FETCH/TODOS", async () => {
  try {
    return await getTodos();
  } catch (error) {
    console.log(error);
  }
});

export const deleteTodos = createAsyncThunk("DELETE/TODOS", async (id) => {
  try {
    return await removeTodos(id);
  } catch (error) {
    console.log(error);
  }
});

export const addTodos = createAsyncThunk("ADD/TODOS", async (formData) => {
  try {
    return await saveTodos(formData);
  } catch (error) {
    console.log(error);
  }
});

export const updateTodos = createAsyncThunk("UPDATE/TODOS", async (todos) => {
  try {
    return await upadteTodosDB(todos);
  } catch (error) {
    console.log(error);
  }
});
