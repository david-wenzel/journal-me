import { useState } from "react"
import { useHistory } from "react-router-dom";
import './EntryForm.css';

export default function EntryForm({prompt}) {
  const [entry, setEntry] = useState('');
//   const [usedPrompt, setUsedPrompt] = useState();
  //try useReducer
//   form is simple submit which gets posted to db
let randomPrompt = (prompt[Math.floor(Math.random() * prompt.length)])
// setUsedPrompt(randomPrompt
let history = useHistory()

const handleSubmit = e => {
  e.preventDefault()
  const newEntry = { entry}

  fetch("http://localhost:3001/entries", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newEntry)
  })
  setEntry('')
  history.push("/homepage/entries")
}
function handleView(){
    history.push("homepage/entries")
}
  
    return (
    <div className="entryForm" style={{height: '100vh'}}>
        <form onSubmit={handleSubmit}>
            {/* <input id='randomPrompt' type='text'  value={randomPrompt} /> */}
            <br></br>
            <textarea id='entry' onChange={e => setEntry(e.target.value)} type='text' name="entry"  value={entry} placeholder="journal your thoughts..." />
            <input type="submit" value=">" />
        </form>
        <button onClick={handleView}>V</button>
    </div>
  )
}


