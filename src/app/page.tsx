import React from 'react';

const Home = () => {
    return (
      <div className='bg-gradient-to-b from-green-100 to-green-300 min-h-screen'>
        <header className="bg-green-600 text-white p-4">
                <nav className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">NatureScape</h1>
                    <ul className="flex space-x-4">
                        <li><a href="#home" className="hover:text-green-200">Home</a></li>
                        <li><a href="#about" className="hover:text-green-200">About</a></li>
                        <li><a href="#contact" className="hover:text-green-200">Contact</a></li>
                    </ul>
                </nav>
            </header>

            <main className='container mx-auto px-4 py-12'>
              <section id="home" className="text-center mb-16">
                <h1 className="text-5xl font-bold text-green-800 mb-4">
                  Welcome to NatureScape
                </h1>

                <p className="text-xl text-green-700 mb-8">
                  Your destination for beautiful landscapes.
                </p>

                <button className='bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300'>
                  Explore Now
                </button>
              </section>
            </main>
        </div>
    )
}

export default Home;