
export default function Prompt({prompt}) {
  
  let randomPrompt = prompt[Math.floor(Math.random() * prompt.length)]

  return (
    <div>
      <h1>{randomPrompt}</h1>
    </div>
  )
}
