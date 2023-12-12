import PropsTypes from 'prop-types'
 
const Button = ({ color, text, onClick }) => {
  return ( 
    <button
    onClick={onClick}
    style={{backgroundColor: color}} 
    className='btn'
  
    >
    {text}
    </button>
    
      
   
  );
}

Button.defaultProps= {
    color: 'steelblue',
    text: 'Hello',
}
Button.propType={
    text: PropsTypes.string,
    color: PropsTypes.string,
    onClick: PropsTypes.func,
}

export default Button;
