import './Form.css';
const Form = () => {
  const submitHandler = () => {
    console.log('Submitted!');
  };
  return (
    <form id='pizza-form' onSubmit={submitHandler}>
      <section className='form__container'>
        <h2 className='form__header'>Build Your Own Pizza</h2>
        {/* Pizza size */}
        <label htmlFor='size'>
          <h3>Choice of size</h3>
          <p>Required *</p>
        </label>
        <select name='size' id=''>
          <option value='small'>Small</option>
          <option value='medium'>Medium</option>
          <option value='large'>Large</option>
        </select>

        {/* Pizza sauce */}
        <label htmlFor='sauce'>
          <h3>Choice of Sauce</h3>
          <p>Required *</p>
        </label>
        <input type='radio' name='sauce' value='original_red' />
        <label htmlFor='sauce'>Original Red</label>
        <br />
        <input type='radio' name='sauce' value='garlic_ranch' />
        <label htmlFor='sauce'>Garlic Ranch</label>
        <br />
        <input type='radio' name='sauce' value='bbq_sauce' />
        <label htmlFor='sauce'>BBQ Sauce</label>
        <br />
        <input type='radio' name='sauce' value='spinach_alfredo' />
        <label htmlFor='sauce'>Spinach Alfredo</label>
      </section>
    </form>
  );
};

export default Form;
