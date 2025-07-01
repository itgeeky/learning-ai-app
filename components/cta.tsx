import Image from 'next/image'
import Link from 'next/link'

const Cta = () => {
  return (
    <section className='cta-section'>
      <div className='cta-badge'>Start learning your way.</div>
      <h2 className='text-3xl font-bold'>Build and personalize your learning experience.</h2>
      <p className='text-lg'>With our platform, you can tailor your learning journey to fit your unique needs and preferences.</p>
      <Image
        src='/images/cta.svg'
        alt='Personalized Learning Experience'
        width={362}
        height={232}
      />
      <button className='btn-primary'>
        <Image
          src='/icons/plus.svg'
          alt='Add Companion'
          width={12}
          height={12}
        />
        <Link href='/companions/new'>
          Build your companion
        </Link>
      </button>
    </section>
  )
}

export default Cta