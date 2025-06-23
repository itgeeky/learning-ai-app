import { Button } from '@/components/ui/button';
import React from 'react';

const Page = () => {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-3xl font-bold underline text-muted-foreground'>
          Hello world!
        </h1>
        <Button>Este es un boton</Button>
      </div>
    </div>
  );
};

export default Page;
