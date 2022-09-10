import { useEffect, useState } from "react";
import Navbar from "../navigation/Navbar";
import EntryForm from "../promptFunctionality/EntryForm";
import JournalEntries from "../promptFunctionality/JournalEntries";
import Prompt from "../promptFunctionality/Prompt";
import './DailyPromptContainer.css'


export default function DailyPromptContainer() {
  
  const [entries, setEntries] = useState([]);
  const [prompts, setPrompts] = useState([]);


  //---prompts--//
  const fetchPrompts = async () => {
    try {
      const resp = await fetch("http://localhost:3001/prompts")
      const data = await resp.json()
      //maps over state variable of prompts to create an array of prompts
      setPrompts(data.map(a => a.prompt))
    } catch (error) {
      alert(error)
    }
  }
  
  useEffect(() => {
    fetchPrompts()
  }, []);


//entries -----------------//

    
const fetchEntries = async () => {
    try {
        const resp = await fetch("http://localhost:3001/entries")
        const data = await resp.json()
        setEntries(data) 
    } catch (error) {
      alert(error)   
    }
}


useEffect(() => {
    fetchEntries()
}, []);
  

const addEntry = ({entry}) => {
  const newEntry = {entry}
  
  fetch("http://localhost:3001/entries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newEntry)
    
  })
  
  setEntries([...entries, {entry}])
  
}

  return (
    <div className="promptsContainer">
      <Navbar />
      <Prompt prompt={prompts}/>
      <EntryForm addEntry={addEntry}/>
      <JournalEntries entries={entries}/>
    </div>
  )
}
