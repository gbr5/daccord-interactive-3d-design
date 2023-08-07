import Link from 'next/link';
import { InteractiveAppLayout } from '../components/InteractiveAppLayout';
import Image from 'next/image';

export default function Home() {
  const socialIconStyle = {
    className: "bg-transparent border-none cursor-pointer text-white",
    width: 26,
    height: 26,
  }
  return (
    <main className="flex relative min-h-screen w-full flex-col px-10 py-36 bg-background">
      <InteractiveAppLayout />
      <div className='flex mt-1'>
          {/* <div className="gradient h-full w-auto bg-gradient-to-br from-cyan-500 to-fuchsia-500" /> */}
        <div className="gradient__container h-auto w-1 mr-14">
          <div className="gradient h-1/3 w-1/5 bg-gradient-to-br from-cyan-500 to-blue-700" />
          <div className="gradient h-1/3 w-1/5 bg-gradient-to-br from-blue-500 to-blue-900" />
          {/* <div className="gradient h-1/3 w-1/5 bg-gradient-to-br from-violet-500 to-fuchsia-500" /> */}
          <div className="gradient h-1/3 w-1/5 bg-gradient-to-br from-blue-900 to-fuchsia-500" />
        </div>
        <div className='text__grid w-1/3 h-full m-0 p-0 pt-2 z-40'>
          <div className='flex flex-col gap-16 h-full m-0 p-0 w-auto'>
            <h1 className='w-full text-6xl font-mono leading-normal'>
              Collaborate with people
            </h1>

            <p className='font-sans w-full text-md leading-6'>
              Bring your team together and build your community by using our cross-platform app that lets you collaborate via chat, voice and by sharing and storing unlimited media files. A world of topics is waiting for you. Join the private beta.
            </p>
            <Link
              href="/"
              className="flex items-center justify-center w-80 gap-4 bg-cta-dark border border-border-light rounded-xl text-white text-md font-bold px-8 py-4 hover:border-border-hover hover:shadow-boxShadow transition-all duration-300"
            >
              <Image
                alt="Get Started"
                src="/images/icon-laptop.svg"
                width={24}
                height={24}
              />
              Download for Mac
            </Link>
          </div>
        </div>

      </div>
      <div className="social-apps mt-7 flex flex-col gap-7">
        <Link
          href="/"
          className={socialIconStyle.className}
        >
          <Image
            alt="Get Started"
            src="/images/icon-twitter.svg"
            width={socialIconStyle.width}
            height={socialIconStyle.height}
            />
        </Link>
        <Link
          href="/"
          className={socialIconStyle.className}
          >
          <Image
            alt="Get Started"
            src="/images/icon-youtube.svg"
            width={socialIconStyle.width}
            height={socialIconStyle.height}
          />
        </Link>
      </div>
    </main>
  )
}
