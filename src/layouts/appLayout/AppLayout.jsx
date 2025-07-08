import { Content, Header } from '@components';
import styles from './appLayput.module.css';

export const AppLayout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <Content />
    </div>
  );
};
