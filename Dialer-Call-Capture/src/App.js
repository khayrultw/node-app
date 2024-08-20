import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import Dialer from './components/Dialer'
import DialerCall from './components/DialerCall'

function App() {
    return (
      <>
       <Router>
          <Switch>
            <Route exact path='/' component={Dialer} />
            <Route exact path='/dialer-call/:number/:callFrom' component={DialerCall} />
          </Switch>
        </Router>
      </>
    )
}

export default App;