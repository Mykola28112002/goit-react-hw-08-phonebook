
import { useDispatch } from "react-redux";
import { Li, Button } from '../ContactList/ContactList.styled';
import { deleteContacts } from 'redux/operations'

export const ContactLi = ({ contacts: { name, phone, id } }) => {
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    dispatch(deleteContacts(id));
    e.currentTarget.disabled = true;
    e.currentTarget.classList.add('diasable');
  }



  return (
      <Li key={id}>
        <p>
          {name} : <span> {phone} </span>
        </p>
        <Button onClick={(e) => handleDelete(e)}
          type="button"
        >
          Delete
        </Button>
      </Li>)
};


