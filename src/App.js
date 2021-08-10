import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import "./App.css"

import Homepage from "./pages/homepage/Homepage"
import Shop from "./pages/shop/Shop"
import Header from "./components/header/Header"

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </Router>
  )
}

export default App
