import { Input, Label } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filtersSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    const value = e.currentTarget.value;
    dispatch(filterContacts(value));
    
  };

  return (
    <Label>
      Find contacts by name: 
      <Input onChange={onChangeFilter}
        type="text"
        name='filter'
      />
    </Label>
  );
};
