
// import { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import Container from './components/Container';



const App =() => {

  // const contacts = useSelector(state => state.contacts.items);

  // const formSubmitHandler = contact => {
  //   setContacts(prevState => [contact, ...prevState]);
  //   setFilter('');
  // };

  // // formSubmitHandler = ({ name, number }) => {
  // //   if (!name || !number) return;

    
  // //   const contactNames = userContact.map(contact => contact.name.toLowerCase());
  // //   if (contactNames.includes(name.toLowerCase())) {
  // //     alert(`${name} is already in contacts.`);
  // //     return;
  // //   }

  // //   const contact = {
  // //     id: shortId.generate(),
  // //     name,
  // //     number,
  // //   };
  // //   setUserContact(prevState => {
  // //     return {
  // //       contacts: [...prevState.contacts, contact],
  // //     };
  // //   });
  // // };

  // const changeFilter = e => {
  //   setFilter({ filter: e.target.value });
  // };

  // const getFilteredContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter),
  //   );
  // };

  // const deleteContact = id => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== id),
  //   }));
  // };

  

    
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList/>
      </Container>
    );
  }


export default App;