import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Landingpage() {

  let history = useHistory();

// add email validation
// push to route of welcome 

const [email, setEmail] = useState("");

let handleSubmit = e => {
  e.preventDefault()
 let submitedEmail = {email}
  fetch("http://localhost:3001/emails", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(submitedEmail)
  })
  history.push("/homepage")
  };


  return (
    <div>
      <h2>We are currently in BETA, please sign-up for our email list for access to our demo app</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          placeholder="EMAIL"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}
