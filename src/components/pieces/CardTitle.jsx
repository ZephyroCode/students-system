import styles from './CardTitle.module.scss';

const CardTitle = props => <h2 className={styles.title}>{props.children}</h2>;

export default CardTitle;
