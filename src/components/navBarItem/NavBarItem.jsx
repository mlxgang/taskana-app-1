import cl from './NavBarItem.module.css';
import { Icon } from '@/components/icon/Icon.jsx';

/**
 *
 * @param icon  {string} - icon name
 * @param title {string} - navbar title
 *
 * */

export const NavBarItem = ({icon, title}) => {
  return (
    <a className={cl.wrapper}>
      <Icon size={24} name={icon} className={cl.icon}/>
      <span className={cl.title}>{title}</span>
    </a>
  );
};