import cl from './NavBar.module.css';
import { NavBarItem } from '@/components/navBarItem/NavBarItem.jsx';

const navButtons = [
  {icon: 'inbox', title: 'Входящие'}
];

export const NavBar = () => {
  return (
    <nav className={cl.navbar}>
      <ul>
        {navButtons.map(btn =>
          <li key={btn.title}>
            <NavBarItem
              icon={btn.icon}
              title={btn.title}
            />
          </li>
        )}
      </ul>
    </nav>
  );
};