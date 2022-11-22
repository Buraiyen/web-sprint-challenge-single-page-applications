import './Form.css';
const Form = () => {
  const submitHandler = () => {
    console.log('Submitted!');
  };
  return (
    <form id="pizza-form" onSubmit={submitHandler}>
      <section className="form__container">
        <h2 className="form__header">Build Your Own Pizza</h2>
        {/* Pizza size */}
        <label htmlFor="size">
          <h3>Choice of size</h3>
          <p>Required *</p>
        </label>
        <select name="size" id="">
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>

        {/* Pizza sauce */}
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

        {/* Pizza toppings */}
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
    </form>
  );
};

export default Form;
