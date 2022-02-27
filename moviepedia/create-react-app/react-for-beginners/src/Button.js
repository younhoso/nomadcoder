import PropTypes from "prop-types"
import style from './Button.module.css'

function Button({onClick,children}) {
	return (
		<button onClick={onClick} className={style.btn}>{children}</button>
	);
}

Button.prototype = {
	text: PropTypes.string.isRequired
};

export default Button;