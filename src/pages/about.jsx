import React from 'react'

const about = () => {
  return (
    <div>
      <section id="about" class="py-20 px-6 bg-white">
        <div class="container mx-auto">
            <h2 class="text-3xl font-bold text-center mb-16">About Me</h2>
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/3 mb-10 md:mb-0 flex justify-center">
                    <div class="w-56 h-56 bg-gray-200 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                        <i class="fas fa-code text-6xl text-gray-500"></i>
                    </div>
                </div>
                <div class="md:w-2/3 md:pl-12">
                    <p class="text-lg mb-6">
                        I'm a passionate software developer with 5+ years of experience specializing in building scalable web applications. I enjoy turning complex problems into simple, beautiful and intuitive solutions.
                    </p>
                    <p class="text-lg mb-6">
                        When I'm not coding, you can find me hiking, reading tech blogs, or contributing to open source projects. I believe in continuous learning and staying updated with the latest technologies.
                    </p>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <p class="font-semibold"><span class="text-blue-600">Name:</span> John Doe</p>
                            <p class="font-semibold"><span class="text-blue-600">Email:</span> john@example.com</p>
                        </div>
                        <div>
                            <p class="font-semibold"><span class="text-blue-600">Location:</span> San Francisco, CA</p>
                            <p class="font-semibold"><span class="text-blue-600">Availability:</span> Open to Work</p>
                        </div>
                    </div>
                    <a href="#" class="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300">Download Resume</a>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default about
