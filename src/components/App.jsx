import { useState, useEffect } from 'react';

import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';


export default function App() {
  const initialValues = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useState(() => {
    const localData = localStorage.getItem('contact');
    return localData ? JSON.parse(localData) : initialValues;
  });

  const [filterValue, setFiletrValue] = useState('');

  useEffect(() => {
    localStorage.setItem('contact', JSON.stringify(contacts));
  }, [contacts]);

  const filterContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filterValue.toLowerCase()))

  return (
    <div>
      <h1>Phonebook</h1>
      {/* <ContactForm /> */}
      <SearchBox filterValue={filterValue} setFiletrValue={setFiletrValue} />
      <ContactList data={filterContacts} />
    </div>
  );
}
