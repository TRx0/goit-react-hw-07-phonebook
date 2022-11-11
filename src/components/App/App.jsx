import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import { Container, PageTitle, ContactsTitle, LoaderText } from './App.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

const App = function () {
  const { isLoading } = useSelector(getContacts);
  return (
    <Container>
      <PageTitle>Phonebook</PageTitle>
      <ContactForm />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      {isLoading && <LoaderText>Waiting...</LoaderText>}

      <ContactList />
    </Container>
  );
};

export default App;