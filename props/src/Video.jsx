import React from "react"

function Video({src}) {
    let url = src.replace("https://www.youtube.com/watch?v=", "https://www.youtube.com/embed/")
    console.log(url)
    return (
        <>
        <iframe referrerpolicy="strict-origin-when-cross-origin"  src={url}></iframe>
        </>
)
}

export default Video
