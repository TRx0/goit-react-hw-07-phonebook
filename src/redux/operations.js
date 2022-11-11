import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, addContactWithName, deleteContactById } from 'fetchAPI';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await getContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const contact = await addContactWithName(name, number);
      return contact;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    try {
      const contacts = await deleteContactById(contactId);
      return contacts;
    } catch (error) {
      return error;
    }
  }
);