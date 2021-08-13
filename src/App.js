import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import "./App.css"

import Homepage from "./pages/homepage/Homepage"
import Shop from "./pages/shop/Shop"
import SignInSignUp from "./pages/signin-signup/SignInSignUp"
import Header from "./components/header/Header"
import { auth, createUserProfileDocument } from "./firebase/firebase.utils"
import React from "react"

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          })
        })
      } else {
        this.setState({
          currentUser: userAuth,
        })
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <Router>
        <Header currentUser={this.state.currentUser} />
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
