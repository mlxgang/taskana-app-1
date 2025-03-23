import cl from './SideBar.module.css';

import { Statistic } from '@/components/statistic/Statistic.jsx';


export const SideBar = () => {
  return (
    <div className={cl.sidebar}>
      <Statistic/>
    </div>
  );
};