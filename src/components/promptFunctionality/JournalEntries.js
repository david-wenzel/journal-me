import EntryCard from "./EntryCard";


export default function JournalEntries() {
  return (
    <div className="notes-list">
      {/* will need to map over this for each journal entry */}
        <EntryCard />

    </div>
  )
}
