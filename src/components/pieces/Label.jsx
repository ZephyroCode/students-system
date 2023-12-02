import styles from './Label.module.scss';

const Label = props => (
	<label htmlFor={props.labelFor} className={styles.label}>
		{props.children}
	</label>
);

export default Label;
