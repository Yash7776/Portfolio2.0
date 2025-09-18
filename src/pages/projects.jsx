import React from 'react'

const projects = () => {
  return (
    <div>
      <section id="projects" class="py-20 px-6 bg-white">
        <div class="container mx-auto">
            <h2 class="text-3xl font-bold text-center mb-6">My Projects</h2>
            <p class="text-center text-lg mb-16 max-w-2xl mx-auto">Here are some of the projects I've worked on. Each project represents my skills and passion for development.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                    <div class="h-48 bg-gray-300 flex items-center justify-center">
                        <i class="fas fa-laptop-code text-5xl text-gray-500"></i>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">E-Commerce Platform</h3>
                        <p class="text-gray-600 mb-4">A full-stack e-commerce solution with React, Node.js, and MongoDB.</p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded">React</span>
                            <span class="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded">Node.js</span>
                            <span class="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded">MongoDB</span>
                        </div>
                        <a href="#" class="text-blue-600 font-semibold hover:underline">View Project →</a>
                    </div>
                </div>
                
                
                <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                    <div class="h-48 bg-gray-300 flex items-center justify-center">
                        <i class="fas fa-mobile-alt text-5xl text-gray-500"></i>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Task Management App</h3>
                        <p class="text-gray-600 mb-4">A mobile-friendly task management application with drag-and-drop functionality.</p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded">Vue.js</span>
                            <span class="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded">Firebase</span>
                            <span class="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded">Tailwind</span>
                        </div>
                        <a href="#" class="text-blue-600 font-semibold hover:underline">View Project →</a>
                    </div>
                </div>
                
                
                <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                    <div class="h-48 bg-gray-300 flex items-center justify-center">
                        <i class="fas fa-chart-line text-5xl text-gray-500"></i>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Data Visualization Dashboard</h3>
                        <p class="text-gray-600 mb-4">An interactive dashboard for visualizing complex data sets with filtering capabilities.</p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded">D3.js</span>
                            <span class="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded">Python</span>
                            <span class="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded">Flask</span>
                        </div>
                        <a href="#" class="text-blue-600 font-semibold hover:underline">View Project →</a>
                    </div>
                </div>
            </div>
            <div class="text-center mt-12">
                <a href="#" class="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300">View All Projects</a>
            </div>
        </div>
    </section>
    </div>
  )
}

export default projects
