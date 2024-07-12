import React, { useState } from 'react'

export default function Search(props) {
  const[query,newquery]=useState("")

  function handleclick()
  {
    props.place(query);
  }
  return (

<div className="search-container">
    <input type="text" id="search-box" className="search-box" placeholder="Search..." value={query} onChange={(e) => newquery(e.target.value)} />
    <button className="search-button" onClick={handleclick}>
      
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="blue" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
    </button>
    
</div>
  )
}
