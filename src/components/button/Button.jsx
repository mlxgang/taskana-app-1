import { Icon } from '@/components/icon/Icon.jsx';
import cl from './Button.module.css';
import { cls } from '@/utils/classJoin.js';

/**
 *
 * @param type  {'primary'} - bg color of button
 * @param icon  {string}    - icon name
 * @param title {string}    - button title
 *
 * */

export const Button = ({type, icon, title}) => {
  return (
    <button className={cls(cl.button, cl[type])}>
      <Icon size={24} name={icon} className={cl.icon}/>
      <span className={cl.title}>{title}</span>
    </button>
  );
};