import {useState} from "react";
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

  const [ inputValue, setInputValue ] = useState('');

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if( inputValue.trim().length >= 3 ) {
      setCategories(ctgs => [ inputValue, ...ctgs ]);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="inpCategory">
        <span>Search gif</span>
        <input
          type="text"
          id="inpCategory"
          className="inp-search"
          placeholder="Type some..."
          value={ inputValue }
          onChange={ handleInputChange }
        />
      </label>
    </form>
  )
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
}

export default AddCategory;
