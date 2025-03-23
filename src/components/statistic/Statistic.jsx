import { useState } from 'react';
import idleImg from '@images/statistic-idle.png?url';
import cl from './Statistic.module.css';

const idleMessage = 'Здесь мы поможем тебе управлять твоими\n задачами, отслеживать статистику\n и самочувствие.';

const IdleElem = () => {
  return (
    <div className={cl.idle}>
      <img className={cl.idleImg} src={idleImg} alt="Статистики еще нет"/>
      <p className={cl.idleText}>{idleMessage}</p>
    </div>
  );
};

export const Statistic = () => {
  const [statistic, setStatistic] = useState(null);

  return (
    <>
      {statistic
        ? <div>
          {statistic}
        </div>
        : <IdleElem/>
      }</>
  );
};