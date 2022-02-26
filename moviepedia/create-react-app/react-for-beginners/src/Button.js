import PropTypes from "prop-types"
import style from './Button.module.css'

function Button({onClick,text}) {
	return (
		<button onClick={onClick} className={style.btn}>{text}</button>
	);
}

Button.prototype = {
	text: PropTypes.string.isRequired
};

export default Button;