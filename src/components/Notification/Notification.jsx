import css from '../Notification/Notification.module.css';
export const Notification = ({ message }) => {
  return <span className={css.notification}>{message}</span>;
};
