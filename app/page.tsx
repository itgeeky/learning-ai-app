import CompanionCard from '@/components/companion-card';
import CompanionList from '@/components/companions-list';
import Cta from '@/components/cta';
import { recentSessions } from '@/constants';

const Page = () => {
  return (
    <main className=''>
      <h1 className='text-2xl'>Popular companions</h1>
      <section className='home-section'>
        <CompanionCard
          id='123'
          topic='Neural Networks'
          name='Neura the brainy explorer'
          subject='Science'
          duration={45}
          color='#ffda6e'
        />
        <CompanionCard
          id='123'
          topic='Neural Networks'
          name='Neura the brainy explorer'
          subject='Science'
          duration={45}
          color='#ffda6e'
        />
        <CompanionCard
          id='123'
          topic='Neural Networks'
          name='Neura the brainy explorer'
          subject='Science'
          duration={45}
          color='#ffda6e'
        />
      </section>
      <section className='home-section'>
        <CompanionList
          title='Recently completed sessions'
          companions={recentSessions} 
          classNames = "w-2/3 max-lg:w-full"
        />
        <Cta />
      </section>
    </main>
  );
};

export default Page;
