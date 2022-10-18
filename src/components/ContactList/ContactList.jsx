
import { Ul } from './ContactList.styled';
import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { selectFilters, selectContacts } from "redux/selectors";
import { ContactLi} from '../ContactLi/ContactLi';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getVizibleContacts = (contacts, filter) => {
    const normalizedFilter = filter
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filter = useSelector(selectFilters).filter;

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