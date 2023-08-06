import Link from "next/link"
import Image from "next/image"

export const Header = () => {
  const normalMenuButtonStyle = 'p-2 border border-transparent hover:border-border'
  const menuButtonStyle = 'font-sans text-white border z-50 text-md mr-4 rounded-xl border-solid'
  const menuButtons = [
    {
      text: 'Home',
      path: '/',
    },
    {
      text: 'Download',
      path: '/',
    },
    {
      text: 'App',
      path: '/',
    },
    {
      text: 'Login',
      path: '/',
    },
  ]

  return ( //h-32 my-auto
    <header className="flex fixed pt-7 w-full bg-background z-50 ">
      
      <div className="flex items-center gap-9 justify-start bg-transparent pl-24 pr-5 z-50">{/* py-8  */}
        <Image
          alt="Logo"
          src="/images/logo.svg"
          width={36}
          height={36}
        />  
        {menuButtons.map((button, index) => {
          return (
            <Link
              key={index}
              href={button.path}
              className={`${menuButtonStyle} ${normalMenuButtonStyle}`}
            >
              {button.text}
            </Link>
          )
        })}
      </div>
      <div className="my-auto z-50 hover:mt-7 transition-all duration-700">
        <Link
          href="/"
          className={`${menuButtonStyle} z-50 bg-cta border-border px-8 py-3 hover:border hover:border-border-hover hover:mb-2 hover:shadow-boxShadow transition-all duration-150`}
        >
          GetStarted
        </Link>
      </div>
    </header>
  )
}