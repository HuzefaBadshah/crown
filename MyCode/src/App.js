import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { auth, createUserProfileDocument } from './components/firebase/firebase.utils';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/signInAndSignUpPage/signInAndSignUpPage.component';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot((snapshot) => {
        this.setState({
          currentUser: {
            id: snapshot.id,
            ...snapshot.data()
          }
        }, (nextState) => {
          console.log('nextState: ', nextState);
        });
      })
    } else {
      this.setState({
        currentUser: userAuth
      })
    }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
    <div className="App">
      <Header currentUser={this.state.currentUser}></Header>
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/shop" component={Shop}></Route>
        <Route path="/SignInAndSignUpPage" component={SignInAndSignUpPage}></Route>
      </Switch>
    </div>
  );}
}

export default App;
