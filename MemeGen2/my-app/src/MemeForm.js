import React,{useEffect, useState} from "react"
import App from "./App"



export default function MemeForm() {


    const [meme, setMeme] = useState({
        topText: "",
        bottomText:"",
        randomImage: "http://i.imgflip.com/1bij.jpg",
        memeArray:[]
    })


    const [memeList, setMemeList] = useState([])
    const [allMemeImages, setAllMemeImages] = useState([])


     
    useEffect(() => {
        async function getMemes() {
            const res= await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemeImages(data.data.memes)
        }
        getMemes()


       
       
    }, [memeList])


    function getMemeImage( ) {
        //const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * allMemeImages.length )
        const url = allMemeImages[randomNumber].url
         setMeme(prevMeme => ({
            ...prevMeme,
            randomImage:url
        }))
    }


    function saveButton() {
        setMemeList(()  => {
            return[...memeList, {
                topText: meme.topText,
                bottomText: meme.bottomText,
                randomImage: meme.randomImage,
                memeArray: [...memeList.map(( index) => {return })]
            }]
        })


        // reset the memeForm text fields after the image has been saved
        setMeme({
            topText: "",
            bottomText:"",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            memeArray:[]
        })
    }


    function deleteButton(index) {
        setMemeList(memeList.slice(0, index).concat(memeList.slice(index +1)))
    }


    function handleSubmit(event) {
        event.preventDefault()
        setMemeList(prevMeme => {
            //console.log("i was clicked")
          return{
            ...prevMeme,
          topText: "",
          bottomText: "",
          badgeArr: [...prevMeme.badgeArr, {...prevMeme}]
          }
        })
      }



    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMemeList => ({
           ...prevMemeList,
            [name]: value
           
        }))        
    }
              
                        


    return (
        <main>
            
            <div className="form">
                <input
                type="text"
                placeholder="Top Text"
                className="form--input"
                name="topText"
                value={meme.topText}
                onChange={handleChange}
                />
                <input
                type="text"
                placeholder="Bottom Text"
                className="form--input"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
                />

                <button
                className="form--buttom"
                onClick={getMemeImage}
                >
                    Get New Image
                </button>

                <button className="saveMeme"
                onClick={saveButton}> Save Meme to List</button>

                <button 
                onClick={handleSubmit}>Submit</button>

            </div>

            <div className="meme">
                <img src={meme.randomImage} className="meme--image"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
                <div></div>
             {/* <div> */}

                {/* <ol> */}
                    {/* {memeList.map(meme => */}
                         {/* <li> */}
                            {/* <div> */}
                                {/* <a href={meme.randomImage} target="_blank">{meme.randomImage}</a> */}
                                {/* <button className="form--buttom" onClick={deleteButton(meme.randomImage)}>Delete Meme</button> */}

                            {/* </div> */}

                            {/* </li>)} */}

                            {/* </ol> */}
                            {/* </div> */}
             <div>
                <ol>
                    {memeList.map((meme, index) => 
                        <li>
                            <div>
                                <a href={meme.randomImage} target="_blank">{meme.randomImage}</a>
                                <button className="form--buttom" onClick={() => deleteButton(index)}>Delete Meme</button>
                            </div>
                        </li>)}
                </ol>
            </div>
            
        </main>
    )

}