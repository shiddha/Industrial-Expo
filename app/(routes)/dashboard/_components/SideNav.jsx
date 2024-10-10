"use client"
import { UserButton } from '@clerk/nextjs';
import { LayoutGrid, PiggyBank, Plane, PlaneLanding, ReceiptText, ShieldCheck } from 'lucide-react'
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react'
import Link from 'next/link';


function SideNav() {
    const menuList=[
        {
            id:1,
            name: 'Dashboard',
            icon:LayoutGrid,
            path:'/dashboard'
        },
        {
            id:2,
            name: 'Material',
            icon:PiggyBank,
            path:'/dashboard/budgets'
        },
        {
            id:3,
            name:'Expenses',
            icon:ReceiptText,
            path:'/dashboard/expenses'
        },
        {
            id:4,
            name:'Tax',
            icon:ShieldCheck,
            path:'/dashboard/upgrade'
        },
        {
            id:5,
            name:'Export',
            icon:Plane,
            path:'/dashboard/export'
        },
        {
            id:6,
            name:'Import',
            icon: PlaneLanding,
            path:'/dashboard/import'
        }
        


    ]

    const pathname=usePathname();

    useEffect(()=>{
        console.log(pathname)

    },[pathname]);
  return (
    <div className='h-screen p-6 border shadow-sm'>
        <Image src={'/logo13.svg'}
        alt='logo'
        width={140}
        height={100}
        />
        <div className='mt-5'>
            {menuList.map((menu,index)=>(
                <Link href={menu.path} key={menu.id}>
                <h2 className={`flex gap-2 items-center
                text-gray-500 font-medium
                mb-2
                p-5 cursor-pointer rounded-md
                hover:text-primary hover:bg-blue-200
                ${pathname==menu.path&&'text-primary bg-blue-200'}
                `}>
                    <menu.icon/>
                    {menu.name}
                </h2>
                </Link>
            ))}
        </div>
        <div className='fixed bottom-10 p-5 flex gap-2
        items-center'>
            <UserButton/>
            Profile
        </div>
    </div>
  )
}

export default SideNav
