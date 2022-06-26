import React from "react"
import { BsFillEmojiSunglassesFill } from 'react-icons/bs'
// import memesData from "../memesData"
import logo from "../images/logo.png"


const Meme = (props) => {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: logo
  })

  const [allMemes, setAllMemes] = React.useState([])

  React.useEffect(() => {
    const getMemes = async () => {
      const res = await fetch("https://api.imgflip.com/get_memes")
      const data = await res.json()
      setAllMemes(data.data.memes)
    }
    getMemes()
  }, [])

  const getRandomImage = () => {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
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
    <div className="form" id={props.darkMode ? "" : "light-form"}>
      <input className="form--input" id={props.darkMode ? "" : "light-form"}
        name="topText"
        type="text"
        placeholder="Top text"
        value={meme.topText}
        onChange={handleChange}
      />
      <input className="form--input" id={props.darkMode ? "" : "light-form"}
        name="bottomText"
        type="text"
        placeholder="Bottom text"
        value={meme.bottomText}
        onChange={handleChange}
      />
      <button className="form--button"
        onClick={getRandomImage}
      >
        GENERATE <BsFillEmojiSunglassesFill size={16} />
      </button>
    </div>
    <div className="meme">
      <img className="generated--meme" src={meme.randomImage} alt='meme' />
      <h2 className="meme--text top">{meme.randomImage === logo ? "write your top/bottom text" :meme.topText}</h2>
      <h2 className="meme--text bottom">{meme.randomImage == logo ? "then click generate to get meme image" :meme.bottomText}</h2>
    </div>
  </main>
  )
}

export default Meme
