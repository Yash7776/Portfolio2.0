import React from 'react'

const Footer = () => {
  return (
    <div>
    <footer class="bg-gray-800 text-white py-10">
        <div class="container mx-auto px-6">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <div class="mb-6 md:mb-0">
                    <h3 class="text-2xl font-bold">John Doe</h3>
                    <p class="text-gray-400">Software Developer</p>
                </div>
                <div>
                    <p class="text-gray-400">© 2023 John Doe. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer
