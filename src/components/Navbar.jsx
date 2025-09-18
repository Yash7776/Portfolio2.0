import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
    <nav class="fixed w-full bg-white shadow-md z-10">
        <div class="container mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="" class="text-2xl font-bold text-blue-600">John Doe</Link>
            <div class="hidden md:flex space-x-10">
                <Link href="/" class="hover:text-blue-600 transition duration-300">Home</Link>
                <Link href="/about" class="hover:text-blue-600 transition duration-300">About</Link>
                <Link href="/skills" class="hover:text-blue-600 transition duration-300">Skills</Link>
                <Link href="/projects" class="hover:text-blue-600 transition duration-300">Projects</Link>
                <Link href="/contact" class="hover:text-blue-600 transition duration-300">Contact</Link>
            </div>
            <div class="md:hidden">
                <button id="menu-toggle" class="text-blue-600 focus:outline-none">
                    <i class="fas fa-bars text-2xl"></i>
                </button>
            </div>
        </div>
        <div id="mobile-menu" class="hidden md:hidden bg-white px-6 pt-2 pb-4">
            <Link href="/" class="block py-2 hover:text-blue-600 transition duration-300">Home</Link>
            <Link href="/about" class="block py-2 hover:text-blue-600 transition duration-300">About</Link>
            <Link href="/skills" class="block py-2 hover:text-blue-600 transition duration-300">Skills</Link>
            <Link href="/projects" class="block py-2 hover:text-blue-600 transition duration-300">Projects</Link>
            <Link href="/contact" class="block py-2 hover:text-blue-600 transition duration-300">Contact</Link>
        </div>
    </nav>
    </div>
  )
}

export default Navbar
