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
      <input type="text" onChange={(e) => {setUserInput(e.target.value)}} placeholder="Input youtube url." />
      <input type="button" value="Add" onClick={
        () => {
          setVideoCatagories(
            listOfCategory.includes(videoCategory) ? listOfCategory : [...listOfCategory, videoCategory]
          );
          setList([...listOfVideos, {"src": userInput, "category": videoCategory}]);
          
        }
        } />
      </form>
      </header>

      {console.log(listOfCategory + "video cartecogry is" + videoCategory)}

      <h1>List of categories:</h1>
      {
      listOfCategory.map((category, cateIndex) => (
        <button onClick={() => setmaincat(category)}>{category}</button>
      ))
      }
      
      {
        listOfCategory.map((category, cateIndex) => (
          <>
          <h1>{category}</h1>
          <div id={"category_"+category} className="categories" key={cateIndex}>
            {listOfVideos.map((videoObject, index) => (
              <div className="card">
                
                {videoObject.category == category ? <><button onClick={() => {listOfVideos.splice(index, 1); console.log("del;eteedd")}}>Delete</button><Video src={videoObject.src} key={index} /></> : ""}
              </div>
            ))}
          </div>
        </>
        ))
      }

               
     


    <h2>Suggested Videos</h2>
      <p>https://www.youtube.com/watch?v=t8xz5Lcyn94</p>
      <p>https://www.youtube.com/watch?v=rzLIUgnKY40</p>
      <p>https://www.youtube.com/watch?v=En9peg7fbxQ</p>
    </>
  )
}

export default App
