import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DailyPromptContainer from './components/containers/DailyPromptContainer';
import Landingpage from './components/navigation/Landingpage';




function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route exact path='/'>
      <Landingpage />
      </Route>
      <Route path='/homepage'>
        <DailyPromptContainer />
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
