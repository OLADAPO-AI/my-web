'use client'

import Link from 'next/link'
import React from 'react'

const Links = ({ icon, href, isActive }) => {
  return (
    <Link
      href={href}
      className={` rounded-full text-lg shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-125 ease-in duration-300 ${
        isActive ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-500'
      }`}
    >
      {' '}
      {icon}
    </Link>
  )
}

export default Links
