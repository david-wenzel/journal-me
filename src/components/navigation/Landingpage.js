import { useState } from "react";
import { useHistory } from "react-router-dom";
import './Landingpage.css';

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
  history.push("/homepage/")
  };


  return (
    <div className="landingPage">
    <img id="leftHalf" src="https://images.squarespace-cdn.com/content/v1/5acdc43ecc8fed1087066353/1661218820629-MCUV09LJBSDBEO9ICKP4/unsplash-image-ciO5L8pin8A.jpg?format=2500w"></img>
    <div id='rightHalf'>
        <img id='logo' src="https://64.media.tumblr.com/0cbd98315d5588fb2e7b78eb002f1e54/8480379ca55bc022-78/s1280x1920/453f8a5fc6bfe78e8e7cd8d58b9f0384486fa027.pnj" />
      <span class='info'>
      <p id='about'>JOURNAL.me is both service and community, founded in the tradition of self exploration and reflection. We center outselves around well-being, design, art and self connection. When we take time to reflect we are able to connect to our values, intuitions, feelings, emotions, and our true selves. </p>  
      <p>We are currently in BETA, please sign-up for our email list for access to our demo app</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          placeholder="EMAIL"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">></button>
      </form>
      </span>
    </div>
    </div>
  )
}
