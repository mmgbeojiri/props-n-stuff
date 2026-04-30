import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Video from "./Video.jsx"
import './App.css'

function App() {
  const [userInput, setUserInput] = useState("");
  const [listOfVideos, setList] = useState([]);
  const [videoCategory, setVideoCatagory] = useState("");
  const [listOfCategory, setVideoCatagories] = useState([])


  const [mainCategory, setmaincat] = useState("");

  return (
    <>
    <header>
      <h1>Multivideo Watcher</h1>
      <form>
        <input type="text" id="catagories" onChange={(e) => {setVideoCatagory(e.target.value)}} placeholder="input catagory of video"/>
      <input type="text" id="urlSearch" onChange={(e) => {setUserInput(e.target.value)}} placeholder="Input youtube url." />
      <input type="button" value="Add" onClick={
        () => {
          setVideoCatagories(
            listOfCategory.includes(videoCategory) ? listOfCategory : [...listOfCategory, videoCategory]
          );
          setList([...listOfVideos, {"src": userInput, "category": videoCategory}]);
          setmaincat(videoCategory)
        }
        } />
      </form>
      </header>

      {console.log(listOfCategory + "video cartecogry is" + videoCategory)}
        <div id="cateSelect">
      <h1>List of categories:</h1>
      <div id="buttonInCateSelect">
      {
      listOfCategory.map((category, cateIndex) => (
        <button className={category == mainCategory ? "active-button" : ""} onClick={() => setmaincat(category)}>{category}</button>
      ))
      }
      </div>
      </div>
     
      <div id="videoContainer">
      
        
            {listOfVideos.map((videoObject, index) => (
              <>
                
                {videoObject.category == mainCategory ? 
                <div className="card">
                <button class="delete" onClick={
                  () => {
                    let tempList = [...listOfVideos]
                    tempList.splice(index, 1); 
                    setList(tempList);
                    console.log("del;eteedd")}
                  }>X</button>
                <Video src={videoObject.src} key={index} />
                </div> 
                : ""}
             </>
            ))}
            
          
          </div>

               
     
<footer>
    <h2>Suggested Videos</h2>
      <p>https://www.youtube.com/watch?v=t8xz5Lcyn94</p>
      <p>https://www.youtube.com/watch?v=rzLIUgnKY40</p>
      <p>https://www.youtube.com/watch?v=En9peg7fbxQ</p>

<hr></hr>
<p>https://www.youtube.com/watch?v=xn8q705ml38</p>
<p>https://www.youtube.com/watch?v=53ChkkMu39c</p>
<p>https://www.youtube.com/watch?v=AYa0T-mBz1Y</p>
<p>https://www.youtube.com/watch?v=JabG22Zl02I</p>
<p>https://www.youtube.com/watch?v=n_xf1OLpBTw</p>
<p>https://www.youtube.com/watch?v=gidMr-5LTLg</p>
<p>https://www.youtube.com/watch?v=a9QgAXlrWHw</p>

<textarea placeholder="Type any youtube links you need to refer back to here!"></textarea>
    </footer>
    </>
  )
}

export default App
