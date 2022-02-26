import PropTypes from "prop-types"
import style from './Button.module.css'

function Button({text}) {
	return (
		<button className={style.btn}>{text}</button>
	);
}

Button.prototype = {
	text: PropTypes.string.isRequired
};

export default Button;