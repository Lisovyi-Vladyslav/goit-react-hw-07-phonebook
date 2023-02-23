import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { nanoid } from "nanoid";

axios.defaults.baseURL = "https://63f5db339daf59d1ad7cb825.mockapi.io/contacts";

export const fetchContacts  = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
        const response = await axios.get("/contacts");
        // console.log(response)
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact  = createAsyncThunk(
  "contacts/addTask",
  async ({avatar ,name}, thunkAPI) => {
    try {
      
      const response = await axios.post("/contacts", { avatar ,name, id: nanoid() });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact  = createAsyncThunk(
  "contacts/deleteTask",
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${taskId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


