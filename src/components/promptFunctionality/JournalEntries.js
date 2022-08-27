import { useEffect, useState } from "react";
import EntryCard from "./EntryCard";


export default function JournalEntries() {



    const [entries, setEntries] = useState([]);
    
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
        <div className="notes-list">

            {entries.map(entry =>  <EntryCard key={entry.id} entry={entry} />)}
    
        </div>
      )
    }
    


