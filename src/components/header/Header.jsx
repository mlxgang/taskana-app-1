import { Button, Icon, Logo } from '@components';
import styles from './header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Button color="primary">
        <Icon name="plus" />
        <span>Создать</span>
      </Button>
    </header>
  );
};
