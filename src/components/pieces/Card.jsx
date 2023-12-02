import styles from './Card.module.scss';

const Card = props => <main className={styles.card}>{props.children}</main>;

export default Card;
