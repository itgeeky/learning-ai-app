import Image from 'next/image';
import Link from 'next/link';
import NavItems from './nav-items';
import {
  SignInButton,
  SignUpButton,
  SignedOut,
  SignedIn,
  UserButton,
} from '@clerk/nextjs';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link href='/' className='text-lg font-bold'>
        <div className='flex items-center gap-2.5 cursor-pointer'>
          <Image src='/images/logo.svg' alt='Logo' width={46} height={44} />
        </div>
      </Link>
      <div className='flex items-center gap-8'>
        <NavItems />
        <SignedOut>
            <SignInButton>
              <button className='btn-signin'>Sign In</button>
            </SignInButton>
          
        </SignedOut>
        <SignedIn>
          <div className='flex items-center gap-2'>
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
