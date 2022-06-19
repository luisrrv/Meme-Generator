import React from "react"
import { BsFillEmojiSunglassesFill } from 'react-icons/bs'
import memesData from "../memesData"
import logo from "../images/logo.png"


const Meme = () => {
  const [img, setImg] = React.useState(logo)
  const getRandomImage = () => {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    setImg(memesArray[randomNumber].url)
    // console.log(memesArray[randomNumber].url)


  }

  return (
  <main>
    <div className="form">
      <input className="form--input" type="text" placeholder="Top text" />
      <input className="form--input" type="text" placeholder="Bottom text" />
      <button onClick={getRandomImage} className="form--button">GENERATE <BsFillEmojiSunglassesFill size={16} /></button>
    </div>
    <img className="generated--meme" src={img} alt='meme' />
  </main>
  )
}

export default Meme
