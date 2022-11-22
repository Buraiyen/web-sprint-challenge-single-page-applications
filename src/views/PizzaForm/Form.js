import { useState, useEffect } from 'react';
import './Form.css';
import * as yup from 'yup';
import axios from 'axios';

const Form = () => {
  // States
  const [formData, setFormData] = useState({
    fullName: '',
    size: 'small',
    sauce: '',
    topping1: false,
    topping2: false,
    topping3: false,
    topping4: false,
    substitute: false,
    special: '',
  });

  const [postData, setPostData] = useState([]);

  const [formErrors, setFormErrors] = useState({ fullName: '' });

  const [buttonDisabled, setButtonDisabled] = useState(true);
  // Form vaidation schema
  const formSchema = yup.object().shape({
    fullName: yup
      .string()
      .required('Must include a full name')
      .min(2, 'name must be at least 2 characters'),
    sauce: yup.string().required('Sauce is required'),
    size: yup.string(),
    topping1: yup.boolean(),
    topping2: yup.boolean(),
    topping3: yup.boolean(),
    topping4: yup.boolean(),
    substitute: yup.boolean(),
    special: yup.string(),
  });
  // Handlers
  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post('https://reqres.in/api/orders', formData)
      .then((res) => {
        setPostData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err.response));
  };

  const inputChangeHandler = (event) => {
    const { name, value, type, checked } = event.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    addFormErrors(name, value);
    setFormData({ ...formData, [name]: valueToUse });
  };

  const addFormErrors = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  useEffect(() => {
    formSchema.isValid(formData).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [formData]);

  return (
    <form id='pizza-form' onSubmit={submitHandler}>
      <section className='form__container'>
        <h2 className='form__header'>Build Your Own Pizza</h2>
        <section>
          <label htmlFor='fullName'>
            <h3>Name</h3>
          </label>
          <p>{formErrors.fullName}</p>
          <input
            type='text'
            name='fullName'
            id='name-input'
            onChange={inputChangeHandler}
          />
        </section>
        {/* Pizza size */}
        <section>
          <label htmlFor='size'>
            <h3>Choice of size</h3>
            <p>Required *</p>
          </label>
          <select name='size' id='size-dropdown' onChange={inputChangeHandler}>
            <option value='small'>Small</option>
            <option value='medium'>Medium</option>
            <option value='large'>Large</option>
          </select>
        </section>
        {/* Pizza sauce */}
        <section>
          <label htmlFor='sauce'>
            <h3>Choice of Sauce</h3>
            <p>Required *</p>
          </label>
          <input
            type='radio'
            name='sauce'
            value='originalRed'
            onChange={inputChangeHandler}
          />
          <label htmlFor='sauce'>Original Red</label>
          <br />
          <input
            type='radio'
            name='sauce'
            value='garlicRanch'
            onChange={inputChangeHandler}
          />
          <label htmlFor='sauce'>Garlic Ranch</label>
          <br />
          <input
            type='radio'
            name='sauce'
            value='bbqSauce'
            onChange={inputChangeHandler}
          />
          <label htmlFor='sauce'>BBQ Sauce</label>
          <br />
          <input
            type='radio'
            name='sauce'
            value='spinachAlfredo'
            onChange={inputChangeHandler}
          />
          <label htmlFor='sauce'>Spinach Alfredo</label>
        </section>
        {/* Pizza toppings */}
        <section>
          <label htmlFor='toppings'>
            <h3>Add toppings</h3>
            <p>Choose up to 8</p>
          </label>
          <div className='form__container--toppings'>
            <label htmlFor='toppings' className='topping'>
              <input
                type='checkbox'
                name='topping1'
                value='pepperoni'
                onChange={inputChangeHandler}
              />
              Pepperoni
            </label>
            <label htmlFor='toppings' className='topping'>
              <input
                type='checkbox'
                name='topping2'
                value='dicedTomatoes'
                onChange={inputChangeHandler}
              />
              Diced Tomatoes
            </label>{' '}
            <label htmlFor='toppings' className='topping'>
              <input
                type='checkbox'
                name='topping3'
                value='sausage'
                onChange={inputChangeHandler}
              />
              Sausage
            </label>{' '}
            <label htmlFor='toppings' className='topping'>
              <input
                type='checkbox'
                name='topping4'
                value='tofu'
                onChange={inputChangeHandler}
              />
              Sausage
            </label>{' '}
          </div>
        </section>
        {/* Substitute */}
        <section>
          <h3>Choice of Substitute</h3>
          <p>Choose up to one</p>
          <input
            type='checkbox'
            name='substitute'
            onChange={inputChangeHandler}
          />
          <label htmlFor='substitute'>Gluten Free Crust (+ $1.00)</label>
        </section>
        <section>
          <h3>Special Instructions</h3>
          <input
            type='text'
            id='special-text'
            name='special'
            placeholder="Anything else you'd like to have?"
            className='form__instructions'
            onChange={inputChangeHandler}
          />
        </section>
        <section style={{ marginTop: '10px' }}>
          <input type='number' />
          <button id='order-button' disabled={buttonDisabled}>
            Submit
          </button>
        </section>
      </section>
    </form>
  );
};

export default Form;
