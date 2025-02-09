import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [{ id: "id-1", name: "Rosie Simpson", number: "459-12-56" }],
};

export const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const selectContacts = (state) => state.contacts.items;

export const contactsReducer = slice.reducer;
export const { deleteContact, addContact } = slice.actions;
