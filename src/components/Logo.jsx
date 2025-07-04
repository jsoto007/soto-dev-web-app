import clsx from 'clsx'
import sdLogo from '../images/logos/sdLogo.png'
import fullLogo from '../images/logos/fullLogo.png'
import Image from 'next/image'

export function Logomark({ invert = false, filled = false, ...props }) {


  return (
    <Image
      src={sdLogo}
      alt="Soto Dev Logo"
      className={clsx('h-auto w-auto')}
      width={70}
      height={70}
      priority
      {...props}
    />
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}) {
  return (
    <Image
      src={fullLogo}
      alt="Soto Dev Logo"
      className={clsx('h-auto w-74 -ml-10', className)}
      priority
      {...props}
    />
  )
}
