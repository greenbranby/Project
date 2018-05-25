import React from 'react';
import {
     BrowserRouter,
     Route,
     Switch
} from 'react-router-dom';


//Components
import Container from './Container';
import Error from './Components/Error';



const App = (props) => (
    <BrowserRouter>
      <div className="container">
      <Switch>
       <Route exact path="/" component={() => <Container query="petunias" />} />
       <Route path="/ranunculus" component={ () => <Container query="ranunculus" /> } />
       <Route path="/tulips" component={ () => <Container query="tulips" /> } />
       <Route path="/peonies" component={ () => <Container query="peonies" /> } />
       <Route path="search/:query" component={Container} />
       <Route path='*'component={Error} />
     </Switch>
     </div>
   </BrowserRouter>
  );


export default App;