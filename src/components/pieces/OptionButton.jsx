import styles from './OptionButton.module.scss';

const OptionButton = props => (
	<button className={styles.button} type={props.type}>
		{props.children}
	</button>
);

export default OptionButton;
