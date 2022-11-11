import axios from 'axios';

axios.defaults.baseURL = 'https://636cdb16ab4814f2b2703338.mockapi.io/';

export async function getContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export async function addContactWithName(name, number) {
  const newContact = { name: name, phone: number };
  const { data } = await axios.post(`/contacts`, newContact);
  return data;
}

export async function deleteContactById(contactId) {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
}