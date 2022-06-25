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

  const handleChange = (e) => {
    const {name, value} = e.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
  <main>
    <div className="form">
      <input className="form--input" name="topText" type="text" placeholder="Top text" value={meme.topText} onChange={handleChange} />
      <input className="form--input" name="bottomText" type="text" placeholder="Bottom text" value={meme.bottomText} onChange={handleChange} />
      <button onClick={getRandomImage} className="form--button">GENERATE <BsFillEmojiSunglassesFill size={16} /></button>
    </div>
    <div className="meme">
      <img className="generated--meme" src={meme.randomImage} alt='meme' />
      <h2 className="meme--text top">{meme.topText}</h2>
      <h2 className="meme--text bottom">{meme.bottomText}</h2>
    </div>
  </main>
  )
}

export default Meme
