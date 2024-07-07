import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import card1 from "../src/assets/card1.jpeg"
import card2 from "../src/assets/card2.jpeg"
import card3 from "../src/assets/card3.jpeg"
import Card from './components/Card'


function App() {
  
  return (
    <>
      <Navbar/>
      <Hero/>
      <div className=' px-5 flex gap-4'>
      <Card
      image = {card1}
      rating = "4.5"
      reviewCount = {6}
      country = "India"
      title = {"Settl Norcia"}
      price = "15,000"  
      />
      <Card
      image = {card2}
      rating = "5.0"
      reviewCount = {15}
      country = "India"
      title = "Settl Vernazza"
      price = "19,000"
      />
      <Card
      image = {card3}
      rating = "4.0"
      reviewCount = {16}
      country = "India"
      title = "Settl Altea"
      price = "17,000"
      />
      </div>
      
    </>
  )
}

export default App
