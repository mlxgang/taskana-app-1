import cl from './MainContainer.module.css';
import { TaskList } from '@/components/taskList/TaskList.jsx';

export const MainContainer = () => {
  return (
    <>
      <header className={cl.header}>
        <h1>Входящие</h1>
      </header>
      <TaskList/>
    </>
  );
};