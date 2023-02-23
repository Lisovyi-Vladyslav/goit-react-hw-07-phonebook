import {useDispatch} from 'react-redux';
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { useEffect } from 'react';
import { fetchContacts } from 'redux/users.operations';


export function App() {
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(fetchContacts());
    
  }, [dispatch]);



  return (
    <>
      
         <div>
   <h1>Phonebook</h1>
           <ContactForm />

   <h2>Contacts</h2>
           <Filter /> 
           <ContactList  />
         </div> 
      </>
        
  )
}
