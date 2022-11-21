import './Button.css';
const Button = (props) => {
  let type = '';
  // Button types
  props.type === 'primary' ? (type = 'btn-primary') : (type = '');

  // Button sizes
  props.size === 'lg' ? (type += ' lg') : (type += '');

  return <button className={type}>{props.children}</button>;
};

export default Button;
