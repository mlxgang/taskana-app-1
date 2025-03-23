import logo from '@/assets/svg/logo.svg?no-inline';
import cl from './Logo.module.css';

export const Logo = () => {
  return (
    <a href="#" className={cl.wrapper}>
      <svg className={cl.logo}>
        <use xlinkHref={logo + '#logo'}></use>
      </svg>
    </a>
  );
};