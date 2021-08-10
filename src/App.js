import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import "./App.css"

import Homepage from "./pages/homepage/Homepage"
import Shop from "./pages/shop/Shop"

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
        </div>
      </Switch>
    </Router>
  )
}

export default App
