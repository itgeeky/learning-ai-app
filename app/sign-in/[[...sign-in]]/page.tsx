import { SignIn } from '@clerk/nextjs' 

const Page = () => {
  return (
    <main className='min-md:w-2/3 items-center justify-center'>

      <SignIn/>
    </main>
  )
}

export default Page