import { useDispatch, useSelector } from 'react-redux';
import { setContactsFilter } from 'redux/filtersSlice';
import css from './Filter.module.css';


export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  const handleFilterChange = (event) => {
    dispatch(setContactsFilter(event.target.value));
  };

    return (
      <label className={css.label}>
        Filter contacts by name:
        <input className={css.text} type="text" value={filter} onChange={handleFilterChange} />
      </label>
    );
  }

