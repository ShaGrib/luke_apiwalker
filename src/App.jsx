import './App.css';
import Form from './components/Form';
import Info from './components/Info';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App container p-3">
        <Form></Form>
        <Switch>
          <Route exact path="/:category/:id">
            <Info></Info>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
