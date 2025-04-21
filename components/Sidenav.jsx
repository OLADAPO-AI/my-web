'use client'

import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import { AiOutlineMenu, AiOutlineHome } from 'react-icons/ai'
import { MdOutlineLunchDining, MdOutlineLocalPhone } from 'react-icons/md'
import { FaPerson } from 'react-icons/fa6'
import { GoProjectSymlink } from 'react-icons/go'
import { GiCancel } from 'react-icons/gi'
import Links from './Links'

const Sidenav = () => {
  const path = usePathname() // Get the current route
  const [nav, setNav] = useState(false)

  const showNav = () => {
    console.log('Toggling menu. New state:', !nav) // Debugging
    setNav(!nav)
  }

  const navLinks = [
    { id: 1, name: 'Home', link: '/' },
    { id: 2, name: 'About', link: '/about' },
    { id: 3, name: 'Projects', link: '/projects' },
    { id: 4, name: 'Resume', link: '/resume' },
    { id: 5, name: 'Contact', link: '/contact' },
  ]

  return (
    <div>
      {/*  Menu Button (Always Visible) */}
      <div className="fixed top-4 right-4 z-[99999] md:hidden">
        {!nav ? (
          <AiOutlineMenu
            onClick={showNav}
            className="cursor-pointer text-orange-500 text-3xl"
          />
        ) : (
          <GiCancel
            onClick={showNav}
            className="cursor-pointer text-orange-500 text-3xl"
          />
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      {nav && (
        <div className="fixed top-0 left-0 w-full h-screen bg-gray-100 flex flex-col justify-center items-center z-[9999] md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.id}
              onClick={showNav}
              href={link.link}
              className={`w-[75%] flex items-center justify-center rounded-full shadow-lg bg-gray-200 shadow-gray-400 m-2 p-4 text-lg font-semibold cursor-pointer hover:scale-110 transition-all duration-200 ${
                path === link.link
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-500'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className=" md:block hidden fixed top-[25%] z-10 ">
        <div className=" flex flex-col  ">
          <Links icon={<AiOutlineHome />} href="/" isActive={path === '/'} />
          <Links
            icon={<FaPerson />}
            href="/about"
            isActive={path === '/about'}
          />
          <Links
            icon={<GoProjectSymlink />}
            href="/projects"
            isActive={path === '/projects'}
          />
          <Links
            icon={<MdOutlineLunchDining />}
            href="/resume"
            isActive={path === '/resume'}
          />
          <Links
            icon={<MdOutlineLocalPhone />}
            href="/contact"
            isActive={path === '/contact'}
          />
        </div>
      </div>
    </div>
  )
}

export default Sidenav
