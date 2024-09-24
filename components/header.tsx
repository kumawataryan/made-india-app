import React from 'react'
import Image from 'next/image'
import MadeIndiaLogo from "../public/made-india-logo.svg"
import MenuIcon from "../public/menu.svg"


const Header = () => {
  return (
    <div className='flex justify-between items-center p-6'>
        <Image src={MadeIndiaLogo} width={40} height={40} alt='made india logo'></Image>
        <Image src={MenuIcon} width={24} height={24} alt='made india logo'></Image>
    </div>
  )
}

export default Header