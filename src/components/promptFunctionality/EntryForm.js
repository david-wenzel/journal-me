import { useState } from "react"
import './EntryForm.css';

export default function EntryForm({addEntry}) {
  const [entry, setEntry] = useState('');


const handleSubmit = e => {
  e.preventDefault()
  addEntry({entry})
  console.log({entry})
  setEntry('')
}

    return (
    <div className="entryForm">
        <form onSubmit={handleSubmit}>   
            <textarea id='entry' onChange={e => setEntry(e.target.value)} type='text' name="entry"  value={entry} placeholder="journal your thoughts..." />
            <input type="submit" value=">" />
        </form>
    </div>
  )
}


