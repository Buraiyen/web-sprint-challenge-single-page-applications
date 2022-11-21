import './Form.css';
const Form = () => {
  const submitHandler = () => {
    console.log('Submitted!');
  };
  return (
    <form id='pizza-form' onSubmit={submitHandler}>
      <section className='form__container'>
        <h2 className='form__header'>Build Your Own Pizza</h2>
      </section>
    </form>
  );
};

export default Form;
