import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import WelcomeText from './components/WelcomeText'
import Card from './components/Card'
import Counter from './components/Counter'


function App() {
 // A component is a function that returns a HTML element

  return (
    <div>
      <h1>Hello World</h1>
      <WelcomeText />
      <div className='cards'>
      <Card name='Aloe Vera' desc='Very healthy plant'/>
      <Card name='Rosemary' desc='Used for hair'/>
      <Card name='Nettle' desc='Used for different purposes'/>
      </div>
      <Counter/>
    
    </div>
  )
}

export default App
