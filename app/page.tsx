import CompanionCard from '@/components/companion-card';
import CompanionList from '@/components/companions-list';
import Cta from '@/components/cta';

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
        color='#ffda6e'/>
      </section>
      <section className='home-section'>
        <CompanionList />
        <Cta />
      </section>
    </main>
  );
};

export default Page;
