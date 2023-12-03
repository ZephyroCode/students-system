import styles from './Button.module.scss';

const Button = props => (
	<button onClick={props.onClick} className={styles.button} type={props.type}>
		{props.children}
	</button>
);

export default Button;
