import React from "react"
import { BsFillEmojiSunglassesFill } from 'react-icons/bs'
import memesData from "../memesData"
import logo from "../images/logo.png"


const Meme = () => {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: logo
  })

  const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  const getRandomImage = () => {
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
    // console.log(memesArray[randomNumber].url)


  }

  return (
  <main>
    <div className="form">
      <input className="form--input" type="text" placeholder="Top text" />
      <input className="form--input" type="text" placeholder="Bottom text" />
      <button onClick={getRandomImage} className="form--button">GENERATE <BsFillEmojiSunglassesFill size={16} /></button>
    </div>
    <img className="generated--meme" src={meme.randomImage} alt='meme' />
  </main>
  )
}

export default Meme
