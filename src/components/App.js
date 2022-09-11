import React,{useState}from 'react'
import '../styles/App.css';
const App = () => {
  const [happy,setHappy] = useState(true)
  const [sad,setSad] = useState(false)
  const [sleepy,setSleepy] = useState(false)
  const [excited,setExcited] = useState(false)
  const handleChange=(e)=>{
    if(e.target.value=='Happy'){
      setHappy(true);
      setSad(false);
      setExcited(false);
      setSleepy(false);
    }
    if(e.target.value=='Sad'){
      setHappy(false);
      setSad(true);
      setExcited(false);
      setSleepy(false);
  }
  if(e.target.value=='Sleepy'){
    setHappy(false);
    setSad(false);
    setExcited(false);
    setSleepy(true);
}
if(e.target.value=='Excited'){
  setHappy(false);
  setSad(false);
  setExcited(true);
  setSleepy(false);
}
}
  return (
    <div id="mood-indicator">
      <select onChange={handleChange}>
        <option value='Happy'>Happy</option>
        <option value='Sad'>Sad</option>
        <option value='Sleepy'>Sleepy</option>
        <option value='Excited'>Excited</option>
      </select>
      <div className={happy? "mode1" : ""}></div>
      <div className={sad? "mode2" : ""}></div>
      <div className={sleepy? "mode3" : ""}></div>
      <div className={excited? "mode4" : ""}></div>
    </div>
  )
}


export default App;