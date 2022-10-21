
import { Ul } from './ContactList.styled';
import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";
import { selectFilters, selectContacts } from "redux/contacts/selectors";
import { ContactLi} from '../ContactLi/ContactLi';

export const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilters).filter.filter;
  
  

  const getVizibleContacts = (contacts, filter) => {
    const normalizedFilter = filter
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  

  const vizibleContacts = getVizibleContacts(contacts, filter);
 
  if (vizibleContacts.length !== 0) {
    return (<Ul>
    {vizibleContacts.map((contacts) => (<ContactLi contacts={contacts}  key={contacts.id} />))}
  </Ul>)
  }
  
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};