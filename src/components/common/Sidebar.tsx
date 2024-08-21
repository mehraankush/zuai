"use client"
import React from 'react'
import Image from 'next/image'

import { LuLayoutDashboard } from "react-icons/lu";
import { GrBook } from "react-icons/gr";
import { LuFiles } from "react-icons/lu";
import { CiSquareQuestion } from "react-icons/ci";
import { usePathname } from 'next/navigation';
import { IconType } from 'react-icons';
import Link from 'next/link';

interface NavItem {
    name: string;
    icon: IconType;
    link: string;
}

const navItems: NavItem[] = [
    {
        name: "Dashboard",
        icon: LuLayoutDashboard,
        link: "/"
    },
    {
        name: "Courses",
        icon: GrBook,
        link: "/courses"
    },
    {
        name: "Files",
        icon: LuFiles,
        link: "/files"
    },
    {
        name: "FAQ",
        icon: CiSquareQuestion,
        link: "/faq"
    },
]

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <nav className='p-2  h-screen overflow-hidden'>
            <div className='bg-white rounded-2xl h-full w-[60px] flex flex-col'>
                <Link href={'/'}>
                <Image
                    src='/logo.svg'
                    alt='logo'
                    width={100}
                    height={100}
                    className='py-2 px-1 pt-5'
                />
                </Link>

                <div className='flex flex-col gap-5 mt-5 px-2'>
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.link;
                        const size = isActive ? 25 : 30;
                        return (
                            <div
                                key={item.name}
                                tabIndex={0}
                                role="button"
                                className={`flex flex-col p-2 cursor-pointer items-center justify-center rounded-full ${isActive ? "bg-purple text-white" : "bg-white"
                                    }`}
                            >
                                <Icon size={size} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </nav>
    )
}

export default Sidebar