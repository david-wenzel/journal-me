import { useState } from "react"

export default function EntryForm({prompt}) {
  const [entry, setEntry] = useState('');
//   const [usedPrompt, setUsedPrompt] = useState();
  //try useReducer
//   form is simple submit which gets posted to db
let randomPrompt = (prompt[Math.floor(Math.random() * prompt.length)])
// setUsedPrompt(randomPrompt


const handleSubmit = e => {
  e.preventDefault()
  const newEntry = {randomPrompt, entry}

  fetch("http://localhost:3001/entries", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newEntry)
  })
  setEntry('')
}

  
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text'  value={randomPrompt} />
            <br></br>
            <textarea onChange={e => setEntry(e.target.value)} type='text' name="entry" id="entry" value={entry} placeholder="journal your thoughts..." />
            <input type="submit" value=">" />
        </form>
    </div>
  )
}
