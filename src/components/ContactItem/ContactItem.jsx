import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Contact, DeleteBtn } from './ContactItem.styled';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onBtnDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <Contact>
      <p>
        {name} : {number}
      </p>
      <DeleteBtn type="button" onClick={onBtnDelete}>
        Delete
      </DeleteBtn>
    </Contact>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

