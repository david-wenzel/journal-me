import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DailyPromptContainer from './components/containers/DailyPromptContainer';
import Landingpage from './components/navigation/Landingpage';
import JournalEntries from './components/promptFunctionality/JournalEntries';
import About from './components/navigation/About';



function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
      <Route exact path='/'>
      <Landingpage />
      </Route>
      <Route path='/homepage'>
        <DailyPromptContainer />
        {/* <JournalEntries /> */}
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
