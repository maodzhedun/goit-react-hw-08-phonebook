import { useSelector, useDispatch } from 'react-redux';
import { setFilter, selectFilter } from '../../redux/filterSlice';
import { Filtered } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilter = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <Filtered>
      Find contacts by name
      <input type="text" name="filter" value={filter} onChange={handleFilter} />
    </Filtered>
  );
};

export default Filter;
