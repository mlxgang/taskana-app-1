import { useState } from 'react';
import idleImg from '@assets/images/tasks-idle.png?url';
import styles from './taskList.module.css';

const idleMessage = {
  title: 'Все твои задачи организованы как надо',
  msg: 'Отличная работа! Ты большой молодец!',
};

const IdleElem = () => {
  return (
    <div className={styles.idle}>
      <div className={styles.idleText}>
        <h2>{idleMessage.title}</h2>
        <span>{idleMessage.msg}</span>
      </div>
      <img className={styles.idleImg} src={idleImg} alt="Задач пока нет" width={464} height={320} />
    </div>
  );
};

export const TaskList = () => {
  const [tasks, setTasks] = useState(null);

  return (
    <section className={styles.list}>
      {tasks
        ? tasks
        : <IdleElem />
      }
    </section>
  );
};
