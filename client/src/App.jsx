// import { useState } from 'react'
import './App.css'
import HeaderCards from './components/Cards'

function App() {


  return (
    <>
      <h1>ubidots realtime</h1>

      <button onClick={() => { }}>
        Refresh
      </button>

      <section>
        <HeaderCards />
      </section>
    </>
  )
}

export default App
