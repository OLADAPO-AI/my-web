'use client'

import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import background from '../assets/background.jpg'
import Sidenav from '../components/Sidenav' // Corrected Import
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from 'react-icons/fa'
import Image from 'next/image'

export default function Home() {
  return (
    <div id="main">
      {/* Background Image */}
      <Image
        src={background}
        className="w-full h-screen object-cover"
        alt="background"
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-screen bg-black/40 flex flex-col items-center justify-center text-center">
        <h1 className="sm:text-4xl text-2xl font-bold text-gray-200 py-3">
          Oladapo Digital Realm!
        </h1>
        <h2 className="flex sm:text-xl text-lg py-4 text-amber-300">
          {`I'm a frontend sorcerer`}
        </h2>

        {/* Animated Text */}
        <h3 className="flex sm:text-2xl text-lg text-gray-200 font-bold">
          <TypeAnimation
            sequence={[
              'crafting enchanting user experiences',
              2000,
              'crafting innovative frontend solutions',
              2000,
              'crafting intuitive web applications',
              2000,
            ]}
            wrapper="div"
            speed={50}
            style={{
              fontSize: '1em',
              display: 'inline-block',
              paddingLeft: '5px',
            }}
            repeat={Infinity}
          />
        </h3>

        {/* Social Links */}
        <div className="flex justify-between pt-6 max-w-[200px] w-full text-gray-200 cursor-pointer">
          <FaFacebook />
          <FaInstagram />
          <FaGithub />
          <FaTwitter />
          <FaLinkedinIn />
        </div>
      </div>

      {/* Navigation */}
      <Sidenav />
    </div>
  )
}
