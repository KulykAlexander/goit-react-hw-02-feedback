import PropTypes from 'prop-types';
import { Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return Object.keys(options).map(e => {
    return (
      <Btn
        type="button"
        key={e}
        onClick={() => {
          onLeaveFeedback(e);
        }}
      >
        {e}
      </Btn>
    );
  });
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
