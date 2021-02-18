import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../actions';

const StatusFilter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <select name="filter" id="filter" onChange={handleChange}>
      {filter.possible.map((possibleFilter, index) => (
        <option value={possibleFilter} key={String(index)}>
          {possibleFilter}
        </option>
      ))}
    </select>
  );
};

export default StatusFilter;
