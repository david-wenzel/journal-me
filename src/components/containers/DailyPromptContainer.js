import { useEffect, useState } from "react";
import { Route, Switch } from 'react-router-dom';
import Navbar from "../navigation/Navbar";
import EntryForm from "../promptFunctionality/EntryForm";
import JournalEntries from "../promptFunctionality/JournalEntries";
import Prompt from "../promptFunctionality/Prompt";


export default function DailyPromptContainer() {
  

  const [prompts, setPrompts] = useState([]);
  const [entries, setEntries] = useState([]);

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

  // let randomPrompt = (prompt[Math.floor(Math.random() * prompt.length)])

 
 
  //----entries----//
  
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
    
  

  return (
    <div className="promptsContainer">
      <Navbar />
      <Prompt prompt={prompts}/>
      <EntryForm prompt={prompts} />
      <Route path="/homepage/entries">
      <JournalEntries entries={entries} />
      </Route>
    </div>
  )
}
