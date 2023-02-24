import { Message } from './Notification.styled';
import PropTypes from 'prop-types';

export default function Notification({ message }) {
  return (
    <div>
      <Message>{message}</Message>
    </div>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
