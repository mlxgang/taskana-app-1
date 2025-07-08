import styles from './footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>
        Проект выполнен в рамках стажировки&nbsp;
        <a className={styles.link} href="https://preax.ru" target="_blank" rel="noopener noreferrer">
          PREAX
        </a>
      </span>
    </footer>
  );
};
