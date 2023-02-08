import PropTypes from 'prop-types';
import { Paragraph } from './Statistics.styled';

export const Notification = ({ message }) => {
  return <Paragraph>{message}</Paragraph>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
