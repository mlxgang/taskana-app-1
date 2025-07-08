import { Icon, NavBarItem } from '@components';
import styles from './navBar.module.css';

const navButtons = [
  { icon: 'inbox', label: 'Входящие', href: '#' },
];

export const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        {navButtons.map(btn => (
          <li key={btn.label}>
            <NavBarItem href={btn.href}>
              <Icon name={btn.icon} />
              <span>{btn.label}</span>
            </NavBarItem>
          </li>
        ))}
      </ul>
    </nav>
  );
};
