import { useState } from 'react';
import './Form.css';
import Button from '../../components/ui/Button';
const Form = () => {
  // States
  const [formData, setFormData] = useState({
    fullName: '',
    size: 'small',
    sauce: '',
    toppings: [],
    substitute: false,
  });
  // Handlers
  const submitHandler = (event) => {
    event.preventDefault();
    alert('Submitted!');
  };

  const inputChangeHandler = (event) => {
    const { name, value, type, checked } = event.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: valueToUse });
  };

  const toppingChangeHandler = (event) => {
    const { type, checked, value } = event.target;
    const { toppings } = formData;
    if (checked && type === 'checkbox') {
      setFormData({ ...formData, toppings: [...toppings, value] });
    } else {
      setFormData({
        ...formData,
        toppings: toppings.filter((e) => e !== value),
      });
    }
  };

  return (
    <form id='pizza-form' onSubmit={submitHandler}>
      <section className='form__container'>
        <h2 className='form__header'>Build Your Own Pizza</h2>
        <section>
          <label htmlFor='fullName'>
            <h3>Name</h3>
          </label>
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
          <select name='size' id='' onChange={inputChangeHandler}>
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
            value='bbq_sauce'
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
                name='toppings'
                value='pepperoni'
                onChange={toppingChangeHandler}
              />
              Pepperoni
            </label>
            <label htmlFor='toppings' className='topping'>
              <input
                type='checkbox'
                name='toppings'
                value='dicedTomatoes'
                onChange={toppingChangeHandler}
              />
              Diced Tomatoes
            </label>{' '}
            <label htmlFor='toppings' className='topping'>
              <input
                type='checkbox'
                name='toppings'
                value='sausage'
                onChange={toppingChangeHandler}
              />
              Sausage
            </label>{' '}
            <label htmlFor='toppings' className='topping'>
              <input
                type='checkbox'
                name='toppings'
                value='blackOlives'
                onChange={toppingChangeHandler}
              />
              Black Olives
            </label>{' '}
            <label htmlFor='toppings' className='topping'>
              <input
                type='checkbox'
                name='toppings'
                value='canadianBacon'
                onChange={toppingChangeHandler}
              />
              Canadian Bacon
            </label>{' '}
            <label htmlFor='toppings' className='topping'>
              <input
                type='checkbox'
                name='toppings'
                value='roastedGarlic'
                onChange={toppingChangeHandler}
              />
              Roasted Garlic
            </label>{' '}
            <label htmlFor='toppings' className='topping'>
              <input
                type='checkbox'
                name='toppings'
                value='spicyItalianSausage'
                onChange={toppingChangeHandler}
              />
              Spicy Italian Sausage
            </label>{' '}
            <label htmlFor='toppings' className='topping'>
              <input
                type='checkbox'
                name='toppings'
                value='artichokeHearts'
                onChange={toppingChangeHandler}
              />
              Artichoke Hearts
            </label>{' '}
            <label htmlFor='toppings' className='topping'>
              <input
                type='checkbox'
                name='toppings'
                value='veganChicken'
                onChange={toppingChangeHandler}
              />
              Vegan Chicken
            </label>{' '}
            <label htmlFor='toppings' className='topping'>
              <input
                type='checkbox'
                name='toppings'
                value='tofu'
                onChange={toppingChangeHandler}
              />
              Tofu
            </label>
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
            placeholder="Anything else you'd like to have?"
            className='form__instructions'
          />
        </section>
        <section style={{ marginTop: '10px' }}>
          <input type='number' />
          <Button type='primary'>Add to Order</Button>
        </section>
      </section>
    </form>
  );
};

export default Form;
