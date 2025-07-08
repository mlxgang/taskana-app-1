import styles from './navBarItem.module.css';

/**
 * @param children  {React.ReactElement}  - someone link content
 * @param href      {string}              - href link
 * */

export const NavBarItem = ({ children, href }) => {
  return (
    <a className={styles.link} href={href}>
      {children}
    </a>
  );
};
