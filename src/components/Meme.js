
import React from "react"
// import memesData from "../memesData"
import '../index.scss'

export default function Meme () {
//    const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/1bij.jpg")
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com1bij.jpg"
    })
    const [allMemeImages, setAllMemeImages] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemeImages(data.data.memes))
    }, [])

function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return (
    <main>
        <div className="form">
            <input 
            className="form--input" 
            type="text" 
            placeholder="top-text"
            name="topText"
            value={meme.topText}
            onChange={handleChange} 
            />
            <input 
            className="form--input" 
            type="text" 
            placeholder="bottom-text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
            />
            <button 
            onClick={getMemeImage} 
            className="form--button"
            >
                Get a new meme image🖼
            </button>
        </div>
        <div className="meme">
            <img className="meme--image" src={meme.randomImage} />
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
    </main>
    )
}

