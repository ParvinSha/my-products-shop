import Image from 'next/image'
import Link from 'next/link'
import Profiles from './profiles'
// import LightSwitch from '../light-switch/light-switch'

const Footer = () => {
  return (
    <article className="bg-red-900 text-white w-full">
      <div className="flex flex-wrap justify-between py-8 px-8 max-w-7xl mx-auto">
        <section className="max-w-md flex-flex-col">
          <Image
            className="w-30"
            src={'/shopping-logo.svg'}
            alt="Awesome recipes logo"
            height={100}
            width={100}
          />
          <p className="my-2">
           We have a wide variety of products. Scroll through our list of products or search for your
            favourite to find your desired product.
          </p>
          <h2 className="font-bold mt-4">Follow us!</h2>
          <div className="self-end flex flex-wrap gap-1.5 mt-">
            <Link href="https://www.linkedin.com/in/parvinshafiee/">
              <Profiles initials="PM" />
            </Link>
          </div>
        </section>
        <section className="flex flex-col justify-between">
          <ul className="flex flex-col gap-3 font-bold mt-4">
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li>
              <Link href={'/products'}>Products</Link>
            </li>
            {/* <li>
              <Link href={'/login'}>Log in</Link>
            </li> */}
          </ul>
          <div className="self-end mt-4">
            {/* <LightSwitch /> */}
          </div>
        </section>
      </div>
    </article>
  )
}

export default Footer
