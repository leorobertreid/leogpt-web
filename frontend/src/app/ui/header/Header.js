"use client"

import Link from 'next/link'
import Image from 'next/image';

import Hamburger from "./Hamburger"
import { useState } from "react"

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    showMenu
    ?
    setShowMenu(false)
    :
    setShowMenu(true)
  }


  return (
    <>
      <nav className="bg-white text-zinc-800 shadow-lg sticky top-0 z-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link href="/">
                <div className="font-bold text-lg">
                  Leo GPT
                </div>
              </Link>
            </div>
            {/* menu */}
            <div className="flex">
              <button type="button" className="text-gray-500 hover:text-white focus:outline-none focus:text-white" onClick={toggleMenu}>
                <Hamburger></Hamburger>
              </button>
            </div>
          </div>
        </div>
        {/* Navigation links */}
        {
          showMenu
          &&
          <div>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" passHref>
                <div className="hover:bg-zinc-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">Home</div>
              </Link>
              <Link href="/about" passHref>
                <div className="hover:bg-zinc-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">About</div>
              </Link>
              <Link href="/contact" passHref>
                <div className="hover:bg-zinc-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">Contact</div>
              </Link>
            </div>
          </div>
        }
      </nav>
    </>

  )
}

export default Header