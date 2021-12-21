import './App.css';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import ResponsiveAppBar from './Component/Nav';

function App() {
  return (
    <div>  
        <Router>
         
            <div className="container">
              <Switch>
                
                  <Route path="/employees" component={ResponsiveAppBar}></Route>                 
                
              </Switch>
            </div>
     


</Router>

    </div>

  );
}

export default App;
 
