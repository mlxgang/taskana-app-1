import { TaskList } from '@components';
import styles from './mainContainer.module.css';

export const MainContainer = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>Входящие</h1>
      </header>
      <TaskList />
    </>
  );
};
