
import { useDispatch } from "react-redux";
import { Li, Button } from '../ContactList/ContactList.styled';
import { deleteContacts } from 'redux/contacts/operations'

export const ContactLi = ({ contacts: { name, number, id } }) => {
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    dispatch(deleteContacts(id));
    e.currentTarget.disabled = true;
    e.currentTarget.classList.add('diasable');
  }



  return (
      <Li key={id}>
        <p>
          {name} : <span> {number} </span>
        </p>
        <Button onClick={(e) => handleDelete(e)}
          type="button"
        >
          Delete
        </Button>
      </Li>)
};


