import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DailyPromptContainer from './components/containers/DailyPromptContainer';
import Landingpage from './components/navigation/Landingpage';
import Navbar from './components/navigation/Navbar';
import JournalEntries from './components/promptFunctionality/JournalEntries';



function App() {
  return (
    <div className="App">
      <Router>
      {/* <Switch> */}
      <Route exact path='/'>
      <Landingpage />
      </Route>
      <Route path='/homepage'>
        <DailyPromptContainer />
      </Route>
      <Route path='/entries'>
        <JournalEntries />
      </Route>
      {/* </Switch> */}
    </Router>
    </div>
  );
}

export default App;
