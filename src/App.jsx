import { useEffect, useState } from 'react'

import './App.css'

import NewCard from './NewCard'


function App() {
  const [text, setText] = useState('')
  let allData = [];
  let initial = []

  const [superb, setSuperb] = useState(Array(1000));
  useEffect(async ()=>{
    async function getChar(character_id){

      let url = `https://superheroapi.com//api.php/727054372039115/${character_id}`;
      try{
          const response = await fetch(url);
          initial = await response.json();
          if(initial.response === 'success'){
              allData.push(await initial)
          }
      } catch(error){
          console.log(error);
      }
  }
  for( let i=0;i<6;i++){
    const r = Math.floor(Math.random()*731)+1
    await getChar(r)
  }
  setSuperb(allData)
  }, [])

  useEffect(()=> {
    async function getImage(searchText){
      let url = `https://www.superheroapi.com/api.php/727054372039115/search/${searchText}`;
      try{
          const response = await fetch(url);
          allData = await response.json();
          if(allData.response === 'success'){
              setSuperb(allData.results);
          }
      } catch(error){
          console.log(error);
      }
  }
  if (text !== ''){
    getImage(text);
  }else{
    setSuperb(Array(1000))
  }
  },[text])
    

  function changeText(e){
    setText(e.target.value)    
  }

  return (

    <>
    
    <div className='head-container'>
      <video src='videos/video-main.mp4' autoPlay loop muted />

      <h2>Welcome to the world of <b>SuperHeros</b></h2>
      <br/>
      <br/>
      <input name='text' className='form__input' placeholder='Enter a name' value={text} onChange={changeText}></input>
    </div>

    <NewCard superb={superb}/>

    </>
    
      
    
  )
}

export default App
