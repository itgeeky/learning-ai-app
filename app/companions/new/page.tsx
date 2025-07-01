'use client';
import CompanionForm from '@/components/companion-form';


const CompanionFormPage = () => {
  

  return (
    <main className='min-md:w-2/3 items-center justify-center'>
      <article className='w-full gap-4 flex flex-col'>
        <h1>Create a New Companion</h1>
        <CompanionForm />
      </article>
    </main>
  );
};

export default CompanionFormPage;
