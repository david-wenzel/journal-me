

export default function EntryCard({entry}) {
  return (
    <div>
        <h3>{`Journal entry ${entry.id}` || 'My Thoughts'}</h3>
        <p>{entry.entry}</p>
        <small>date created</small>
        <button>delete</button>
    </div>
  )
}

