import PropTypes from 'prop-types';
import styles from '../styles/PaginationButtons.module.css';

const PaginationButtons = ({ handleNextClick, handlePreviousClick }) => (
  <div className={styles.buttons}>
    <button
      type="button"
      onClick={handlePreviousClick}
      className={styles.previousButton}
    >
      Previous
    </button>
    <button
      type="button"
      onClick={handleNextClick}
      className={styles.nextButton}
    >
      Next
    </button>
  </div>
);

PaginationButtons.propTypes = {
  handleNextClick: PropTypes.func.isRequired,
  handlePreviousClick: PropTypes.func.isRequired,
};

export default PaginationButtons;
