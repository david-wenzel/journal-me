import "./EntryCard.css"

export default function EntryCard({entry, id}) {
  return (
    <div id="card">
        <h3>{id}</h3>
        <p>{entry.entry}</p>
    </div>
  )
}

