import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Loading.module.css';

const Loading = () => (<div className={styles.loading}><FontAwesomeIcon icon={faSpinner} spin size="10x" /></div>);

export default Loading;
