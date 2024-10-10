"use client"
import { Button } from '@/components/ui/button'
import { useUser,UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {

  const {user,isSignedIn}=useUser();

  return (
    <div className='p-5 flex justify-between items-center border shadow-sm' >
      <Image src={'./logo13.svg'}
      alt='logo'
      width={150}
      height={90}
      />
      {isSignedIn?
      <UserButton/> : 
      <Link href={'/sign-in'}>
      <Button>Get Started!</Button>
      </Link>
    }
      
    </div>
  )
}

export default Header