import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filterSlice';
import { nanoid } from 'nanoid';
import { FilterForm, FilterLabel, FilterInput } from './Filter.styled';

const Filter = () => {
  const filterInputId = nanoid();

  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <FilterForm>
      <FilterLabel htmlFor="inputId">Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        id={filterInputId}
        name="filter"
        value={filter}
        onChange={onChange}
      ></FilterInput>
    </FilterForm>
  );
};

export default Filter;