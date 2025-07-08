import { cls } from '@utils';
import styles from './button.module.css';

/**
 * @param color     {'primary'}                     - bg color of button
 * @param type      {'submit' | 'reset' | 'button'} - button type attribute
 * @param children  {React.ReactElement}            - someone button content
 * */

export const Button = ({ color, type = 'button', children }) => {
  return (
    <button className={cls(styles.button, styles[color])} type={type}>
      {children}
    </button>
  );
};
