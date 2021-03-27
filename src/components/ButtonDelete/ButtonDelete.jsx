import { useDispatch } from 'react-redux';
import { deleteContact } from "../../redux/contacts/contact-action";

const  ButtonDelete = ({ id }) => {
  const dispatch = useDispatch();
  return <button
      type="button"
      // className={buttonDelete}
      onClick={() => dispatch(deleteContact(id))}>Delete
  </button>
};

export default ButtonDelete;