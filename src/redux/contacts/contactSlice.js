
import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts,addContacts,deleteContacts } from "./operations";

const handlePending = state => {
  console.log(state)
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  console.log(state)
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
      console.log(state.items)
      
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContacts.pending]: handlePending,
    [addContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      console.log(action.payload);
      console.log(state.items)
      state.items.push(action.payload);
    },
    [addContacts.rejected]: handleRejected,
    [deleteContacts.pending]: handlePending,
    [deleteContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      console.log(state.items);
      console.log(action);
      const index = state.items.findIndex(contacts => contacts.id === action.requestId);
      console.log(index);
      state.items.splice(index, 1);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;