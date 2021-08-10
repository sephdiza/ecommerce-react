import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import "./App.css"

import Homepage from "./pages/homepage/Homepage"
import Shop from "./pages/shop/Shop"
import SignInSignUp from "./pages/signin-signup/SignInSignUp"
import Header from "./components/header/Header"
import { auth } from "./firebase/firebase.utils"
import React from "react"

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null,
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user })

      console.log(user)
    })
  }

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signin" component={SignInSignUp} />
        </Switch>
      </Router>
    )
  }
}

export default App
