import React from 'react'

const contact = () => {
  return (
    <div>
       <section id="contact" class="py-20 px-6 bg-gray-100">
        <div class="container mx-auto">
            <h2 class="text-3xl font-bold text-center mb-6">Get In Touch</h2>
            <p class="text-center text-lg mb-16 max-w-2xl mx-auto">Have a project in mind or want to discuss potential opportunities? Feel free to reach out!</p>
            
            <div class="flex flex-col md:flex-row gap-12">
                <div class="md:w-1/2">
                    <form class="space-y-6">
                        <div>
                            <label for="name" class="block mb-2 font-medium">Your Name</label>
                            <input type="text" id="name" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"/>
                        </div>
                        <div>
                            <label for="email" class="block mb-2 font-medium">Your Email</label>
                            <input type="email" id="email" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"/>
                        </div>
                        <div>
                            <label for="message" class="block mb-2 font-medium">Your Message</label>
                            <textarea id="message" rows="5" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
                        </div>
                        <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 w-full">Send Message</button>
                    </form>
                </div>
                
                <div class="md:w-1/2">
                    <div class="bg-white p-8 rounded-lg shadow-md h-full">
                        <h3 class="text-xl font-semibold mb-6 text-blue-600">Contact Information</h3>
                        <div class="space-y-6">
                            <div class="flex items-start">
                                <i class="fas fa-envelope text-blue-600 text-xl mt-1 mr-4"></i>
                                <div>
                                    <h4 class="font-semibold">Email</h4>
                                    <p class="text-gray-600">john@example.com</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <i class="fas fa-phone text-blue-600 text-xl mt-1 mr-4"></i>
                                <div>
                                    <h4 class="font-semibold">Phone</h4>
                                    <p class="text-gray-600">+1 (123) 456-7890</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <i class="fas fa-map-marker-alt text-blue-600 text-xl mt-1 mr-4"></i>
                                <div>
                                    <h4 class="font-semibold">Location</h4>
                                    <p class="text-gray-600">San Francisco, California</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="mt-10">
                            <h4 class="font-semibold mb-4">Follow Me</h4>
                            <div class="flex space-x-4">
                                <a href="#" class="bg-gray-100 hover:bg-blue-600 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                                    <i class="fab fa-github"></i>
                                </a>
                                <a href="#" class="bg-gray-100 hover:bg-blue-600 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                                <a href="#" class="bg-gray-100 hover:bg-blue-600 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default contact
