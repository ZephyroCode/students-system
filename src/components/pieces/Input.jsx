import styles from './Input.module.scss';

const Input = props => (
	<input
		onChange={props.onChange}
		required
		className={styles.input}
		type={props.type}
		id={props.id}
		name={props.name}
		value={props.value}
	/>
);

export default Input;
