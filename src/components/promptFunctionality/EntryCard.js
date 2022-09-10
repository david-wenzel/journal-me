

export default function EntryCard({entry, id}) {
  return (
    <div>
        <h3>{id}</h3>
        <p>{entry.entry}</p>
    </div>
  )
}

