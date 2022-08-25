import { useEffect, useState } from "react";
import Navbar from "../navigation/Navbar";
import EntryForm from "../promptFunctionality/EntryForm";
import JournalEntries from "../promptFunctionality/JournalEntries";
import Prompt from "../promptFunctionality/Prompt";


export default function DailyPromptContainer() {
  
  const [prompts, setPrompts] = useState([]);


  const fetchPrompts = async () => {
    try {
      const resp = await fetch("http://localhost:3001/prompts")
      const data = await resp.json()
      setPrompts(data.map(a => a.prompt))
      
    } catch (error) {
      alert(error)
    }
  }
  
  useEffect(() => {
    fetchPrompts()
  }, []);
  
  let randomPrompt = prompts[Math.floor(Math.random() * prompts.length)]

  return (
    <div>
      <Navbar />
      <Prompt prompt={randomPrompt}/>
      <EntryForm />
      <JournalEntries />
    </div>
  )
}
