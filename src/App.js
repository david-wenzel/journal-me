import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DailyPromptContainer from './components/containers/DailyPromptContainer';
import Navbar from './components/navigation/Navbar';
import Header from './components/navigation/Header';
import Landingpage from './components/navigation/Landingpage';
import About from './components/navigation/About';




function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Header />
      <Switch>

        <Route path="/welcome">
            <Landingpage />
        </Route>


        <Route path="/about">
          <About />
        </Route>

        <Route path="/">
         <DailyPromptContainer />
        </Route>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
