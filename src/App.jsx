import { useState } from 'react'
import './App.css'
import { Texts } from './constants/texts'

const App = () => {
  const [isEnglish, setIsEnglish] = useState(false)



  return (
    <div>
      <p className='brandTitle'>{
        isEnglish ?
          Texts.brandTitleEnglish
          :
          Texts.brandTitleTurkish
      }
      </p>
      <button onClick={() => setIsEnglish(!isEnglish)}>{
        isEnglish ?
          Texts.switchEnglish
          :
          Texts.switchTurkish
      }</button>
    </div>
  )
}

export default App