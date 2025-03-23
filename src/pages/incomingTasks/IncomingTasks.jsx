import { MainContainer } from '@/components/mainContainer/MainContainer.jsx';
import cl from './IncomingTasks.module.css';
import { Footer } from '@/components/footer/Footer.jsx';

export const IncomingTasks = () => {
  return (
    <section className={cl.tasks}>
      <MainContainer/>
      <Footer/>
    </section>
  );
};