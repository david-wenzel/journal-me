import EntryCard from "./EntryCard";
import './JournalEntries.css'


export default function JournalEntries({entries}) {





      return (
        <div className="notes-list">
            {/* <Navbar /> */}
            {entries.map(entry =>  <EntryCard key={entries.indexOf(entry) || entries.length+1} entry={entry} id={ `Journal Entry #${entries.indexOf(entry)+1}` || 'new entry'} />)}
    
        </div>
      )
    }
    


