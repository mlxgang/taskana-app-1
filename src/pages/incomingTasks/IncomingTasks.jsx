import { Footer, MainContainer } from '@components';
import cl from './incomingTasks.module.css';

export const IncomingTasks = () => {
  return (
    <section className={cl.tasks}>
      <MainContainer />
      <Footer />
    </section>
  );
};
