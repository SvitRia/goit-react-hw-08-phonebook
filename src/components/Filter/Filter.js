import { Input } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {

  const dispatch = useDispatch();
  const filterName = useSelector(selectFilter).name;

  return (
    <div>
      <h2><b>Find contact by name</b></h2>
      <Input bg="bisque_lite"
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
