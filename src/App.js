import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DailyPromptContainer from './containers/DailyPromptContainer';
import Navbar from './navigation/Navbar';




function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Header />
      <Switch>
        <Route path="/">
            <DailyPromptContainer />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
