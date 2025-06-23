import React from 'react'
import Search from './Components/Search'

const App = () => {
  return (
    <main>
       <div
       className="pattern h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/BG.svg')" }}>
        <div className='wrapper'>
        <header>
          <img src="./hero-img.png" alt="Hero Banner" />
            <h1>Explore <span className='text-gradient'>Movies</span> That Match Your Mood</h1>
        </header>
           
           <Search />
        </div>
       </div>
    </main>
  )
}

export default App