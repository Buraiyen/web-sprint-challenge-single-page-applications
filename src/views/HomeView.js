import Button from '../components/ui/Button';
import './HomeView.css';
const Homepage = () => {
  return (
    <>
      <section className='jumbotron'>
        <div className='jumbotron__container'>
          <h2 className='jumbotron__header'>
            Your favorite food, delivered while coding
          </h2>
          <Button type='primary' size='lg'>
            Pizza?
          </Button>
        </div>
      </section>
    </>
  );
};

export default Homepage;
