import React from 'react'

const skills = () => {
  return (
    <div>
       <section id="skills" class="py-20 px-6 bg-gray-100">
        <div class="container mx-auto">
            <h2 class="text-3xl font-bold text-center mb-6">Technical Skills</h2>
            <p class="text-center text-lg mb-16 max-w-2xl mx-auto">I've worked with a range of technologies in the web development world, from back-end to front-end.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold mb-6 text-blue-600">Frontend Development</h3>
                    <div class="space-y-4">
                        <div>
                            <div class="flex justify-between mb-1">
                                <span>HTML/CSS</span>
                                <span>95%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2.5">
                                <div class="bg-blue-600 h-2.5 rounded-full"></div>
                            </div>
                        </div>
                        <div>
                            <div class="flex justify-between mb-1">
                                <span>JavaScript</span>
                                <span>90%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2.5">
                                <div class="bg-blue-600 h-2.5 rounded-full"></div>
                            </div>
                        </div>
                        <div>
                            <div class="flex justify-between mb-1">
                                <span>React</span>
                                <span>85%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2.5">
                                <div class="bg-blue-600 h-2.5 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold mb-6 text-blue-600">Backend Development</h3>
                    <div class="space-y-4">
                        <div>
                            <div class="flex justify-between mb-1">
                                <span>Node.js</span>
                                <span>88%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2.5">
                                <div class="bg-blue-600 h-2.5 rounded-full"></div>
                            </div>
                        </div>
                        <div>
                            <div class="flex justify-between mb-1">
                                <span>Python</span>
                                <span>80%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2.5">
                                <div class="bg-blue-600 h-2.5 rounded-full"></div>
                            </div>
                        </div>
                        <div>
                            <div class="flex justify-between mb-1">
                                <span>Database</span>
                                <span>85%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2.5">
                                <div class="bg-blue-600 h-2.5 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-16">
                <h3 class="text-2xl font-semibold text-center mb-8">Tools & Technologies</h3>
                <div class="flex flex-wrap justify-center gap-6">
                    <div class="bg-white shadow-md rounded-lg p-4 w-24 h-24 flex flex-col items-center justify-center">
                        <i class="fab fa-git-alt text-3xl text-blue-600 mb-2"></i>
                        <span class="text-sm">Git</span>
                    </div>
                    <div class="bg-white shadow-md rounded-lg p-4 w-24 h-24 flex flex-col items-center justify-center">
                        <i class="fab fa-docker text-3xl text-blue-600 mb-2"></i>
                        <span class="text-sm">Docker</span>
                    </div>
                    <div class="bg-white shadow-md rounded-lg p-4 w-24 h-24 flex flex-col items-center justify-center">
                        <i class="fab fa-aws text-3xl text-blue-600 mb-2"></i>
                        <span class="text-sm">AWS</span>
                    </div>
                    <div class="bg-white shadow-md rounded-lg p-4 w-24 h-24 flex flex-col items-center justify-center">
                        <i class="fas fa-database text-3xl text-blue-600 mb-2"></i>
                        <span class="text-sm">MongoDB</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default skills
