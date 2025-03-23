import { NavBar } from '@/components/navBar/NavBar.jsx';
import { IncomingTasks } from '@/pages/incomingTasks/IncomingTasks.jsx';
import { SideBar } from '@/components/sideBar/SideBar.jsx';
import cl from './Content.module.css';

export const Content = () => {
  return (
    <div className={cl.content}>
      <NavBar/>
      <IncomingTasks/>
      <SideBar/>
    </div>
  );
};