import PropTypes from 'prop-types';

const PaginationButtons = ({ handleNextClick, handlePreviousClick }) => (
  <>
    <button type="button" onClick={handlePreviousClick}>Previous</button>
    <button type="button" onClick={handleNextClick}>Next</button>
  </>
);

PaginationButtons.propTypes = {
  handleNextClick: PropTypes.func.isRequired,
  handlePreviousClick: PropTypes.func.isRequired,
};

export default PaginationButtons;
