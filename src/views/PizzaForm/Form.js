import { useState } from 'react';
import './Form.css';
import Button from '../../components/ui/Button';
const Form = () => {
  // States

  // Handlers
  const submitHandler = (event) => {
    event.preventDefault();
    alert('Submitted!');
  };
  return (
    <form id="pizza-form" onSubmit={submitHandler}>
      <section className="form__container">
        <h2 className="form__header">Build Your Own Pizza</h2>
        <section>
          <label htmlFor="full_name">
            <h3>Name</h3>
          </label>
          <input type="text" name="full_name" id="name-input" />
        </section>
        {/* Pizza size */}
        <section>
          <label htmlFor="size">
            <h3>Choice of size</h3>
            <p>Required *</p>
          </label>
          <select name="size" id="">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </section>
        {/* Pizza sauce */}
        <section>
          <label htmlFor="sauce">
            <h3>Choice of Sauce</h3>
            <p>Required *</p>
          </label>
          <input type="radio" name="sauce" value="original_red" />
          <label htmlFor="sauce">Original Red</label>
          <br />
          <input type="radio" name="sauce" value="garlic_ranch" />
          <label htmlFor="sauce">Garlic Ranch</label>
          <br />
          <input type="radio" name="sauce" value="bbq_sauce" />
          <label htmlFor="sauce">BBQ Sauce</label>
          <br />
          <input type="radio" name="sauce" value="spinach_alfredo" />
          <label htmlFor="sauce">Spinach Alfredo</label>
        </section>
        {/* Pizza toppings */}
        <section>
          <label htmlFor="toppings">
            <h3>Add toppings</h3>
            <p>Choose up to 10</p>
          </label>
          <div className="form__container--toppings">
            <label htmlFor="toppings" className="topping">
              <input type="checkbox" name="toppings" value="pepperoni" />
              Pepperoni
            </label>
            <label htmlFor="toppings" className="topping">
              <input type="checkbox" name="toppings" value="diced_tomatoes" />
              Diced Tomatoes
            </label>{' '}
            <label htmlFor="toppings" className="topping">
              <input type="checkbox" name="toppings" value="sausage" />
              Sausage
            </label>{' '}
            <label htmlFor="toppings" className="topping">
              <input type="checkbox" name="toppings" value="black_olives" />
              Black Olives
            </label>{' '}
            <label htmlFor="toppings" className="topping">
              <input type="checkbox" name="toppings" value="canadian_bacon" />
              Canadian Bacon
            </label>{' '}
            <label htmlFor="toppings" className="topping">
              <input type="checkbox" name="toppings" value="roasted_garlic" />
              Roasted Garlic
            </label>{' '}
            <label htmlFor="toppings" className="topping">
              <input
                type="checkbox"
                name="toppings"
                value="spicy_italian_sausage"
              />
              Spicy Italian Sausage
            </label>{' '}
            <label htmlFor="toppings" className="topping">
              <input type="checkbox" name="toppings" value="artichoke_hearts" />
              Artichoke Hearts
            </label>{' '}
            <label htmlFor="toppings" className="topping">
              <input type="checkbox" name="toppings" value="vegan_chicken" />
              Vegan Chicken
            </label>{' '}
            <label htmlFor="toppings" className="topping">
              <input type="checkbox" name="toppings" value="tofu" />
              Tofu
            </label>
          </div>
        </section>
        {/* Substitute */}
        <section>
          <h3>Choice of Substitute</h3>
          <p>Choose up to one</p>
          <input type="checkbox" name="substitute" />
          <label htmlFor="substitute">Gluten Free Crust (+ $1.00)</label>
        </section>
        <section>
          <h3>Special Instructions</h3>
          <input
            type="text"
            placeholder="Anything else you'd like to have?"
            className="form__instructions"
          />
        </section>
        <section style={{ marginTop: '10px' }}>
          <input type="number" />
          <Button type="primary">Add to Order</Button>
        </section>
      </section>
    </form>
  );
};

export default Form;
