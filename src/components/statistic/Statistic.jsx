import { useState } from 'react';
import idleImg from '@assets/images/statistic-idle.png?url';
import styles from './statistic.module.css';

const idleMessage = 'Здесь мы поможем тебе управлять твоими\n задачами, отслеживать статистику\n и самочувствие.';

const IdleElem = () => {
  return (
    <div className={styles.idle}>
      <img className={styles.idleImg} src={idleImg} alt="Статистики еще нет" width={233} height={168} />
      <p className={styles.idleText}>{idleMessage}</p>
    </div>
  );
};

export const Statistic = () => {
  const [statistic, setStatistic] = useState(null);

  return <>
    {statistic
      ? <div>{statistic}</div>
      : <IdleElem />
    }
  </>;
};
