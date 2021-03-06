
import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Myfooter from './components/Myfooter/Myfooter';
import Services from './components/Services/Services';
import Faqs from './components/Home/Faqs/Faqs';
import Notfound from './components/Notfound/Notfound';


function App() {
  return (
    <div>
    
     <Router>
      <Header/>
       <Switch>
         <Route exact path="/">
              <Home></Home>
         </Route>
         <Route path="/home">
            <Home></Home>
         </Route>
         <Route path="/about">
           <About></About>
         </Route>
        <Route path="/services">
          <Services></Services>
        </Route>
        <Route path="/faq">
              <Faqs></Faqs>
        </Route>
        <Route path="*">
            <Notfound></Notfound>
        </Route>
       </Switch>
       <Myfooter></Myfooter>
     </Router>
    </div>
  );
}

export default App;
