import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import routes from './routes';


function App() {
  return (
    <div className="App">
      salom
      <Redirect to="/home" />
          <Switch>
              {routes.auth.map(item => {
                return(
                  <Route {...item} />
                )
              })}  
          </Switch>
    </div>
  );
}

export default App;
