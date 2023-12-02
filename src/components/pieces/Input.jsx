import styles from './Input.module.scss';

const Input = props => (
	<input required className={styles.input} type={props.type} id={props.id} />
);

export default Input;
