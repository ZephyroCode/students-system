import styles from './OptionButton.module.scss';

const OptionButton = props => (
	<button onClick={props.onClick} className={styles.button} type={props.type}>
		{props.children}
	</button>
);

export default OptionButton;
