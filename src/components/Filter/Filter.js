// import { FilterInput } from './Filter.styled';
import { Input } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {

  const dispatch = useDispatch();
  const filterName = useSelector(selectFilter).name;

  return (
    <div>
      <h3>Find contact by name</h3>
      <Input
        type="text"
        name="filter"
        value={filterName}
        onChange={({ currentTarget: { value } }) =>
          dispatch(setFilter(value))
        }
        placeholder="Filter by name..."
      />
    </div>
  );
};
