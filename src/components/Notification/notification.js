import { Message } from './notification.styled';

export default function Notification({ message }) {
  return (
    <div>
      <Message>{message}</Message>
    </div>
  );
}
