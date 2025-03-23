import cl from './TaskList.module.css';
import { useState } from 'react';
import idleImg from '@images/tasks-idle.png?url';

const idleMessage = {
  title: 'Все твои задачи организованы как надо',
  text: 'Отличная работа! Ты большой молодец!'
};

const IdleElem = () => {
  return (
    <div className={cl.idle}>
      <div className={cl.idleText}>
        <h2>{idleMessage.title}</h2>
        <span>{idleMessage.text}</span>
      </div>
      <img className={cl.idleImg} src={idleImg} alt="Задач пока нет"/>
    </div>
  );
};

export const TaskList = () => {
  const [tasks, setTasks] = useState(null);

  return (
    <section className={cl.list}>
      {tasks
        ? {tasks}
        : <IdleElem/>
      }
    </section>
  );
};